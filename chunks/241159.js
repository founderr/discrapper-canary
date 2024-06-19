n.d(t, {
  k: function() {
    return s
  }
});
var i = n(544891),
  l = n(570140),
  a = n(981631);

function s(e) {
  return l.Z.dispatch({
    type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING",
    applicationId: e
  }), i.tn.get({
    url: a.ANM.STORE_LAYOUT(e)
  }).then(t => (l.Z.dispatch({
    type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
    applicationId: e,
    listings: t.body
  }), t.body)).catch(() => {
    l.Z.dispatch({
      type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED",
      applicationId: e
    })
  })
}