export function AddToCart(item) {
    return({
        type:"ADD_TO_CART",
        payload:item
    })
}

export function DeleteToCart(item) {
    return(
        {
            type:"DELETE_TO_CART",
            payload:item
        }
    )
}

export function ModifiyQToCart(item,quantityModify) {
    return(
        {
            type:"MODIFYQ_TO_CART",
            payload:{
                item: item,
                quantity: quantityModify
            }
        }
    )
}