import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAnglesRight,
  faLocationDot,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/images/Travel-agency-logo-design-template-on-transparent-background-PNG-removebg-preview.png";
import img1 from "../../public/images/Alone Forest Travel.jpeg";
import img2 from "../../public/images/Best Honeymoon Places In Hawaii + Top Resorts.jpeg";
import img3 from "../../public/images/Summit Victory Pose.jpeg";
import img4 from "../../public/images/Top 15 Airbnbs in The Dolomites.jpeg";
import img5 from "../../public/images/WanderOn_ Global Travel Community,Tours, Adventure, Things To Do & More.jpeg";
import { Link } from "react-router-dom";
import { Context } from "./Context";
const imgs = [img1, img2, img3, img4, img5];

const Footer: React.FC = () => {
  const { language } = useContext(Context);

  return (
    <footer className="bg-[#191919] pt-[90px] mt-16">
      <div className="container grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[40px_30px] mb-[80px] ">
        <div className="social-media ">
          <img src={logo} alt="#" className="h-[100px] mb-[20px] " />
          <ul className="flex mb-[20px]">
            <Link to={""}>
              <li className="h-[50px] w-[50px] m-[5px] flex justify-center items-center text-[#f6f6f6] bg-[#444] text-[20px]">
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
            </Link>
            <Link to={""}>
              <li className="h-[50px] w-[50px] m-[5px] flex justify-center items-center text-[#f6f6f6] bg-[#444] text-[20px]">
                <FontAwesomeIcon icon={faTiktok} />
              </li>
            </Link>
            <Link to={""}>
              <li className="h-[50px] w-[50px] m-[5px] flex justify-center items-center text-[#f6f6f6] bg-[#444] text-[20px]">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </Link>
          </ul>
          <p className="text-[#bbb] leading-[1.6] text-[17px]">
            Avec notre agence de voyages, où chaque détail est soigné à la
            perfection, nous veillons non seulement à ce que vous exploriez le
            monde, mais aussi à ce que vous créiez des souvenirs précieux...
          </p>
        </div>

        <ul className="links list-none">
          {[
            language === "FR" ? "Home" : "الرئيسية",
            language === "FR" ? "Travels" : "الرحلات",
            language === "FR" ? "Testimonials" : " ردود زبائننا",
          ]
            // ("الرئيسية", "الرحلات", "ردود زبائننا")
            .map((link, index) => (
              <li
                key={index}
                className="border-b border-[#444] h-[50px] flex items-center hover:text-white hover:translate-x-1 duration-300 ease"
              >
                <FontAwesomeIcon icon={faAnglesRight} className="text-orange" />
                <a href="#" className="p-[15px] text-[#bbb] hover:text-white ">
                  {link}
                </a>
              </li>
            ))}
        </ul>

        <div className="contact">
          <div className="location mb-[30px] flex items-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-orange  text-[23px]"
            />
            <p className="ml-[15px] text-[#bbb] text-[17px] leading-[1.6]">
              Algeria, Algiers ,elkoba
            </p>
          </div>
          <div className="location mb-[30px] flex items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="text-orange text-[23px]"
            />
            <p className="ml-[15px] text-[#bbb] text-[17px] leading-[1.6]">
              Heures d'ouverture : De 09h00 à 18h00
            </p>
          </div>
          <div className="location mb-[30px] flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-orange     text-[23px]"
            />
            <p className="ml-[15px] text-[#bbb] text-[17px] leading-[1.6]">
              +213 123456798 <br /> +213 123456798
            </p>
          </div>
        </div>

        <div className=" grid  grid-cols-3 w-fit h-fit gap-2">
          {imgs.map((src, index) => (
            <div key={index} className=" p-1 bg-white h-fit w-fit">
              <img src={src} alt="#" className="h-20 w-20 object-cover" />
            </div>
          ))}
        </div>
      </div>
      <p className="final-footer relative text-white text-center capitalize text-[16px] w-full border-t border-[#444] py-[20px]">
        All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
