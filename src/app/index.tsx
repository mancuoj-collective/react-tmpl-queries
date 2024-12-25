import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { TodoSelect } from '@/components/todo-select'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { AppProvider } from './provider'

export function App() {
  return (
    <AppProvider>
      <div className="flex min-h-svh flex-col items-center gap-8 p-12 md:py-32">
        <div className="font-dm text-2xl font-semibold">React - Tmpl - Queries</div>
        <Tabs defaultValue="todo">
          <TabsList className="relative mb-4 h-auto w-[36rem] gap-1.5 bg-transparent p-0 font-dm before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border">
            <TabsTrigger
              value="todo"
              className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
            >
              <span className="i-carbon-list mr-2" />
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
          <TabsContent value="todo">
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
