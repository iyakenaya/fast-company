export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // делаем новый массив наших items через spred-оператор
  // вторым аргументом передаем кокое кол-во элл-тов необходимо получить после этого startIndex
  return [...items].splice(startIndex, pageSize);
}
