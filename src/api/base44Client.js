import { createClient } from "@base44/sdk";
import { appParams } from "@/lib/app-params";

const { appId, token, functionsVersion, appBaseUrl } = appParams;

//Create a client with authentication required
export const base44 = createClient({
  appId,
  headers: {
    api_key: "c0c8fa2c1283449eb9e2c3c642a67b79",
  },
  token,
  functionsVersion,
  serverUrl: "",
  requiresAuth: false,
  appBaseUrl,
});
