import { Client, Account, Storage, Databases, Avatars } from "appwrite";
import env from "@/app/env";

const client = new Client()
  .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
  .setProject(env.appwrite.projectId); // Your project ID

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { client, databases, account, avatars, storage };
