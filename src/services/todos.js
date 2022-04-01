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

export async function completeTodo(todo) {
  const todoid = todo.id;
  const response = await client.from('ToDoList').update({ complete: 'true' }).eq('id', `${todoid}`);

  return checkError(response);
}
