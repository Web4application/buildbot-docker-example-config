// install.sh
// npm install @huggingface/inference
// npm install @huggingface/hub
// npm install @huggingface/mcp-client

import { InferenceClient } from "@huggingface/inference";
import { createRepo, commit, deleteRepo, listFiles } from "@huggingface/hub";
import { McpClient } from "@huggingface/mcp-client";
import type { RepoId } from "@huggingface/hub";

<script type="module">
    import { InferenceClient } from 'https://cdn.jsdelivr.net/npm/@huggingface/inference@4.13.5/+esm';
    import { createRepo, commit, deleteRepo, listFiles } from "https://cdn.jsdelivr.net/npm/@huggingface/hub@2.7.1/+esm";
</script>
// esm.sh
import { InferenceClient } from "https://esm.sh/@huggingface/inference"

import { createRepo, commit, deleteRepo, listFiles } from "https://esm.sh/@huggingface/hub"
// or npm:
import { InferenceClient } from "npm:@huggingface/inference"

import { createRepo, commit, deleteRepo, listFiles } from "npm:@huggingface/hub"
