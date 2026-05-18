import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedinFilled,
  IconBrandX,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-[url('/images/popular-bg.jpg')] bg-cover bg-center px-6 py-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="space-y-8">
            <div>
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-auto w-32 lg:w-44"
              />
            </div>

            <div className="flex items-center gap-5">
              <IconBrandInstagram />
              <IconBrandFacebookFilled />
              <IconBrandLinkedinFilled />
              <IconBrandX />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="mb-6 text-3xl text-[#D9A551]">Destination</h2>

              <ul className="space-y-3 text-lg">
                <li>Arusha</li>
                <li>Serengeti</li>
                <li>Kilimanjaro</li>
                <li>Ngorongoro Crater</li>
                <li>Lake Manyara</li>
                <li>Tranagire</li>
                <li>Mahale Mountains</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-3xl text-[#D9A551]">Resources</h2>

              <ul className="space-y-3 text-lg">
                <li>About Us</li>
                <li>Itineraries</li>
                <li>Destination</li>
                <li>Gallery</li>
                <li>Blogs</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-3xl text-[#D9A551]">Contact us</h2>

              <div className="space-y-3 text-lg">
                <p>+255 58954 58945</p>
                <p>Loremipsum@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full space-y-5 pt-8 lg:flex lg:justify-between">
          <div className="flex flex-row gap-6 text-center text-base md:justify-center md:gap-10">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

          <p>@ 2025 Flying Safari Limited. All rights reserved.</p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-[#D9A551]">DotSyndicate</span>
          </p>
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
