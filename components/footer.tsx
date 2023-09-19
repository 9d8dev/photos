import data from "@/utils/settings.json";

const footer = () => {
  return (
    <footer className="max-w-screen-md px-6 md:px-4 flex flex-col gap-4 lg:gap- lg:py-12 py-8">
      <a href="https://github.com/9d8dev/photos">Use this Template</a>
      <p>All photos © {data.name} | 2023--Present</p>
      <p>Design and Code by <a href="https://bridger.to">Bridger</a> and <a href="https://cameronyoungblood.com">Cameron</a> at <a href="https://9d8.dev">9d8.dev</a>.</p>
    </footer>
  );
};
export default footer;
