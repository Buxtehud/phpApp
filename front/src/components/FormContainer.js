import {Link} from "react-router-dom";
import Form from "./Form";
import data from "../data/data";

function FormContainer(){
    return(
        <>
            <header className='header'>
                <h1>Product Add</h1>
                <div className='button-container'>
                    <button id='delete-product-btn'>Save</button>
                    <Link to={'/'}><button>Cancel</button></Link>
                </div>
            </header>
            <section>
                <Form id='product_form' data={data}/>
            </section>
        </>
    )
}

export default FormContainer;