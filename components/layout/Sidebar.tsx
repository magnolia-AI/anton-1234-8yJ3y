import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Home, User, Bookmark, Hash, Settings } from 'lucide-react'

function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 bottom-0 w-64 bg-sidebar border-r overflow-y-auto hidden lg:block">
      <div className="p-4">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3 p-2">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Username</p>
              <p className="text-sm text-muted-foreground">@handle</p>
            </div>
          </div>
          <nav className="flex flex-col space-y-1">
            <Button variant="ghost" className="justify-start">
              <Home className="mr-2 h-5 w-5" />
              Home
            </Button>
            <Button variant="ghost" className="justify-start">
              <User className="mr-2 h-5 w-5" />
              Profile
            </Button>
            <Button variant="ghost" className="justify-start">
              <Bookmark className="mr-2 h-5 w-5" />
              Bookmarks
            </Button>
            <Button variant="ghost" className="justify-start">
              <Hash className="mr-2 h-5 w-5" />
              Explore
            </Button>
            <Button variant="ghost" className="justify-start">
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </nav>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

