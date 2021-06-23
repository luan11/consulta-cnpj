import { Breadcrumbs, Container, Typography } from '@material-ui/core';

interface BreadcrumbsProps {
  title: string;
}

export function Breadcrumb({ title }: BreadcrumbsProps) {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      component={Container}
      style={{
        marginBottom: '2rem',
      }}
    >
      <Typography></Typography>
      <Typography color="textPrimary">{title}</Typography>
    </Breadcrumbs>
  );
}
