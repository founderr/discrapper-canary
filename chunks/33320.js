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
  l = s("277734"),
  u = s("217736"),
  _ = s("13355"),
  c = s("271201"),
  d = s("330460"),
  E = s("763332"),
  T = s("417365");
(a = n || (n = {}))[a.INTRO = 0] = "INTRO", a[a.SAFETY_TIPS = 1] = "SAFETY_TIPS", a[a.TAKE_ACTION = 2] = "TAKE_ACTION";
var N = e => {
  let {
    warningId: t,
    warningType: s,
    senderId: n,
    modalProps: a,
    channelId: N
  } = e, I = null != (0, _.useSafetyToolsButtonTooltipForChannel)(N), [R, S] = r.useState(0), [A, f] = r.useState(!1);

  function C(e) {
    S(e)
  }

  function O() {
    a.onClose(), (0, l.dismissChannelSafetyWarnings)(N, [t]), (0, u.trackCtaEvent)({
      channelId: N,
      senderId: n,
      warningId: t,
      warningType: s,
      cta: u.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS,
      isNudgeWarning: I
    })
  }
  return (0, o.jsx)(i.ModalRoot, {
    transitionState: a.transitionState,
    children: (0, o.jsx)("div", {
      className: T.container,
      children: (0, o.jsxs)(i.Slides, {
        width: 440,
        activeSlide: R,
        centered: !1,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, o.jsx)(i.Slide, {
          id: 0,
          children: (0, o.jsx)(c.default, {
            warningId: t,
            senderId: n,
            onNavigate: C,
            onClose: O
          })
        }), (0, o.jsx)(i.Slide, {
          id: 1,
          children: (0, o.jsx)(d.default, {
            warningId: t,
            senderId: n,
            onNavigate: C,
            onClose: O
          })
        }), (0, o.jsx)(i.Slide, {
          id: 2,
          children: (0, o.jsx)(E.default, {
            warningId: t,
            senderId: n,
            channelId: N,
            onNavigate: C,
            onClose: O,
            hasReported: A,
            onReport: function() {
              f(!0)
            }
          })
        })]
      })
    })
  })
}