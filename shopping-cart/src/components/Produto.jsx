import Waffle from '../Img/Waffle.png'

export default function Produto (){
    return(
        <div>
        <div className='grid justify-center justify-items-center'>
            <img src={Waffle} className='w-[340px] h-52 rounded-xl ' />
            <button className='bg-gray-300 w-48 h-14 rounded-full flex relative bottom-7  '>Add to Cart</button>
        </div>
        <div>
            <h4>Waffle</h4>
            <p>Waffle with Berries</p>
            <p>$6.50</p>
        </div>
</div>
    )
}