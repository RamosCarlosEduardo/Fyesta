export default function FormataData(Data: string) {
  let dataFormatada = '';
  let data = new Date(Data);
  let dia = data.getDate() + 1;
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  if (mes < 10) {
    dataFormatada = '0' + dia + '-' + '0' + mes + '-' + ano;
    return dataFormatada;
  }
  dataFormatada = '0' + dia + '-' + mes + '-' + ano;
  return dataFormatada;
}
