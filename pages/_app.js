import { useEffect } from 'react';
import '../styles/global.scss';
import { useRouter } from 'next/router';
function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      document.documentElement.classList.add('normal-scroll');
    });
    router.events.on('routeChangeComplete', () => {
      document.documentElement.classList.remove('normal-scroll');
    });
  }, []);
}
function MyApp({ Component, pageProps }) {
 
  useNormalScrollRoutes()
  return <Component {...pageProps} />
}

export default MyApp
