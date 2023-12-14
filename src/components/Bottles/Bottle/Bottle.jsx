

// const Bottle = ({bottles}) => {
//     const{name,img,price}=bottles;
//     return (
//         <div>
//             <h3>Hello {name}</h3>
//             <img src={img} alt="" />
//             <p>Price: ${price}</p>
//         </div>
//     );
// };

// export default Bottle;





import ('./Bottle.css')
const Bottle = ({bottle , handleAddToCart}) => {
    const {name,img,price}=bottle;
    return (
        <div className="bottle">
            <h2>Bottle: {name}</h2>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=> handleAddToCart(bottle)} className='btn'>Purchase</button>
        </div>
    );
};

export default Bottle;