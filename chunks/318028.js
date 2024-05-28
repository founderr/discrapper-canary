"use strict";
a.r(t), a.d(t, {
  useFetchCollectiblesProductCategory: function() {
    return o
  }
}), a("47120");
var r = a("399606"),
  s = a("597688"),
  n = a("223143");

function o(e) {
  (0, n.useMaybeFetchCollectiblesCategories)();
  let [t, a] = (0, r.useStateFromStoresArray)([s.default], () => [s.default.isFetchingCategories, s.default.getCategoryForProduct(e)]);
  return {
    isFetching: t,
    category: a
  }
}