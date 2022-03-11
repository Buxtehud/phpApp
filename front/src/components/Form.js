function Forms({data}){
    const unique = [...new Set(data.map(item => item.prodType))]
    return(
        <>
            <section id='main-info'>
                <label htmlFor='sku'>
                    <span>SKU </span>
                    <input id='sku' name='sku' type='text'/>
                </label>
                <label htmlFor='name'>
                    <span>Name </span>
                    <input id='name' name='name' type='text'/>
                </label>
                <label htmlFor='price'>
                    <span>Price </span>
                    <input id='price' name='price' type='text'/>
                </label>
            </section>
            <label htmlFor='productType'>Type Switcher </label>
            <select id='productType' name='productType'>
                {unique.map( option => <option value={option} key={option}>{option}</option> )}
            </select>

        </>
    )
}

export default Forms;