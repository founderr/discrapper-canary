"use strict";
i.r(t), i.d(t, {
  fetchStoreDirectoryLayout: function() {
    return s
  }
});
var n = i("544891"),
  l = i("570140"),
  a = i("981631");

function s(e) {
  return l.default.dispatch({
    type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING",
    applicationId: e
  }), n.HTTP.get({
    url: a.Endpoints.STORE_LAYOUT(e)
  }).then(t => (l.default.dispatch({
    type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
    applicationId: e,
    listings: t.body
  }), t.body)).catch(() => {
    l.default.dispatch({
      type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED",
      applicationId: e
    })
  })
}