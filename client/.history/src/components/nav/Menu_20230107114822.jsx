/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import Search from '../forms/Search';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import { Badge } from 'antd';

export default function Menu ()
{

  //context
  const [ auth, setAuth ] = useAuth();
  const [ cart, setCart ] = useCart();

  //hooks
  const categories = useCategory();
  const navigate = useNavigate();

  // console.log( "categories in menu = >", categories );

  const logout = () =>
  {
    setAuth( { ...auth, user: null, token: "" } );
    localStorage.removeItem( "auth" );
    navigate( "/login" );
  };

  return (
    <>
      <ul className="nav d-flex justify-content-between shadow-sm mb-2">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">HOME</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/shop">SHOP</NavLink>
        </li>



        <a className='nav-link pointer dropdown-toggle'
          data-bs-toggle="dropdown">
          CATEGORIES
        </a>

        <div className='dropdown-menu'
          style={ { height: "300px", overflow: "scroll" } }>
          <li>
            <NavLink
              className="nav-link"
              to={ `/categories` }
            >
              All Categories
            </NavLink>
          </li>
          { categories?.map( ( c ) => (
            <li>
              <NavLink
                className="nav-link"
                to={ `/category/${ c.slug }` }
              >
                { c.name }
              </NavLink>
            </li>
          ) ) }
        </div>


        <li className="nav-item">
          <Badge count={ 3 } offset={ [ 1, 10 ] }>
            <NavLink className="nav-link" aria-current="page" to="/cart"
            >CART
            </NavLink>
          </Badge>
        </li>

        <Search />



        {
          !auth?.user ? (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">LOGIN</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">REGISTER</NavLink>
              </li>


            </>
          ) : (
            <div className='dropdown'>

              <li>
                <a className='nav-link pointer dropdown-toggle' data-bs-toggle="dropdown">
                  { auth?.user.name.toUpperCase() }
                </a>
                <ul className='dropdown-menu'>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={ `/dashboard/${ auth?.user?.role === 1 ? "admin" : "user" }` }
                    >
                      Dashboard
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <a onClick={ logout } className="nav-link pointer" >
                      Logout
                    </a>
                  </li>
                </ul>

              </li>
            </div>

          )
        }

      </ul>
    </>
  );
} 