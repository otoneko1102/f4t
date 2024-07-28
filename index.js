function decode(timeString) {
  if (typeof timeString !== 'string' || timeString.includes('-')) return NaN;
  const timeUnits = {
    ms: 1,
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
    w: 7 * 24 * 60 * 60 * 1000,
  };

  const regex = /(\d+)(ms|s|m|h|d|w)/g;
  let match;
  let totalMilliseconds = 0;

  let lastIndex = 0;
  while ((match = regex.exec(timeString)) !== null) {
    const value = parseInt(match[1], 10);
    const unit = match[2];
    if (isNaN(value) || !timeUnits[unit]) {
      return NaN;
    }
    totalMilliseconds += value * timeUnits[unit];
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex !== timeString.length) {
    return NaN;
  }

  return totalMilliseconds;
}

function encode(milliseconds) {
  if (isNaN(milliseconds) || milliseconds < 0) {
    return NaN;
  }

  const timeUnits = {
    w: 7 * 24 * 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
    h: 60 * 60 * 1000,
    m: 60 * 1000,
    s: 1000,
    ms: 1,
  };

  let remainingMilliseconds = milliseconds;
  let timeString = '';

  for (const unit in timeUnits) {
    const unitValue = timeUnits[unit];
    const unitCount = Math.floor(remainingMilliseconds / unitValue);
    if (unitCount > 0) {
      timeString += `${unitCount}${unit}`;
      remainingMilliseconds -= unitCount * unitValue;
    }
  }

  return timeString || '0ms';
}

module.exports = {
  decode,
  encode,
};
