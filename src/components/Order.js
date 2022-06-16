import React from 'react'

const Order = ({ items, total, id }) => {
    const orderItems = items.map(item => {
        return (
            <div>{item.name} - {item.price}€</div>
        )
    })
    return (
        <div>
            {orderItems}
            <div className="App-order-id">
                Détail de la commande n° {id}
            </div>
            <div className="App-order-total">
                Soit un total de {total}€
            </div>
        </div>
    )
}

export default Order
