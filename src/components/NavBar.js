import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <section className='mt-6 sm:mx-8'>
            <div className='flex justify-center mb-2 
            sm:inline-block sm:w-1/3'>
                <h1 className="text-3xl">
                    Discord Bot!
                </h1>
            </div>
            <div className='sm:inline-block'>
                <ul className='flex flex-row flex-wrap mx-5 justify-center'>
                    <li className='ml-2'>
                        <Link to={'/examples'}>
                            <p className='bold text-[#33abcd]'>Examples</p>
                        </Link>
                    </li>
                    <li className='ml-2'>
                        <Link to={'/install'}>
                            <p className='bold text-[#33abcd]'>Install</p>
                        </Link>
                    </li>
                    <li className='ml-2'>
                        <Link to={'/docs'}>
                            <p className='bold text-[#33abcd]'>Documentation</p>
                        </Link>
                    </li>
                    <li className='ml-2'>
                        <Link to={'/faq'}>
                            <p className='bold text-[#33abcd]'>FAQ</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default NavBar;