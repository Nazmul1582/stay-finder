import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Review = ({review}) => {
    return (
        <div className="bg-base-100 p-6 shadow-xl border border-success rounded-xl shadow-success/20">
              <div className="flex flex-col">
              <div className="text-center mb-10 flex-grow">
                <BiSolidQuoteAltLeft className="text-5xl mx-auto text-success font-extrabold mb-5" />
                <p>{review.comment}</p>
              </div>
              <div className="mx-auto text-center">
                <div className="avatar mb-5">
                  <div className="w-20 rounded-full">
                    <img src="https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg" />
                  </div>
                </div>
                <p className="font-semibold">{review.name}</p>
              </div>
              </div>
            </div>
    );
};

export default Review;