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
      <Jumbotron title={ `Hello` }
        subTitle={ cart?.length > 1 ? 
        'You have x items in the cart. ${auth.token}' 
        : 
        'Your cart is empty' }
      />

    </>
  );
}