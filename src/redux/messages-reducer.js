const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Will Smith'
        },
        {
            id: 2,
            name: 'Martin Lawrence'
        },
        {
            id: 3,
            name: 'Mila Kunis'
        },
        {
            id: 4,
            name: 'Johnny Depp'
        }
    ],
    messages: [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'i`m fine, and you?'
        },
        {
            id: 4,
            message: `Today was a cool day, let's move on`
        },
    ]
};

export const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {
            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages];
            let body = {
                id: 5,
                message: action.newMessageBody
            };
            stateCopy.messages.push(body);
            return stateCopy;
        }

        default:
            return state;
    }
};

export const sendMessage = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    };
};