import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notify = () => toast.success("Pesan anda telah terkirim! 😊", {});
  return (
    <div className="flex flex-1 flex-col justify-center items-center space-y-3">
      <section id="my-contact">
        <div className="text-center space-y-2">
          <h2 className="font-bold md:text-5xl sm:text-4xl text-3xl">Kontak</h2>
          <div className="max-w-[360px] sm:max-w-lg md:max-w-3xl text-md text-justify">
            <p>Jika Anda ingin menghubungi saya untuk pertanyaan, kolaborasi, atau sekadar berbagi informasi, jangan ragu untuk menghubungi saya melalui kotak pesan berikut. Saya sangat terbuka untuk diskusi dan kesempatan belajar baru.</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <div className="container flex justify-center">
        <form>
          <div className="grid md:grid-cols-2 grid-cols-1 max-w-[360px] sm:max-w-lg md:max-w-3xl gap-2">
            {/* Input Nama */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Masukkan nama anda</span>
              </div>
              <input type="text" placeholder="..." className="input input-bordered " />
              <div className="label"></div>
            </label>
            {/* Input Nama END */}

            {/* Input Email  */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Masukkan email anda</span>
              </div>
              <input type="text" placeholder="..." className="input input-bordered " />
              <div className="label"></div>
            </label>
            {/* Input Email END */}
          </div>

          {/* Textarea Pertanyaan  */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Pertanyaan, diskusi, saran</span>
            </div>
            <textarea className="textarea textarea-bordered h-40" placeholder="Pertanyaan, diskusi dan saran anda..."></textarea>
            <div className="flex justify-center label mt-6">
              <button type="submit" onClick={notify} className="btn btn-outline hover:btn btn-wide ">
                Kirim
              </button>
              <ToastContainer position="top-center" theme="dark" hideProgressBar={true} />
            </div>
          </label>
          {/* Textarea Pertanyaan END */}
        </form>
      </div>
      {/* FORM END */}
    </div>
  );
};

export default Contact;
