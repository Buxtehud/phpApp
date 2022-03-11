import ItemList from "./ItemList";
import data from "../data/data";
import {Link} from "react-router-dom";

function ItemListContainer(){
    return(
        <>
            <header className='header'>
                <h1>Product List</h1>
                <div className='button-container'>
                    <Link to={'/add-product'}><button>Add</button></Link>
                    <button id='delete-product-btn'>Mass Delete</button>
                </div>
            </header>
            <section id='card-container'>
                <ItemList items={data}/>
            </section>
        </>
    )
}

export default ItemListContainer