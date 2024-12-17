import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({
  subsets: ['latin'],
  weights: [400, 500, 600]
})

export const metadata = {
  title: 'Phicycle',
  description: 'Small Tools, Infinite Possibilities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className={`${inter.className} min-h-screen antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="relative min-h-screen">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                  <Link href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <Image
                      src="/phicycle-logo.svg"
                      alt="Phicycle"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="font-medium tracking-tight text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      Phicycle
                    </span>
                  </Link>
                </div>
                {children}
              </div>
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
