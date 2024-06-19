t.r(n), t.d(n, {
  default: function() {
    return O
  }
});
var o = t(735250);
t(470079);
var s = t(481060),
  r = t(864762),
  i = t(509340),
  a = t(135184),
  c = t(409553),
  l = t(494801),
  d = t(319392),
  u = t(798930),
  C = t(981631),
  _ = t(985571);

function O(e) {
  let {
    transitionState: n,
    onClose: t,
    analyticsLocation: O
  } = e, {
    slide: x,
    gotoNext: N,
    gotoError: f,
    handleWaitingForConnection: g,
    handleAuthToken: h,
    expectedCallbackState: T,
    callbackData: E
  } = (0, r.k)(O, C.ABu.XBOX);
  return (0, o.jsx)(s.ModalRoot, {
    className: _.modal,
    transitionState: n,
    disableTrack: !0,
    children: (0, o.jsxs)(s.Slides, {
      activeSlide: x,
      width: 408,
      children: [(0, o.jsx)(s.Slide, {
        id: u.O.LANDING,
        children: (0, o.jsx)(c.Z, {
          onContinue: N,
          onClose: t
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.O.PRE_CONNECT,
        children: (0, o.jsx)(l.Z, {
          isWaitingForConnection: !1,
          onWaitingForConnection: g,
          onAuthToken: h,
          onError: f,
          onClose: t
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.O.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(l.Z, {
          isWaitingForConnection: !0,
          expectedCallbackState: T,
          onAuthToken: h,
          onError: f,
          onClose: t
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.O.DISCORD_CONSENT,
        children: (0, o.jsx)(i.Z, {
          authToken: E,
          onContinue: N,
          onError: f,
          onClose: t
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.O.ERROR,
        children: (0, o.jsx)(a.Z, {
          onContinue: N,
          onClose: t
        })
      }), (0, o.jsx)(s.Slide, {
        id: u.O.SUCCESS,
        children: (0, o.jsx)(d.Z, {
          onClose: t
        })
      })]
    })
  })
}