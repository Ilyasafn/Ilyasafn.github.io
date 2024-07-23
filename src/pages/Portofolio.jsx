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
  ];
  return (
    <div className="flex flex-1 flex-col justify-center items-center space-y-4">
      <div className="text-center max-w-3xl space-y-2">
        <h2 className="font-bold text-5xl">Portofolio</h2>
        <div className="text-justify text-sm">
          <p>Berikut adalah beberapa hasil karya yang telah saya buat selama ini, walau tidak seberapa setidak nya saya telah kuat melawan rasa malas yang membara di dalam diri saya.</p>
        </div>
      </div>

      <div className="grid grid-cols-4 justify-center gap-6">
        {portos.map((porto, i) => {
          return <PortoCard key={i} project={porto.project} desc={porto.desc} />;
        })}
      </div>
    </div>
  );
};

export default Portofolio;
