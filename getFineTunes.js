const { openai } = require("./api");

async function getFineTunes() {
  try {
    console.log('getFineTunes started');
    const response = await openai.retrieveFineTune("ft-MJk8N1oIFhdqmWipOIhuVEH0");
    console.log('data: ', response.data)
  } catch (error) {
    console.log('Error: ', error)
  }
}

getFineTunes()