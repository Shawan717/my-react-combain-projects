// import { useEffect } from "react";
// import { useState } from "react";
// import Bottle from "./Bottle/Bottle";


// const Bottles = () => {
    
//         const [bottle,setBottle]=useState([]);
//         useEffect(()=>{
//             fetch('bottol.json')
//             .then(res=>res.json())
//             .then(data=>setBottle(data))
//         },[])
    
//     return (
//         <div>
//             <h2>Bottle Here {bottle.length}</h2>
//             {
//                bottle.map(bottles=><Bottle key={bottle.id} bottles={bottles}></Bottle>) 
//             }
//         </div>
//     );
// };

// export default Bottles;





import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle/Bottle";
import ('./Bottles.css')

const Bottles = () => {
    const [bottle,setBottle]=useState([]);
    const [cart , setCart]=useState([]);
    useEffect(()=>{
            fetch('bottol.json')
            .then(res=>res.json())
            .then(data=>setBottle(data))
    },[])
    const handleAddToCart = bottle=>{
        const newCart=[...cart,bottle];
        setCart(newCart)
    }
    return (
        <div>
            <h3>Bottle Here {bottle.length}</h3>
            <h4>Cart {cart.length}</h4>
            <div className="bottle-container">
            {
                bottle.map(bottles=><Bottle key={bottles.id} bottle={bottles} handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;