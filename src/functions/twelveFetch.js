export const fetchDataTwelve = async (symbol, interval) => {
  try {
    const KEY = "786e65178c114bd1ab714b9187964bc7";
    const URL = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${KEY}`;
    let res = await fetch(URL);
    console.log(res.status);
    if (res.status == 200) {
      let data = await res.json();
      return data;
    } else {
      return "default";
    }
  } catch (error) {
    console.log("Failure: ", error);
  }
};
