import { useMemo, useState } from "react";
import { useParams } from "react-router";
import {
  useCreateReservation,
  useGetRestaurant,
} from "../generated/restoappComponents";
import { Form, Field } from "react-final-form";
import { add, formatISO, parseISO } from "date-fns";
import { queryClient } from "../main";

interface ICreateReservationFormData {
  time: string;
  duration: number;
}

export const RestaurantPage = () => {
  const { restaurantUuid } = useParams();

  const { data, isLoading } = useGetRestaurant({
    pathParams: {
      uuid: restaurantUuid as string,
    },
  });
  const [selectedTableIndex, setSelectedTableIndex] = useState<number | null>(
    null
  );
  const selectedTable = useMemo(() => {
    if (!selectedTableIndex && selectedTableIndex !== 0) {
      return;
    }

    return data?.tables?.[selectedTableIndex];
  }, [selectedTableIndex, data]);
  const { mutate, data: createData } = useCreateReservation({
    onSuccess() {
      queryClient.invalidateQueries();
    },
  });

  const onSubmit = (body: ICreateReservationFormData) => {
    console.log(body);

    mutate({
      body: {
        tableUuid: selectedTable?.uuid,
        startDate: formatISO(parseISO(body.time)),
        endDate: formatISO(
          add(parseISO(body.time), {
            hours: Number(body.duration),
          })
        ),
        clientPhone: "87773650344",
        restaurantUuid: restaurantUuid,
      },
    });
  };

  if (isLoading) {
    return "Loading!";
  }

  if (!data) {
    return "Error!";
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="h-12 bg-slate-800 flex items-center justify-center">
        <h2 className="text-2xl text-white">{data?.name}</h2>
      </header>
      <div className="flex flex-col w-full">
        <div className="w-full h-64 relative">
          <img
            src="/src/assets/penka-cover.jpg"
            alt="Cover"
            className="w-full h-full"
          />
          <p className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-30">
            {data?.description}
          </p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-2xl">Tables</h3>
          <div className="mx-auto grid grid-cols-3 gap-8">
            {data.tables?.map((table, idx) => (
              <div
                key={table.number}
                className={`w-20 h-20 text-3xl bg-slate-800 flex items-center justify-center text-white`}
                onClick={() => setSelectedTableIndex(idx)}
              >
                {table.number}
              </div>
            ))}
          </div>
        </div>
        {selectedTable && (
          <div className="flex flex-col gap-4 p-4">
            <h4>Table N{selectedTable.number}</h4>
            <div className="border flex flex-col items-start gap-2 p-2 text-sm">
              <p>Booked dates:</p>
              <ul className="ml-4 list-disc">
                {selectedTable.reservations?.map((r) => (
                  <li>
                    {r.startDate} - {r.endDate}
                  </li>
                ))}
              </ul>
            </div>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="time"
                    component="input"
                    defaultValue={new Date().toISOString()}
                    className="rounded p-2 border"
                    type="datetime-local"
                  />
                  <Field
                    name="duration"
                    defaultValue="1"
                    component="select"
                    className="form-select rounded p-2 border"
                  >
                    <option value="1">1 hour</option>
                    <option value="2">2 hours</option>
                    <option value="3">3 hours</option>
                  </Field>
                  <Field
                    name="people"
                    component="select"
                    className="form-select rounded p-2 border"
                  >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                  </Field>
                  <button
                    type="submit"
                    className="rounded bg-slate-800 text-white p-2 border"
                  >
                    Save
                  </button>
                </form>
              )}
            ></Form>
          </div>
        )}
      </div>
    </div>
  );
};
