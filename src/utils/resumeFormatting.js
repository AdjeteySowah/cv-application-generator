export function formatDateRange(startDate, endDate) {
  if (startDate && endDate) {
    return `${startDate} - ${endDate}`;
  }

  return startDate || endDate || '';
}

export function formatDate(date) {
  if (!date) return '';
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}
