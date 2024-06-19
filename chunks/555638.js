t.d(n, {
  A: function() {
    return a
  }
});
var i = t(735250);
t(470079);
var o = t(212598),
  s = t(927923),
  r = t(689938),
  C = t(283554),
  l = t(124248);

function a(e) {
  let {
    platformType: n,
    isWaitingForConnection: t,
    onWaitingForConnection: a,
    expectedCallbackState: d,
    onAuthToken: c,
    onError: u,
    onClose: T
  } = e, N = t ? (0, i.jsx)("img", {
    src: l,
    width: "180",
    height: "125",
    alt: ""
  }) : (0, i.jsx)("img", {
    src: C,
    width: "180",
    height: "111",
    alt: ""
  }), _ = t ? r.Z.Messages.CONSOLE_PRECONNECT_TITLE_WAITING : r.Z.Messages.PS_PRECONNECT_TITLE, A = t ? r.Z.Messages.PS_PRECONNECT_BODY_WAITING : r.Z.Messages.PS_PRECONNECT_BODY;
  return (0, i.jsx)(o.t, {
    platformType: n,
    isWaitingForConnection: t,
    onWaitingForConnection: a,
    expectedCallbackState: d,
    onAuthToken: c,
    onError: u,
    onClose: T,
    img: N,
    title: _,
    body: A,
    redirectDestination: s.uu
  })
}