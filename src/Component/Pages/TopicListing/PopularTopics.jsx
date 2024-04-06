import React from "react";
import "./PopularTopics.css"
const PopularTopics = () => {
   const boxShadow = `0px -25px 20px -20px rgba(0,0,0,0.45),
    25px 0px 20px -20px rgba(0,0,0,0.45),
    0px 25px 20px -20px rgba(0,0,0,0.45),
    -25px 0px 20px -20px rgba(0,0,0,0.45)`
   

  return (
    <section className="popular-topics-section flex justify-center py-16">
      <div className="container  p-2 flex flex-col gap-y-2">
        <div className="  popular-topics text-center">
          <h1 className="text-4xl font-extrabold">Popular Topics</h1>
        </div>
        <div className="flex flex-col  items-center p-2 gap-y-8 ">
         <div className=" topic w-4/6 border rounded-[25px] hover:-translate-y-[5px] flex gap-x-2 p-10 ease-in-out duration-300 hover:-translate-y-[5px] ">
            <div className="w-2/6 ">
              <img
                src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/undraw_Remote_design_team_re_urdx.png"
                alt=""
              />
            </div>
            <div className="w-4/6  flex justify-between gap-x-8 p-2">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg font-bold">Web design</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  aperiam vel eum dolores velit debitis modi corrupti aspernatur
                  delectus, officiis sed tenetur, unde omnis esse dignissimos
                  natus assumenda vitae ab.
                </p>
                <button className="border w-[125px] p-2 bg-sky-300 rounded-[25px] text-white text-lg hover:bg-sky-700">Learn More</button>
              </div>
              <div>
                <span className="bg-pink-500 text-white rounded-sm p-1">
                  14
                </span>
              </div>
            </div>
          </div>
          <div className="  topic w-4/6 border rounded-[25px]  hover:-translate-y-[5px] flex gap-x-2 p-10 ease-in-out duration-300">
            <div className="w-2/6 ">
              <img
                src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/undraw_online_ad_re_ol62.png"
                alt=""
              />
            </div>
            <div className="w-4/6  flex justify-between gap-x-8 p-2">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg font-bold">Advertising</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, ratione unde voluptates officiis culpa officia, incidunt eius, facere similique natus qui consequatur quae dolorum odio!
                </p>
                <button className="border w-[125px] p-2 bg-sky-300 rounded-[25px] text-white text-lg hover:bg-sky-700">Learn More</button>
              </div>
              <div>
                <span className="bg-pink-500 text-white rounded-sm p-1">
                  25
                </span>
              </div>
            </div>
          </div>
          <div className=" topic w-4/6 border hover:-translate-y-[5px] rounded-[25px] flex gap-x-2 p-10 ease-in-out duration-300">
            <div className="w-2/6 ">
              <img
                src="https://templatemo.com/templates/templatemo_590_topic_listing/images/topics/undraw_Remote_design_team_re_urdx.png"
                alt=""
              />
            </div>
            <div className="w-4/6  flex justify-between gap-x-8 p-2">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg font-bold">Podcast</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi autem possimus molestiae accusantium, saepe vero facere libero. Nobis totam molestias eveniet dolor, ipsam, esse temporibus cum iste odit perspiciatis nihil? Culpa perferendis cumque nulla! Natus magnam voluptas sapiente sequi placeat.
                </p>
                <button className="border w-[125px] p-2 bg-sky-300 rounded-[25px] text-white text-lg hover:bg-sky-700">Learn More</button>
              </div>
              <div>
                <span className="bg-pink-500 text-white rounded-sm p-1">
                  100
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-2 gap-x-2">
            <div className="border rounded-[10px] py-2 px-3 hover:bg-sky-300">Prev</div>
            <div className="border rounded-[10px] py-2 px-3  bg-sky-300 hover:bg-sky-300">1</div>
            <div className="border rounded-[10px] py-2 px-3  hover:bg-sky-300">2</div>
            <div className="border rounded-[10px] py-2  px-3 hover:bg-sky-300">3</div>
            <div className="border rounded-[10px] py-2 px-3 hover:bg-sky-300">4</div>
            <div className="border rounded-[10px] py-2 px-3 hover:bg-sky-300">5</div>
            <div className="border rounded-[10px] py-2 px-3 hover:bg-sky-300">next</div>
           
        </div>
      </div>
    </section>
  );
};

export default PopularTopics;
