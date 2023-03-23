const { Configuration, OpenAIApi } = require("openai");
const openaiApiKey = process.env.OPENAI_KEY
const configuration = new Configuration({
  apiKey: openaiApiKey,
})
const openai = new OpenAIApi(configuration);
module.exports = { openai };