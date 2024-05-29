"use strict";
a.r(t), a.d(t, {
  fetchBuildSize: function() {
    return r
  }
});
var l = a("544891"),
  s = a("570140"),
  n = a("173747"),
  i = a("981631");
async function r(e, t, a, r) {
  if (n.default.needsToFetchBuildSize(a)) {
    s.default.dispatch({
      type: "APPLICATION_BUILD_SIZE_FETCH_START",
      buildId: a
    });
    try {
      let n = await l.HTTP.post({
        url: i.Endpoints.APPLICATION_BUILD_SIZE(e, t, a),
        body: {
          manifest_ids: r
        },
        oldFormErrors: !0
      });
      s.default.dispatch({
        type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
        buildId: a,
        sizeKB: n.body.size_kb
      })
    } catch (e) {
      s.default.dispatch({
        type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
        buildId: a
      })
    }
  }
}