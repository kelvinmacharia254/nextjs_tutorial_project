import '@/app/ui/global.css';

import { inter } from '@/app/ui/fonts'; // import custom font

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}</body> {/* Tailwing antialiased class smoothens out the font*/}
    </html>
  );
}
