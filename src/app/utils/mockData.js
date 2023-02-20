import { useEffect, useState } from "react";
import professions from "../mockData/professions.json";
import httpService from "../services/http.service";
import qualities from "../mockData/qualities.json";
import users from "../mockData/users.json";

// отображаем на главн странице
const useMockData = () => {
  //   стандартизируем наши состояния
  const statusConst = {
    // не началась загрузка
    idle: "Not Started",
    pending: "In Process",
    successed: "Ready",
    error: "Error occured"
  };
  const [error, setError] = useState();
  const [status, setStatus] = useState(statusConst.idle);
  // внизу отображаем в процентах прогресс
  // численное значение зависит от count
  const [progress, setProgress] = useState(0);
  // какое кол-во запросов исходя из необходимых у нас произошло
  const [count, setCount] = useState(0);
  // сколько запросов всего нужно сделать, считаем сумму элл-тов во всех массивах
  const summuryCount = professions.length + qualities.length + users.length;
  // отображаем увеличение count'а
  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };
  // отслеживаем процесс
  const updateProgress = () => {
    if (count !== 0 && status === statusConst.idle) {
      setStatus(statusConst.pending);
    }
    // округление к меньшему позволит не показать 100% когда у нас будет 99%
    // count/summuryCount - получаем часть
    const newProgress = Math.floor((count / summuryCount) * 100);
    // обновление. если % меньше чем те которые реально существуют
    if (progress < newProgress) {
      setProgress(() => newProgress);
    }
    if (newProgress === 100) {
      setStatus(statusConst.successed);
    }
  };
  useEffect(() => {
    updateProgress();
  }, [count]);

  // асинхронная функц иници-ет наши данные
  async function initialize() {
    // создаем все сущности по очереди
    try {
      for (const prof of professions) {
        await httpService.put("profession/" + prof._id, prof);
        // в каждрм цикле при успешном выполнении вызываем incrementCount
        incrementCount();
      }
      for (const user of users) {
        await httpService.put("user/" + user._id, user);
        incrementCount();
      }
      for (const qual of qualities) {
        await httpService.put("quality/" + qual._id, qual);
        incrementCount();
      }
    } catch (error) {
      setError(error);
      setStatus(statusConst.error);
    }
  }
  return { error, initialize, progress, status };
};

export default useMockData;
