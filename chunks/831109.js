"use strict";
x.r(t), x.d(t, {
  default: function() {
    return k
  }
});
var s = x("446674"),
  a = x("913144");
let o = [],
  y = null;
class d extends s.default.Store {
  getLastFetchTimeMs() {
    return y
  }
  getCategories() {
    return o
  }
}
d.displayName = "ApplicationDirectoryCategoriesStore";
var k = new d(a.default, {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(i) {
    let {
      categories: t
    } = i;
    o = t, y = Date.now()
  }
})