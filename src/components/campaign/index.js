import { Switch } from '@mui/material';
import React from 'react'
import campaign from '../../assets/campaign-dp.png'
import edit from '../../assets/edit.svg'
import trash from '../../assets/trash.svg'
import './styles.css'

const Campaign = (props) => {
  const [checked, setChecked] = React.useState(props.on);
  let status = 1;
  if (props.status === 'Paused') {
    status = 2;
  }
  else if (props.status === 'Exhausted') {
    status = 3;
  }
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="cpg-itm">
      <input type="checkbox" name="" id="" />
      <div>
        <Switch
          checked={checked}
          onChange={handleChange}
          defaultChecked
          size="small"
        />
      </div>
      <div className="cpg-dp">
        <img src={campaign} alt="" />
        <div>
          <div className="cpg-name">{props.name}</div>
          <div className="cpg-date">Created on {props.createdAt}</div>
        </div>
      </div>
      <div>{props.dateRange}</div>
      <div>{props.clicks}</div>
      <div>{props.budget}</div>
      <div>{props.location}</div>
      <div className='platform'>
        <img src={props.platform} alt="" />
      </div>
      <div className={`status${status}`}>{props.status}</div>
      <div className='actions'>
        <img src={edit} alt="" />
        <img src={trash} alt="" />
      </div>
    </div>
  );
}

export default Campaign