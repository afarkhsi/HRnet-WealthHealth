import DateTime from '../../components/DateTime/DateTime';

import Modal from 'react-modal';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSubmitEmployee from '../../components/ModalConfirm/useSubmitEmployee.js';
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const CreateEmployee = () => {
  document.title = 'HRnet - Create';
  // const [modalIsOpen, setIsOpen] = useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  const {
    handleOnChange,
    handleOnSubmit,
    modalIsOpen,
    closeModal,
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    department,
    street,
    city,
    state,
    zipCode,
  } = useSubmitEmployee();

  return (
    <section>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee/list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" onSubmit={handleOnSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="Enter Firstname"
            defaultValue={firstName}
            onChange={handleOnChange}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Enter Lastname"
            defaultValue={lastName}
            onChange={handleOnChange}
            required
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DateTime
            name="date-of-birth"
            defaultValue={dateOfBirth}
            onChange={handleOnChange}
          />

          <label htmlFor="start-date">Start Date</label>
          <DateTime
            name="start-date"
            defaultValue={startDate}
            onChange={handleOnChange}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              name="street"
              id="street"
              type="text"
              placeholder="Enter Street"
              defaultValue={street}
              onChange={handleOnChange}
              required
            />

            <label htmlFor="city">City</label>
            <input
              name="city"
              id="city"
              type="text"
              placeholder="Enter City"
              defaultValue={city}
              onChange={handleOnChange}
              required
            />

            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              defaultValue={state}
              onChange={handleOnChange}
              // required
            ></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              name="zip-code"
              id="zip-code"
              type="number"
              placeholder="Enter Zip Code"
              defaultValue={zipCode}
              onChange={handleOnChange}
              required
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            defaultValue={department}
            onChange={handleOnChange}
            required
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <button>Save</button>
        </form>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div id="confirmation" className="modal">
          Employee Created!
        </div>
        {/* <button onClick={closeModal}>close</button> */}
        <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
      </Modal>
      {/* {modalIsOpen ? <Modal /> : ''} */}
    </section>
  );
};

export default CreateEmployee;
