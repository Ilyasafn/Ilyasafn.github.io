import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2">
      <h1 className="font-bold text-xl">Oops...</h1>
      <p className="font-sans text-md">Sepertinya anda berada pada halaman yang tidak seharusnya anda lihat!</p>
      <Link to={"/"}>
        <button className="btn btn-error">Kembali ke halaman awal!</button>
      </Link>
    </div>
  );
};

export default NotFound;
