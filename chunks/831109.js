"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("446674"),
  l = n("913144");
let a = [],
  r = null;
class s extends i.default.Store {
  getLastFetchTimeMs() {
    return r
  }
  getCategories() {
    return a
  }
}
s.displayName = "ApplicationDirectoryCategoriesStore";
var u = new s(l.default, {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(e) {
    let {
      categories: t
    } = e;
    a = t, r = Date.now()
  }
})