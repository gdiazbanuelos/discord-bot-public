import spike from '../assets/spike.jpg'
import ursa from '../assets/ursa.gif'

const Home_Main = () => {
    return (
        <div className="bg-[#F599A3] pt-3 text-white">
            <h1 className="font-black text-2xl ml-3 mb-2">
                Discord Bot Intro Music!
            </h1>
            <p className="font-bold ml-3 mb-10 mr-3">
                This is a Discord bot that will play a song when a user joins the server.
            </p>
            <img src={spike} alt="spike" className="w-3/4 mx-auto mb-6" />
            <h1 className="font-black text-2xl ml-3 mb-2">
                Examples!
            </h1>
            <p className="font-bold ml-3 mb-8 mr-3">
                Spike joins the Discord server and then the bot jumps in and plays a song.
            </p>
            <div>
                <img src={ursa} alt="ursa" className="w-3/4 mx-auto mb-4" />
            </div>
            <p className="font-bold ml-3 pb-12">
                Lorem epsum
            </p>
        </div>
    )
}

export default Home_Main;