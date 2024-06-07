"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var o = n("735250");
n("470079");
var s = n("212598"),
  i = n("728151"),
  r = n("981631"),
  a = n("689938"),
  l = n("344595"),
  C = n("322539");

function d(e) {
  let {
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: d,
    onAuthToken: u,
    onError: c,
    onClose: L
  } = e, f = t ? (0, o.jsx)("img", {
    src: C,
    width: "168",
    height: "124",
    alt: ""
  }) : (0, o.jsx)("img", {
    src: l,
    width: "152",
    height: "123",
    alt: ""
  }), N = t ? a.default.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : a.default.Messages.CRUNCHYROLL_DETAILS_TITLE, T = t ? a.default.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : a.default.Messages.CRUNCHYROLL_DETAILS_BODY;
  return (0, o.jsx)(s.TwoWayLinkPreConnect, {
    platformType: r.PlatformTypes.CRUNCHYROLL,
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: d,
    onAuthToken: u,
    onError: c,
    onClose: L,
    img: f,
    title: N,
    body: T,
    redirectDestination: i.CRUNCHYROLL_LINK_DEST_ORIGIN
  })
}