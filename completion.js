import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-woyce-2023-03-21-10-03-10',
      prompt: 'who build health wealth safe application',
      max_tokens: 200
    })
    if (response.data) {
      console.log('choices: ', response.data.choices)
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

createCompletion()
