import { Link } from "react-router-dom";

// import logo from '../../../assets/icons/Wrench.svg'
const ServicesCard = ({ service }) => {
    const { title, img, price, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions">
                    <p className="text-xl text-orange-400">Price: ${price}</p>
                    <Link> -❯ </Link>
                    {/* <button className="btn btn-circle btn-outline">
                        <img src=""></img>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />-❯</svg>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;