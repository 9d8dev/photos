import data from "@/utils/settings.json";

const footer = () => {
  return (
    <footer className="max-w-screen-md px-6 md:px-4 flex flex-col gap-4 lg:gap- lg:py-12 py-8">
      <p>All photos © {data.name} | 2023--Present</p>
      <p>Design and Code by Bridger and Cameron at 9d8.dev.</p>
    </footer>
  );
};
export default footer;
