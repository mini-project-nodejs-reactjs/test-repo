import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const TodoList = () => {
  const [textCreateBacklog, setTextCreateBacklog] = useState('')
  const [textCreateDevelopment, setTextCreateDevelopment] = useState('')
  const [textCreateTesting, setTextCreateTesting] = useState('')
  const [textCreateDone, setTextCreateDone] = useState('')
  const [board, setBoard] = useState({
    boardName: '',
    backgroundImg: ''
  })
  const [types, setTypes] = useState([
    {
      id: 1,
      typeName: 'Backlog',
      todos: []
    },
    {
      id: 2,
      typeName: 'Development',
      todos: []
    },
    {
      id: 3,
      typeName: 'In Testing',
      todos: []
    },
    {
      id: 4,
      typeName: 'Done',
      todos: []
    },
  ])

  const backlogEndRef = useRef(null)
  const developEndRef = useRef(null)
  const testingEndRef = useRef(null)
  const doneEndRef = useRef(null)

  const { id: boardId } = useParams()

  const accessToken = useSelector(state => state.userReducer.accessToken)

  const getTodos = async () => {
    try {
      const config = {
        method: 'get',
        url: `http://localhost:3000/todos/${boardId}`,
        headers: {
          access_token: accessToken
        }
      }
      const { data } = await axios(config)
      initTodos(data.todos)
      setBoard(data.board)
    } catch (error) {
      console.log(error);
    }
  }

  const createTodo = async (typeId) => {
    try {
      let todoName = ''
      switch (typeId) {
        case 1:
          todoName = textCreateBacklog
          setTextCreateBacklog('')
          break;
        case 2:
          todoName = textCreateDevelopment
          setTextCreateDevelopment('')
          break;
        case 3:
          todoName = textCreateTesting
          setTextCreateTesting('')
          break;
        case 4:
          todoName = textCreateDone
          setTextCreateDone('')
          break;
        default:
          break;
      }
      const config = {
        method: 'post',
        url: `http://localhost:3000/todos/`,
        headers: {
          access_token: accessToken
        },
        data: {
          todoName,
          typeId,
          boardId,
        }
      }
      if (todoName) {
        await axios(config)
        getTodos()
        switch (typeId) {
          case 1:
            scrollBacklogToBottom()
            break;
          case 2:
            scrollDevelopToBottom()
            break;
          case 3:
            scrollTestingToBottom()
            break;
          case 4:
            scrollDoneToBottom()
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const initTodos = (items) => {
    let backlog = {...types[0], todos: []}
    let development = {...types[1], todos: []}
    let testing = {...types[2], todos: []}
    let done = {...types[3], todos: []}
    items.forEach(item => {
      switch (item.typeId) {
        case 1:
          backlog.todos.push(item)
          break;
        case 2:
          development.todos.push(item)
          break;
        case 3:
          testing.todos.push(item)
          break;
        case 4:
          done.todos.push(item)
          break;
        default:
          break;
      }
    })
    setTypes([backlog, development, testing, done])
  }

  const scrollBacklogToBottom = () => {
    setTimeout(() => {
      backlogEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 500)
  }

  const scrollDevelopToBottom = () => {
    setTimeout(() => {
      developEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 500)
  }

  const scrollTestingToBottom = () => {
    setTimeout(() => {
      testingEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 500)
  }

  const scrollDoneToBottom = () => {
    setTimeout(() => {
      doneEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 500)
  }

  useEffect(() => {
    getTodos()
  }, [])

  return ( 
    <div className="todo-list">
      <img src={board.backgroundImg} alt="todo-app" className="background-todo-list"/>
      <div className="glass-layer"></div>
      <div className="page-header">
        <h4>{board.boardName}</h4>
      </div>
      <div className="todo-list-container">
        {
          types.map((type, index) => {
            return (
              <div className="type-card" key={index}>
                <div className="type-card-head">
                  <h5>{type.typeName}</h5>
                </div>
                <div className="type-todos">
                  <div className="type-todos-container">
                    {
                      type.todos.map((todo, indexj) => {
                        return (
                          <div className="type-todo" key={`${index}${indexj}`}>
                            <p>{todo.todoName}</p>
                          </div>
                        )
                      })
                    }
                    {type.id === 1 && <div ref={backlogEndRef}></div>}
                    {type.id === 2 && <div ref={developEndRef}></div>}
                    {type.id === 3 && <div ref={testingEndRef}></div>}
                    {type.id === 4 && <div ref={doneEndRef}></div>}
                  </div>
                  <div className="create-todo">
                    {type.id === 1 && <textarea className="input-create-todo" rows="3" placeholder="add new backlog . . ." value={textCreateBacklog} onChange={(e) => setTextCreateBacklog(e.target.value)} />}
                    {type.id === 2 && <textarea className="input-create-todo" rows="3" placeholder="add new development . . ." value={textCreateDevelopment} onChange={(e) => setTextCreateDevelopment(e.target.value)} />}
                    {type.id === 3 && <textarea className="input-create-todo" rows="3" placeholder="add new testing . . ." value={textCreateTesting} onChange={(e) => setTextCreateTesting(e.target.value)} />}
                    {type.id === 4 && <textarea className="input-create-todo" rows="3" placeholder="add new done . . ." value={textCreateDone} onChange={(e) => setTextCreateDone(e.target.value)} />}
                    <Button variant="info" style={{ marginTop: '8px', fontSize: '14px' }} onClick={() => createTodo(type.id)}>Add card</Button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
   );
}
 
export default TodoList;