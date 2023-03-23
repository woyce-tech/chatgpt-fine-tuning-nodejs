const { openai } = require("./api");

async function deleteFineTune() {
  try {
    const response = await openai.deleteModel('curie:ft-personal-2023-03-18-18-02-20')
    console.log('response: ', response)
  } catch (error) {
    console.log('Error: ', error)
  }
}

deleteFineTune()