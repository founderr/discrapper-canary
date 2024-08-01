E.d(_, {
  E: function() {
return n;
  }
});
var s = E(442837),
  T = E(650774),
  I = E(206583),
  A = E(981631);

function n(e) {
  return (0, s.e7)([T.Z], () => {
if (null == e)
  return;
let _ = T.Z.getMemberCount(e.id),
  E = e.hasFeature(A.oNc.ACTIVITY_FEED_ENABLED_BY_USER),
  s = e.hasFeature(A.oNc.ACTIVITY_FEED_DISABLED_BY_USER),
  n = null != _ && _ < I.k4;
return E || s ? E : n;
  });
}