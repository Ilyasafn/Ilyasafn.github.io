import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen ">
      <h1 className="font-bold md:text-md text-lg md:text-xl">Oops...</h1>
      <p className="font-sans md:text-lg text-sm md:max-w-xl max-w-[400px]">Sepertinya anda berada pada halaman yang tidak seharusnya anda lihat!</p>
      <Link to={"/"}>
        <button className="btn btn-error mt-5 ">Kembali ke halaman awal!</button>
      </Link>
    </div>
  );
};

export default NotFound;
