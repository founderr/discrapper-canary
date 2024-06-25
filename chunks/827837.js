r.d(t, {
  N: function() {
    return c
  }
});
var n = r(544891),
  s = r(570140),
  i = r(230307),
  l = r(70956),
  a = r(981631);
let o = 6 * l.Z.Millis.HOUR;
async function c() {
  let e = i.Z.lastFetched;
  if (!(null != e && Date.now() - e < o)) try {
    let e = await n.tn.get({
      url: a.ANM.USER_ACTIVITY_STATISTICS,
      oldFormErrors: !0
    });
    s.Z.dispatch({
      type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: e.body
    })
  } catch (e) {
    return e
  }
}