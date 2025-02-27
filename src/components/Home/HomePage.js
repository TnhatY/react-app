import videoHomePage from '../../assets/video-homepage.mp4';
import '../../App.scss';

const HomePage = () => {
    return (
        <div>
            <video autoPlay muted loop >
                <source src={videoHomePage} type='video/mp4' />
            </video>

        </div>
    )
}


export default HomePage;