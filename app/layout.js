import "./globals.css"

export const metadata = {
  title: "Portfolio de Prénom Nom",
  description: "Développeur web passionné par React et Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}