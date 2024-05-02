import React from "react"

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <React.StrictMode>
            {children}
          </React.StrictMode>
        </div>
      </body>
    </html>
  )
}