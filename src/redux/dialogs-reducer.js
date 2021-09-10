const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'user1' },
        { id: 2, name: 'user2' },
        { id: 3, name: 'user3' },
        { id: 4, name: 'user4' },
    ],
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hello' },
        { id: 3, message: 'privet' },
        { id: 4, message: 'poka' },
    ],

    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 5, message: body }]
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer