import Head from 'next/head';

import { Breadcrumb } from './../components/Breadcrumb';

import {
  Container,
  Card,
  CardContent,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Head>
        <title>Configurações | Consulta CNPJ</title>
      </Head>

      <Breadcrumb title="Configurações" />

      <Container>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Histórico
            </Typography>

            <FormGroup>
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Salvar pesquisas"
              />
            </FormGroup>

            <Typography variant="h6">Pesquisa</Typography>
            <Typography variant="caption">Dados retornados</Typography>

            <FormGroup>
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Razão Social"
              />
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Nome Fantasia"
              />

              <FormControlLabel
                control={<Switch color="primary" />}
                label="Situação Cadastral"
              />

              <FormControlLabel
                control={<Switch color="primary" />}
                label="Código de Natureza Jurídica"
              />

              <FormControlLabel
                control={<Switch color="primary" />}
                label="Data de início das atividades"
              />

              <FormControlLabel
                control={<Switch color="primary" />}
                label="CNAE"
              />

              <FormControlLabel
                control={<Switch color="primary" />}
                label="Endereço"
              />

              <FormControlLabel
                control={<Switch color="primary" />}
                label="Telefone"
              />

              <FormControlLabel
                control={<Switch color="primary" />}
                label="Capital Social"
              />

              <FormControlLabel
                control={<Switch color="primary" />}
                label="Porte"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
