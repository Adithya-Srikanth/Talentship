const ProfessionalDetails = () => {
  return (
    <div className="bg-white w-full md:w-[80vw] mx-auto p-4">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-center text-2xl md:text-3xl font-semibold">
          Adithya Srikanth
        </h1>
        <h2 className="text-center text-lg md:text-xl mt-2">
          Software Engineer
        </h2>
      </header>

      {/* Profile Section */}
      <section className="mb-8">
        <h2 className="text-center text-xl mb-2">PROFILE</h2>
        <p className="text-justify mx-auto max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          odit, repellat ad est similique laboriosam commodi error debitis rerum
          illum reiciendis sunt sequi, ex aliquam tenetur et culpa facere
          quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam omnis a architecto iusto blanditiis quidem, dignissimos
          ipsum doloribus cum? Voluptatem recusandae sed tempore, eveniet porro
          repellat ut ullam facilis quaerat?
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="mb-8">
        <h2 className="text-center text-xl mb-4">WORK EXPERIENCE</h2>

        {/* Experience Item 1 */}
        <div className="bg-slate-100 rounded-2xl p-4 transition duration-500 hover:-translate-y-1 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <div>
              <h2 className="font-semibold text-xl">Software Engineer</h2>
              <h3 className="font-semibold text-lg">XYZ Tech Solutions</h3>
            </div>
            <div className="mt-2 md:mt-0">
              <p>Jan 2022 – Present</p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Developed and maintained scalable web applications using React.js
              and TypeScript, improving UI performance by 30%.
            </li>
            <li>
              Led a team of 5 developers in implementing RESTful APIs and
              microservices in Node.js.
            </li>
            <li>
              Optimized database queries, reducing response times by 40% in
              PostgreSQL.
            </li>
            <li>
              Integrated third-party services like Stripe for seamless payment
              processing.
            </li>
            <li>
              Collaborated with cross-functional teams to enhance user
              experience and business logic.
            </li>
          </ul>
        </div>

        {/* Experience Item 2 */}
        <div className="bg-slate-100 rounded-2xl p-4 transition duration-500 hover:-translate-y-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <div>
              <h2 className="font-semibold text-xl">Backend Developer</h2>
              <h3 className="font-semibold text-lg">ABC Corp</h3>
            </div>
            <div className="mt-2 md:mt-0">
              <p>Jul 2019 – Dec 2021</p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Designed and deployed secure APIs using Express.js and MongoDB.
            </li>
            <li>
              Implemented authentication and authorization using JWT and OAuth2.
            </li>
            <li>
              Developed an email service using SMTP and Node.js to handle
              transactional emails.
            </li>
            <li>
              Reduced server costs by 20% by optimizing cloud infrastructure on
              AWS.
            </li>
            <li>
              Utilized Docker and Kubernetes for containerized application
              deployment.
            </li>
          </ul>
        </div>
      </section>

      {/* Reference Section */}
      <section className="mb-8">
        <h2 className="text-center text-xl mb-4">REFERENCE</h2>
        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="font-bold">
              Senior Software Engineer | XYZ Tech Solutions
            </p>
            <p>Email: johndoe@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Jane Smith</h2>
            <p className="font-bold">Project Manager | ABC Corp</p>
            <p>Email: janesmith@example.com</p>
            <p>Phone: (987) 654-3210</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalDetails;
