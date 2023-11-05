import newsletter from "../../assets/images/newsletter.jpg";

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6 items-center justify-center">
          <img
            className="w-full rounded-xl"
            src={newsletter}
            alt="newsletter image"
          />
          <div className="">
            <h2 className="text-3xl font-bold">Subscribe to our Newsletter!</h2>
            <p className="mt-3 mb-6 text-gray-400">Subscribe our newsletter and stay updated</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Type Your Email"
                className="input input-bordered input-success w-full max-w-xs"
              />
              <button className="btn btn-success">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
