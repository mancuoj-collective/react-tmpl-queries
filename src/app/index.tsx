import { useState } from 'react'

import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTodo, useUser } from '@/lib/query'

import { AppProvider } from './provider'

export function App() {
  return (
    <AppProvider>
      <div className="flex min-h-svh flex-col items-center gap-8 p-12 md:py-32">
        <div className="font-dm text-2xl font-semibold">React - Tmpl - Queries</div>
        <Tabs defaultValue="tab-1">
          <TabsList className="relative mb-4 h-auto w-[36rem] gap-1.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border">
            <TabsTrigger
              value="tab-1"
              className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
            >
              Todo
            </TabsTrigger>
            <TabsTrigger
              value="tab-2"
              className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
            >
              Tab 2
            </TabsTrigger>
            <TabsTrigger
              value="tab-3"
              className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
            >
              Tab 3
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab-1">
            <TodoSelect />
          </TabsContent>
          <TabsContent value="tab-2">
            <p className="p-4 text-center text-xs text-muted-foreground">Content for Tab 2</p>
          </TabsContent>
          <TabsContent value="tab-3">
            <p className="p-4 text-center text-xs text-muted-foreground">Content for Tab 3</p>
          </TabsContent>
        </Tabs>
        <div className="space-x-2">
          <Button variant="outline" size="icon" asChild className="rounded-full">
            <a href="https://github.com/mancuoj-collective/react-tmpl-queries">
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
    <div className="space-y-3">
      <div className="inline-flex -space-x-px rounded-lg shadow-sm">
        <Button variant="outline" className="w-96 rounded-none rounded-s-lg shadow-none">
          <span className="truncate">
            {todoStatus === 'pending'
              ? '...'
              : todoStatus === 'error'
                ? '#Error'
                : `${todo.id} - ${todo.title}`}
          </span>
        </Button>
        <Button variant="outline" className="w-48 rounded-none rounded-e-lg shadow-none">
          <div className="truncate">
            {userStatus === 'pending'
              ? '...'
              : userStatus === 'error'
                ? '#Error'
                : `by ${user.name}`}
          </div>
        </Button>
      </div>
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
