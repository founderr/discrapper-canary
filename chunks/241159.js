"use strict";
n.r(t), n.d(t, {
  fetchStoreDirectoryLayout: function() {
    return s
  }
});
var i = n("544891"),
  l = n("570140"),
  r = n("981631");

function s(e) {
  return i.HTTP.get({
    url: r.Endpoints.STORE_LAYOUT(e)
  }).then(t => (l.default.dispatch({
    type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
    applicationId: e,
    listings: t.body
  }), t.body))
}