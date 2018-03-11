import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const create = async (content) => {
  const response = await axios.post(url, { content, votes: 0 })
  return response.data
}

const vote = async (anecdote) => {
  const votes = anecdote.votes + 1
  const content = anecdote.content
  const id = anecdote.id
  const response = await axios.put(`${url}/${id}`, { content, id, votes })
  return response.data
}

export default { getAll, create, vote }
