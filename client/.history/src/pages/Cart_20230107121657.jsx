import { useAuth } from '../context/auth';
import { useCart } from '../context/cart';
import Jumbotron from '../components/cards/Jumbotron';
import { useNavigate } from 'react-router-dom';



export default function Cart ()
{
  //context
  const [ cart, setCart ] = useCart();
  const [ auth, setAuth ] = useAuth();

  //hooks
  const navigate = useNavigate();

  return (
    <>
      <Jumbotron title={ `Hello ${ auth?.token && auth?.user?.name }` }
        subTitle={ cart?.length > 1 ?
          `You have ${ cart.length } items in the cart. ${ auth.token ? "" : "Please login to checkout"
          }`
          : 'Your cart is empty' }
      />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='p-3 mt-2 mb-2 h4 bg-light'>
              { cart?.length > 1
                ?
                <div className='text-center'>
                  My Cart
                </div>

                : <div className='text-center'>
                  <button className='btn btn-primary'
                    onClick={ () => navigate( '/' ) }
                  >Continue Shopping
                  </button>
                </div> }
            </div>
          </div>
        </div>
      </div>


      { cart?.length > 1 && (
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              { cart.map( c =>
                <div key={ c._id }>{ c.name }</div> ) }

            </div>
          </div>
        </div>
      ) }

    </>
  );
};