const defaultState = {
  userInfo: {
    id: 0,
    email: ''
  },
  accessToken: ''
}

const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'SET_ACCESSTOKEN':
      const accessToken = action.payload.accessToken
      return { ...state, accessToken}
    case 'SET_USERINFO':
      const userInfo = action.payload.userInfo
      return { ...state, userInfo}
    default:
      return state
  }
}

export default reducer