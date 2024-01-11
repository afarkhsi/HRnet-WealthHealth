import DataTable from 'react-data-table-component';
import { columns, data } from './useDataTable';

/**
 * Create a Table component
 *
 * @return {JSX.Element}
 */

const Table = (): JSX.Element => {
  return <DataTable columns={columns} data={data} pagination />;
};

export default Table;
