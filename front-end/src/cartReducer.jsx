const initailCart={
    products:[],
}



export function CartReducer(state=initailCart,action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const existing=state.products.find((item)=>{return(item.id===action.payload.id)})
            if (existing) {
                const filterCart=state.products.filter((item)=>{return(item.id!==action.payload.id)}).concat([{id:action.payload.id,name:action.payload.nameProduct,price:action.payload.priceProduct,quantity:existing.quantity+1,imageProduct:existing.imageProduct}])
                return(
                    {
                        ...state,
                        products:filterCart
                    }
                )
            } else {
                return(
                    {
                        ...state,
                        products:[...state.products,{id:action.payload.id,name:action.payload.nameProduct,price:action.payload.priceProduct,quantity:1,imageProduct:action.payload.imageProduct}]
                    }
                )
            }

        case "DELETE_TO_CART":
           const filtercart=state.products.filter((item)=>{return(item.id!==action.payload.id)})

           return(
            {
                ...state,
                products:filtercart
            }
           )
        case "MODIFYQ_TO_CART":
            const filtercartmodify=[{id:action.payload.item.id,name:action.payload.item.name,price:action.payload.item.price,quantity:action.payload.quantity,imageProduct:action.payload.item.imageProduct}].concat(state.products.filter((item)=>{return(item.id!==action.payload.item.id)}))
            console.log(filtercartmodify)
            return(
                {
                    ...state,
                    products:filtercartmodify.sort((a, b) => a.id - b.id)
                }
            )
        default:
          return state 
    }
}