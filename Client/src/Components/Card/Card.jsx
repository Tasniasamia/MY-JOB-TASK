
const Card = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-2">
                <div className="relative">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    <i className="fa-regular fa-heart absolute top-[10px] right-[10px]"></i>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        Tasnia Sharin
                    </h2>
                    <ul className="list-style-none">
                        <li><i className="fa-solid fa-envelope me-1 mb-2"></i> sharin@gmail.com</li>
                        <li><i className="fa-solid fa-phone me-1 mb-2"></i> 0123234234</li>
                        <li><i className="fa-solid fa-location-dot me-1"></i> Khulna, Bangladesh</li>

                    </ul>
                    <div className="card-actions justify-end mt-4">
                        <div className="badge badge-outline">Update</div>
                        <div className="badge badge-outline">Delete</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;