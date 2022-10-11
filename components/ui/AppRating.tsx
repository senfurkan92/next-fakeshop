import {BsStarHalf, BsStarFill, BsStar} from 'react-icons/bs'

const AppRating = ({rating}: {rating: number}) : JSX.Element => {
    if(rating == 5) {
        return <><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></>
    } else if (rating >= 4.5) {
        return <><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></>
    } else if (rating == 4) {
        return <><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/></>
    } else if (rating >= 3.5) {
        return <><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/></>
    } else if (rating == 3) {
        return <><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/></>
    } else if (rating >= 2.5) {
        return <><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/><BsStar/></>
    } else if (rating == 2) {
        return <><BsStarFill/><BsStarFill/><BsStar/><BsStar/><BsStar/></>
    } else if (rating >= 1.5) {
        return <><BsStarFill/><BsStarHalf/><BsStar/><BsStar/><BsStar/></>
    } else if (rating == 1) {
        return <><BsStarFill/><BsStar/><BsStar/><BsStar/><BsStar/></>
    } else if (rating >= 0.5) {
        return <><BsStarHalf/><BsStar/><BsStar/><BsStar/><BsStar/></>
    } else {
        return <><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></>
    } 
}

export default AppRating