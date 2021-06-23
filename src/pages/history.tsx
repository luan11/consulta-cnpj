import Head from 'next/head';

import { Breadcrumb } from './../components/Breadcrumb';

export default function Home() {
  return (
    <>
      <Head>
        <title>Histórico | Consulta CNPJ</title>
      </Head>

      <Breadcrumb title="Histórico" />
    </>
  );
}
