function Item({item}){
    console.log(item)
    const {sku, name, price, attribute, value} = item;
    return(
        <div className='item-card'>
            <input type="checkbox" className='delete-checkbox'/>
            <p className='content'>{sku}</p>
            <p className='content'>{name}</p>
            <p className='content'>{price} $</p>
            <p className='content'>{attribute}: {value}</p>
        </div>
    )
}

export default Item;