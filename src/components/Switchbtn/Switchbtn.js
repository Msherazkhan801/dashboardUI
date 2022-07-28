import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function Switchbtn({checked,setChecked}) {

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
      <div style={{marginLeft:"240px" ,display:"flex",justifyContent:"center"}}>
  
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      color="secondary"
    />
    </div>
  );
}
