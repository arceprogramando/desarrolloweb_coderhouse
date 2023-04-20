import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Header = () => {
    const wspUrl = "https://api.whatsapp.com/send/?phone=5491150990913&text=Holaa%21+me+gustaria+un+presupuesto+de+tu+trabajo+desarrollando+paginas+web+%21%21%21%21&type=phone_number&app_absent=0";


    return (
        <>
            <header className='w-full  '>
                <div className='w-full lg:w-full  bg-rose-900 text-white flex justify-center p-1'>

                    <div className='lg:w-[1024px] w-[320px] flex justify-between items-center '>

                        <a href={wspUrl} target='_blank' className='text-xs'>
                            <i className='pl-4 '><WhatsAppIcon style={{ fontSize: 16, color: 'white' }} /></i>
                            +54 9 1150990913
                        </a>
                        <div className="pr-4">Sign In</div>
                    </div>


                </div>
                <div className='text-center font-kaisei mt-10 mb-10'>


                    <h1 className=' font-normal text-5xl tracking-widest inline text-gray-700 '>Zaragoza
                        <span className='block text-purple-400 '>Shoes</span></h1>
                    <h2 className="text-gray-700 mt-4 tracking-widest" >zapatos y accesorios</h2>
                </div >
            </header >
        </>
    )
}

export default Header