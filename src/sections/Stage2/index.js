import React from 'react'
import Product from '../../components/product'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";

import './styles.css'

const products = [
  {
    name: "Bluberry cake with raw toppings",
    price: "Rs: 2,290",
    img: p1,
  },
  {
    name: "Chocolate truffle cake",
    price: "Rs: 2,190",
    img: p2,
  },
  {
    name: "Browine cake with fluffy cream",
    price: "Rs: 1,222",
    img: p3,
  },
  {
    name: "Ferro rocher cake",
    price: "Rs: 1,234",
    img: p4,
  },
  {
    name: "Custurd mixed with fruit cake",
    price: "Rs: 2.456",
    img: p5,
  },
  {
    name: "Best raw topping choco cake",
    price: "Rs: 2,345",
    img: p6,
  },
  {
    name: "Green cup cakes",
    price: "Rs: 1,234",
    img: p1,
  },
  {
    name: "Blueberry topping cakes",
    price: "Rs: 2.456",
    img: p2,
  },
  {
    name: "Strawberry cakes with blueberry",
    price: "Rs: 2,345",
    img: p3,
  },
];

const Stage2 = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="stage1-cnt">
      {products.map((product, ind) => {
        return (
          <Product key={ ind} ind={ind} name={product.name} price={product.price} active={active} setActive={setActive} img={product.img} />
        );
      })}
    </div>
  );
}

export default Stage2