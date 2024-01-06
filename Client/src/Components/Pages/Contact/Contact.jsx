import Card from "../../Card/Card";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Contact = () => {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            try {
                const response = await axios.get("https://server-site-ruddy.vercel.app/user");
                return response.data; // Return the data from the API
            } catch (error) {
                throw new Error(error); // Throw an error to be caught by the error handler
            }
        }
    });

    // Check if data and data.data are not undefined/null before accessing them
    const contactList = data?.data || [];

    return (
        <div className="lg:mx-0 mx-2">
            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    contactList.length ?
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center ">
                            {
                                contactList.map((item, index) => (
                                    <Card data={item} refetch={refetch} key={index} />
                                ))}
                        </div> :
                        <div>No data available</div>

                )}
            </div>
        </div>
    );
};

export default Contact;
