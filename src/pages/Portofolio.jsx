import PortoCard from "../components/PortoCard";

const Portofolio = () => {
  const portos = [
    {
      project: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic, tenetur ipsum, ducimus cumque neque animi facilis corporis itaque eum veniam totam molestiae. Assumenda numquam, doloribus sunt consectetur similique quos nesciunt, voluptatibus totam sapiente amet veritatis! Omnis totam saepe eos.",
    },
    {
      project: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      project: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      project: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      project: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className="flex flex-1 flex-col justify-center items-center space-y-4">
      <div className="text-center max-w-3xl space-y-2">
        <h2 className="font-bold text-5xl">Portofolio</h2>
        <div className="text-justify ">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur exercitationem atque inventore eligendi animi delectus alias quis expedita perferendis sint dolorum provident, laboriosam obcaecati similique. Distinctio ab
            ullam unde animi.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 justify-center gap-4">
        {portos.map((porto, i) => {
          return <PortoCard key={i} project={porto.project} desc={porto.desc} />;
        })}
      </div>
    </div>
  );
};

export default Portofolio;
