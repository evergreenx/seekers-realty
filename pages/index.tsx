/* eslint-disable react/jsx-key */
import React from 'react'
import Home from '../components/Home/Index'
import Select from 'react-select';

const Index = () => {

  const [selectedOption, setSelectedOption] = React.useState(null);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleChange = () => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className='custom__heading'>

      <Home />


      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />

    </div>
  )
}

export default Index