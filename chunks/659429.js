n.d(t, {
  $: function() {
    return r
  }
});
var s = n(544891),
  i = n(570140),
  l = n(34756),
  a = n(981631);
async function r(e) {
  i.Z.dispatch({
    type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START",
    applicationId: e
  });
  try {
    let t = (await s.tn.get({
      url: a.ANM.APPLICATION_ACTIVITY_STATISTICS(e),
      oldFormErrors: !0
    })).body;
    return i.Z.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: t,
      applicationId: e
    }), t
  } catch (t) {
    throw i.Z.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL",
      applicationId: e
    }), new l.Z(t)
  }
}