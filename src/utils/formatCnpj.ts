export function formatCnpj(cnpj: string) {
  return cnpj.replace(
    /^([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})([0-9]{2})$/g,
    '$1.$2.$3/$4-$5'
  );
}
