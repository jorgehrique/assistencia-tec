const array = [
  {
    id: 1,
    nome: 'joão da silva',
    produto: 'j7 prime',
    status: 'orçamento'
  },
  {
    id: 2,
    nome: 'maria da silva',
    produto: 'iphone 7 ux',
    status: 'orçamento'
  },
  {
    id: 3,
    nome: 'joão da silva',
    produto: 'ziomi mi prime',
    status: 'orçamento'
  },
  {
    id: 4,
    nome: 'joão da silva',
    produto: 'galaxy prime 2',
    status: 'orçamento'
  },
];

const OSStatus = ['Aberto', 'Orçamento', 'Fechado'];

const getAll = () => {
  return array;
}
const add = ordem => {
  array.push(ordem);
}

export {
  OSStatus, getAll, add
}