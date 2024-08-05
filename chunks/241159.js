n.d(t, {
  k: function() {
return r;
  }
});
var i = n(544891),
  s = n(570140),
  a = n(981631);

function r(e) {
  return s.Z.dispatch({
type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING',
applicationId: e
  }), i.tn.get({
url: a.ANM.STORE_LAYOUT(e)
  }).then(t => (s.Z.dispatch({
type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS',
applicationId: e,
listings: t.body
  }), t.body)).catch(() => {
s.Z.dispatch({
  type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED',
  applicationId: e
});
  });
}