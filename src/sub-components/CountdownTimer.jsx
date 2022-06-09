import React from 'react';

const CountdownTimer = () => {

    const [isStarted, setIsStarted] = React.useState();
    const [isPaused, setIsPaused] = React.useState();
    const [seconds, setSeconds] = React.useState(0);
    const [interval, setCustomInterval] = React.useState();
  
    React.useEffect(() => {
  
      if (isStarted && !isPaused) {
        setCustomInterval(setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000));
      } else {
        setCustomInterval(undefined);
        clearInterval(interval);
      }
    }, [isStarted, isPaused]);
  
    const handleReset = () => {
      // TODO: Add reset logic
      setSeconds(0);
      setIsStarted(false);
      setIsPaused(false);
      setCustomInterval(undefined);
      clearInterval(interval);
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>{seconds}</p>
        {!isStarted && <button onClick={() => setIsStarted(!isStarted)}>
          Start
        </button>}
        {isStarted && <button onClick={handleReset}>
          Reset
        </button>}
        {isStarted && !isPaused && <button onClick={() => setIsPaused(true)}>
          Pause
        </button>}
        {isStarted && isPaused && <button onClick={() => setIsPaused(false)}>
          Unpause
        </button>}
      </div>
    );
}

export default CountdownTimer;