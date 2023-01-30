import React from 'react'
import Overview from '../../components/overview'
import './styles.css'

const items = [
  {
    img: "",
  },
  {
    img: "",
  },
  {
    img: "",
  },
  {
    img: "",
  },
];


const Stage4 = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="stage4-cnt">
      {
        items.map((item, i) => {
          return <Overview key={i} active={ active} setActive={setActive} ind={i} />
        } )
      }
    </div>
  );
}

export default Stage4