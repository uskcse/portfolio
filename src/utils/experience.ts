export const calculateExperience = () => {
  const startDate = new Date('2019-07-01'); // Start of first job
  const today = new Date();
  
  const years = today.getFullYear() - startDate.getFullYear();
  const months = today.getMonth() - startDate.getMonth();
  
  let totalYears = years + months / 12;
  
  // Round to nearest 0.5
  totalYears = Math.round(totalYears * 2) / 2;
  
  return totalYears;
};