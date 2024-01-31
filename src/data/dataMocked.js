const states = [
  {
    value: 'Alabama',
    label: 'AL',
  },
  {
    value: 'Alaska',
    label: 'AK',
  },
  {
    value: 'American Samoa',
    label: 'AS',
  },
  {
    value: 'Arizona',
    label: 'AZ',
  },
  {
    value: 'Arkansas',
    label: 'AR',
  },
  {
    value: 'California',
    label: 'CA',
  },
  {
    value: 'Colorado',
    label: 'CO',
  },
  {
    value: 'Connecticut',
    label: 'CT',
  },
  {
    value: 'Delaware',
    label: 'DE',
  },
  {
    value: 'District Of Columbia',
    label: 'DC',
  },
  {
    value: 'Federated States Of Micronesia',
    label: 'FM',
  },
  {
    value: 'Florida',
    label: 'FL',
  },
  {
    value: 'Georgia',
    label: 'GA',
  },
  {
    value: 'Guam',
    label: 'GU',
  },
  {
    value: 'Hawaii',
    label: 'HI',
  },
  {
    value: 'Idaho',
    label: 'ID',
  },
  {
    value: 'Illinois',
    label: 'IL',
  },
  {
    value: 'Indiana',
    label: 'IN',
  },
  {
    value: 'Iowa',
    label: 'IA',
  },
  {
    value: 'Kansas',
    label: 'KS',
  },
  {
    value: 'Kentucky',
    label: 'KY',
  },
  {
    value: 'Louisiana',
    label: 'LA',
  },
  {
    value: 'Maine',
    label: 'ME',
  },
  {
    value: 'Marshall Islands',
    label: 'MH',
  },
  {
    value: 'Maryland',
    label: 'MD',
  },
  {
    value: 'Massachusetts',
    label: 'MA',
  },
  {
    value: 'Michigan',
    label: 'MI',
  },
  {
    value: 'Minnesota',
    label: 'MN',
  },
  {
    value: 'Mississippi',
    label: 'MS',
  },
  {
    value: 'Missouri',
    label: 'MO',
  },
  {
    value: 'Montana',
    label: 'MT',
  },
  {
    value: 'Nebraska',
    label: 'NE',
  },
  {
    value: 'Nevada',
    label: 'NV',
  },
  {
    value: 'New Hampshire',
    label: 'NH',
  },
  {
    value: 'New Jersey',
    label: 'NJ',
  },
  {
    value: 'New Mexico',
    label: 'NM',
  },
  {
    value: 'New York',
    label: 'NY',
  },
  {
    value: 'North Carolina',
    label: 'NC',
  },
  {
    value: 'North Dakota',
    label: 'ND',
  },
  {
    value: 'Northern Mariana Islands',
    label: 'MP',
  },
  {
    value: 'Ohio',
    label: 'OH',
  },
  {
    value: 'Oklahoma',
    label: 'OK',
  },
  {
    value: 'Oregon',
    label: 'OR',
  },
  {
    value: 'Palau',
    label: 'PW',
  },
  {
    value: 'Pennsylvania',
    label: 'PA',
  },
  {
    value: 'Puerto Rico',
    label: 'PR',
  },
  {
    value: 'Rhode Island',
    label: 'RI',
  },
  {
    value: 'South Carolina',
    label: 'SC',
  },
  {
    value: 'South Dakota',
    label: 'SD',
  },
  {
    value: 'Tennessee',
    label: 'TN',
  },
  {
    value: 'Texas',
    label: 'TX',
  },
  {
    value: 'Utah',
    label: 'UT',
  },
  {
    value: 'Vermont',
    label: 'VT',
  },
  {
    value: 'Virgin Islands',
    label: 'VI',
  },
  {
    value: 'Virginia',
    label: 'VA',
  },
  {
    value: 'Washington',
    label: 'WA',
  },
  {
    value: 'West Virginia',
    label: 'WV',
  },
  {
    value: 'Wisconsin',
    label: 'WI',
  },
  {
    value: 'Wyoming',
    label: 'WY',
  },
];

const employeesListMocked = [
  {
    firstName: 'James',
    lastName: 'Cameron',
    dateOfBirth: '1980-04-02',
    startDate: '2022-02-08',
    street: '11 texas avenue',
    city: 'Las Vegas',
    state: 'Texas',
    zipCode: '89109',
    department: 'Sales',
  },
  {
    firstName: 'George',
    lastName: 'St-Pierre',
    dateOfBirth: '1985-06-01',
    startDate: '2024-04-02',
    street: '110 avenue mishigan',
    city: 'New London',
    state: 'Alabama',
    zipCode: '10012',
    department: 'Engineering',
  },
  {
    firstName: 'Leon',
    lastName: 'Edwards',
    dateOfBirth: '1990-08-12',
    startDate: '2023-08-01',
    street: '78 avenue du champ',
    city: 'New York',
    state: 'New York',
    zipCode: '10500',
    department: 'Legal',
  },
  {
    firstName: 'Khabib',
    lastName: 'Nurmagomedov',
    dateOfBirth: '1988-09-20',
    startDate: '2024-02-01',
    street: '15 Daghestan street',
    city: 'Ultimate',
    state: 'New York',
    zipCode: '10012',
    department: 'Marketing',
  },
  {
    firstName: 'Conor',
    lastName: 'McGregor',
    dateOfBirth: '-1988-08-14',
    startDate: '2018-08-01',
    street: '257 madison drive',
    city: 'San Francisco',
    state: 'California',
    zipCode: '10222',
    department: 'Sales',
  },
];

const departments = [
  { label: 'sales', value: 'Sales' },
  { label: 'marketing', value: 'Marketing' },
  { label: 'engineering', value: 'Engineering' },
  { label: 'human Resources', value: 'Human Resources' },
  { label: 'legal', value: 'Legal' },
];

export { states, employeesListMocked, departments };
