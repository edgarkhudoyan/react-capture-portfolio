import { useState } from 'react';

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return <div onClick={handleToggle}>{toggle ? children : ''}</div>;
};

export default Toggle;
