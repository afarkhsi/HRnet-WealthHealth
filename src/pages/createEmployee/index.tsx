import DateTime from '../../components/DateTime/DateTime';
import './style.css';
import Modal from 'react-modal';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSubmitEmployee from '../../components/ModalConfirm/useSubmitEmployee.js';
import { DropdownMenu } from 'dropdown-component-library-afarkhsi';
import { departments, states } from 'data/dataMocked';
// import { Dropdown } from 'dropdown-component-library';

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
  // const [test, setTest] = useState('');
  // const t = document.getElementById('selection_department')?.textContent;
  // const myJson = stringify(t);
  // const myObject = parse(myJson);
  // console.log('test:', t);
  // const [modalIsOpen, setIsOpen] = useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  const {
    // handleOnChange,
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
    setFirstName,
    setLastName,
    setDateOfBirth,
    setStartDate,
    setDepartment,
    setStreet,
    setCity,
    setState,
    setZipCode,
  } = useSubmitEmployee();

  const options = [
    { label: 'Paris', value: 'paris' },
    { label: 'Lille', value: 'lille' },
    { label: 'Lyon', value: 'lyon' },
    { label: 'Bordeaux', value: 'bordeaux' },
    { label: 'Marseille', value: 'marseille' },
    { label: 'Reims', value: 'reims' },
  ];

  // Application englobante
  function gestionnaireObjet(event: any) {
    // Récupérez l'objet depuis l'événement
    const objet = event.detail;
    // Manipulez l'objet dans votre application englobante
    setDepartment(objet);
    setState(objet);
  }

  // Ajoutez un écouteur d'événements
  window.addEventListener('objetEnvoye', gestionnaireObjet);

  console.log('department value : ', department);
  return (
    <section>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <h2>Create Employee</h2>
        <form
          action="#"
          id="create-employee"
          // className="form-group"
          onSubmit={handleOnSubmit}
        >
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            className="form-control"
            placeholder="Enter Firstname"
            defaultValue={firstName}
            // onChange={handleOnChange}
            // onChange={(e) => e.target.value}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            className="form-control"
            placeholder="Enter Lastname"
            defaultValue={lastName}
            // onChange={handleOnChange}
            // onChange={(e) => e.target.value}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DateTime
            name="date-of-birth"
            defaultValue={dateOfBirth}
            // onChange={handleOnChange}
            // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            //   event.target.value
            // }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDateOfBirth(event.target.value);
            }}
          />

          <label htmlFor="start-date">Start Date</label>
          <DateTime
            name="start-date"
            defaultValue={startDate}
            // onChange={handleOnChange}
            // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            //   event.target.value
            // }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setStartDate(event.target.value);
            }}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              name="street"
              id="street"
              className="form-control"
              type="text"
              placeholder="Enter Street"
              defaultValue={street}
              // onChange={handleOnChange}
              // onChange={(e) => e.target.value}
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              required
            />

            <label htmlFor="city">City</label>
            <input
              name="city"
              id="city"
              className="form-control"
              type="text"
              placeholder="Enter City"
              defaultValue={city}
              // onChange={handleOnChange}
              // onChange={(e) => e.target.value}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              required
            />

            <label htmlFor="state">State</label>
            <DropdownMenu
              options={states}
              placeholder="Select an option"
              id="state"
              label="state"
              name="state"
              // defaultValue={state}
              // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              //   setState(event.target.value);
              // }}
            />
            {/* <Dropdown options={data} /> */}
            {/* <select
              name="state"
              id="state"
              defaultValue={state}
              // onChange={handleOnChange}
              // onChange={(e) => e.target.value}
              onChange={(e) => {
                setState(e.target.value);
              }}
              // required
            ></select> */}

            <label htmlFor="zip-code">Zip Code</label>
            <input
              name="zip-code"
              id="zip-code"
              className="form-control"
              type="number"
              placeholder="Enter Zip Code"
              defaultValue={zipCode}
              // onChange={handleOnChange}
              // onChange={(e) => e.target.value}
              onChange={(e) => {
                setZipCode(e.target.value);
              }}
              required
            />
          </fieldset>

          <label htmlFor="department">Department</label>

          <DropdownMenu
            options={departments}
            placeholder="Select an option"
            id="department"
            name="department"
            label="department"
            // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            //   setDepartment(event.target.value);
            // }}
            // onChange={handleOnChange}
            defaultValue={department}
          />
          {/* <select
            name="department"
            id="department"
            defaultValue={department}
            // onChange={handleOnChange}
            // onChange={(e) => e.target.value}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
            required
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select> */}
          <button type="submit" className="btn">
            Save
          </button>
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
          <p>Employee Created!</p>
        </div>
        {/* <button onClick={closeModal}>close</button> */}
        <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
      </Modal>
      {/* {modalIsOpen ? <Modal /> : ''} */}
    </section>
  );
};

export default CreateEmployee;
