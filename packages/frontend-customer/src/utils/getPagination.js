export const getPagination = (page, total, isTablet) => {
  const windowSize = isTablet ? 3 : 2;
  const pages = [];

  let start = page;
  let end = page + windowSize - 1;

  // не виходимо за межі total
  if (end > total) {
    end = total;
    start = Math.max(1, end - windowSize + 1);
  }

  // додаємо сторінки в діапазоні
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // додаємо "..." тільки якщо є сторінки далі
  if (end < total) {
    pages.push("...");
  }

  return pages;
};
