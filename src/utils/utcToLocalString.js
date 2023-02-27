export const utcToLocalString = (utc) => {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let inital = new Date(utc * 1000);
  let day = inital.getDate();
  let month = months[inital.getMonth()];
  let year = inital.getFullYear();
  let dayMonthYear = day + " " + month + " " + year;
  return dayMonthYear;
};
