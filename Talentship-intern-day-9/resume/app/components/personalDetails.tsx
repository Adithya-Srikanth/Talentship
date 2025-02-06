import React from "react";

const PersonalDetails = () => {
  return (
    <div className="bg-violet-950 w-full lg:w-[20vw] p-4 text-white">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src="eagle.webp"
          alt="eagle"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full"
        />
      </div>

      {/* Contact Section */}
      <div className="my-6">
        <h2 className="text-center text-lg md:text-xl font-semibold">
          CONTACT
        </h2>
        <hr className="border-gray-300 my-2" />
        <div className="ml-2">
          <p>
            <span className="mr-2 font-bold">Phone:</span>
            +91-1234567890
          </p>
          <p>
            <span className="mr-2 font-bold">Mail:</span>
            somemail@gmail.com
          </p>
          <p>
            <span className="mr-2 font-bold">Location:</span>
            Chennai, India
          </p>
          <p>
            <span className="mr-2 font-bold">Website:</span>
            www.somesite.com
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-6">
        <h2 className="text-center text-lg md:text-xl font-semibold">
          EDUCATION
        </h2>
        <hr className="border-gray-300 my-2" />
        <div className="ml-2 mb-4">
          <p className="font-semibold">2015-2019</p>
          <p className="text-xl font-bold">Some University</p>
          <ul className="list-decimal list-inside">
            <li className="font-light">B.E in CSC</li>
            <li className="font-light">CGPA: 9.0</li>
          </ul>
        </div>
        <div className="ml-2 mb-4">
          <p className="font-semibold">2014-2015</p>
          <p className="text-xl font-bold">Some School</p>
          <ul className="list-decimal list-inside">
            <li className="font-light">12th grade</li>
            <li className="font-light">90%</li>
          </ul>
        </div>
        <div className="ml-2">
          <p className="font-semibold">2012-2013</p>
          <p className="text-xl font-bold">Some School</p>
          <ul className="list-decimal list-inside">
            <li className="font-light">10th grade</li>
            <li className="font-light">90%</li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 className="text-center text-lg md:text-xl font-semibold">SKILLS</h2>
        <hr className="border-gray-300 my-2" />
        <div className="ml-2 space-y-1">
          <p className="text-base font-bold">Backend Development (Java)</p>
          <p className="text-base font-bold">Frontend Development (React)</p>
          <p className="text-base font-bold">Testing</p>
          <p className="text-base font-bold">DevOps</p>
        </div>
      </div>

      {/* Languages Section */}
      <div className="mb-6">
        <h2 className="text-center text-lg md:text-xl font-semibold">
          LANGUAGES
        </h2>
        <hr className="border-gray-300 my-2" />
        <div className="ml-2 space-y-1">
          <p className="text-base font-bold">Tamil (Fluent)</p>
          <p className="text-base font-bold">English (Fluent)</p>
          <p className="text-base font-bold">Hindi (Intermediate)</p>
          <p className="text-base font-bold">German (Basic)</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
