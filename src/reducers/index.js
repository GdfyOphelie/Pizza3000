const initialState = {
    orders: [
        {
            id: 1,
            items: {
                "p1": 2,
                "p3": 3
            },
            total: 21,
            paid: true
        },
        {
            id: 2,
            items: {
                "p2": 2,
                "p4": 1
            },
            total: 15,
            paid: false
        }

    ]
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        // case value:

        //     break;

        default:
            return state;
    }
}