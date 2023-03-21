import { openai } from './api.js'

async function getFineTunes() {
  try {
    console.log('getFineTunes started');
    const response = await openai.retrieveFineTune("ft-AF1WoRqd3aJAHsqc9NY7iL8F");
    console.log('data: ', response.data.data)
  } catch (error) {
    console.log('Error: ', error)
  }
}

getFineTunes()