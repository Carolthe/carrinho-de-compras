import Waffle from '../Img/Waffle.png'

export default function Produto (){
    return(
        <div className='mx-7 mb-10'>
        <div className='grid justify-center justify-items-center '>
            <img src={Waffle} className='w-[340px] h-52 rounded-xl ' />
            <div className='flex relative bottom-7  '>
            <button className='bg-white w-48 h-14 rounded-full border-amber-800	border-2 text-lg font-semibold '>Add to Cart</button>
        </div>
        </div>
        <div>
            <h4 className='text-xl font-semibold text-opacity-70 text-orange-950'> Waffle</h4>
            <p className='text-2xl font-bold'>Waffle with Berries</p>
            <p className='text-2xl font-semibold text-orange-700'>$6.50</p>
        </div>
</div>
    )
}