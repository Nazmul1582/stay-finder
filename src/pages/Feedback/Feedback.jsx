import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Feedback = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { currentUser } = useAuth();

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = currentUser.displayName;
    const rating = form.rating.value;
    const comment = form.comment.value;
    console.log(name, rating, comment);
  };

  return (
    <section>
      <div className="h-[300px] relative">
        <img
          src="https://i.ibb.co/t8JnrVb/luxury-hotel-outdoor-pools-turkey.jpg"
          className="h-full w-full object-cover"
          alt="banner image"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-black/60 from-0% to-black/30 to-100%">
          <h2 className="text-white text-center text-5xl font-bold">
            Review Page
          </h2>
        </div>
      </div>

      <div className="container mx-auto py-20">
        <div className="max-w-lg shadow-xl shadow-success/50 border border-success rounded-xl p-6 mx-auto">
          <h3 className="text-xl font-bold mb-5">Booking Name: </h3>
          <form onSubmit={handleReview}>
            <div className="form-control w-full mb-5">
              <input
                type="type"
                defaultValue={currentUser.displayName}
                className="input input-bordered"
                disabled
              />
            </div>
            <select
              name="rating"
              className="select select-bordered border-success w-full mb-5"
            >
              <option>Give a rating</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
            <textarea
              name="comment"
              className="textarea textarea-accent w-full"
              placeholder="Comment"
            ></textarea>
            <div className="form-control mt-6">
              <button className="btn btn-success">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
