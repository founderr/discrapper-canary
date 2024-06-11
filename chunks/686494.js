"use strict";
t.r(n), t.d(n, {
  default: function() {
    return d
  }
});
var o = t("735250");
t("470079");
var i = t("212598"),
  s = t("728151"),
  r = t("981631"),
  a = t("689938"),
  l = t("344595"),
  C = t("322539");

function d(e) {
  let {
    isWaitingForConnection: n,
    onWaitingForConnection: t,
    expectedCallbackState: d,
    onAuthToken: u,
    onError: c,
    onClose: L
  } = e, N = n ? (0, o.jsx)("img", {
    src: C,
    width: "168",
    height: "124",
    alt: ""
  }) : (0, o.jsx)("img", {
    src: l,
    width: "152",
    height: "123",
    alt: ""
  }), T = n ? a.default.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : a.default.Messages.CRUNCHYROLL_DETAILS_TITLE, R = n ? a.default.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : a.default.Messages.CRUNCHYROLL_DETAILS_BODY;
  return (0, o.jsx)(i.TwoWayLinkPreConnect, {
    platformType: r.PlatformTypes.CRUNCHYROLL,
    isWaitingForConnection: n,
    onWaitingForConnection: t,
    expectedCallbackState: d,
    onAuthToken: u,
    onError: c,
    onClose: L,
    img: N,
    title: T,
    body: R,
    redirectDestination: s.CRUNCHYROLL_LINK_DEST_ORIGIN
  })
}