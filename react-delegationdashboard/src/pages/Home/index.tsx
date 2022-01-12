import React from 'react';
import { Redirect } from 'react-router-dom';
import { faBan, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import Logo from 'assets/images/logo.png';
import State from 'components/State';
import { useContext } from 'context';
import WalletLogin from './Login/Wallet';
import Views from 'components/Overview/Cards';
import { Calculator } from 'components/Calculator';
import WalletConnectLogin from './Login/WalletConnect';

const Home = () => {
  const { loading, error, loggedIn, egldLabel } = useContext();

  const ref = React.useRef(null);

  return (
    <div ref={ref} className="home d-row flex-fill align-items-center">
      <Calculator />
      {error ? (
        <State
          icon={faBan}
          iconClass="text-primary"
          title="Something went wrong"
          description="If the problem persists please contact support."
        />
      ) : loggedIn ? (
        <Redirect to="/dashboard" />
      ) : loading ? (
        <State icon={faCircleNotch} iconClass="fa-spin text-primary" />
      ) : (
        <div className="m-auto login-container">
          <div className="card my-spacer text-center">
            <div className="card-body p-spacer mx-lg-spacer">
              <img src={Logo} className="logo" />
              <h4 className="mb-spacer">Elrond Delegation Manager</h4>
              <p className="lead mb-spacer">
                Delegate Elrond ({egldLabel}) and earn up to 14% APR!
              </p>
              <p className="mb-spacer">Please select your login method:</p>
              <div>
                <a
                  href={process.env.PUBLIC_URL + '/ledger'}
                  className="btn btn-primary px-sm-spacer mx-1 mx-sm-3"
                >
                  Ledger
                </a>
                <WalletLogin />
                <WalletConnectLogin />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
