import React from "react";

const Logs = () => {
  const log = (date: Date) => (importance: any) => (message: any) => {
    console.log(
      `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}] [${importance}] ${message}`
    );
  };

  //log(new Date())("error")("error message");
  // const log1 = useCurry(log); // <=>  const log = (date) => (importance) => (message)
  //log1(new Date(), "error", "error message 1");
  //logNow will be the partial of log with fixed first argument
  const logInfos = log(new Date());
  logInfos("INFO")("some info"); // [HH:mm] INFO message
  const logDebug = log(new Date())("DEBUG");
  logDebug("some debug"); // [HH:mm] DEBUG message

  return <div></div>;
};

export default Logs;
