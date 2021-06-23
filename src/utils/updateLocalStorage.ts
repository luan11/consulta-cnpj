export function updateLocalStorage(newData: {}) {
  const storage = window.localStorage.getItem('consulta_cnpj');
  const data = JSON.parse(storage);

  const updatedData = {
    ...data,
    ...newData,
  };

  window.localStorage.setItem('consulta_cnpj', JSON.stringify(updatedData));
}
