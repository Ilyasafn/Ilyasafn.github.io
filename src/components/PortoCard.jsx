import { Link } from "react-router-dom";

const PortoCard = (props) => {
  const { photos, project, desc, button } = props;
  return (
    <div className="flex flex-1 justify-center">
      <div className="card bg-base-100 w-40 sm:w-44 md:w-52 shadow-md">
        <figure>
          <img className="object-cover" src={photos} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{project}</h2>
          <p className="line-clamp-2 text-sm">{desc}</p>{" "}
          <div className="card-actions justify-center">
            <Link to={button}>
              <button className="btn btn-outline btn-sm hover:btn-sm hover:btn">Lihat detail!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortoCard;
