import kids from "../Images/kids.png";
function SectionFour() {
  return (
    <div className="fs mt-24 flex">
      <div>
        <img className="w-[90%]" src={kids} alt="kids-image" />
      </div>
      <div className="mt-16">
        <h1 className="text-white text-5xl font-bold">
          Create profiles for kids
        </h1>
        <p className="text-white mt-4 text-2xl">
          Send kids on adventures with their favorite <br />
          characters in a space made just for them- <br />
          free with your membership.
        </p>
      </div>
    </div>
  );
}

export default SectionFour;
