const initalState = {
    list: []
};

export default function index (previousState=initalState, action) {
    switch(action.type) {
        case 'LIST_OF_PETS_LOADED':
            return {
                ...previousState,
                list: action.payload.data
            };
        default: 
            return previousState;
    }
};
