t.r(e), t.d(e, {
  default: function() {
    return L
  }
});
var o = t(735250);
t(470079);
var i = t(481060),
  r = t(864762),
  s = t(779341),
  C = t(642566),
  c = t(742699),
  a = t(686494),
  l = t(573703),
  d = t(798930),
  u = t(981631),
  N = t(985571);

function L(n) {
  let {
    transitionState: e,
    onClose: t,
    analyticsLocation: L
  } = n, {
    slide: R,
    gotoNext: O,
    gotoError: _,
    handleWaitingForConnection: h,
    handleAuthToken: x,
    expectedCallbackState: T,
    callbackData: E
  } = (0, r.k)(L, u.ABu.CRUNCHYROLL);
  return (0, o.jsx)(i.ModalRoot, {
    className: N.modal,
    transitionState: e,
    disableTrack: !0,
    children: (0, o.jsxs)(i.Slides, {
      activeSlide: R,
      width: 408,
      children: [(0, o.jsx)(i.Slide, {
        id: d.O.LANDING,
        children: (0, o.jsx)(c.Z, {
          onContinue: O,
          onClose: t
        })
      }), (0, o.jsx)(i.Slide, {
        id: d.O.PRE_CONNECT,
        children: (0, o.jsx)(a.Z, {
          isWaitingForConnection: !1,
          onWaitingForConnection: h,
          onAuthToken: x,
          onError: _,
          onClose: t
        })
      }), (0, o.jsx)(i.Slide, {
        id: d.O.PRE_CONNECT_WAITING,
        children: (0, o.jsx)(a.Z, {
          isWaitingForConnection: !0,
          expectedCallbackState: T,
          onAuthToken: x,
          onError: _,
          onClose: t
        })
      }), (0, o.jsx)(i.Slide, {
        id: d.O.DISCORD_CONSENT,
        children: (0, o.jsx)(s.Z, {
          authToken: E,
          onContinue: O,
          onError: _,
          onClose: t
        })
      }), (0, o.jsx)(i.Slide, {
        id: d.O.ERROR,
        children: (0, o.jsx)(C.Z, {
          onContinue: O,
          onClose: t
        })
      }), (0, o.jsx)(i.Slide, {
        id: d.O.SUCCESS,
        children: (0, o.jsx)(l.Z, {
          onClose: t
        })
      })]
    })
  })
}