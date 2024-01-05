const Card = ({ data }) => {
    return (
        <div>
            <div className="card  w-96 mt-6 bg-green-100 shadow-xl ">
                <div className="relative">
                    <img src={data?.image} alt="Shoes" />
                    {
                        data.status=="General"?<i className="fa-regular fa-heart absolute top-[10px] right-[10px] "></i>
                        : <i className="fa-solid fa-heart absolute top-[10px] right-[10px] "></i>
                    }
                   
                    {/* <i className="fa-solid fa-heart "></i> */}
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.name}
                    </h2>
                    <ul className="list-style-none">
                        <li><i className="fa-solid fa-envelope me-1 mb-2"></i>  {data?.email}</li>
                        <li><i className="fa-solid fa-phone me-1 mb-2"></i> {data?.phone_number}</li>
                        <li><i className="fa-solid fa-location-dot me-1"></i> {data?.address}</li>

                    </ul>
                    <div className="card-actions justify-end mt-4">
                        <div className="badge badge-outline p-3">Update</div>
                        <div className="badge badge-outline p-3">Delete</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;