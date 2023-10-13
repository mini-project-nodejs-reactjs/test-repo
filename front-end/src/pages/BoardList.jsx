import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import { useSelector } from "react-redux";

const BoardList = () => {
  const accessToken = useSelector(state => state.userReducer.accessToken)
  const [boards, setBoards] = useState([])
  const [newBoard, setNewBoard] = useState({
    boardName: '',
    backgroundImg: ''
  })
  const [showCreateModal, setShowCreateModal] = useState(false)

  const fetchBoard = async () => {
    try {
      const config = {
        method: 'get',
        url: 'http://localhost:3000/boards/',
        headers: {
          access_token: accessToken
        }
      }
      const { data } = await axios(config)
      setBoards(data)
    } catch (error) {
      console.log(error)
    }
  }

  const createBoard = async () => {
    if (newBoard.boardName !== '') {
      try {
        const config = {
          method: 'post',
          url: 'http://localhost:3000/boards/',
          headers: {
            access_token: accessToken
          },
          data: newBoard
        }
        await axios(config)
        setShowCreateModal(false)
        fetchBoard()
      } catch (error) {
        console.log(error)
        setShowCreateModal(false)
      }
    }
  }

  useEffect(() => {
    if (accessToken) {
      fetchBoard()
    }
  }, [accessToken])

  useEffect(() => {
    setNewBoard({
      boardName: '',
      backgroundImg: ''
    })
  }, [showCreateModal])

  return (
    <div className="board-list">
      <div className="board-list-container">
        <div className="page-header">
          <h2 className="title">My Projects</h2>
          <button className="create-board-btn" onClick={() => setShowCreateModal(true)}>Create</button>
        </div>
        <div className="card-container">
          {boards.length === 0 && <p>You don't have any project.</p>}
          {boards.map((board, index) => {
            return( 
              <div className="board-card" key={index}>
                <h5>{board.boardName}</h5>
                <img src={board.backgroundImg} alt="todo-apps" />
              </div> 
          )})}
        </div>
      </div>

      <Modal 
        show={showCreateModal} 
        onHide={() => setShowCreateModal(false)}
        size="lg"
        centered
        className="create-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Create new Project</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{width: '160px'}} className="create-board-label">Project Name</InputGroup.Text>
            <Form.Control
              placeholder="My project..."
              aria-label="Project Name"
              aria-describedby="basic-addon1"
              className="create-board-input"
              value={newBoard.boardName}
              onChange={e => setNewBoard({...newBoard, boardName: e.target.value})}
            />
          </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{width: '160px'}} className="create-board-label">Background Image</InputGroup.Text>
            <Form.Control
              placeholder="https://image..."
              aria-label="Background Image (link)"
              aria-describedby="basic-addon1"
              className="create-board-input"
              value={newBoard.backgroundImg}
              onChange={e => setNewBoard({...newBoard, backgroundImg: e.target.value})}
            />
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={createBoard}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
 
export default BoardList;