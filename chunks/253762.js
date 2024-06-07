"use strict";
t.r(n), t.d(n, {
  default: function() {
    return T
  }
});
var i = t("735250");
t("470079");
var o = t("481060"),
  s = t("864762"),
  a = t("428681"),
  r = t("42338"),
  l = t("569932"),
  d = t("555638"),
  c = t("42011"),
  u = t("798930"),
  C = t("112109");

function T(e) {
  let {
    transitionState: n,
    onClose: t,
    analyticsLocation: T,
    platformType: S
  } = e, {
    slide: P,
    gotoNext: f,
    gotoError: N,
    handleWaitingForConnection: A,
    handleAuthToken: L,
    expectedCallbackState: _,
    callbackData: p
  } = (0, s.useTwoWayLinkModalSlideManager)(T, S);
  return (0, i.jsx)(o.ModalRoot, {
    className: C.modal,
    transitionState: n,
    disableTrack: !0,
    children: (0, i.jsxs)(o.Slides, {
      activeSlide: P,
      width: 408,
      children: [(0, i.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.LANDING,
        children: (0, i.jsx)(l.PlayStationLinkLanding, {
          platformType: S,
          onContinue: f,
          onClose: t
        })
      }), (0, i.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT,
        children: (0, i.jsx)(d.PlayStationLinkPreConnect, {
          platformType: S,
          isWaitingForConnection: !1,
          onWaitingForConnection: A,
          onAuthToken: L,
          onError: N,
          onClose: t
        })
      }), (0, i.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
        children: (0, i.jsx)(d.PlayStationLinkPreConnect, {
          platformType: S,
          isWaitingForConnection: !0,
          expectedCallbackState: _,
          onAuthToken: L,
          onError: N,
          onClose: t
        })
      }), (0, i.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
        children: (0, i.jsx)(a.PlayStationLinkDiscordConsent, {
          platformType: S,
          authToken: p,
          onContinue: f,
          onError: N,
          onClose: t
        })
      }), (0, i.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.ERROR,
        children: (0, i.jsx)(r.PlayStationLinkError, {
          onContinue: f,
          onClose: t
        })
      }), (0, i.jsx)(o.Slide, {
        id: u.TwoWayLinkModalSlideTypes.SUCCESS,
        children: (0, i.jsx)(c.PlayStationLinkSuccess, {
          onClose: t
        })
      })]
    })
  })
}