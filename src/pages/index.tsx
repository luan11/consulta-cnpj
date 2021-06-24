import Head from 'next/head';
import Router from 'next/router';

import { useState, FormEvent } from 'react';

import useSettingsContext from '../hooks/useSettingsContext';

import { Container, Button, CircularProgress } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import SendIcon from '@material-ui/icons/Send';

import { Breadcrumb } from './../components/Breadcrumb';
import { TextFieldMask } from './../components/TextFieldMask';

export default function Home() {
  const {
    state: { fields },
  } = useSettingsContext();

  const [cnpj, setCnpj] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true);

    const unformatted = cnpj.replace(/\D/g, '');

    Router.push(`/companies/${unformatted}`);

    event.preventDefault();
  }

  function hasNoOneFieldSelected() {
    const selected = Object.keys(fields).filter((key) => fields[key]);

    return selected.length === 0;
  }

  function isValidCnpj() {
    const unformatted = cnpj.replace(/\D/g, '');

    return unformatted.length === 14;
  }

  return (
    <>
      <Head>
        <title>Pesquisar | Consulta CNPJ</title>
      </Head>

      <Breadcrumb title="Pesquisar" />

      <Container>
        {hasNoOneFieldSelected() ? (
          <Alert severity="warning">
            <AlertTitle>Nenhum dado selecionado para ser retornado</AlertTitle>
            Por favor acesse a página de <strong>configurações</strong> e
            habilite algum dado.
          </Alert>
        ) : (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextFieldMask
              mask="99.999.999/9999-99"
              label="CNPJ"
              fullWidth
              variant="outlined"
              color="secondary"
              value={cnpj}
              onChange={(event) => setCnpj(event.target.value)}
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              endIcon={!loading && <SendIcon />}
              fullWidth
              disabled={!isValidCnpj() || loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Consultar'}
            </Button>
          </form>
        )}
      </Container>
    </>
  );
}
