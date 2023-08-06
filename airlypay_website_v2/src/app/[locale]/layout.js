import "../globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export const metadata = {
  title: "AirliPay",
  description: "The Landing Page For Our App",
};

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <Header />
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
