"use strict";
r.r(t), r.d(t, {
  useFetchCollectiblesProductCategory: function() {
    return n
  }
}), r("47120");
var a = r("399606"),
  o = r("597688"),
  l = r("223143");

function n(e) {
  (0, l.useMaybeFetchCollectiblesCategories)();
  let [t, r] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.isFetchingCategories, o.default.getCategoryForProduct(e)]);
  return {
    isFetching: t,
    category: r
  }
}