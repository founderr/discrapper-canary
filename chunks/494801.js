t.d(n, {
  Z: function() {
    return d
  }
});
var o = t(735250);
t(470079);
var s = t(212598),
  r = t(981631),
  i = t(927923),
  a = t(689938),
  c = t(397995),
  l = t(848499);

function d(e) {
  let {
    isWaitingForConnection: n,
    onWaitingForConnection: t,
    expectedCallbackState: d,
    onAuthToken: u,
    onError: C,
    onClose: _
  } = e, O = n ? (0, o.jsx)("img", {
    src: l,
    width: "168",
    height: "124",
    alt: ""
  }) : (0, o.jsx)("img", {
    src: c,
    width: "152",
    height: "124",
    alt: ""
  }), x = n ? a.Z.Messages.XBOX_DETAILS_TITLE_WAITING : a.Z.Messages.XBOX_DETAILS_TITLE, N = n ? a.Z.Messages.XBOX_DETAILS_BODY_WAITING : a.Z.Messages.XBOX_DETAILS_BODY;
  return (0, o.jsx)(s.t, {
    platformType: r.ABu.XBOX,
    isWaitingForConnection: n,
    onWaitingForConnection: t,
    expectedCallbackState: d,
    onAuthToken: u,
    onError: C,
    onClose: _,
    img: O,
    title: x,
    body: N,
    redirectDestination: i.zM
  })
}