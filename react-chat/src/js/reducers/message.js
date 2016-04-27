var messageInitialState = {
    message: []
};

export default function(state = messageInitialState, action) {
    switch(action.type) {
        
        case 'SEND_MESSAGE':

            var newState = Object.assign({}, state)
            newState.message = action.message;
            return newState;

        default:
            return state;
            
    }
}