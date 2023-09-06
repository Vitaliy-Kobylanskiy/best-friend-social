import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../../../hoc/withAuthRedirect';
import DialogsList from './DialogsList';


const mapStateToProps = (state) => {

    return {
        allDialogs: state.messagePage.dialogs
    };
};

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(DialogsList);