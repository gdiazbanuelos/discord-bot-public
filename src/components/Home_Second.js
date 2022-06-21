import spike from '../assets/faye.jpg'

const Home_Main = () => {
    return (
        <div className="bg-[#1B1B1B] pt-10 text-white">
            <h1 className="font-black text-2xl ml-3 mb-2">
                How to Install
            </h1>
            <p className="font-bold ml-3 mb-10 mr-2">
                The entire source code is available on GitHub. Feel free to tinker it!
            </p>
            <img src={spike} alt="spike" className="w-3/4 mx-auto mb-6" />

            <ol className="list-decimal ml-6 pb-10 mr-1">
                <li>Download the source code files <a href='https://github.com/gdiazbanuelos/discord-bot-public' className='text-blue-500'>here</a></li>
                <li>Download the dependecies <a href='https://github.com/gdiazbanuelos/discord-bot-public' className='text-blue-500'>here</a></li>
                <li>Fill the users.json with members of server that want an intro, enable Develepor mode in Discord settings, 
                    then right click users/servers/channels to get their ID's</li>
                <li>Fill out bot.py with server/channel ID's from Discord</li>
                <li>Run bot with <p className='font-bold inline-block'>./run.sh</p>, kill with <p className='font-bold inline-block'>./kill.sh</p></li>

            </ol>


        </div>
    )
}

export default Home_Main;