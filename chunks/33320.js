"use strict";
s.r(t), s.d(t, {
  InappropriateConversationModalSlideKeys: function() {
    return n
  },
  default: function() {
    return R
  }
}), s("222007");
var n, a, r = s("37983"),
  o = s("884691"),
  i = s("77078"),
  _ = s("277734"),
  l = s("217736"),
  u = s("13355"),
  E = s("271201"),
  c = s("330460"),
  d = s("763332"),
  T = s("417365");
(a = n || (n = {}))[a.INTRO = 0] = "INTRO", a[a.SAFETY_TIPS = 1] = "SAFETY_TIPS", a[a.TAKE_ACTION = 2] = "TAKE_ACTION";
var R = e => {
  let {
    warningId: t,
    warningType: s,
    senderId: n,
    modalProps: a,
    channelId: R
  } = e, N = null != (0, u.useSafetyToolsButtonTooltipForChannel)(R), [A, S] = o.useState(0), I = o.useCallback(e => {
    (0, l.trackCtaEvent)({
      channelId: R,
      senderId: n,
      warningId: t,
      warningType: s,
      cta: e,
      isNudgeWarning: N
    })
  }, [R, n, t, s, N]), [O, f] = o.useState(!1);

  function C(e) {
    S(e)
  }

  function p() {
    a.onClose(), (0, _.dismissChannelSafetyWarnings)(R, [t]), I(l.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS)
  }
  return (0, r.jsx)(i.ModalRoot, {
    transitionState: a.transitionState,
    children: (0, r.jsx)("div", {
      className: T.container,
      children: (0, r.jsxs)(i.Slides, {
        width: 440,
        activeSlide: A,
        centered: !1,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, r.jsx)(i.Slide, {
          id: 0,
          children: (0, r.jsx)(E.default, {
            warningId: t,
            senderId: n,
            onNavigate: C,
            onClose: p,
            trackAnalyticsEvent: I
          })
        }), (0, r.jsx)(i.Slide, {
          id: 1,
          children: (0, r.jsx)(c.default, {
            warningId: t,
            senderId: n,
            onNavigate: C,
            onClose: p
          })
        }), (0, r.jsx)(i.Slide, {
          id: 2,
          children: (0, r.jsx)(d.default, {
            warningId: t,
            senderId: n,
            channelId: R,
            onNavigate: C,
            onClose: p,
            hasReported: O,
            onReport: function() {
              f(!0)
            },
            trackAnalyticsEvent: I
          })
        })]
      })
    })
  })
}