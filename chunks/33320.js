"use strict";
s.r(t), s.d(t, {
  InappropriateConversationModalSlideKeys: function() {
    return n
  },
  default: function() {
    return N
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
var N = e => {
  let {
    warningId: t,
    warningType: s,
    senderId: n,
    modalProps: a,
    channelId: N
  } = e, A = null != (0, u.useSafetyToolsButtonTooltipForChannel)(N), [R, S] = o.useState(0), I = o.useMemo(() => ({
    channelId: N,
    senderId: n,
    warningId: t,
    warningType: s,
    isNudgeWarning: A
  }), [N, n, t, s, A]);
  o.useEffect(() => {
    (0, l.trackNamedViewEvent)({
      ...I,
      viewName: l.ViewNameTypes.SAFETY_TAKEOVER_MODAL
    })
  }, [I]);
  let O = o.useCallback(e => {
      (0, l.trackCtaEvent)({
        ...I,
        cta: e
      })
    }, [I]),
    [f, C] = o.useState(!1);

  function p(e) {
    S(e)
  }

  function m() {
    a.onClose(), (0, _.dismissChannelSafetyWarnings)(N, [t]), O(l.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS)
  }
  return (0, r.jsx)(i.ModalRoot, {
    transitionState: a.transitionState,
    children: (0, r.jsx)("div", {
      className: T.container,
      children: (0, r.jsxs)(i.Slides, {
        width: 440,
        activeSlide: R,
        centered: !1,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, r.jsx)(i.Slide, {
          id: 0,
          children: (0, r.jsx)(E.default, {
            warningId: t,
            senderId: n,
            onNavigate: p,
            onClose: m,
            trackAnalyticsEvent: O
          })
        }), (0, r.jsx)(i.Slide, {
          id: 1,
          children: (0, r.jsx)(c.default, {
            warningId: t,
            senderId: n,
            onNavigate: p,
            onClose: m
          })
        }), (0, r.jsx)(i.Slide, {
          id: 2,
          children: (0, r.jsx)(d.default, {
            warningId: t,
            senderId: n,
            channelId: N,
            onNavigate: p,
            onClose: m,
            hasReported: f,
            onReport: function() {
              C(!0)
            },
            trackAnalyticsEvent: O
          })
        })]
      })
    })
  })
}