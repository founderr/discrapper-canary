t.r(e), t.d(e, {
  default: function() {
return N;
  }
});
var o = t(735250);
t(470079);
var r = t(481060),
  i = t(864762),
  s = t(779341),
  c = t(642566),
  l = t(742699),
  a = t(686494),
  C = t(573703),
  u = t(798930),
  d = t(981631),
  _ = t(191364);

function N(n) {
  let {
transitionState: e,
onClose: t,
analyticsLocation: N
  } = n, {
slide: L,
gotoNext: R,
gotoError: h,
handleWaitingForConnection: x,
handleAuthToken: O,
expectedCallbackState: p,
callbackData: T
  } = (0, i.k)(N, d.ABu.CRUNCHYROLL);
  return (0, o.jsx)(r.ModalRoot, {
className: _.modal,
transitionState: e,
disableTrack: !0,
children: (0, o.jsxs)(r.Slides, {
  activeSlide: L,
  width: 408,
  children: [
    (0, o.jsx)(r.Slide, {
      id: u.O.LANDING,
      children: (0, o.jsx)(l.Z, {
        onContinue: R,
        onClose: t
      })
    }),
    (0, o.jsx)(r.Slide, {
      id: u.O.PRE_CONNECT,
      children: (0, o.jsx)(a.Z, {
        isWaitingForConnection: !1,
        onWaitingForConnection: x,
        onAuthToken: O,
        onError: h,
        onClose: t
      })
    }),
    (0, o.jsx)(r.Slide, {
      id: u.O.PRE_CONNECT_WAITING,
      children: (0, o.jsx)(a.Z, {
        isWaitingForConnection: !0,
        expectedCallbackState: p,
        onAuthToken: O,
        onError: h,
        onClose: t
      })
    }),
    (0, o.jsx)(r.Slide, {
      id: u.O.DISCORD_CONSENT,
      children: (0, o.jsx)(s.Z, {
        authToken: T,
        onContinue: R,
        onError: h,
        onClose: t
      })
    }),
    (0, o.jsx)(r.Slide, {
      id: u.O.ERROR,
      children: (0, o.jsx)(c.Z, {
        onContinue: R,
        onClose: t
      })
    }),
    (0, o.jsx)(r.Slide, {
      id: u.O.SUCCESS,
      children: (0, o.jsx)(C.Z, {
        onClose: t
      })
    })
  ]
})
  });
}