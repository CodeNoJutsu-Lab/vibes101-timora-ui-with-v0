import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Timora — Your academic life, in rhythm',
  description: 'A calmer way to plan your semester, stay on top of assignments, and make time for focused study.',
  generator: 'Timora',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f8fb',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
