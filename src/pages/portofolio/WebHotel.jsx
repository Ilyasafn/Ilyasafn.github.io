import { Link } from "react-router-dom";

const WebHotel = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[350px] md:max-w-3xl w-full">
        <div className="">
          <img src="/img/WebHotel.png" alt="" />
        </div>
        <div className="space-y-2">
          <h2 className="font-bold md:text-3xl sm:text-2xl text-xl">Website Hotel</h2>
          <p className="text-sm text-justify">
            Website ini dibangun menggunakan PHP Native dan Bootstrap, dikerjakan dengan tim / kelompok untuk memenuhi tugas kuliah, yang dimana website ini dibangun menggunakan bahasa PHP Native dan beberapa sentuhan Bootstrap untuk
            styling nya.
          </p>
          <div className="space-x-2">
            <span className="badge badge-outline">PHP</span>
            <span className="badge badge-outline">Bootstrap</span>
          </div>
        </div>
      </div>

      <Link to={"/portofolio"}>
        <button className="btn btn-outline btn-sm hover:btn-sm hover:btn  mt-5">Kembali!</button>
      </Link>
    </div>
  );
};

export default WebHotel;
