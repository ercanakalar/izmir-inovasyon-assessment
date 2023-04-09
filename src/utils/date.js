const date = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  const todayDate = `${dd}/${mm}/${yyyy}`;
  return todayDate;
};
export default date;
