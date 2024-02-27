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
  _ = s("277734"),
  l = s("217736"),
  u = s("13355"),
  E = s("271201"),
  c = s("330460"),
  d = s("763332"),
  T = s("417365");
(a = n || (n = {}))[a.INTRO = 0] = "INTRO", a[a.SAFETY_TIPS = 1] = "SAFETY_TIPS", a[a.TAKE_ACTION = 2] = "TAKE_ACTION";
var N = e => {
  let {
    warningId: t,
    warningType: s,
    senderId: n,
    modalProps: a,
    channelId: N
  } = e, R = null != (0, u.useSafetyToolsButtonTooltipForChannel)(N), [A, S] = r.useState(0), I = r.useCallback(e => {
    (0, l.trackCtaEvent)({
      channelId: N,
      senderId: n,
      warningId: t,
      warningType: s,
      cta: e,
      isNudgeWarning: R
    })
  }, [N, n, t, s, R]), [O, C] = r.useState(!1);

  function f(e) {
    S(e)
  }

  function p() {
    a.onClose(), (0, _.dismissChannelSafetyWarnings)(N, [t]), I(l.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS)
  }
  return (0, o.jsx)(i.ModalRoot, {
    transitionState: a.transitionState,
    children: (0, o.jsx)("div", {
      className: T.container,
      children: (0, o.jsxs)(i.Slides, {
        width: 440,
        activeSlide: A,
        centered: !1,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, o.jsx)(i.Slide, {
          id: 0,
          children: (0, o.jsx)(E.default, {
            warningId: t,
            senderId: n,
            onNavigate: f,
            onClose: p,
            trackAnalyticsEvent: I
          })
        }), (0, o.jsx)(i.Slide, {
          id: 1,
          children: (0, o.jsx)(c.default, {
            warningId: t,
            senderId: n,
            onNavigate: f,
            onClose: p
          })
        }), (0, o.jsx)(i.Slide, {
          id: 2,
          children: (0, o.jsx)(d.default, {
            warningId: t,
            senderId: n,
            channelId: N,
            onNavigate: f,
            onClose: p,
            hasReported: O,
            onReport: function() {
              C(!0)
            },
            trackAnalyticsEvent: I
          })
        })]
      })
    })
  })
}