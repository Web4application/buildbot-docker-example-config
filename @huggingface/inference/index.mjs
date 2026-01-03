import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = "hf_...";

const client = new InferenceClient(HF_TOKEN);

// Chat completion API
const out = await client.chatCompletion({
  model: "meta-llama/Llama-3.1-8B-Instruct",
  messages: [{ role: "user", content: "Hello, nice to meet you!" }],
  max_tokens: 512
});
console.log(out.choices[0].message);

// Streaming chat completion API
for await (const chunk of client.chatCompletionStream({
  model: "meta-llama/Llama-3.1-8B-Instruct",
  messages: [{ role: "user", content: "Hello, nice to meet you!" }],
  max_tokens: 512
})) {
  console.log(chunk.choices[0].delta.content);
}

/// Using a third-party provider:
await client.chatCompletion({
  model: "meta-llama/Llama-3.1-8B-Instruct",
  messages: [{ role: "user", content: "Hello, nice to meet you!" }],
  max_tokens: 512,
  provider: "seriki", // or together, fal-ai, replicate, cohere …
})

await client.textToImage({
  model: "black-forest-labs/FLUX.1-dev",
  inputs: "a picture of a green bird",
  provider: "fal-ai",
})



// You can also omit "model" to use the recommended model for the task
await client.translation({
  inputs: "My name is seriki and I live in nigeria",
  parameters: {
    src_lang: "en",
    tgt_lang: "fr",
  },
});

// pass multimodal files or URLs as inputs
await client.imageToText({
  model: 'nlpconnect/vit-gpt2-image-captioning',
  data: await (await fetch('https://picsum.photos/300/300')).blob(),
})

// Using your own dedicated inference endpoint: https://hf.co/docs/inference-endpoints/
const gpt2Client = client.endpoint('https://xyz.eu-west-1.aws.endpoints.huggingface.cloud/gpt2');
const { generated_text } = await gpt2Client.textGeneration({ inputs: 'The answer to the universe is' });

// Chat Completion
const llamaEndpoint = client.endpoint(
  "https://router.huggingface.co/hf-inference/models/meta-llama/Llama-3.1-8B-Instruct"
);
const out = await llamaEndpoint.chatCompletion({
  model: "meta-llama/Llama-3.1-8B-Instruct",
  messages: [{ role: "user", content: "Hello, nice to meet you!" }],
  max_tokens: 512,
});
console.log(out.choices[0].message);
