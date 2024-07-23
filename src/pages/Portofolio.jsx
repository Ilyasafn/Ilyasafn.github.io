import PortoCard from "../components/PortoCard";

const Portofolio = () => {
  const portos = [
    {
      project: "Website Profile",
      desc: "Website profile pertama yang saya kerjakan dengan niat dan usaha yang kuat.",
    },
    {
      project: "Website CRUD",
      desc: "Website CRUD yang dibangun dengan bahasa PHP, di tujukan untuk menyelesaikan tugas kuliah.",
    },
    {
      project: "Website CRUD",
      desc: "Website CRUD yang dibangun dengan bahasa PHP, di tujukan untuk menyelesaikan tugas kuliah.",
    },
    {
      project: "Website CRUD",
      desc: "Website CRUD yang dibangun dengan bahasa PHP, di tujukan untuk menyelesaikan tugas kuliah.",
    },
    {
      project: "Website CRUD",
      desc: "Website CRUD yang dibangun dengan bahasa PHP, di tujukan untuk menyelesaikan tugas kuliah.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="text-center md:max-w-3xl sm:max-w-lg max-w-sm w-full space-y-2">
        <h2 className="font-bold md:text-5xl text-4xl ">Portofolio</h2>
        <div className="text-justify text-sm">
          <p>Berikut adalah beberapa hasil karya yang telah saya buat selama ini, walau tidak seberapa setidak nya saya telah kuat melawan rasa malas yang membara di dalam diri saya.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center gap-6">
        {portos.map((porto, i) => {
          return <PortoCard key={i} project={porto.project} desc={porto.desc} />;
        })}
      </div>
    </div>
  );
};

export default Portofolio;
