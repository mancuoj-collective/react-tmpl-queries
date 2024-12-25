import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTodo, useUser } from '@/lib/query'

export function TodoSelect() {
  const [selectedTodoId, setSelectedTodoId] = useState<string>('1')
  const { data: todo, status: todoStatus } = useTodo(Number(selectedTodoId))
  const { data: user, status: userStatus } = useUser(todo?.userId)

  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm">
      <Select value={selectedTodoId} onValueChange={setSelectedTodoId}>
        <SelectTrigger className="z-10 w-24 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg">
          <SelectValue placeholder="Todo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="24">24</SelectItem>
          <SelectItem value="28">28</SelectItem>
          <SelectItem value="30">30</SelectItem>
          <SelectItem value="38">38</SelectItem>
          <SelectItem value="50">50</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" className="w-80 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg">
        <span className="truncate">
          {todoStatus === 'pending'
            ? '...'
            : todoStatus === 'error'
              ? '#Error'
              : `${todo.completed ? '🟢' : '🔴'} ${todo.title}`}
        </span>
      </Button>
      <Button variant="outline" className="w-40 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg">
        <div className="truncate">
          {userStatus === 'pending'
            ? '...'
            : userStatus === 'error'
              ? '#Error'
              : `${user.name}`}
        </div>
      </Button>
    </div>
  )
}
