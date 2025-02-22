import { useState } from "react";
import { useParams } from "react-router";

const tables = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
  {
    number: 4,
  },
  {
    number: 5,
  },
  {
    number: 6,
  },
];

export const RestaurantPage = () => {
  const { restaurant } = useParams();
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  return (
    <div className="flex flex-col h-screen">
      <header className="h-12 bg-slate-800 flex items-center justify-center">
        <h2 className="text-2xl text-white">{restaurant}</h2>
      </header>
      <div className="flex flex-col w-full">
        <div className="w-full h-64 relative">
          <img
            src="/src/assets/penka-cover.jpg"
            alt="Cover"
            className="w-full h-full"
          />
          <p className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dignissimos voluptate cumque rem quod harum laborum similique minima
            reprehenderit eos atque, necessitatibus exercitationem rerum in
            alias! Ratione error dolorem vel tempora. A porro non eum explicabo?
          </p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-2xl">Tables</h3>
          <div className="mx-auto grid grid-cols-3 gap-8">
            {tables.map((table) => (
              <div
                key={table.number}
                className={`w-20 h-20 text-3xl bg-slate-800 flex items-center justify-center text-white`}
                onClick={() => setSelectedTable(table.number)}
              >
                {table.number}
              </div>
            ))}
          </div>
        </div>
        {selectedTable && (
          <div className="flex flex-col gap-4 p-4">
            <h4>Table N{selectedTable}</h4>
            <div className="border flex flex-col items-start gap-2 p-2 text-sm">
              <p>Booked dates:</p>
              <ul className="ml-4 list-disc">
                <li>Tue 10 Dec 18:30 - 20:30</li>
              </ul>
            </div>
            <input
              type="datetime-local"
              onChange={(e) => console.log(e.target.value)}
              defaultValue={new Date().toISOString()}
              name="time"
              className="rounded p-2 border"
            />
            <select name="duration" className="form-select rounded p-2 border">
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
            </select>
            <select name="people" className="form-select rounded p-2 border">
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
              <option value="5">5 people</option>
            </select>
            <button
              type="submit"
              className="rounded bg-slate-800 text-white p-2 border"
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
