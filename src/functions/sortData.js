export const sortCountries = (importance, results) => {
  var new_results = results.sort((a, b) => {
    return importance[a.country] - importance[b.country];
  });

  return new_results;
};
