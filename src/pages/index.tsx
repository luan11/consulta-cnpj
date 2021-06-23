import Head from 'next/head';

import { Breadcrumb } from './../components/Breadcrumb';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pesquisar | Consulta CNPJ</title>
      </Head>

      <Breadcrumb title="Pesquisar" />
    </>
  );
}
