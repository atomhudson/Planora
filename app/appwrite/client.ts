import { Account, Client, Databases, Storage } from 'appwrite';

export const appwriteConfig = {
  endpointUrl: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  userTable: import.meta.env.VITE_APPWRITE_USER_TABLE,
  tripsTable: import.meta.env.VITE_APPWRITE_TRIPS_TABLE,
  apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
};

const client = new Client()
  .setEndpoint(appwriteConfig.endpointUrl)
  .setProject(appwriteConfig.projectId);

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { client, account, database, storage };
