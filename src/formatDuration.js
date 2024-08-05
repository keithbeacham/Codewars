function formatDuration(seconds) {
  let output = "";

  const numYears = Math.floor(seconds / 31536000);
  if (numYears) {
    seconds -= numYears * 31536000;
    output = numYears > 1 ? `, ${numYears} years` : `, 1 year`;
  }
  const numDays = Math.floor(seconds / 86400);
  if (numDays) {
    seconds -= numDays * 86400;
    output += numDays > 1 ? `, ${numDays} days` : `, 1 day`;
  }
  const numHours = Math.floor(seconds / 3600);
  if (numHours) {
    seconds -= numHours * 3600;
    output += numHours > 1 ? `, ${numHours} hours` : `, 1 hour`;
  }
  const numMinutes = Math.floor(seconds / 60);
  if (numMinutes) {
    seconds -= numMinutes * 60;
    output += numMinutes > 1 ? `, ${numMinutes} minutes` : `, 1 minute`;
  }
  if (seconds) {
    output += seconds > 1 ? `, ${seconds} seconds` : `, 1 second`;
  }
  if (output) {
    output = output.slice(2);
    if (output.includes(",")) {
      const lastComma = output.lastIndexOf(",");
      output =
        output.slice(0, lastComma) + " and" + output.slice(lastComma + 1);
    }
  } else {
    output = "now";
  }
  return output;
}

module.exports = formatDuration;
