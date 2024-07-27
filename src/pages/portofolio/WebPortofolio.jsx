const WebPortofolio = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1 space-y-4">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[350px] md:max-w-3xl w-full">
          <div className="">
            <img src="/img/WebsitePorto.png" alt="" />
          </div>
          <div className="space-y-2">
            <h2 className="font-bold md:text-3xl sm:text-2xl text-xl">Website Profile</h2>
            <p className="text-sm text-justify">
              Website ini adalah projek pertama yang saya kerjakan menggunakan ReactJS dan menggunakan styling dari Tailwind CSS dan DaisyUi serta beberapa framework lain sebagai pemanis, website ini sebenarnya adalah tugas kuliah, tetapi
              saya jadikan sebagai website portofolio untuk saat ini.
            </p>
            <div className="space-x-2">
              <span className="badge badge-outline">ReactJS</span>
              <span className="badge badge-outline">Tailwind</span>
              <span className="badge badge-outline">DaisyUi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPortofolio;
