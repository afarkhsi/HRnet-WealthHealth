import './style.css';

/**
 * Create a Date Picker component
 *
 * @return {JSX.Element}
 */

type DateProps = {
  name: string;
  defaultValue: string;
  onChange: any;
};

//Date component
const DateTime = ({ name, defaultValue, onChange }: DateProps): JSX.Element => {
  return (
    <input
      aria-label="Date"
      type="date"
      name={name}
      className="form-control"
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default DateTime;
