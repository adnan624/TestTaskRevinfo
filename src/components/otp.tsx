
import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [timerRun, setTimerRun] = useState(false);


  useEffect(() => {
    const startTime = localStorage.getItem("startTime");
    const savedSeconds = localStorage.getItem("seconds");


    if (startTime && savedSeconds) {
      const elapsedTime = Math.floor(
        (Date.now() - parseInt(startTime, 10)) / 1000
      );
      const remainingSeconds = Math.max(60 - elapsedTime, 0);
      setSeconds(remainingSeconds);
    } else {
      localStorage.setItem("startTime", Date.now().toString());
      localStorage.setItem("seconds", seconds.toString());
    }

    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
        localStorage.setItem("seconds", (seconds - 1).toString());
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timerRun]);

  useEffect(() => {
    if (seconds === 0) {
      // Timer completed, do something here
      console.log("Timer completed!");
      setTimerRun(!timerRun);
      localStorage.removeItem("startTime");
      localStorage.removeItem("seconds");
    }
  }, [seconds]);


  const resetTimer = () => {
    setSeconds(60);
    localStorage.setItem("startTime", Date.now().toString());
    localStorage.setItem("seconds", "60");
    setTimerRun(!timerRun);
  };
  return (
    <div>
      {seconds !== 0 ? (
        <p>{seconds} seconds remaining for resend OTP</p>
      ) : (
        <button onClick={() => resetTimer()}> resend</button>
      )}
    </div>
  );
};

export default function Otp() {
  const [otp, setOtp] = useState("");

  const clearInput = () => {
    setOtp("");
  };

  function createTimer(callback:any){
    let seconds = 60;

    const timer = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        console.log(seconds + " seconds remaining...");
      } else {
        clearInterval(timer);
        callback();
      }
    }, 1000);
  }

  // Usage
  const timerCallback =  ()=>  {
    console.log("Timer completed!");
  };

  return (
    <div style={{ height: 700, width: "100%", marginTop: 300 }}>
      <center>
        <div
          style={{
            height: "300px",
            width: "600px",
            backgroundColor: "lightgrey",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
          <p>
            <>
            {createTimer(timerCallback)}
            </>
            </p>

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputType="tel"
            renderSeparator={<span>-</span>}
            inputStyle={{ height: 50, width: 50, fontSize: 20 }}
            renderInput={(props) => <input {...props} />}
          />
          <Timer />
          <div>
            <button disabled={!otp} onClick={clearInput}>
              clear
            </button>
            <button disabled={otp.length !== 4}>Submit</button>
            {/* <button disabled={!timerRun}>resend</button> */}
          </div>
        </div>
      </center>
    </div>
  );
}
