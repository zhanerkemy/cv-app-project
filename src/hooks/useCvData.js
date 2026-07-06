import { useEffect, useState } from "react";
import cvData from "../data/cvData";

const STORAGE_KEY = "cv-data";

export const useCvData = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : cvData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  return { data, setData };
};