import PersonalDetails from "./components/personalDetails";
import ProfessionalDetails from "./components/professionalDetails";
const page = () => {
  return (
    <div className="block lg:flex">
      <PersonalDetails />
      <ProfessionalDetails />
    </div>
  );
};

export default page;
