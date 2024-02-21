export const paginate = (dataArray) => async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 25;
  const skip = (page - 1) * limit;

  try {
    const totalItems = dataArray.length;
    const totalPages = Math.ceil(totalItems / limit);

    const results = dataArray.slice(skip, skip + limit);

    res.paginatedResults = {
      page,
      limit,
      totalPages,
      totalItems,
      results,
    };

    next();
  } catch (error) {
    next(error);
  }
};
