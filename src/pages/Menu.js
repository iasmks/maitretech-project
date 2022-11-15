import { useEffect } from "react";

const Menu = ({products,handleAddProduct}) =>{
    
    useEffect(()=>{
        console.log(products);
    },[])
    return(
        <>
            <div className="menu_container">
                {
                    products.map((value) => {
                        return(
                            <div className="item" key={value.id}>
                                <img src={value.image} alt="" />
                                <div className="item_disc">
                                    <h1>{value.name}</h1>
                                    <p>Price : {value.price}</p>
                                    <div className="item_inc_dec_btn">
                                        <button onClick={() => handleAddProduct(value)} style={{background:'#3f51b5',color:'white'}}> + </button>
                                        <button onClick={() => handleAddProduct(value)} style={{background:'red', opacity:"0.5",color:'white'}}> - </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                 }
            </div>        
        </>
    )
}

export default Menu;
