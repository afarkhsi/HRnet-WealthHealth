import DataTable from 'react-data-table-component';
import useDataTable from './useDataTable';
// import { columns, data } from './useDataTable';

/**
 * Create a Table component
 *
 * @return {JSX.Element}
 */

const Table = (): JSX.Element => {
  const { columns, data } = useDataTable();
  return <DataTable columns={columns} data={data} pagination />;
};

export default Table;
