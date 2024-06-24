n.d(t, {
  N: function() {
    return o
  }
});
var s = n(544891),
  i = n(570140),
  a = n(230307),
  l = n(70956),
  r = n(981631);
let c = 6 * l.Z.Millis.HOUR;
async function o() {
  let e = a.Z.lastFetched;
  if (!(null != e && Date.now() - e < c)) try {
    let e = await s.tn.get({
      url: r.ANM.USER_ACTIVITY_STATISTICS,
      oldFormErrors: !0
    });
    i.Z.dispatch({
      type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: e.body
    })
  } catch (e) {
    return e
  }
}