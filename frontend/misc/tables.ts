export function desc<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

export function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

export const articleHeadCells = [
  {
    id: 'name',
    numeric: false,
    isSortable: true,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'description',
    numeric: false,
    isSortable: true,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'price',
    isSortable: true,
    numeric: true,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'total_in_shelf',
    numeric: true,
    isSortable: true,
    disablePadding: false,
    label: 'Total in shelf',
  },
  {
    id: 'total_in_vault',
    numeric: true,
    isSortable: true,
    disablePadding: false,
    label: 'Total in vault',
  },
  {
    id: 'actions',
    isSortable: false,
    numeric: false,
    disablePadding: false,
    label: 'Actions',
  },
];