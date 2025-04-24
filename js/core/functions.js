export const getDatesCreationAndCustomExpiration = () => {
  const today = new Date();
  const tomorrow = new Date(today);

  tomorrow.setDate(today.getDate() + 1);

	return {
		dataCreation: today.toISOString().slice(0, 10),
		dataExpiration: tomorrow.toISOString().slice(0, 10),
	}
};
