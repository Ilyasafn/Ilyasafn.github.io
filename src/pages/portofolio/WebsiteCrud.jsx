const WebsiteCrud = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1 space-y-4">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[350px] md:max-w-3xl w-full">
          <div className="">
            <img src="/img/PHPCrud.png" alt="" />
          </div>
          <div className="space-y-2">
            <h2 className="font-bold md:text-3xl sm:text-2xl text-xl">Website crud data pegawai</h2>
            <p className="text-sm text-justify">
              Website yang dibangun menggunakan bahasa PHP Native dan pada database nya menggunakan bahasa MySql untuk memanipulasi data yang ada pada database, website ini di bangun untuk memenuhi tugas kuliah, di styling menggunakan
              TailwindCSS dan DaisyUi.
            </p>
            <div className="space-x-2">
              <span className="badge badge-outline">PHP</span>
              <span className="badge badge-outline">Tailwind</span>
              <span className="badge badge-outline">DaisyUi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCrud;
