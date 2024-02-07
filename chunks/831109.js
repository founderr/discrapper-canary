"use strict";
n.r(e), n.d(e, {
  default: function() {
    return s
  }
});
var i = n("446674"),
  l = n("913144");
let a = [],
  r = null;
class u extends i.default.Store {
  getLastFetchTimeMs() {
    return r
  }
  getCategories() {
    return a
  }
}
u.displayName = "ApplicationDirectoryCategoriesStore";
var s = new u(l.default, {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(t) {
    let {
      categories: e
    } = t;
    a = e, r = Date.now()
  }
})