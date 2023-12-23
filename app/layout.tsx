import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { AuthUserProvider } from "@/firebase/auth";
import { Layout } from '@/components/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NEWS Digest',
  description: 'Daily catchup for news readers!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthUserProvider>
      <html lang="en">
        <body className={inter.className}>
          <Layout>
            {children}
          </Layout>
        </body>
      </html>
    </AuthUserProvider>
  )
}
