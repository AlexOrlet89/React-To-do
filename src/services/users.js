import { client } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user.email;
}

export function checkAuth() {
  const user = getUser();

  if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
  if (getUser()) {
    location.replace('./break-tracker');
  }
}

export async function signupUser({ email, password }) {
  const response = await client.auth.signUp({ email, password });
  // console.log('email password object', email, password);

  // console.log('sign up sent', response.user);

  return response.user;
}

export async function signInUser({ email, password }) {
  const response = await client.auth.signIn({ email, password });
  //   console.log('email password object', email, password);

  //   console.log('sign in sent', response.user);
  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}
