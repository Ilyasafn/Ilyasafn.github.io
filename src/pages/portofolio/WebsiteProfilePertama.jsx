const WebsiteProfilePertama = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1 space-y-4">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[350px] md:max-w-3xl w-full">
          <div className="bg-cover bg-center bg-red-200">
            <img src="/img/WebPorto1st.png" alt="" />
          </div>
          <div className="space-y-2">
            <h2 className="font-bold md:text-3xl sm:text-2xl text-xl">Website Profile</h2>
            <p className="text-sm text-justify">
              Web Portofolio ini adalah Website pertama yang saya buat sebagai website pribadi / portofolio sebelum saya akhirnya membuat website yang saat ini anda kunjungi, website ini saya bangun menggunakan HTML, CSS, JS dasar dan
              Bootstrap versi 5 untuk styling website.
            </p>
            <div className="space-x-2 ">
              <span className="badge badge-outline">HTML</span>
              <span className="badge badge-outline">CSS</span>
              <span className="badge badge-outline">JavaScript</span>
              <span className="badge badge-outline">Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteProfilePertama;
