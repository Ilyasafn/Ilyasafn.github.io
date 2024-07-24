const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1 space-y-4">
      {/* Data Diri */}
      <div className="flex flex-col justify-center items-center max-w-[350px] md:max-w-full w-full ">
        <h1 className="font-semibold md:text-5xl sm:text-4xl text-3xl">Hallo Dunia!</h1>
        <h4 className="md:text-2xl sm:text-xl text-lg">Saya Ilyas Al Furqon,</h4>
        <h2 className="font-bold md:text-3xl sm:text-2xl text-xl">Software Engineer Student;</h2>
      </div>

      <div className="max-w-[360px] sm:max-w-lg md:max-w-3xl space-y-1 text-md text-justify mb-5">
        <p>
          Halo! Nama saya Ilyas Al Furqon, seorang mahasiswa semester awal jurusan Application Software Engineering di LP3I Balikpapan. Saat ini, saya sedang belajar dasar-dasar pemrograman dan memiliki sedikit pengalaman dalam coding. Saya
          sangat berambisi untuk terus belajar dan mengembangkan keterampilan saya di bidang teknologi dan pengembangan perangkat lunak.
        </p>
        <p>
          Saya tertarik untuk mengeksplorasi berbagai bahasa pemrograman dan framework, serta memahami konsep-konsep penting dalam dunia IT. Saya percaya bahwa dengan semangat dan dedikasi, saya bisa mencapai impian saya menjadi seorang
          pengembang aplikasi yang profesional.
        </p>
        <p>Berikut adalah beberapa keterampilan / skill yang saya kuasai.</p>
      </div>
      {/* Data Diri END */}

      {/* Skill Progress */}
      <div className="sm:grid grid-cols-2 justify-items-stretch max-w-[360px] sm:max-w-lg md:max-w-3xl gap-4">
        {/* FrontEnd */}
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>Front-End</th>
              </tr>
            </thead>
            <tbody>
              {/* ReactJS */}
              <tr>
                <td>ReactJS</td>
                <td>
                  <progress className="progress min-w-52" value="10" max="100"></progress>
                </td>
              </tr>
              {/* InertiaJS */}
              <tr>
                <td>InertiaJS</td>
                <td>
                  <progress className="progress min-w-52" value="0" max="100"></progress>
                </td>
              </tr>
              {/* VueJS */}
              <tr>
                <td>VueJS</td>
                <td>
                  <progress className="progress min-w-52" value="0" max="100"></progress>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* FrontEnd END */}

        {/* Back-End */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Back-End</th>
              </tr>
            </thead>
            <tbody>
              {/* ExpressJS */}
              <tr>
                <td>ExpressJS</td>
                <td>
                  <progress className="progress min-w-52" value="0" max="100"></progress>
                </td>
              </tr>
              {/* NextJS */}
              <tr>
                <td>NestJS</td>
                <td>
                  <progress className="progress min-w-52" value="0" max="100"></progress>
                </td>
              </tr>
              {/* Laravel Lumen */}
              <tr>
                <td>Laravel Lumen</td>
                <td>
                  <progress className="progress min-w-52" value="0" max="100"></progress>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Back-End END */}

        {/* FullStack WebDev */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>FullStack</th>
              </tr>
            </thead>
            <tbody>
              {/* NextJS */}
              <tr>
                <td>NextJS</td>
                <td>
                  <progress className="progress min-w-52" value="0" max="100"></progress>
                </td>
              </tr>
              {/* Laravel */}
              <tr>
                <td>Laravel</td>
                <td>
                  <progress className="progress min-w-52" value="0" max="100"></progress>
                </td>
              </tr>
              {/* Code Igniter */}
              <tr>
                <td>Code Igniter</td>
                <td>
                  <progress className="progress min-w-52" value="0" max="100"></progress>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* FullStack WebDev END */}

        {/* Databases */}
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>Databases</th>
              </tr>
            </thead>
            <tbody>
              {/* MYSQL */}
              <tr>
                <td>MySQL</td>
                <td>
                  <progress className="progress min-w-52" value="5" max="100"></progress>
                </td>
              </tr>
              {/* MongoDB */}
              <tr>
                <td>MongoDB</td>
                <td>
                  <progress className="progress min-w-52" value="1" max="100"></progress>
                </td>
              </tr>
              {/* PostgreSQL */}
              <tr>
                <td>PostgreSQL</td>
                <td>
                  <progress className="progress min-w-52" value="0" max="100"></progress>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Databases END */}
      </div>
      {/* Skill Progress END */}
    </div>
  );
};

export default Home;
