"use strict";
t.r(n), t.d(n, {
  default: function() {
    return N
  }
});
var o = t("735250");
t("470079");
var i = t("481060"),
  s = t("864762"),
  r = t("779341"),
  a = t("642566"),
  l = t("742699"),
  C = t("686494"),
  d = t("573703"),
  u = t("798930"),
  c = t("981631"),
  L = t("112109");

function N(e) {
  let {
    transitionState: n,
    onClose: t,
    analyticsLocation: N
  } = e, {
    slide: T,
    gotoNext: R,
    gotoError: f,
    handleWaitingForConnection: _,
    handleAuthToken: O,
    expectedCallbackState: p,
    callbackData: E
  } = (0, s.useTwoWayLinkModalSlideManager)(N, c.PlatformTypes.CRUNCHYROLL);
  return (0, o.jsx)(i.ModalRoot, {
    className: L.modal,
    transitionState: n,
    disableTrack: !0,
    children: (0, o.jsxs)(i.Slides, {
      activeSlide: T,
      width: 408,
      children: [(0, o.jsx)(i.Slide, {
        id: u.TwoWayLinkModalSlideTypes.LANDING,
        children: (0, o.jsx)(l.default, {
          onContinue: R,
          onClose: t
        })
      }), (0, o.jsx)(i.Slide, {
        id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT,
        children: (0, o.jsx)(C.default, {
          isWaitingForConnection: !1,
          onWaitingForConnection: _,
          onAuthToken: O,
          onError: f,
          onClose: t
        })
      }), (0, o.jsx)(i.Slide, {
        id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(C.default, {
          isWaitingForConnection: !0,
          expectedCallbackState: p,
          onAuthToken: O,
          onError: f,
          onClose: t
        })
      }), (0, o.jsx)(i.Slide, {
        id: u.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
        children: (0, o.jsx)(r.default, {
          authToken: E,
          onContinue: R,
          onError: f,
          onClose: t
        })
      }), (0, o.jsx)(i.Slide, {
        id: u.TwoWayLinkModalSlideTypes.ERROR,
        children: (0, o.jsx)(a.default, {
          onContinue: R,
          onClose: t
        })
      }), (0, o.jsx)(i.Slide, {
        id: u.TwoWayLinkModalSlideTypes.SUCCESS,
        children: (0, o.jsx)(d.default, {
          onClose: t
        })
      })]
    })
  })
}