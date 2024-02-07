"use strict";
n.r(t), n.d(t, {
  fetchEULA: function() {
    return i
  }
});
var r = n("872717"),
  a = n("913144"),
  l = n("49111");
async function i(e) {
  let t = await r.default.get({
    url: l.Endpoints.STORE_EULA(e),
    oldFormErrors: !0
  });
  a.default.dispatch({
    type: "EULA_FETCH_SUCCESS",
    eula: t.body
  })
}