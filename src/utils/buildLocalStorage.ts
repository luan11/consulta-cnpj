export function buildLocalStorage(data: {}) {
  const storage = window.localStorage.getItem('consulta_cnpj');

  if (storage) {
    return;
  }

  window.localStorage.setItem('consulta_cnpj', JSON.stringify(data));
}
