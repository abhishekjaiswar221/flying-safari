import {
  IconArrowsExchange,
  IconCalendar,
  IconChevronDown,
  IconClipboardText,
  IconNotes,
  IconPlaneDeparture,
  IconTicket,
} from "@tabler/icons-react";

const FlightSearchCard = () => {
  return (
    <section className="relative z-20 mx-auto w-full max-w-[1280px] px-4">
      <div className="overflow-hidden rounded-xl bg-[#f5f5f3] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
        <div className="flex">
          <button className="flex h-[58px] items-center gap-2 border-r border-[#dddddd] bg-[#ececea] px-5 text-[#414535]">
            <IconPlaneDeparture size={20} stroke={1.7} />

            <span className="hidden text-sm font-semibold md:block">
              Book Flights
            </span>
          </button>

          <button className="flex h-[58px] items-center gap-2 border-r border-[#dddddd] bg-[#ececea] px-5 text-[#414535]">
            <IconClipboardText size={20} stroke={1.7} />

            <span className="hidden text-sm font-semibold md:block">
              Find Reservation
            </span>
          </button>

          <button className="flex h-[58px] items-center gap-2 bg-[#ececea] px-5 text-[#414535]">
            <IconNotes size={20} stroke={1.7} />

            <span className="hidden text-sm font-semibold md:block">
              Check-In
            </span>
          </button>
        </div>

        <div className="p-4 md:p-6">
          <div className="flex w-fit overflow-hidden">
            <button className="bg-[#4d573c] px-5 py-3 text-[15px] text-white">
              Round Trip
            </button>

            <button className="bg-[#ebebeb] px-5 py-3 text-[15px] text-[#2f2f2f]">
              One way
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-3 xl:flex-row xl:items-center">
            <div className="relative grid flex-1 grid-cols-1 gap-3 md:grid-cols-2">
              <input
                type="text"
                placeholder="FROM"
                className="h-[54px] rounded-md bg-[#ececea] px-4 text-sm tracking-wide text-[#555] outline-none placeholder:text-[#8f8f8f]"
              />

              <input
                type="text"
                placeholder="TO"
                className="h-[54px] rounded-md bg-[#ececea] px-4 text-sm tracking-wide text-[#555] outline-none placeholder:text-[#8f8f8f]"
              />

              <div className="absolute top-1/2 left-1/2 z-10 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md md:flex">
                <IconArrowsExchange size={18} className="text-[#5c5c5c]" />
              </div>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="DEPART DATE"
                  className="h-[54px] w-full rounded-md bg-[#ececea] px-4 text-sm tracking-wide text-[#555] outline-none placeholder:text-[#8f8f8f]"
                />

                <IconCalendar
                  size={18}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#666]"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="RETURN DATE"
                  className="h-[54px] w-full rounded-md bg-[#ececea] px-4 text-sm tracking-wide text-[#555] outline-none placeholder:text-[#8f8f8f]"
                />

                <IconCalendar
                  size={18}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-[#666]"
                />
              </div>

              <div className="relative">
                <label className="absolute top-2 left-4 text-[11px] tracking-wide text-[#666]">
                  PASSENGER
                </label>

                <select className="h-[54px] w-full appearance-none rounded-md bg-[#ececea] px-4 pt-5 text-sm text-[#555] outline-none">
                  <option>1 Passenger</option>
                </select>

                <IconChevronDown
                  size={18}
                  className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#555]"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center text-sm text-[#6f6f6f]">
              <IconTicket
                size={18}
                className="mr-2 -rotate-12 text-[#5f674d]"
              />
              Have a coupon code? Enter it here
            </p>

            <button className="h-[50px] w-full rounded-md bg-[#4d573c] px-8 text-sm font-semibold tracking-wide text-white transition hover:opacity-90 md:w-fit">
              Search flights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightSearchCard;
