import { IconMenu2 } from "@tabler/icons-react";

const NavBar = () => {
  const navItems = [
    {
      id: 1,
      label: "About",
    },
    {
      id: 2,
      label: "Destination",
    },
    {
      id: 3,
      label: "Itineraries",
    },
    {
      id: 4,
      label: "Gallery",
    },
    {
      id: 5,
      label: "Contact",
    },
  ];

  return (
    <div className="flex items-center justify-between px-4 py-2 md:px-12 md:py-5 lg:px-16">
      <div className="max-w-28 md:max-w-40">
        <img
          src="/images/navbar-logo.png"
          alt="Logo"
          className="h-24 w-full brightness-0 invert md:h-28 lg:hidden"
        />
        <img
          src="/images/logo.png"
          alt="Logo"
          className="hidden h-auto w-full lg:block"
        />
      </div>
      <div>
        <IconMenu2 className="text-white lg:hidden" />

        <div className="hidden lg:block">
          <nav>
            <ul className="flex gap-5 rounded-lg border border-white/20 bg-white/5 px-2.5 py-2 text-white backdrop-blur-md">
              {navItems?.map(({ id, label }) => (
                <li key={id}>
                  <a href="" className="leading-relaxed font-semibold">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
