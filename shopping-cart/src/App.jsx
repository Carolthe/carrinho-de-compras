import './App.css'
import Produto from './components/Produto'
// import CremeBruleeMobile from '.Img/CremeBruleeMobile.png'

function App() {

  return (
<div>
<h1 className='text-4xl mx-7 mt-10 mb-10 font-bold'>Desserts</h1>
<Produto sobremesa="Waffle" especificação="Waffle with Berries" preço="$6.50"/>
<Produto  sobremesa="Crème Brûlée" especificação="Vanilla Bean Crème Brûlée" preço="$7.00" />
<Produto sobremesa="Macaron" especificação="Macaron Mix of Five" preço="$8.00" />
<Produto sobremesa="Tiramisu" especificação="Classic Tiramisu" preço="$5.50" />
<Produto sobremesa="Baklava"  especificação="Pistachio Baklava" preço="$4.00" />
<Produto sobremesa="Pie" especificação="Lemon Meringue Pie" preço="$5.00" />
<Produto sobremesa="Cake" especificação="Red Velvet Cake" preço="$4.50" />
<Produto sobremesa="Brownie" especificação="Salted Caramel Brownie" preço="$5.50" />
<Produto sobremesa="Panna Cotta" especificação="Vanilla Panna Cotta" preço="$6.50" />
</div>
  )
}

export default App
