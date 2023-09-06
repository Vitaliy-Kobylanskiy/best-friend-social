import NewMessageArea from './NewMessageArea';
import { sendMessage } from '../../../../../redux/messages-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

    return {
        allMessages: state.messagePage.messages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessage(newMessageBody));
        }
    };
};

const NewMessageAreaContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageArea);

export default NewMessageAreaContainer;
