"use strict";
n.r(t), n.d(t, {
  InappropriateConversationWarningBanner: function() {
    return p
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("432710"),
  i = n("77078"),
  r = n("155084"),
  o = n("277734"),
  u = n("764828"),
  d = n("217736"),
  c = n("133829"),
  f = n("324252"),
  h = n("49111"),
  C = n("782340");

function p(e) {
  let {
    channelId: t,
    warningId: p,
    senderId: E
  } = e, m = s.useCallback(() => {
    (0, o.dismissChannelSafetyWarnings)(t, [p])
  }, [t, p]);
  s.useEffect(() => {
    (0, d.trackViewedEvent)(h.AnalyticEvents.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: p,
      senderId: E,
      warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
    }), r.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [t, p, E]);
  let g = s.useCallback(e => {
      (0, d.trackCtaEvent)({
        channelId: t,
        warningId: p,
        senderId: E,
        warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
        cta: e
      })
    }, [t, p, E]),
    _ = s.useCallback(() => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("161297").then(n.bind(n, "161297"));
        return n => {
          let {
            transitionState: s,
            onClose: l
          } = n;
          return (0, a.jsx)(e, {
            otherUserId: E,
            channelId: t,
            warningId: p,
            warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
            transitionState: s,
            onClose: l
          })
        }
      }, {
        modalKey: f.SAFETY_TOOLS_MODAL_KEY
      }), g(d.CtaEventTypes.USER_BANNER_OPEN_SAFETY_TOOLS)
    }, [t, E, p, g]),
    S = s.useCallback(() => {
      m(), g(d.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM)
    }, [m, g]),
    T = s.useCallback(() => {
      m(), g(d.CtaEventTypes.USER_BANNER_BLOCK_AND_REPORT_CONFIRM)
    }, [m, g]),
    A = s.useCallback(() => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("811578").then(n.bind(n, "811578"));
        return n => {
          let {
            transitionState: s,
            onClose: l
          } = n;
          return (0, a.jsx)(e, {
            transitionState: s,
            onBlock: S,
            onBlockAndReport: T,
            onCancel: () => {
              null == l || l(), g(d.CtaEventTypes.USER_BANNER_BLOCK_CANCEL)
            },
            onClose: l,
            userId: E,
            channelId: t
          })
        }
      })
    }, [S, T, E, t, g]);
  return (0, a.jsx)(c.SafetyWarningBanner, {
    channelId: t,
    warningId: p,
    senderId: E,
    warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
    header: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
    description: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
    onDismiss: m,
    primaryButtonText: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
    primaryButtonColor: i.Button.Colors.BRAND,
    onPrimaryButtonClick: _,
    secondaryButtonText: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
    secondaryButtonColor: i.Button.Colors.PRIMARY,
    onSecondaryButtonClick: A
  })
}