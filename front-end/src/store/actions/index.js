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
    localStorage.removeItem('access_token')
    dispatch({
      type: 'SET_ACCESSTOKEN',
      payload: {
        accessToken: ''
      }
    })
  }
}

export const checkUserInfo = () => {
  return (dispatch, getState) => {
    const userInfo = localStorage.getItem('user_info')
    dispatch({
      type: 'SET_USERINFO',
      payload: {
        userInfo: JSON.parse(userInfo)
      }
    })
  }
}