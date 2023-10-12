export const checkToken = () => {
  return (dispatch, getState) => {
    const accessToken = localStorage.getItem('access_token')
    dispatch({
      type: 'SET_ACCESSTOKEN',
      payload: {
        accessToken
      }
    })
  }
}

export const removeToken = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_ACCESSTOKEN',
      payload: {
        accessToken: ''
      }
    })
  }
}