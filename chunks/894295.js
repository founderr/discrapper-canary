"use strict";
n.r(t), n.d(t, {
  InappropriateConversationWarningBanner: function() {
    return p
  }
});
var s = n("37983"),
  a = n("884691"),
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
    senderId: m
  } = e, E = a.useCallback(() => {
    (0, o.dismissChannelSafetyWarnings)(t, [p])
  }, [t, p]);
  a.useEffect(() => {
    (0, d.trackViewedEvent)(h.AnalyticEvents.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: p,
      senderId: m,
      warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
    }), r.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [t, p, m]);
  let g = a.useCallback(e => {
      (0, d.trackCtaEvent)({
        channelId: t,
        warningId: p,
        senderId: m,
        warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
        cta: e
      })
    }, [t, p, m]),
    S = a.useCallback(() => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("161297").then(n.bind(n, "161297"));
        return n => {
          let {
            transitionState: a,
            onClose: l
          } = n;
          return (0, s.jsx)(e, {
            otherUserId: m,
            channelId: t,
            warningId: p,
            warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
            transitionState: a,
            onClose: l
          })
        }
      }, {
        modalKey: f.SAFETY_TOOLS_MODAL_KEY
      }), g(d.CtaEventTypes.USER_BANNER_OPEN_SAFETY_TOOLS)
    }, [t, m, p, g]),
    _ = a.useCallback(() => {
      E(), g(d.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM)
    }, [E, g]),
    T = a.useCallback(() => {
      E(), g(d.CtaEventTypes.USER_BANNER_BLOCK_AND_REPORT_CONFIRM)
    }, [E, g]),
    A = a.useCallback(() => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("811578").then(n.bind(n, "811578"));
        return n => {
          let {
            transitionState: a,
            onClose: l
          } = n;
          return (0, s.jsx)(e, {
            transitionState: a,
            onBlock: _,
            onBlockAndReport: T,
            onCancel: () => {
              null == l || l(), g(d.CtaEventTypes.USER_BANNER_BLOCK_CANCEL)
            },
            onClose: l,
            userId: m,
            channelId: t
          })
        }
      })
    }, [_, T, m, t, g]);
  return (0, s.jsx)(c.SafetyWarningBanner, {
    channelId: t,
    warningId: p,
    senderId: m,
    warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
    header: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
    description: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
    onDismiss: E,
    primaryButtonText: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
    primaryButtonColor: i.Button.Colors.BRAND,
    onPrimaryButtonClick: S,
    secondaryButtonText: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
    secondaryButtonColor: i.Button.Colors.PRIMARY,
    onSecondaryButtonClick: A
  })
}