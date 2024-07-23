const Home = () => {
  return (
    <div className="lg:container mx-auto">
      <div className="flex flex-col justify-center items-center flex-1 space-y-4">
        {/* Data Diri */}
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-semibold md:text-5xl text-4xl">Hallo Dunia!</h1>
          <h4 className="md:text-2xl text-xl">Saya Ilyas Al Furqon,</h4>
          <h2 className="font-bold md:text-3xl text-2xl">Software Engineer Student;</h2>
        </div>
        <div className="md:max-w-2xl max-w-prose w-full space-y-1 text-md text-justify mb-5">
          <p>
            Halo! Nama saya Ilyas Al Furqon, seorang mahasiswa semester awal jurusan Application Software Engineering di LP3I Balikpapan. Saat ini, saya sedang belajar dasar-dasar pemrograman dan memiliki sedikit pengalaman dalam coding.
            Saya sangat berambisi untuk terus belajar dan mengembangkan keterampilan saya di bidang teknologi dan pengembangan perangkat lunak.
          </p>
          <p>
            Saya tertarik untuk mengeksplorasi berbagai bahasa pemrograman dan framework, serta memahami konsep-konsep penting dalam dunia IT. Saya percaya bahwa dengan semangat dan dedikasi, saya bisa mencapai impian saya menjadi seorang
            pengembang aplikasi yang profesional.
          </p>
          <p>Berikut adalah beberapa keterampilan / skill yang saya kuasai.</p>
        </div>
        {/* Data Diri END */}

        {/* Skill Progress */}
        <div className="sm:grid grid-cols-2 justify-items-stretch gap-4 ">
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
                {/* row 1 */}
                <tr>
                  <td>React JS</td>
                  <td>
                    <progress className="progress min-w-56" value="10" max="100"></progress>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Inertia JS</td>
                  <td>
                    <progress className="progress min-w-56" value="0" max="100"></progress>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Vue JS</td>
                  <td>
                    <progress className="progress min-w-56" value="0" max="100"></progress>
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
                {/* row 1 */}
                <tr>
                  <td>Express JS</td>
                  <td>
                    <progress className="progress min-w-56" value="0" max="100"></progress>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Nest JS</td>
                  <td>
                    <progress className="progress min-w-56" value="0" max="100"></progress>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Laravel Lumen</td>
                  <td>
                    <progress className="progress min-w-56" value="0" max="100"></progress>
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
                {/* row 1 */}
                <tr>
                  <td>Next JS</td>
                  <td>
                    <progress className="progress min-w-56" value="0" max="100"></progress>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Laravel</td>
                  <td>
                    <progress className="progress min-w-56" value="0" max="100"></progress>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Code Igniter</td>
                  <td>
                    <progress className="progress min-w-56" value="0" max="100"></progress>
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
                {/* row 1 */}
                <tr>
                  <td>MySQL</td>
                  <td>
                    <progress className="progress min-w-56" value="5" max="100"></progress>
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>MongoDB</td>
                  <td>
                    <progress className="progress min-w-56" value="0" max="100"></progress>
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>PostgreSQL</td>
                  <td>
                    <progress className="progress min-w-56" value="0" max="100"></progress>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Databases END */}
        </div>
        {/* Skill Progress END */}
      </div>
    </div>
  );
};

export default Home;
