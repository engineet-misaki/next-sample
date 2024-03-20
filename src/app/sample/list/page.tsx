export default async function List() {
  const apiData = {
    thead: ["Name", "Last name", "Phone", "Email"],
    tdata: [
      {
        id: 1,
        name: "test1",
        lastName: "test1",
        phone: "070-090-090",
        email: "test@gmail.com",
      },
      {
        id: 1,
        name: "test1",
        lastName: "test1",
        phone: "070-090-090",
        email: "test@gmail.com",
      },
      {
        id: 1,
        name: "test1",
        lastName: "test1",
        phone: "070-090-090",
        email: "test@gmail.com",
      },
      {
        id: 1,
        name: "test1",
        lastName: "test1",
        phone: "070-090-090",
        email: "test@gmail.com",
      },
      {
        id: 1,
        name: "test1",
        lastName: "test1",
        phone: "070-090-090",
        email: "test@gmail.com",
      },
    ],
  };
  return (
    <div>
      <p>test lists</p>

      <div className="overflow-auto bg-white">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              {apiData.thead.map((el) => {
                return (
                  <th
                    className="w-1/3 px-4 py-3 text-left text-sm font-semibold uppercase"
                    key={el}
                  >
                    {el}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {apiData.tdata.map((el) => {
              return (
                <tr key={el.id}>
                  <td className="w-1/3 px-4 py-3 text-left">{el.name}</td>
                  <td className="w-1/3 px-4 py-3 text-left">{el.lastName}</td>
                  <td className="px-4 py-3 text-left">
                    <a className="hover:text-blue-500" href="/">
                      {el.phone}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-left">
                    <a
                      className="hover:text-blue-500"
                      href={`mailto:${el.email}`}
                    >
                      {el.email}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
