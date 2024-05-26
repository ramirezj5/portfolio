import React from "react";

const SkillsBox = ({ title, skills }) => {
  return (
    <article className="rounded-xl from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="rounded-[10px] bg-white p-4 sm:p-6">
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-1 max-w-64">
          {skills.map((skill, index) => (
            <span
              className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              key={index}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SkillsBox;
