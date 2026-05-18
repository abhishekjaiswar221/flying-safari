import DestinationCard from "@/components/DestinationCard";
import FlightSearchCard from "@/components/FlightSearchCard";
import Hero from "@/components/Hero";
import ItineraryCard from "@/components/ItineraryCard";
import Footer from "@/components/navigation/Footer";
import NavBar from "@/components/navigation/NavBar";
import {
  IconDiscount2,
  IconMap2,
  IconPlaneDeparture,
  IconUser,
} from "@tabler/icons-react";

const HomePage = () => {
  const cardData = [
    {
      id: 1,
      imgSrc: "/images/zebra-wild.jpg",
      imgText: "SERENGETI NATIONAL PARK",
      featured: true,
    },
    {
      id: 2,
      imgSrc: "/images/wild-cow.png",
      imgText: "MAASAI MARA NATIONAL RESERVE",
      featured: true,
    },
    {
      id: 3,
      imgSrc: "/images/zebra.jpg",
      imgText: "NGORONGORO CRATER",
      featured: false,
    },
    {
      id: 4,
      imgSrc: "/images/flamingos.jpg",
      imgText: "LAKE MANYARA NATIONAL PARK",
      featured: false,
    },
    {
      id: 5,
      imgSrc: "/images/zebra-wild1.jpg",
      imgText: "LAKE MANYARA NATIONAL PARK",
      featured: false,
    },
    {
      id: 6,
      imgSrc: "/images/mountain.jpg",
      imgText: "LAKE MANYARA NATIONAL PARK",
      featured: false,
    },
    {
      id: 7,
      imgSrc: "/images/elephants.jpg",
      imgText: "LAKE MANYARA NATIONAL PARK",
      featured: false,
    },
    {
      id: 8,
      imgSrc: "/images/deer.jpg",
      imgText: "TARANGIRE NATIONAL PARK",
      featured: false,
    },
    {
      id: 9,
      imgSrc: "/images/group-elephants.jpg",
      imgText: "LAKE MANYARA NATIONAL PARK",
      featured: false,
    },
  ];

  const features = [
    {
      icon: IconPlaneDeparture,
      title: "Seamless Journeys",
      description:
        "Effortlessly combine flight bookings with inspiring safari itineraries.",
    },
    {
      icon: IconUser,
      title: "Travel Experts",
      description:
        "Rely on local knowledge and partners for safe, memorable safaris.",
    },
    {
      icon: IconDiscount2,
      title: "Smart Fares",
      description:
        "Enjoy exclusive savings and special offers on Tanzania flight bookings.",
    },
    {
      icon: IconMap2,
      title: "Curated Itineraries",
      description:
        "Hand-picked safari routes showcasing Tanzania’s most iconic destinations.",
    },
  ];

  return (
    <div>
      <div className="absolute top-0 z-50 w-full">
        <NavBar />
      </div>

      <Hero />

      <div className="-mt-10 px-4 md:px-6">
        <FlightSearchCard />
      </div>

      <section className="mt-16 flex flex-col items-start gap-10 px-4 md:px-12 lg:flex-row-reverse lg:items-center lg:px-16">
        <div className="space-y-4">
          <h4 className="text-base text-[#D9A551]">POPULAR DESTINATION</h4>

          <h1 className="text-[28px] text-[#2C2C2C]">
            Tanzania’s Iconic Safari Destinations
          </h1>

          <button className="box-content rounded-sm bg-[var(--primary-color)] px-5 py-2 text-white">
            Explore Destinations
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 xl:max-w-7xl">
          {cardData?.map(({ id, imgSrc, imgText, featured }) => (
            <DestinationCard
              key={id}
              imgSrc={imgSrc}
              imgText={imgText}
              featured={featured}
            />
          ))}
        </div>
      </section>

      <section className="mt-20 bg-[url('/images/about-bg.jpg')] bg-cover bg-center py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h3 className="text-lg leading-relaxed text-[#D9A551]">
            In Tanzania, the rhythm of the wild is untouched by time. From the
            roar of lions to the whispers of the savannah winds, the land
            invites you to wander beyond the ordinary and embrace.
          </h3>

          <h1 className="pacifico-font mt-4 text-3xl text-[var(--primary-color)] md:text-5xl">
            Flying Safari
          </h1>
        </div>

        <div className="relative mt-16 flex h-[330px] items-center justify-center md:h-[380px] lg:h-[420px]">
          <img
            src="/images/zebra-wild2.jpg"
            alt="Safari"
            className="absolute top-32 left-4 aspect-[3/4] w-32 rotate-[-10deg] object-cover shadow-xl md:left-32 md:w-44 lg:left-44 lg:w-56 xl:left-64 xl:w-60"
          />

          <img
            src="/images/lions.jpg"
            alt="Lions"
            className="relative z-10 aspect-[3/4] w-36 object-cover shadow-2xl md:w-52 lg:w-64 xl:w-72"
          />

          <img
            src="/images/tent.jpg"
            alt="Tent"
            className="absolute top-32 right-4 aspect-[3/4] w-32 rotate-[10deg] object-cover shadow-xl md:right-32 md:w-44 lg:right-44 lg:w-56 xl:right-64 xl:w-60"
          />
        </div>

        <div className="flex justify-center">
          <button className="box-content rounded-sm bg-[var(--primary-color)] px-5 py-1.5 text-white">
            About Us
          </button>
        </div>
      </section>

      <section className="bg-[url('/images/popular-bg.jpg')] bg-cover bg-center py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div className="space-y-3 text-left">
              <h4 className="text-[#D9A551]">POPULAR ITINERARIES</h4>

              <h1 className="max-w-2xl text-3xl text-white md:text-5xl">
                Safari Itineraries Curated just for you
              </h1>
            </div>
            <div className="mt-8 hidden items-center justify-center gap-10 lg:flex">
              <img src="/images/left-button.png" alt="" />
              <img src="/images/right-button.png" alt="" />
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ItineraryCard />
            <ItineraryCard className={"hidden md:block"} />
            <ItineraryCard className={"hidden lg:block"} />
          </div>

          <div className="mt-8 flex items-center justify-center gap-10 lg:hidden">
            <img src="/images/left-button.png" alt="" />
            <img src="/images/right-button.png" alt="" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="bg-[url('/images/about-bg.jpg')]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <Icon size={68} stroke={1.5} className="text-[#d6a24a]" />
                  </div>

                  <h3 className="mb-4 text-3xl font-medium text-[#2f2b27]">
                    {feature.title}
                  </h3>

                  <p className="mx-auto max-w-[260px] text-[17px] leading-8 text-[#5e5a55]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
