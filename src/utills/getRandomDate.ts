export function getRandomDate(): string {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const randomMonthIndex = Math.floor(Math.random() * 12);
  const randomMonth = months[randomMonthIndex];
  const randomDay = Math.floor(Math.random() * 31) + 1;

  const randomHour = Math.floor(Math.random() * 12) + 1;

  const randomMinute = Math.floor(Math.random() * 60);

  const amOrPm = Math.random() < 0.5 ? "AM" : "PM";

  const formattedDate = `${randomMonth} ${randomDay.toString().padStart(2, "0")}, ${randomHour.toString().padStart(2, "0")}:${randomMinute.toString().padStart(2, "0")} ${amOrPm}`;

  return formattedDate;
}


