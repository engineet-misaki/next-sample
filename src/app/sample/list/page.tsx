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

export default function SampleList() {
  const [data, setData] = useState<JsonplaceholderUsers[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json: JsonplaceholderUsers[]) => setData(json))
      .catch(() => alert("error"));
  }, []);

  return (
    <div>
      <p>一覧画面 サンプル</p>
      <div className="flex flex-wrap border p-5">
        <div className="my-6 w-full">
          <div className="leading-loose">
            <form
              onSubmit={() => {
                return;
              }}
              className="rounded bg-white p-10 shadow-xl"
            >
              <div className="flex gap-3">
                <div className="">
                  <label className="block text-sm text-gray-600" htmlFor="name">
                    名前
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                  />
                </div>
                <div className="">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-1 text-gray-700"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Your Email"
                    aria-label="Email"
                  />
                </div>
              </div>
              <div className="mt-6 text-right">
                <button
                  className="rounded bg-gray-900 px-4 py-1 font-light tracking-wider text-white"
                  type="button"
                >
                  検索
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
                      className="text-blue-500 underline"
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
