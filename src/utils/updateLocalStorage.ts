import { getLocalStorage } from './getLocalStorage';

export function updateLocalStorage(newData: {}) {
  const data = getLocalStorage();

  const updatedData = {
    ...data,
    ...newData,
  };

  window.localStorage.setItem('consulta_cnpj', JSON.stringify(updatedData));
}
