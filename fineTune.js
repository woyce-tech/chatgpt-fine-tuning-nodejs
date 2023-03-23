const { openai } = require("./api");

async function createFineTune() {
  try {
    console.log('createFineTune started');
    const response = await openai.createFineTune({
      training_file: "file-qYwANmP4ivaqud6yPafEPMuu",
      model: 'davinci'
    })
    console.log('response: ', response)
  } catch (error) {
    console.log('Error: ', error)
  }
}

createFineTune()
