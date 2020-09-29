import { ADD_USER, DELETE_USER, UPDATE_USER } from '../actions/users'
import { users } from '../states'

export let reducer = (state = users, action) => {
  let newUsers
  // eslint-disable-next-line
  switch (action.type) {
    case ADD_USER:
      newUsers = [...state]
      newUsers.push(action.payload)
      return newUsers
    case DELETE_USER:
      newUsers = [...state]
      newUsers = newUsers.filter((user) => user.id !== action.payload)
      return newUsers
    case UPDATE_USER:
      break
  }
  return state
}
