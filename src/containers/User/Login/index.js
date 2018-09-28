import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Button, InputItem  } from 'antd-mobile';

import { sfLogin, setFromUrl } from '../UserAction';
import { hiddenTabbar } from '../../../public/action';
import style from './Login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // showModal: false,
    };
    this.fromUrl = null;
    this.goToLogin = this.goToLogin.bind(this);

  }

  componentWillMount(){
    const { dispatch, location: {state} } = this.props;
    dispatch(hiddenTabbar(true));
    if (state && state.from) {
      this.fromUrl = state && state.from;
    }

    if (this.fromUrl) {
      dispatch(setFromUrl(this.fromUrl));
    }
  }

  goToLogin() {
    const { dispatch, user } = this.props;

    dispatch(sfLogin(this.fromUrl || user.fromUrl));
  }

  componentWillUnmount(){
    const { dispatch } = this.props;
    dispatch(hiddenTabbar());
  }

  render() {
    console.log('dd==', this.props);
    return (
      <div className={style.loginPage}>
        <Helmet>
          <title>登录</title>
        </Helmet>

        <div className={ style.container }>
          <InputItem />
          <InputItem />
          <Button onClick={ () => this.goToLogin() }>登录</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Login);
