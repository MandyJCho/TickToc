window.helper = (function () {
  /**
   * pads time with extra 0's if there are less than 2 significant figures
   * @param time
   * @returns {string}
   */
  function formatTime(time) {
    let intTime = Math.floor(time).toString();

    // Add 0's to single digit times
    while (intTime.length < 2) {
      intTime = `0${intTime}`;
    }

    return intTime;
  }

  /**
   * formats elapsed time into HH:MM:SS
   * @param elapsedTimeInMs
   * @returns {string}
   */
  function convertMsToHMS(elapsedTimeInMs) {
    const ms = elapsedTimeInMs;
    const sec = (ms / 1000) % 60;
    const min = ((ms / 1000) / 60) % 60;
    const hrs = (((ms / 1000) / 60) / 60) % 60;

    return `${formatTime(hrs)} : ${formatTime(min)} : ${formatTime(sec)}`;
  }


  return {
    convertMsToHMS,
  };
}());

