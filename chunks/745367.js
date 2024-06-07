"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var o = n("735250");
n("470079");
var s = n("481060"),
  i = n("864762"),
  r = n("779341"),
  a = n("642566"),
  l = n("742699"),
  C = n("686494"),
  d = n("573703"),
  u = n("798930"),
  c = n("981631"),
  L = n("112109");

function f(e) {
  let {
    transitionState: t,
    onClose: n,
    analyticsLocation: f
  } = e, {
    slide: N,
    gotoNext: T,
    gotoError: R,
    handleWaitingForConnection: _,
    handleAuthToken: h,
    expectedCallbackState: p,
    callbackData: O
  } = (0, i.useTwoWayLinkModalSlideManager)(f, c.PlatformTypes.CRUNCHYROLL);
  return (0, o.jsx)(s.ModalRoot, {
    className: L.modal,
    transitionState: t,
    disableTrack: !0,
    children: (0, o.jsxs)(s.Slides, {
      activeSlide: N,
      width: 408,
      children: [(0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.LANDING,
        children: (0, o.jsx)(l.default, {
          onContinue: T,
          onClose: n
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT,
        children: (0, o.jsx)(C.default, {
          isWaitingForConnection: !1,
          onWaitingForConnection: _,
          onAuthToken: h,
          onError: R,
          onClose: n
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(C.default, {
          isWaitingForConnection: !0,
          expectedCallbackState: p,
          onAuthToken: h,
          onError: R,
          onClose: n
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.DISCORD_CONSENT,
        children: (0, o.jsx)(r.default, {
          authToken: O,
          onContinue: T,
          onError: R,
          onClose: n
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.ERROR,
        children: (0, o.jsx)(a.default, {
          onContinue: T,
          onClose: n
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.TwoWayLinkModalSlideTypes.SUCCESS,
        children: (0, o.jsx)(d.default, {
          onClose: n
        })
      })]
    })
  })
}