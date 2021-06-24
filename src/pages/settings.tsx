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

export default function Settings() {
  const {
    state: { history, fields, colorMode },
    actions: {
      enableLightMode,
      enableDarkMode,
      toggleSaveHistory,
      updateSearchFields,
    },
  } = useSettingsContext();

  function handleSearchFields(event: React.ChangeEvent<HTMLInputElement>) {
    updateSearchFields({
      [event.target.name]: event.target.checked,
    });
  }

  function handleSaveHistory() {
    toggleSaveHistory();
  }

  function handleLightMode() {
    enableLightMode();
  }

  function handleDarkMode() {
    enableDarkMode();
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
            <Typography variant="h6">Pesquisa</Typography>
            <Typography variant="caption">Dados retornados</Typography>

            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={fields.situacao_cadastral}
                    onChange={handleSearchFields}
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
                    onChange={handleSearchFields}
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
                    onChange={handleSearchFields}
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
                    onChange={handleSearchFields}
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
                    onChange={handleSearchFields}
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
                    onChange={handleSearchFields}
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
                    onChange={handleSearchFields}
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
                    onChange={handleSearchFields}
                    name="porte"
                  />
                }
                label="Porte"
              />
            </FormGroup>

            <Typography variant="h6">Histórico</Typography>

            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={history}
                    onChange={handleSaveHistory}
                    name="history"
                  />
                }
                label="Salvar pesquisas"
              />
            </FormGroup>

            <Typography variant="h6">Tema</Typography>

            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={colorMode.light}
                    onChange={handleLightMode}
                    name="themeLight"
                  />
                }
                label="Claro"
              />

              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    checked={colorMode.dark}
                    onChange={handleDarkMode}
                    name="themeDark"
                  />
                }
                label="Escuro"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
