// Change below function to API call
export const GetLaunchesAPI = async () => {
  const result = await fetch("https://api.spacexdata.com/v3/launches");
  return result.json();
};
