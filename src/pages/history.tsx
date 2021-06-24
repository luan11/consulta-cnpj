import Head from 'next/head';

import { Container } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import { Breadcrumb } from './../components/Breadcrumb';
import useSettingsContext from '../hooks/useSettingsContext';

export default function History() {
  const {
    state: { history },
  } = useSettingsContext();

  return (
    <>
      <Head>
        <title>Histórico | Consulta CNPJ</title>
      </Head>

      <Breadcrumb title="Histórico" />

      <Container>
        {!history && (
          <Alert severity="info">
            <AlertTitle>Novas pesquisas não aparecerão no histórico</AlertTitle>
            Por favor acesse a página de <strong>configurações</strong> e
            habilite a opção
            {` "Salvar pesquisas"`}.
          </Alert>
        )}
      </Container>
    </>
  );
}
