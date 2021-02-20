export const intialState = {
      basket:[],
};

export const getBasketTotal =(basket) =>
 basket?.reduce((amount,item) => item.price +amount,0);



const reducer = (state ,action) =>{
      console.log(action);
      switch(action.type) {
            case 'ADD_TO_BASKET':
            return{
                  ...state,
                  basket: [...state.basket,action.item]
            };

            case "SET_USER":
                  return{
                        ...state,user:action.user
                  }

            case 'REMOVE_FROM_BASKET':
                 // return{ ...state,basket:state.basket.filter(item => item.id !==action.id)}   this line removes all the items with the same id

                 // These below lines removes only the specific objects
                 
                 const index = state.basket.findIndex(
                       (basketItem) => basketItem.id === action.id
                 );
                 let newBasket = [...state.basket];

                 if(index>=0){
                        newBasket.splice(index,1);
                        console.log("removed");
                 }
                 else{
                       console.warn(
                             `Cant Remove product(id: ${action.id}) as its not in basket!`
                       )
                 }

                 return {
                       ...state,
                       basket:newBasket
                 }
            default:
                  return state;

      }
}

export default reducer;