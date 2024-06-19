t.d(s, {
  $: function() {
    return l
  }
});
var n = t(544891),
  r = t(570140),
  i = t(34756),
  a = t(981631);
async function l(e) {
  r.Z.dispatch({
    type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START",
    applicationId: e
  });
  try {
    let s = (await n.tn.get({
      url: a.ANM.APPLICATION_ACTIVITY_STATISTICS(e),
      oldFormErrors: !0
    })).body;
    return r.Z.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: s,
      applicationId: e
    }), s
  } catch (s) {
    throw r.Z.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL",
      applicationId: e
    }), new i.Z(s)
  }
}