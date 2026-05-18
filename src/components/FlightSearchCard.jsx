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
    <div className="w-full max-w-7xl rounded-2xl bg-[#f5f5f5] shadow-lg">
      <div className="flex overflow-hidden">
        <div className="flex items-center gap-2 bg-[#ececec] px-6 py-4">
          <IconPlaneDeparture size={22} />
          <p className="hidden font-semibold md:block">Book Flights</p>
        </div>

        <div className="flex items-center gap-2 bg-[#ececec] px-6 py-4">
          <IconClipboardText size={22} />
          <p className="hidden font-semibold md:block">Find Reservation</p>
        </div>

        <div className="flex items-center gap-2 bg-[#ececec] px-6 py-4">
          <IconNotes size={22} />
          <p className="hidden font-semibold md:block">Check-In</p>
        </div>
      </div>

      <div className="space-y-8 p-5">
        <div className="flex w-fit">
          <button className="bg-[var(--primary-color)] px-5 py-3 text-white">
            Round Trip
          </button>

          <button className="bg-[#e9e9e9] px-5 py-3 text-black">One way</button>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="FROM"
              className="w-full rounded bg-[#ececec] px-4 py-4 outline-none"
            />

            <div className="absolute top-1/2 -right-3 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow md:flex">
              <IconArrowsExchange size={18} />
            </div>
          </div>

          <div className="flex-1">
            <input
              type="text"
              placeholder="TO"
              className="w-full rounded bg-[#ececec] px-4 py-4 outline-none"
            />
          </div>

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="DEPART DATE"
              className="w-full rounded bg-[#ececec] px-4 py-4 outline-none"
            />

            <IconCalendar
              size={18}
              className="absolute top-1/2 right-4 -translate-y-1/2"
            />
          </div>

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="RETURN DATE"
              className="w-full rounded bg-[#ececec] px-4 py-4 outline-none"
            />

            <IconCalendar
              size={18}
              className="absolute top-1/2 right-4 -translate-y-1/2"
            />
          </div>

          <div className="relative flex-1">
            <label className="absolute top-2 left-4 text-xs">PASSENGER</label>

            <select className="w-full appearance-none rounded bg-[#ececec] px-4 pt-7 pb-2 text-gray-600 outline-none">
              <option>1 Passenger</option>
            </select>

            <IconChevronDown
              size={18}
              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-gray-600">
            <IconTicket className="mr-2 inline -rotate-12" />
            Have a coupon code? Enter it here
          </p>

          <button className="w-fit rounded-md bg-[var(--primary-color)] px-8 py-3 text-white">
            Search flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchCard;
