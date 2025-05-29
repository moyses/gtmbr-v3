import '@/styles/globals.css';
import { Layout } from '@/components/layout';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Se a página tem um layout personalizado, use-o
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  // Caso contrário, use o layout padrão
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
