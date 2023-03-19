import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import { Playfair_Display as PlayfairDisplay, Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const playfairDisplay = PlayfairDisplay({
  subsets: ['latin'],
  weight: ['700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily}, sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${playfairDisplay.style.fontFamily}, serif;
          font-weight: 700;
        }

        input, textarea, body {
          font-family: ${poppins.style.fontFamily}, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
