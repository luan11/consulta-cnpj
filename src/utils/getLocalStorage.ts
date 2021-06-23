export function getLocalStorage() {
  const storage = window.localStorage.getItem('consulta_cnpj');

  if (storage) {
    return JSON.parse(storage);
  }

  return false;
}
