import { openai } from './api.js'

async function createFineTune() {
  try {
    console.log('createFineTune started');
    const response = await openai.createFineTune({
      training_file: "file-r3qUnbIFdGkziv0QThzHqpBZ",
      model: 'davinci'
    })
    console.log('response: ', response)
  } catch (error) {
    console.log('Error: ', error)
  }
}

createFineTune()
