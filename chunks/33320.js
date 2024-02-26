"use strict";
s.r(t), s.d(t, {
  InappropriateConversationModalSlideKeys: function() {
    return n
  },
  default: function() {
    return I
  }
}), s("222007");
var n, a, o = s("37983"),
  r = s("884691"),
  i = s("77078"),
  l = s("277734"),
  u = s("271201"),
  c = s("330460"),
  d = s("763332"),
  N = s("417365");
(a = n || (n = {}))[a.INTRO = 0] = "INTRO", a[a.SAFETY_TIPS = 1] = "SAFETY_TIPS", a[a.TAKE_ACTION = 2] = "TAKE_ACTION";
var I = e => {
  let {
    warningId: t,
    senderId: s,
    modalProps: n,
    channelId: a
  } = e, [I, E] = r.useState(0), [T, A] = r.useState(!1);

  function R(e) {
    E(e)
  }

  function f() {
    n.onClose(), (0, l.dismissChannelSafetyWarnings)(a, [t])
  }
  return (0, o.jsx)(i.ModalRoot, {
    transitionState: n.transitionState,
    children: (0, o.jsx)("div", {
      className: N.container,
      children: (0, o.jsxs)(i.Slides, {
        width: 440,
        activeSlide: I,
        centered: !1,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, o.jsx)(i.Slide, {
          id: 0,
          children: (0, o.jsx)(u.default, {
            warningId: t,
            senderId: s,
            onNavigate: R,
            onClose: f
          })
        }), (0, o.jsx)(i.Slide, {
          id: 1,
          children: (0, o.jsx)(c.default, {
            warningId: t,
            senderId: s,
            onNavigate: R,
            onClose: f
          })
        }), (0, o.jsx)(i.Slide, {
          id: 2,
          children: (0, o.jsx)(d.default, {
            warningId: t,
            senderId: s,
            channelId: a,
            onNavigate: R,
            onClose: f,
            hasReported: T,
            onReport: function() {
              A(!0)
            }
          })
        })]
      })
    })
  })
}