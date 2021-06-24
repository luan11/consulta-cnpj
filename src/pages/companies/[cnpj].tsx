import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Router from 'next/router';

import api from './../../services/api';

import { formatCnpj } from './../../utils/formatCnpj';

import useSettingsContext from '../../hooks/useSettingsContext';

import {
  Container,
  Button,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

import { ArrowBack, ExpandMore } from '@material-ui/icons';

interface Company {
  cnpj: string;
  name: {
    social: string;
    fantasy: string;
  };
  registrationStatus: {
    code: number;
    description: string;
  };
  legalNatureCode: number;
  activitiesStartDate: string;
  cnae: {
    code: number;
    description: string;
  };
  address: string;
  phoneNumber: string;
  shareCapital: number;
  postage: {
    code: number;
    description: string;
  };
  error?: {
    message: string;
  };
}

interface CompanyProps {
  company: Company;
}

export default function Company({ company }: CompanyProps) {
  const {
    state: { fields },
  } = useSettingsContext();

  function goBack() {
    Router.push('/');
  }

  return (
    <>
      <Head>
        <title>
          {!company.error
            ? `${company.name.social} - ${formatCnpj(company.cnpj)}`
            : 'Não encontrado'}{' '}
          | Consulta CNPJ
        </title>
      </Head>

      <Container>
        {company.error ? (
          <>
            <Alert severity="error">
              <AlertTitle>{company.error.message}</AlertTitle>
            </Alert>
            <Button startIcon={<ArrowBack />} color="primary" onClick={goBack}>
              Voltar
            </Button>
          </>
        ) : (
          <>
            <Accordion expanded>
              <AccordionSummary aria-controls="a1-content" id="a1-header">
                <TextField
                  label="CNPJ"
                  defaultValue={formatCnpj(company.cnpj)}
                  variant="filled"
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography>
                    <strong>Razão social:</strong> {company.name.social}
                  </Typography>
                  <Typography>
                    <strong>Nome fantasia:</strong> {company.name.fantasy}
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={!fields.situacao_cadastral}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="a2-content"
                id="a2-header"
              >
                <Typography>Situação cadastral</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography>
                    <strong>{company.registrationStatus.code}</strong> -{' '}
                    {company.registrationStatus.description}
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={!fields.codigo_natureza_juridica}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="a3-content"
                id="a3-header"
              >
                <Typography>Código de Natureza Jurídica</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography>
                    <strong>{company.legalNatureCode}</strong>
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={!fields.data_inicio_atividades}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="a4-content"
                id="a4-header"
              >
                <Typography>Data de início das atividades</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography>
                    <strong>
                      {new Date(
                        company.activitiesStartDate
                      ).toLocaleDateString()}
                    </strong>
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={!fields.cnae}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="a5-content"
                id="a5-header"
              >
                <Typography>CNAE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography>
                    <strong>{company.cnae.code}</strong> -{' '}
                    {company.cnae.description}
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={!fields.endereco}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="a6-content"
                id="a6-header"
              >
                <Typography>Endereço</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography>{company.address}</Typography>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={!fields.telefone}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="a7-content"
                id="a7-header"
              >
                <Typography>Telefone</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography>
                    <strong>{company.phoneNumber}</strong>
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={!fields.capital_social}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="a8-content"
                id="a8-header"
              >
                <Typography>Capital Social</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography>
                    <strong>R$ {company.shareCapital.toFixed(2)}</strong>
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion disabled={!fields.porte}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="a9-content"
                id="a9-header"
              >
                <Typography>Porte</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Typography>
                    <strong>{company.postage.code}</strong> -{' '}
                    {company.postage.description}
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let response = {};

  const { cnpj } = context.params;

  try {
    const { data } = await api.get(`/${cnpj}`);

    response = {
      cnpj: data.cnpj,
      name: {
        social: data.razao_social,
        fantasy: data.nome_fantasia,
      },
      registrationStatus: {
        code: data.situacao_cadastral,
        description: data.descricao_situacao_cadastral,
      },
      legalNatureCode: data.codigo_natureza_juridica,
      activitiesStartDate: data.data_inicio_atividade,
      cnae: {
        code: data.cnae_fiscal,
        description: data.cnae_fiscal_descricao,
      },
      address: `${data.descricao_tipo_logradouro} ${data.logradouro} nº ${data.numero} (${data.complemento}), ${data.bairro} - ${data.cep} - ${data.uf}/${data.municipio}`,
      phoneNumber: data.ddd_telefone_1,
      shareCapital: data.capital_social,
      postage: {
        code: data.porte,
        description: data.descricao_porte,
      },
    };
  } catch (error) {
    response = {
      error: {
        message: error.message,
      },
    };
  }

  return {
    props: {
      company: response,
    },
    revalidate: 60 * 60 * 365,
  };
};
