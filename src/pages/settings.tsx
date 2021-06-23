import Head from 'next/head';

import useSettingsContext from './../hooks/useSettingsContext';

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
  const {
    state: { history, fields },
    actions: { updateSaveHistory, updateSearchFields },
  } = useSettingsContext();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === 'history') {
      updateSaveHistory();
    } else {
      updateSearchFields({
        [event.target.name]: event.target.checked,
      });
    }
  }

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
                control={
                  <Switch
                    color="primary"
                    checked={history}
                    onChange={handleChange}
                    name="history"
                  />
                }
                label="Salvar pesquisas"
              />
            </FormGroup>

            <Typography variant="h6">Pesquisa</Typography>
            <Typography variant="caption">Dados retornados</Typography>

            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={fields.razao_social}
                    onChange={handleChange}
                    name="razao_social"
                  />
                }
                label="Razão Social"
              />
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={fields.nome_fantasia}
                    onChange={handleChange}
                    name="nome_fantasia"
                  />
                }
                label="Nome Fantasia"
              />

              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={fields.situacao_cadastral}
                    onChange={handleChange}
                    name="situacao_cadastral"
                  />
                }
                label="Situação Cadastral"
              />

              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={fields.codigo_natureza_juridica}
                    onChange={handleChange}
                    name="codigo_natureza_juridica"
                  />
                }
                label="Código de Natureza Jurídica"
              />

              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={fields.data_inicio_atividades}
                    onChange={handleChange}
                    name="data_inicio_atividades"
                  />
                }
                label="Data de início das atividades"
              />

              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={fields.cnae}
                    onChange={handleChange}
                    name="cnae"
                  />
                }
                label="CNAE"
              />

              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={fields.endereco}
                    onChange={handleChange}
                    name="endereco"
                  />
                }
                label="Endereço"
              />

              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={fields.telefone}
                    onChange={handleChange}
                    name="telefone"
                  />
                }
                label="Telefone"
              />

              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={fields.capital_social}
                    onChange={handleChange}
                    name="capital_social"
                  />
                }
                label="Capital Social"
              />

              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={fields.porte}
                    onChange={handleChange}
                    name="porte"
                  />
                }
                label="Porte"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
