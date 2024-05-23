"use strict";
r.r(t), r.d(t, {
  useFetchCollectiblesProductCategory: function() {
    return n
  }
}), r("47120");
var a = r("399606"),
  l = r("597688"),
  o = r("223143");

function n(e) {
  (0, o.useMaybeFetchCollectiblesCategories)();
  let [t, r] = (0, a.useStateFromStoresArray)([l.default], () => [l.default.isFetchingCategories, l.default.getCategoryForProduct(e)]);
  return {
    isFetching: t,
    category: r
  }
}