const { openai } = require("./api");
const fs = require("fs");

exports.upload = async () => {
  try {
    console.log('upload started');
    const response = await openai.createFile(
      fs.createReadStream('./data_prepared.jsonl'),
      'fine-tune'
    );
    console.log('File ID: ', response.data.id)
  } catch (error) {
    console.log('Error: ', error)
  }
}

this.upload()
