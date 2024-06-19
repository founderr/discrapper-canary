t.d(e, {
  Z: function() {
    return l
  }
});
var o = t(735250);
t(470079);
var i = t(212598),
  r = t(728151),
  s = t(981631),
  C = t(689938),
  c = t(344595),
  a = t(322539);

function l(n) {
  let {
    isWaitingForConnection: e,
    onWaitingForConnection: t,
    expectedCallbackState: l,
    onAuthToken: d,
    onError: u,
    onClose: N
  } = n, L = e ? (0, o.jsx)("img", {
    src: a,
    width: "168",
    height: "124",
    alt: ""
  }) : (0, o.jsx)("img", {
    src: c,
    width: "152",
    height: "123",
    alt: ""
  }), R = e ? C.Z.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : C.Z.Messages.CRUNCHYROLL_DETAILS_TITLE, O = e ? C.Z.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : C.Z.Messages.CRUNCHYROLL_DETAILS_BODY;
  return (0, o.jsx)(i.t, {
    platformType: s.ABu.CRUNCHYROLL,
    isWaitingForConnection: e,
    onWaitingForConnection: t,
    expectedCallbackState: l,
    onAuthToken: d,
    onError: u,
    onClose: N,
    img: L,
    title: R,
    body: O,
    redirectDestination: r.pY
  })
}