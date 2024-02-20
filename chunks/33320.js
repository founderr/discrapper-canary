"use strict";
s.r(t), s.d(t, {
  InappropriateConversationModalSlideKeys: function() {
    return n
  },
  default: function() {
    return N
  }
}), s("222007");
var n, a, o = s("37983"),
  r = s("884691"),
  i = s("77078"),
  l = s("271201"),
  u = s("330460"),
  c = s("763332"),
  d = s("417365");
(a = n || (n = {}))[a.INTRO = 0] = "INTRO", a[a.SAFETY_TIPS = 1] = "SAFETY_TIPS", a[a.TAKE_ACTION = 2] = "TAKE_ACTION";
var N = e => {
  let {
    warningId: t,
    senderId: s,
    modalProps: n,
    channelId: a
  } = e, [N, I] = r.useState(0), [T, E] = r.useState(!1);

  function R(e) {
    I(e)
  }

  function A() {
    n.onClose()
  }
  return (0, o.jsx)(i.ModalRoot, {
    transitionState: n.transitionState,
    children: (0, o.jsx)("div", {
      className: d.container,
      children: (0, o.jsxs)(i.Slides, {
        width: 440,
        activeSlide: N,
        centered: !1,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, o.jsx)(i.Slide, {
          id: 0,
          children: (0, o.jsx)(l.default, {
            warningId: t,
            senderId: s,
            onNavigate: R,
            onClose: A
          })
        }), (0, o.jsx)(i.Slide, {
          id: 1,
          children: (0, o.jsx)(u.default, {
            warningId: t,
            senderId: s,
            onNavigate: R,
            onClose: A
          })
        }), (0, o.jsx)(i.Slide, {
          id: 2,
          children: (0, o.jsx)(c.default, {
            warningId: t,
            senderId: s,
            channelId: a,
            onNavigate: R,
            onClose: A,
            hasReported: T,
            onReport: function() {
              E(!0)
            }
          })
        })]
      })
    })
  })
}