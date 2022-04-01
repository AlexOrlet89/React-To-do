import { checkError, client } from './client';

export async function getTodos() {
  // get all todos for this user from supabase
  const response = await client.from(`ToDoList`).select(`*`);
  console.log(checkError(response));
  return checkError(response);
}
