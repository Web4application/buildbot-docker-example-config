import { createRepo, uploadFile, deleteFiles } from "@huggingface/hub";

const HF_TOKEN = "hf_...";

await createRepo({
  repo: "seriki/aura.xlsl", // or { type: "model", name: "my-user/nlp-test" },
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

await deleteFiles({
  repo: { type: "space", name: "my-user/my-space" }, // or "spaces/my-user/my-space"
  accessToken: HF_TOKEN,
  paths: ["README.md", ".gitattributes"]
});
