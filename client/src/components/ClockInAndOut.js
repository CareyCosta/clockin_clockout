import React, { Fragment, useState } from "react";
import Clock from "react-live-clock";
import Button from "@material-ui/core/Button/index";

const ClockInAndOut = ({ onAddToTimeLog }) => {
  const [time, setTime] = useState("");
  const [currentSession, setCurrentSession] = useState({});

  const handleCheckIn = () => {
    setCurrentSession({ checkIn: time });
  };

  const handleCheckOut = () => {
    setCurrentSession((currentSession["checkOut"] = time));
    onAddToTimeLog(currentSession);
    setCurrentSession({});
  };

  return (
    <Fragment>
      <Clock
        onChange={moment => setTime(moment.output)}
        format={"HH:mm:ss"}
        ticking={true}
        timezone={"EST"}
      />
      <Button
        variant="contained"
        color={!currentSession.checkIn ? "primary" : "secondary"}
        onClick={currentSession.checkIn ? handleCheckOut : handleCheckIn}
      >
        {currentSession.checkIn ? "Check Out" : "Check In"}
      </Button>
    </Fragment>
  );
};

export default ClockInAndOut;