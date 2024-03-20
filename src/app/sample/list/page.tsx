"use client";

import { useEffect, useState } from "react";
type UsersAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geo;
};
type geo = {
  lat: string;
  lng: string;
};
type UsersCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};
type JsonplaceholderUsers = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: UsersAddress;
  website: string;
  company: UsersCompany;
};

export default function List() {
  const [data, setData] = useState<JsonplaceholderUsers[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json: JsonplaceholderUsers[]) => setData(json))
      .catch(() => alert("error"));
  }, []);

  return (
    <div>
      <p>test lists</p>
      <div className="overflow-auto bg-white">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              {["id", "名前", "メールアドレス"].map((el) => {
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
            {data.map((el) => {
              return (
                <tr key={el.id}>
                  <td className="w-1/3 px-4 py-3 text-left">{el.id}</td>
                  <td className="px-4 py-3 text-left">
                    <a
                      className="hover:text-blue-500"
                      href={`/sample/list/${encodeURIComponent(el.id)}`}
                    >
                      {el.username}
                    </a>
                  </td>
                  <td className="w-1/3 px-4 py-3 text-left">{el.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
