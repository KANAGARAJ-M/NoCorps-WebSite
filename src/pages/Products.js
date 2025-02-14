import ImgCard from "../components/ImgCard";
import Img from '../assets/NcLogo.png';

function Productes() {
    return(
        <ImgCard
    imageUrl={Img}
    title={"Comming Soon"}
    alt={"Check back later"}
    description={"We are working on this page. Please check back later."}
    />
    );
}

export default Productes;