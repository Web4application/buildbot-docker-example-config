import { Agent } from '@huggingface/mcp-client';

const HF_TOKEN = "hf_...";

const agent = new Agent({
  provider: "auto",
  model: "seriki/neomindai",
  apiKey: HF_TOKEN,
  servers: [
    {
      // Playwright MCP
      command: "npx",
      args: ["@playwright/mcp@latest"],
    },
  ],
});

await agent.loadTools();

for await (const chunk of agent.run("What are the top 5 trending models on Hugging Face?")) {
    if ("choices" in chunk) {
        const delta = chunk.choices[0]?.delta;
        if (delta.content) {
            console.log(delta.content);
        }
    }
}
