import {NavLink} from 'react-router-dom'
const Home = () =>{
    return(
        <>
            <div className="home_container">
                <h1>Welcome to Food's <br />Kitchen</h1><br />
                <NavLink to="/menu">GO TO MENU</NavLink>
            </div>
        </>
    )
}

export default Home