import { Link } from "react-router-dom";
import { whatsapp } from "../assets";

const Header = () => {
    const phone = '5491150990913'
    const wspUrl = `https://api.whatsapp.com/send/?phone=${phone}&text=Holaa%21+me+gustaria+un+presupuesto+de+tu+trabajo+desarrollando+paginas+web+%21%21%21%21&type=phone_number&app_absent=0`;


    return (
        <>
            <header className='w-full'>
                <div className='w-full lg:w-full  bg-rose-900 text-white flex justify-center p-1'>

                    <div className='lg:w-[1024px] w-[320px] flex justify-between items-center '>
                        <Link to={wspUrl} target='_blank' rel="noreferrer noopener" className='text-xs flex gap-2'>
                            <img src={whatsapp} alt="WhatsApp icon" className="w-4 h-4" />
                            <p>+{phone}</p>
                        </Link>
                        <div className="uppercase">Sign In</div>
                    </div>


                </div>
                <div className='text-center font-kaisei mt-10 mb-10'>

                    <Link to="/">
                        <h1 className=' font-normal text-5xl tracking-widest inline text-gray-700 '>Zaragoza
                            <span className='block text-purple-400 '>Shoes</span></h1>
                    </Link>
                    <h2 className="text-gray-700 mt-4 tracking-widest" >shoes and accessories</h2>
                </div >
            </header >
        </>
    )
}

export default Header