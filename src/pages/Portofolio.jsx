import PortoCard from "../components/PortoCard";

const Portofolio = () => {
  const portos = [
    {
      photos: "/img/WebPorto1st.png",
      project: "Website Profile",
      desc: "Website profile yang saya buat waktu awal belajar coding HTML, CSS, JS.",
      button: "/portofolio/websitepertama",
    },
    {
      photos: "/img/WebsitePorto.png",
      project: "Website Profile",
      desc: "Website profile pertama yang saya kerjakan dengan ReactJS.",
      button: "/portofolio/webprofile",
    },
    {
      photos: "/img/PHPCrud.png",
      project: "Website CRUD",
      desc: "Website CRUD yang dibangun dengan bahasa PHP, di tujukan untuk menyelesaikan tugas kuliah.",
      button: "/portofolio/websitecrud",
    },
    {
      photos: "/img/WebHotel.png",
      project: "Website Hotel",
      desc: "Website Hotel ini dibangun dengan bahasa PHP, dikerjakan dengan kelompok untuk menyelesaikan tugas kuliah.",
      button: "/portofolio/webhotel",
    },
  ];
  return (
    <div className="flex flex-col justify-center flex-1 items-center space-y-4 ">
      <section id="my-portofolio">
        <div className="text-center space-y-2">
          <h2 className="font-bold md:text-5xl sm:text-4xl text-3xl">Portofolio</h2>
          <div className="max-w-[360px] sm:max-w-lg md:max-w-3xl text-md text-justify">
            <p>Berikut adalah beberapa hasil karya yang telah saya buat selama ini, walau tidak seberapa setidak nya saya telah kuat melawan rasa malas yang membara di dalam diri saya.</p>
          </div>
        </div>
      </section>

      <section id="my-portos">
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 max-w-[360px] sm:max-w-lg md:max-w-3xl gap-6">
          {portos.map((porto, i) => {
            return <PortoCard key={i} photos={porto.photos} project={porto.project} desc={porto.desc} button={porto.button} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Portofolio;
