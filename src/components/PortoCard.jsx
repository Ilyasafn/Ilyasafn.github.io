import { Link } from "react-router-dom";

const PortoCard = (props) => {
  const { project, desc } = props;
  return (
    <div className="flex flex-1 justify-center">
      <div className="card bg-base-100 w-52 shadow-lg">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{project}</h2>
          <p className="line-clamp-2">{desc}</p>{" "}
          <div className="card-actions justify-center">
            <Link to={"/pages/TesPorto"}>
              <button className="btn btn-outline  hover:btn">Lihat detail!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortoCard;
