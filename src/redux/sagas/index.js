import axios from 'axios'
import { put, call, takeEvery, all } from 'redux-saga/effects'
import acts from '../acts'
const URL = 'http://localhost:9000/todos/'


// GET ...
function* fetchingTodos() {
  try {
    const response = yield call(() => axios.get(URL))
    yield put({ type: acts.GET_TODOS_SUCCESS, payload: response.data })
  } catch (error) {
    yield put({ type: acts.ADD_ERROR, payload: error.message })
  }
}
function* getTodosFetch() {
  yield takeEvery(acts.GET_TODOS_REQUEST, fetchingTodos)
}


// POST ...
function* postingTodos({ payload }) {
  try {
    const response = yield call(() => axios.post(URL, payload))
    yield put({ type: acts.POST_TODO_SUCCESS, payload: response.data })
  } catch (error) {
    yield put({ type: acts.ADD_ERROR, payload: error.message })
  }
}
function* postTodoFetch() {
  yield takeEvery(acts.POST_TODO_REQUEST, postingTodos)
}


// PUT ...
function* puttingTodos({ payload: { id, updatedTodo } }) {
  try {
    const response = yield call(() => axios.put(URL + id, updatedTodo))
    yield put({ type: acts.PUT_TODO_SUCCESS, payload: response.data })
  } catch (error) {
    yield put({ type: acts.ADD_ERROR, payload: error.message })
  }
}
function* putTodoFetch() {
  yield takeEvery(acts.PUT_TODO_REQUEST, puttingTodos)
}


// DELETE ...
function* deletingTodos({ payload: id }) {
  try {
    yield call(() => axios.delete(URL + id))
    yield put({ type: acts.DELETE_TODO_SUCCESS, payload: id })
  } catch (error) {
    yield put({ type: acts.ADD_ERROR, payload: error.message })
  }
}
function* deleteTodoFetch() {
  yield takeEvery(acts.DELETE_TODO_REQUEST, deletingTodos)
}



// Root watcher saga
export default function* rootSaga() {
  yield all([
    getTodosFetch(),
    postTodoFetch(),
    putTodoFetch(),
    deleteTodoFetch(),
  ])
}




/**
  API CALL METHOD

  METHOD 1 WITH AXIOS ...
  const response = await axios.get(URL)
  return dispatch({ type: acts.GET_TODOS, payload: response.data })

  METHOD 2 WITH AWAIT FETCH ...
  const responseRaw = await fetch('http://localhost:9000/todos')
  const response = await responseRaw.json()
  return dispatch({ type: acts.GET_TODOS, payload: response })

  METHOD 3 WITH FETCH THEN ...
  fetch('http://localhost:9000/todos')
    .then(response => response.json())
    .then(response => dispatch({ type: acts.GET_TODOS, payload: response }))
 */