"use client";

import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type JsonplaceholderPost = {
  userId: number;
  id: string;
  title: string;
  body: string;
};

export default function SampleDetail() {
  const [data, setData] = useState<JsonplaceholderPost>();

  // クエリー サーチフォームで使おう TODO
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);

  // URLのパスを取得 参考 後で消す TODO
  const pathname = usePathname();

  // 動的ルーティングのパラメータを取得
  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    if (userId && Array.isArray(userId)) return;
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((res) => res.json())
      .then((json: JsonplaceholderPost) => setData(json))
      .catch(() => alert("error"));
  }, [userId]);

  return (
    <div>
      <p>詳細画面 サンプル</p>
      <div className="overflow-auto bg-white">
        <div className="flex gap-3">
          <p className="w-20 text-xl">ID :</p>
          {/* TODO サスペンス使ってロード表示 */}
          <p className="text-xl">{data?.id}</p>
        </div>
        <div className="mt-2 flex gap-3">
          <p className="w-20 text-xl">タイトル :</p>
          {/* TODO サスペンス使ってロード表示 */}
          <p className="text-xl">{data?.title}</p>
        </div>
        <div className="mt-2 flex gap-3 border p-5">
          <p className="w-20 text-xl">内容 :</p>
          {/* TODO サスペンス使ってロード表示 */}
          <p className="text-xl">{data?.body}</p>
        </div>
      </div>
    </div>
  );
}
