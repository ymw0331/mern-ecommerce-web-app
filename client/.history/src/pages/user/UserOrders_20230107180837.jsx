import { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth';
import Jumbotron from '../../components/cards/Jumbotron';
import UserMenu from '../../components/nav/UserMenu';
import axios from 'axios';
import ProductCardHorizontal from '../../components/cards/ProductCardHorizontal';

export default function UserOrders ()
{
  //state
  const [ orders, setOrders ] = useState( "" );

  //context
  const [ auth, setAuth ] = useAuth();

  useEffect( () =>
  {
    if ( auth?.token ) getOrders();

  }, [ auth?.token ] );

  const getOrders = async () =>
  {
    try
    {
      const { data } = await axios.get( '/orders' );
      setOrders( data );
    } catch ( error )
    {
      console.log( error );
    }
  };

  return (
    <>
      <Jumbotron
        title={ `Hello ${ auth?.user?.name }` }
        subTitle="User Orders"
      />

      <div className='container-fluid'>
        <div className='row'>
          {/* Sidebar */ }
          <div className='col-md-3'>
            <UserMenu />
          </div>
          {/* Content */ }
          <div className='col-md-9'>
            <div className='p-3 mt-2 mb-2 h4 bg-light'>Orders</div>
            {/* <pre>{ JSON.stringify( orders, null, 4 ) }</pre> */ }
            <div className='row'>
              {/* 
              { orders?.map( ( o, i ) =>
              {
                return (
                  <div
                    key={ o._id }
                    className="border shaodow bg-light rounded-3 mb-5">
                    { o._id }
                  </div>
                );
              } ) } */}

              {
                orders?.map( ( o, i ) =>
                {
                  return (
                    <div key={o._id}></div>
                  );
                } )
              }

            </div>

          </div>

        </div>
      </div>

    </>
  );
};