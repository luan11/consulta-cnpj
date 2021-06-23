import { getLocalStorage } from './getLocalStorage';

export function buildLocalStorage(data: {}) {
  if (!getLocalStorage()) {
    window.localStorage.setItem('consulta_cnpj', JSON.stringify(data));
  }
}
