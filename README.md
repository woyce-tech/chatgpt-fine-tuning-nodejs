# chatgpt-fine-tuning-nodejs
ChatGPT Fine-Tuning using Node.js - Fine-tuning improves on few-shot learning by training on many more examples than can fit in the prompt, letting you achieve better results on a wide number of tasks. Once a model has been fine-tuned, you won't need to provide examples in the prompt anymore. This saves costs and enables lower-latency requests.


## GPT Fine-Tuning using Node.js

This project show how to easily fine-tune a ChatGPT data model.

### Prerequisites

To follow along with this tutorial, you’ll need to have the following installed on your machine:

- Node.js

You’ll also need an OpenAI API Key. You can get one at [https://openai.com](https://openai.com).

### Getting started

First, clone the repo and install the dependencies:

```sh
git clone https://github.com/woyce-tech/chatgpt-fine-tuning-nodejs.git

cd chatgpt-fine-tuning-nodejs

npm install
```

Next, set the environment variable for your OpenAI API Key

```sh
export OPENAI_KEY="your-api-key"
```

### Running the app

First, upload the file with the example or custom data set to OpenAI:

```sh
node uploadFile.js
```

Next, use the File ID that is logged out to create a new fine tune based on davinci by updating the `training_file` in `fineTune.js`.

Finally, create the fine tune:

```sh
node fineTune.js
```

### Listing your Fine Tunes

Once the fine tune is created, it will take some time to process. We can get the status of the fine tune, as well as the model ID, by calling the listFineTunes API method.

```sh
node listFineTunes.js
```

### Get specified your Fine Tune

Once the fine tune is created, it will take some time to process. We can get the status of the fine tune, as well as the fine_tune_id, by calling the getFineTunes API method.

```sh
node getFineTunes.js
```

### Testing it out

Now that the fine tune has processed and our. new model is ready, we can try it out.

Open completion.js. Here, update the fine_tuned_model value with your model name.

Next, run the script:

```sh
node completion.js
```
