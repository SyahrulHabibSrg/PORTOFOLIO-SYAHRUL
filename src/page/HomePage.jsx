import React, { useState, useRef } from "react";

const HomePage = () => {
  // State untuk mengontrol popup
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // Function untuk membuka popup
  const handleSendClick = (event) => {
    event.preventDefault(); // Mencegah reload halaman
    setIsPopupVisible(true);

    // Reset input form
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  // Function untuk menutup popup
  const handleCloseClick = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <div>
        <section id="home">
          <div className="home-left">
            <h3 className="pre-title">Hi!</h3>
            <h1 className="home-name">I'M SYAHRUL HABIB</h1>
            <p>
              Saya adalah seorang mahasiswa Teknik Informatika yang berfokus
              pada pengembangan web...
            </p>
            <br />
            <a href="#about">
              <button className="btn">More About Me</button>
            </a>
          </div>
          <div className="home-right">
            <img src="src/assets/hero.png" alt="Syahrul Habib" />
          </div>
        </section>

        <section id="about">
          <div className="main-container">
            <h1 className="section-title-about">About</h1>
            <div className="about">
              <p>
                Saya adalah seorang mahasiswa Teknik Informatika yang berfokus
                pada pengembangan web. Dengan ketertarikan yang mendalam dalam
                dunia teknologi dan pemrograman, Saya telah belajar dan
                mengembangkan keterampilan dalam pembuatan situs web yang
                menarik dan responsif. Saya memiliki pengetahuan dalam bahasa
                pemrograman seperti HTML, CSS, JavaScript dan tools untuk
                designer seperti Figma dan Canva.
              </p>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="main-container">
            <h1 className="section-title-skills">Skills</h1>
            <div className="skills-container">
              <div className="skill">
                <img src="src/assets/html.png" alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="skill">
                <img src="src/assets/css.png" alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="skill">
                <img src="src/assets/js.png" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="skill">
                <img src="src/assets/figma.png" alt="Figma" />
                <p>Figma</p>
              </div>
              <div className="skill">
                <img src="src/assets/msword.png" alt="MS Word" />
                <p>MS Word</p>
              </div>
              <div className="skill">
                <img src="src/assets/canva.png" alt="Canva" />
                <p>Canva</p>
              </div>
              <div className="skill">
                <img src="src/assets/excel.png" alt="Excel" />
                <p>Excel</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="main-container">
            <h1 className="section-title-experience">Experience</h1>
            <div className="experience-container">
              <div className="experience-item">
                <h3>Project HSS Fruit Market</h3>
                <img src="src/assets/hssfruit.png" alt="" style={{ width: "100%" }} />
                <p className="experience-date">2023</p>
                <p className="experience-p">
                  Merancang dan mengembangkan proyek Fruit Market, sebuah
                  website yang menjual berbagai jenis buah
                </p>
              </div>
              <div className="experience-item">
                <h3>Project Delivery Buah</h3>
                <img
                  src="src/assets/deliverybuah.png"
                  alt=""
                  style={{ width: "100%" }}
                />
                <p className="experience-date">2024</p>
                <p className="experience-p">
                  Merancang dan mengembang website delivery buah, dimana
                  pengguna dapat membeli buah-buahan tanpa harus bertemu
                  langsung dengan penjual
                </p>
              </div>

              <div className="experience-item">
                <h3>Project Mangrove Ecotourism</h3>
                <img src="src/assets/mangrove.png" alt="" style={{ width: "100%" }} />
                <p className="experience-date">Sekarang</p>
                <p className="experience-p">
                  Mengembangkan sebuah website menarik dan intuitif, dimana
                  website tersebut memperkenalkan ekowisata dan pengguna juga
                  dapat membeli produk UMKM
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="section-title-contact">Contact</h2>
          <div className="contact-container">
            <form className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                required
                ref={nameRef}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                ref={emailRef}
              />
              <textarea
                placeholder="Your Message"
                required
                ref={messageRef}
              ></textarea>
              <button
                type="button"
                className="contact-btn"
                onClick={handleSendClick}
              >
                Kirim
              </button>
            </form>
          </div>
        </section>

        {isPopupVisible && (
          <div className="popup-contact" id="popupModal">
            <div className="popup-content">
              <span className="close-btn" onClick={handleCloseClick}>
                &times;
              </span>
              <p>Terima Kasih, Pesan Anda telah dikirim!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
