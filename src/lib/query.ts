import { useQuery } from '@tanstack/react-query'
import ky from 'ky'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

type User = {
  id: number
  name: string
  username: string
  email: string
}

export function useTodo(todoId: number) {
  return useQuery({
    queryKey: ['todo', todoId],
    queryFn: () => ky<Todo>(`https://jsonplaceholder.typicode.com/todos/${todoId}`).json(),
  })
}

export function useUser(userId: number | undefined) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => ky<User>(`https://jsonplaceholder.typicode.com/users/${userId}`).json(),
    enabled: !!userId,
  })
}
