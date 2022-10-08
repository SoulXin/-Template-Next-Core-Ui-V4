import { Layout } from '../layout'
import { connect } from 'react-redux';
import { set_login_action } from '../redux/utils/Action';
import { useEffect } from 'react';
import Head from 'next/head'

const Home = (props) => {
  const {login} = props;
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      props.set_login_action(true);
    }else {
      props.set_login_action(false);
    }
  }, []);
  
  return (
    <Layout>
      <Head>
        <title>Laravel - Dashboard</title>
      </Head>

      <div className="py-5">
        <div className="bg-white shadow-sm ">
          <div className="p-5 bg-white ">
            You're logged in!
          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    login: state.utils.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    set_login_action: (data) => dispatch(set_login_action(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);