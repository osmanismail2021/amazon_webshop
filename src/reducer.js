export const initialState = {
    basket: [{
        id: "12321341",
        title: "Aileen Violine 4/4 Anfänger Set, Geige Kinder Erwachsene mit Gebrauchsanweisung",
        price: 62.99,
        rating: 4,
        image:"https://m.media-amazon.com/images/I/71FlGh5YwQS._AC_SL1500_.jpg"
    }],
    user: null,
    
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
        return { 
            ...state,
            basket: [...state.basket, action.item] 
        };
        
        case 'REMOVE_FROM_BASKET':
            // Logic for Removing item from basket
        
        return { state };
        default:
            return state;

    }
};

export default reducer;

/*
*/