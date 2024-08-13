import './App.css'
import Produto from './components/Produto'
import WaffleMobile from './Img/WaffleMobile.png'
import CremeBruleeMobile from './Img/CremeBruleeMobile.png'
import MacaronMobile from './Img/MacaronMobile.png'
import TiramisuMobile from './Img/TiramisuMobile.png'
import BaklavaMobile from './Img/BaklavaMobile.png'
import CakeMobile from './Img/CakeMobile.png'
import BrownieMobile from './Img/BrownieMobile.png'
import PannaCottaMobile from './Img/PannaCottaMobile.png'
import MeringueMobile from './Img/MeringueMobile.png'


function App() {

  return (
<div>
<h1 className='text-4xl mx-7 mt-10 mb-10 font-bold'>Desserts</h1>
<Produto sobremesa="Waffle" especificação="Waffle with Berries" preço="$6.50" img={WaffleMobile}/>
<Produto  sobremesa="Crème Brûlée" especificação="Vanilla Bean Crème Brûlée" preço="$7.00" img={CremeBruleeMobile} />
<Produto sobremesa="Macaron" especificação="Macaron Mix of Five" preço="$8.00" img={MacaronMobile} />
<Produto sobremesa="Tiramisu" especificação="Classic Tiramisu" preço="$5.50" img={TiramisuMobile} />
<Produto sobremesa="Baklava"  especificação="Pistachio Baklava" preço="$4.00" img={BaklavaMobile} />
<Produto sobremesa="Pie" especificação="Lemon Meringue Pie" preço="$5.00" img={MeringueMobile} />
<Produto sobremesa="Cake" especificação="Red Velvet Cake" preço="$4.50" img={CakeMobile} />
<Produto sobremesa="Brownie" especificação="Salted Caramel Brownie" preço="$5.50" img={BrownieMobile} />
<Produto sobremesa="Panna Cotta" especificação="Vanilla Panna Cotta" preço="$6.50" img={PannaCottaMobile} />
</div>
  )
}

export default App
