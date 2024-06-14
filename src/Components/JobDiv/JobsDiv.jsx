import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Logo1 from "../../Assets/Logo1.webp";
import Logo2 from "../../Assets/Logo2.webp";
import Logo3 from "../../Assets/Logo3.webp";
import Logo4 from "../../Assets/Logo4.webp";
import Logo5 from "../../Assets/Logo5.webp";
import Logo6 from "../../Assets/Logo6.webp";
import Logo7 from "../../Assets/Logo7.webp";
import Logo8 from "../../Assets/Logo8.webp";

export default function JobsDiv() {
  const Data = [
    {
      id: 1,
      image: Logo1,
      title: "Web Developer",
      time: "Now",
      location: "Canada",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus tempore voluptate inventore sequi consectetur?",
      company: "Novac Linus Co.",
    },
    {
      id: 2,
      image: Logo2,
      title: "Software Developer",
      time: "14hrs",
      location: "Manchester",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus tempore voluptate inventore sequi consectetur?",
      company: "Liquid Accessment Co.",
    },
    {
      id: 3,
      image: Logo3,
      title: "UI/UX Designer",
      time: "10hrs",
      location: "USA",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus tempore voluptate inventore sequi consectetur?",
      company: "Fintech Solution Co.",
    },
    {
      id: 4,
      image: Logo4,
      title: "Product Designer",
      time: "5hrs",
      location: "Austria",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus tempore voluptate inventore sequi consectetur?",
      company: "Web Tech Agency",
    },
    {
      id: 5,
      image: Logo5,
      title: "Researcher",
      time: "8hrs",
      location: "Germany",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus tempore voluptate inventore sequi consectetur?",
      company: "Goverment",
    },
    {
      id: 6,
      image: Logo6,
      title: "Lead Developer",
      time: "10hrs",
      location: "Norway",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus tempore voluptate inventore sequi consectetur?",
      company: "Quest Software Ltd.",
    },
    {
      id: 7,
      image: Logo7,
      title: "Data Scientist",
      time: "Now",
      location: "Los Angeles",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus tempore voluptate inventore sequi consectetur?",
      company: "Tenable",
    },
    {
      id: 8,
      image: Logo8,
      title: "Security Analyst",
      time: "18hrs",
      location: "Turkey",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus tempore voluptate inventore sequi consectetur?",
      company: "Render Solution co.",
    },
  ];

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap item-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
