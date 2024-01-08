import './App.css';
import Design from './components/design';
import Cart from './components/cart';
import { CartProvider } from 'react-use-cart';


function App() {
  return (
    <>
    <CartProvider>
       <Design/>
       <Cart/>
    </CartProvider> 
    </>
    
  );
}

export default App;
