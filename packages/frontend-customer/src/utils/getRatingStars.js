export const getRatingStars = (rating, isTablet) => {
  if (!isTablet && rating === 0) {
    return ["e"];
  }

  if (!isTablet) {
    return ["s"];
  }

  const totalStars = 5;

  const validRating = Math.min(Math.max(rating, 0), totalStars);

  return [
    ...Array(validRating).fill("s"),
    ...Array(totalStars - validRating).fill("e"),
  ];
};
