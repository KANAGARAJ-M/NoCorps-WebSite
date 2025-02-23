import ImgCard from "../components/ImgCard";
import Img from '../assets/10.png';

function Productes() {
    return(
        <ImgCard
    imageUrl={Img}
    title={"It's comming....."}
    alt={"AIC"}
    description={"Get ready for collecting your bonus and rewards!. Just 5 Days to go."}
    />
    );
}

export default Productes;