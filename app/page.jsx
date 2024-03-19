"use client";
import { useEffect, useState } from "react";
import { fetchApi } from "@/lib/api";
import Card from "@/components/card/Card";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchApi("records?limit=20")
      .then((data) => {
        setData(data?.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <main className="flex flex-wrap justify-between p-24">
      {data?.map((record) => (
        <Card key={record.id} record={record} />
      ))}
    </main>
  );
}
