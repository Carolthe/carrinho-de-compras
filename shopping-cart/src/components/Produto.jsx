
import ShoppingCart from '../Img/ShoppingCart.png'

export default function Produto (props){
    return(
        <div className='mx-7 mb-10 '>
        <div className='grid justify-center justify-items-center sm:'>
            <img src={props.img} className='w-[340px] h-52 rounded-xl ' />
            <div className='flex relative bottom-7  '>
            <button className='bg-white w-48 flex justify-center items-center h-14 rounded-full border-amber-800	border-2 text-lg font-semibold '>Add to Cart <img className='ml-1' src={ShoppingCart} /> </button>
        </div>
        </div>
        <div>
            <h4 className='text-xl font-semibold text-opacity-70 text-orange-950'>{props.sobremesa}</h4>
            <p className='text-xl font-bold'>{props.especificação}</p>
            <p className='text-xl font-semibold text-orange-700'>{props.preço}</p>
        </div>
</div>
    )
}