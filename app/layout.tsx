import { Metadata } from "next"
import Alerts from "../components/Alerts"
import "./globals.css"

export const metadata: Metadata = {
    title: 'My App',
    description: 'My App is a...',
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Alerts />
                <div id="root">{children}</div>
            </body>
        </html>
    )
}
