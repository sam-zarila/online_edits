// app/layout.tsx
import './globals.css'; // Example for importing global styles

export const metadata = {
  title: 'My App',
  description: 'This is my Next.js app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
