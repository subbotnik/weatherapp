import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignIn from './SignIn';
import { signIn } from '~/modules/auth/actions';

export default connect(
  state => ({}),
  dispatch => ({
    signIn: bindActionCreators(signIn.request, dispatch),
  })
)(SignIn);
