import React from 'react';
// import DatePicker from 'react-date-picker';
// import { useState } from 'react';
import './style.css';

//V1 NATIVE
const DateTime = ({ name, defaultValue, onChange }) => {
  return (
    <input
      aria-label="Date"
      type="date"
      name={name}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default DateTime;

// //V2 bug affichage
// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// const DateTime = () => {
//   const [value, onChange] = useState<Value>(new Date());

//   return (
//     <div className="Sample">
//       <header>
//         <h1>react-date-picker sample page</h1>
//       </header>
//       <div className="Sample__container">
//         <main className="Sample__container__content">
//           <DatePicker
//             calendarAriaLabel="Toggle calendar"
//             clearAriaLabel="Clear value"
//             dayAriaLabel="Day"
//             monthAriaLabel="Month"
//             nativeInputAriaLabel="Date"
//             onChange={onChange}
//             value={value}
//             yearAriaLabel="Year"
//           />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DateTime;
