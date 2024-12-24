import { useState } from 'react'

import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTodo, useUser } from '@/lib/query'

import { AppProvider } from './provider'

export function App() {
  return (
    <AppProvider>
      <div className="flex min-h-svh flex-col items-center justify-center gap-5">
        <div className="font-dm text-2xl font-semibold">React - Tmpl - Lite</div>
        <TodoSelect />
        <div className="space-x-2">
          <Button variant="outline" size="icon" asChild className="rounded-full">
            <a href="https://github.com/mancuoj-collective/react-tmpl-lite">
              <span className="i-carbon-logo-github" />
            </a>
          </Button>
          <DarkModeToggle className="rounded-full" />
        </div>
      </div>
    </AppProvider>
  )
}

function TodoSelect() {
  const [selectedTodoId, setSelectedTodoId] = useState<string>('1')
  const { data: todo, status: todoStatus } = useTodo(Number(selectedTodoId))
  const { data: user, status: userStatus } = useUser(todo?.userId)

  return (
    <div className="w-80 space-y-3">
      <Button variant="outline" className="w-full">
        <span className="truncate">
          {todoStatus === 'pending' ? 'Loading...' : todoStatus === 'error' ? 'Error' : `${todo.id} - ${todo.title}`}
        </span>
      </Button>
      <Button variant="outline" className="w-full">
        <span className="truncate">
          {userStatus === 'pending' ? 'Loading...' : userStatus === 'error' ? 'Error' : `created by ${user.name}`}
        </span>
      </Button>
      <Select value={selectedTodoId} onValueChange={setSelectedTodoId}>
        <SelectTrigger>
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
    </div>
  )
}
