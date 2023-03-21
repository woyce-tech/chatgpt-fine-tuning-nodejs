import { openai } from './api.js'
import fs from 'fs'

async function upload() {
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

upload()
