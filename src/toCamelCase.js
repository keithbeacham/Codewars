function toCamelCase(str) {
  if (str) {
    return (
      str[0] +
      str
        .replaceAll("-", "_")
        .split("_")
        .map((element) => {
          return element[0].toUpperCase() + element.slice(1);
        })
        .join("")
        .slice(1)
    );
  } else return "";
}

module.exports = toCamelCase;
