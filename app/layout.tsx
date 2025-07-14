import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'

export const metadata: Metadata = {
  title: 'SocialApp',
  description: 'A modern social media platform',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full flex flex-col antialiased">
        <ThemeProvider defaultTheme="light" attribute="class">
          <Header />
          <div className="flex flex-1 pt-14">
            <Sidebar />
            <main className="flex-1 max-w-3xl mx-auto p-4">
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

