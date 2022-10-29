const respMapper = (doc) => {
  const data = doc.data();
  return {
    ...data,
    id: doc.id,
    ...(data?.date ? { date: data?.date?.toDate() } : {}),
    ...(data?.updateDate ? { updateDate: data?.updateDate?.toDate() } : {}),
  };
};

module.exports = respMapper;
