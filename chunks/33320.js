"use strict";
s.r(t), s.d(t, {
  InappropriateConversationModalSlideKeys: function() {
    return n
  },
  default: function() {
    return N
  }
}), s("222007");
var n, o, a = s("37983"),
  r = s("884691"),
  i = s("77078"),
  l = s("271201"),
  u = s("330460"),
  d = s("763332"),
  c = s("215909");
(o = n || (n = {}))[o.INTRO = 0] = "INTRO", o[o.SAFETY_TIPS = 1] = "SAFETY_TIPS", o[o.TAKE_ACTION = 2] = "TAKE_ACTION";
var N = e => {
  let {
    warningId: t,
    senderId: s,
    modalProps: n
  } = e, [o, N] = r.useState(0), [I, E] = r.useState(!1);

  function T(e) {
    N(e)
  }

  function A() {
    n.onClose()
  }
  return (0, a.jsx)(i.ModalRoot, {
    transitionState: n.transitionState,
    children: (0, a.jsx)("div", {
      className: c.container,
      children: (0, a.jsxs)(i.Slides, {
        width: 440,
        activeSlide: o,
        centered: !1,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, a.jsx)(i.Slide, {
          id: 0,
          children: (0, a.jsx)(l.default, {
            warningId: t,
            senderId: s,
            onNavigate: T,
            onClose: A
          })
        }), (0, a.jsx)(i.Slide, {
          id: 1,
          children: (0, a.jsx)(u.default, {
            warningId: t,
            senderId: s,
            onNavigate: T,
            onClose: A
          })
        }), (0, a.jsx)(i.Slide, {
          id: 2,
          children: (0, a.jsx)(d.default, {
            warningId: t,
            senderId: s,
            onNavigate: T,
            onClose: A,
            hasReported: I,
            onReport: function() {
              E(!0)
            }
          })
        })]
      })
    })
  })
}