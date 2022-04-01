import { checkError, client } from './client';

export async function getTodos() {
  const response = await client.from(`ToDoList`).select(`*`);
  console.log(checkError(response));
  return checkError(response);
}

export async function createTodo(todo) {
  console.log(todo);
  const response = await client
    .from('ToDoList')
    .insert([{ task: todo }])
    .single();

  return checkError(response);
}
