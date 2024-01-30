import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';

const Logo = require('../../assets/logo.png');

/**
 * Create a Header component
 *
 * @return {JSX.Element}
 */

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  // height: 8%;
  min-height: 80px;
  // margin: 0 auto;
  // width: 100%;
  border-bottom: 1px solid #7ba07b;
`;

const Header = (): JSX.Element => {
  return (
    <NavContainer>
      <Link className="header_logo" to="/">
        <img className="header_logo_img" src={Logo} alt="WealthHealth logo" />
      </Link>
      <div className="header_nav">
        <NavLink className="header_nav_link" to="/employee/create">
          Create Employee
        </NavLink>
        <NavLink className="header_nav_link" to="/employee/list">
          Current Employees
        </NavLink>
      </div>
    </NavContainer>
  );
};

export default Header;
