import { openai } from './api.js'

async function listFineTunes() {
  try {
    console.log('listFineTunes started');
    const response = await openai.listFineTunes()
    console.log('data: ', response.data.data)
  } catch (error) {
    console.log('Error: ', error)
  }
}

listFineTunes()