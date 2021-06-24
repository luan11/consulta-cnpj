import { useEffect, useState } from 'react';

import Head from 'next/head';
import Router from 'next/router';

import useSettingsContext from '../hooks/useSettingsContext';

import { getLocalStorage } from './../utils/getLocalStorage';
import { updateLocalStorage } from './../utils/updateLocalStorage';
import { formatCnpj } from './../utils/formatCnpj';

import {
  Container,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  CircularProgress,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import { Visibility, DeleteForever } from '@material-ui/icons';

import { StyledFab } from './../styles/pages/history';

import { Breadcrumb } from './../components/Breadcrumb';

interface HistoryItem {
  cnpj: string;
  date: string;
}

export default function History() {
  const {
    state: { history: saveInHistoryEnabled },
  } = useSettingsContext();

  const [history, setHistory] = useState([] as HistoryItem[]);
  const [loading, setLoading] = useState(false);

  function goToCompanyPage(cnpj: string) {
    setLoading(true);

    Router.push(`/companies/${cnpj}`);
  }

  function clearHistory() {
    updateLocalStorage({
      history: [],
    });

    setHistory([]);
  }

  useEffect(() => {
    const storage = getLocalStorage();

    setHistory(storage ? storage.history.reverse() : []);
  }, []);

  return (
    <>
      <Head>
        <title>Histórico | Consulta CNPJ</title>
      </Head>

      <Breadcrumb title="Histórico" />

      <Container>
        {!saveInHistoryEnabled && (
          <Alert severity="info">
            <AlertTitle>Novas pesquisas não aparecerão no histórico</AlertTitle>
            Por favor acesse a página de <strong>configurações</strong> e
            habilite a opção
            {` "Salvar pesquisas"`}.
          </Alert>
        )}

        {history.length === 0 ? (
          <Typography color="textPrimary">Não há nada salvo...</Typography>
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table size="small" aria-label="Histórico">
                <TableHead>
                  <TableRow>
                    <TableCell>CNPJ</TableCell>
                    <TableCell align="right">Visto em</TableCell>
                    <TableCell align="right">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {history.map((row) => (
                    <TableRow key={row.cnpj}>
                      <TableCell component="th" scope="row">
                        {formatCnpj(row.cnpj)}
                      </TableCell>
                      <TableCell align="right">
                        {new Date(row.date).toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          aria-label="view"
                          onClick={() => goToCompanyPage(row.cnpj)}
                          disabled={loading}
                        >
                          {loading ? (
                            <CircularProgress size={20} />
                          ) : (
                            <Visibility fontSize="small" />
                          )}
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <StyledFab color="primary" onClick={clearHistory}>
              <DeleteForever />
            </StyledFab>
          </>
        )}
      </Container>
    </>
  );
}
