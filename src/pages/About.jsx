import React from "react";
import Title from "../components/Title.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import NewsLetterBox from '../components/NewsLetterBox.jsx'
function About() {
  return (
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={"ABOUT"} text2={"US"} />

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col jsutify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            delectus eum dicta aperiam officiis accusamus. Nesciunt tempora esse
            a reprehenderit, obcaecati minus quis in consequuntur error non
            doloribus mollitia ipsa.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, non ab ipsum sapiente dolor nihil inventore. Ad,
            voluptatibus modi, nihil animi natus laboriosam ducimus
            reprehenderit alias, quisquam voluptatum molestiae voluptates.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our Mission is to empower the new brand cloths and desigining and
            blah blah and blaah
          </p>
        </div>
      </div>

      <div className="text-xxl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-gray-300">
          <b>Quality Accurance:</b>
          <p className="text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            labore enim perspiciatis ad fugit nulla voluptatum maxime ab,
          </p>
        </div>

        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinence:</b>
          <p className="text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            labore enim perspiciatis ad fugit nulla voluptatum maxime ab,
          </p>
        </div>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service</b>
            <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque labore enim perspiciatis ad fugit nulla voluptatum maxime ab,
            </p>
        </div>
       
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default About;
