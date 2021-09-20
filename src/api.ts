const API_URL = 'https://mate.academy/students-api';

export const loadTodos = async () => {
  const response = await fetch(`${API_URL}/todos`);
  const todos: Todo[] = await response.json();

  return todos;
};

export const loadUser = async (userId: number) => {
  const response = await fetch(`${API_URL}/users/${userId}`);
  const user: User | null = await response.json();

  return user;
};
