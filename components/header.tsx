// Edit the site settings at this JSON file
import data from "@/utils/settings.json";

const Header = () => {
  return (
    <section className="max-w-screen-md px-6 md:px-4 flex flex-col gap-4 lg:gap-12 lg:py-12 py-8">
      <h1 className="text-3xl lg:text-4xl font-light md:flex gap-2">
        <span className="block mb-2 md:mb-0 -mt-px ml-1">📷</span> Photography
        by{" "}
        <a
          className="hover:underline underline-offset-4 transition-all"
          href={data.site}
        >
          {data.name}
        </a>
      </h1>
      <h2 className="text-lg lg:text-xl font-light">{data.description}</h2>
      <div className="flex gap-4">
        {data.socials.map((social, index) => (
          <a
            className="border-b-2 border-b-neutral-300 hover:mb-1 hover:-mt-1 transition-all flex gap-2"
            key={index}
            href={social.url}
          >
            {social.name} <RightArrowUp />
          </a>
        ))}
      </div>
    </section>
  );
};

const RightArrowUp = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 mt-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </span>
  );
};

export default Header;
