import { BiRupee } from "react-icons/bi";
// BiRupee
import { Link } from "react-router-dom";

const Checkout = ({cartItems, setCartItems, handleAddProduct, removeItem}) =>{
    
    const totalP = cartItems.reduce((price,item) => price + (item.quantity * item.price),0)


    return(
        <>
            <div className="cart_container">
            {cartItems.length === 0 && (
                <div className="cart_empty" style={{textAlign: 'center', fontSize: '18px'}}> No Item </div>
            )}
            {   
                cartItems.map((value)=>{
                    return(
                            <div className="cart_items" key={value.id}>
                                <img src={value.image} alt="" />
                                <h5> {value.name}</h5>
                                <div className="plus_minus_btn_container">
                                    <button onClick={() => handleAddProduct(value)} style={{borderRadius: '15px 0 0 15px',background: '#3f51b5'}}> + </button>
                                    <button disabled style={{color: 'black'}}> { value.quantity} </button>
                                    <button onClick={() => removeItem(value)} style={{borderRadius: '0 15px 15px 0', padding: '4px 6px', background:'red'}}> - </button>
                                </div>
                                <p style={{display:'flex', alignItems: 'center'}}><BiRupee/>{value.quantity * value.price} </p>                    
                            </div>  
                    );
                })
            }
                            <div className="cart_extra">
                                <h4>Total</h4>
                                <h4> {totalP} </h4>
                            </div>
                            <Link to="/thankyou"><button className="checkout_btn" onClick={() =>{
                                setCartItems(0)
                            }}>Check Out</button></Link>
            </div>     
        </>
    )
}

export default Checkout