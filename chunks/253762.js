t.r(n), t.d(n, {
  default: function() {
    return T
  }
});
var i = t(735250);
t(470079);
var o = t(481060),
  s = t(864762),
  r = t(428681),
  C = t(42338),
  l = t(569932),
  a = t(555638),
  d = t(42011),
  c = t(798930),
  u = t(985571);

function T(e) {
  let {
    transitionState: n,
    onClose: t,
    analyticsLocation: T,
    platformType: N
  } = e, {
    slide: _,
    gotoNext: A,
    gotoError: S,
    handleWaitingForConnection: f,
    handleAuthToken: I,
    expectedCallbackState: h,
    callbackData: O
  } = (0, s.k)(T, N);
  return (0, i.jsx)(o.ModalRoot, {
    className: u.modal,
    transitionState: n,
    disableTrack: !0,
    children: (0, i.jsxs)(o.Slides, {
      activeSlide: _,
      width: 408,
      children: [(0, i.jsx)(o.Slide, {
        id: c.O.LANDING,
        children: (0, i.jsx)(l.A, {
          platformType: N,
          onContinue: A,
          onClose: t
        })
      }), (0, i.jsx)(o.Slide, {
        id: c.O.PRE_CONNECT,
        children: (0, i.jsx)(a.A, {
          platformType: N,
          isWaitingForConnection: !1,
          onWaitingForConnection: f,
          onAuthToken: I,
          onError: S,
          onClose: t
        })
      }), (0, i.jsx)(o.Slide, {
        id: c.O.PRE_CONNECT_WAITING,
        children: (0, i.jsx)(a.A, {
          platformType: N,
          isWaitingForConnection: !0,
          expectedCallbackState: h,
          onAuthToken: I,
          onError: S,
          onClose: t
        })
      }), (0, i.jsx)(o.Slide, {
        id: c.O.DISCORD_CONSENT,
        children: (0, i.jsx)(r.E, {
          platformType: N,
          authToken: O,
          onContinue: A,
          onError: S,
          onClose: t
        })
      }), (0, i.jsx)(o.Slide, {
        id: c.O.ERROR,
        children: (0, i.jsx)(C.X, {
          onContinue: A,
          onClose: t
        })
      }), (0, i.jsx)(o.Slide, {
        id: c.O.SUCCESS,
        children: (0, i.jsx)(d.W, {
          onClose: t
        })
      })]
    })
  })
}