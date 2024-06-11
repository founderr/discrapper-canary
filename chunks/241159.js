"use strict";
i.r(t), i.d(t, {
  fetchStoreDirectoryLayout: function() {
    return a
  }
});
var n = i("544891"),
  l = i("570140"),
  s = i("981631");

function a(e) {
  return n.HTTP.get({
    url: s.Endpoints.STORE_LAYOUT(e)
  }).then(t => (l.default.dispatch({
    type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
    applicationId: e,
    listings: t.body
  }), t.body))
}