window.helper = (function () {
  function calculateElapsedTime(elapsedTime, startTime) {
    return (elapsedTime + (Date.now() - startTime));
  }

  function formatTime(time) {
    let intTime = Math.floor(time).toString();

    while (intTime.length < 2) {
      intTime = `0${intTime}`;
    }

    return intTime;
  }

  function convertMsToHMS(elapsedTimeInMs) {
    const ms = elapsedTimeInMs;
    const s = (ms / 1000) % 60;
    const m = ((ms / 1000) / 60) % 60;
    const h = (((ms / 1000) / 60) / 60) % 60;

    return `${formatTime(h)} : ${formatTime(m)} : ${formatTime(s)}`;
  }

  return {
    calculateElapsedTime,
    convertMsToHMS,
  };
}());
