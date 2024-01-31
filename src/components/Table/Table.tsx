import { DataTable } from 'react-ab-data-table';
import useDataTable from './useDataTable';

/**
 * Create a Table component
 *
 * @return {JSX.Element}
 */

const Table = (): JSX.Element => {
  const { columns, data } = useDataTable();
  return (
    <DataTable
      columns={columns}
      data={data}
      tableId="employee"
      sortId="lastName"
    />
  );
};

export default Table;
