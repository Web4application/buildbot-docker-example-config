// Programmatically interact with the Hub

await createRepo({
  repo: { type: "model", name: "seriki/lmlm" },
  accessToken: HF_TOKEN
});

await uploadFile({
  repo: "my-user/nlp-model",
  accessToken: HF_TOKEN,
  // Can work with native File in browsers
  file: {
    path: "pytorch_model.bin",
    content: new Blob(...)
  }
});

// Use all supported Inference Providers!

await inference.chatCompletion({
  model: "meta-llama/Llama-3.1-8B-Instruct",
  provider: "sambanova", // or together, fal-ai, replicate, cohere …
  messages: [
    {
      role: "user",
      content: "Hello, nice to meet you!",
    },
  ],
  max_tokens: 512,
  temperature: 0.5,
});

await inference.textToImage({
  model: "black-forest-labs/FLUX.1-dev",
  provider: "replicate",
  inputs: "a picture of a green bird",
});

// and much more…
