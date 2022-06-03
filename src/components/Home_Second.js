import spike from '../assets/faye.jpg'
import ursa from '../assets/am.webp'

const Home_Main = () => {
    return (
        <div className="bg-[#1B1B1B] pt-10 text-white">
            <h1 className="font-black text-2xl ml-3 mb-2">
                How to Install
            </h1>
            <p className="font-bold ml-3 mb-10">
                The entire source code is available on GitHub. Feel free to tinker it!
            </p>
            <img src={spike} alt="spike" className="w-3/4 mx-auto mb-6" />
            <h1 className="font-black text-2xl ml-3 mb-2">
                Examples!
            </h1>
            <p className="font-bold ml-3 mb-8">
                Spike joins the Discord server and then the bot jumps in and plays a song.
            </p>
            <div>
                <img src={ursa} alt="ursa" className="w-3/4 mx-auto mb-4" />
            </div>
            <p className="font-bold ml-3 pb-10">
                Lorem epsum
            </p>
        </div>
    )
}

export default Home_Main;