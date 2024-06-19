t.d(n, {
  N: function() {
    return s
  }
});
var r = t(544891),
  l = t(570140),
  a = t(981631);
async function s(e) {
  let n = await r.tn.get({
    url: a.ANM.STORE_EULA(e),
    oldFormErrors: !0
  });
  l.Z.dispatch({
    type: "EULA_FETCH_SUCCESS",
    eula: n.body
  })
}