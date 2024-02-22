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
    senderId: m
  } = e, E = s.useCallback(() => {
    (0, o.dismissChannelSafetyWarnings)(t, [p])
  }, [t, p]);
  s.useEffect(() => {
    (0, d.trackViewedEvent)(h.AnalyticEvents.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: p,
      senderId: m,
      warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
    }), r.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [t, p, m]);
  let g = s.useCallback(() => {
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
            otherUserId: m,
            channelId: t,
            transitionState: s,
            onClose: l
          })
        }
      }, {
        modalKey: f.SAFETY_TOOLS_MODAL_KEY
      }), (0, d.trackCtaEvent)({
        channelId: t,
        warningId: p,
        senderId: m,
        warningType: u.SafetyWarningTypes.STRANGER_DANGER,
        cta: d.CtaEventTypes.OPEN_MORE_TIPS
      })
    }, [t, m, p]),
    S = s.useCallback(() => {
      E(), (0, d.trackCtaEvent)({
        channelId: t,
        warningId: p,
        senderId: m,
        warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
        cta: d.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM
      })
    }, [E, t, p, m]),
    _ = s.useCallback(() => {
      E()
    }, [E]),
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
            onBlockAndReport: _,
            onCancel: () => {
              null == l || l(), (0, d.trackCtaEvent)({
                channelId: t,
                warningId: p,
                senderId: m,
                warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
                cta: d.CtaEventTypes.USER_BANNER_BLOCK_CANCEL
              })
            },
            onClose: l,
            userId: m,
            channelId: t
          })
        }
      })
    }, [S, _, m, t, p]);
  return (0, a.jsx)(c.SafetyWarningBanner, {
    channelId: t,
    warningId: p,
    senderId: m,
    warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
    header: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
    description: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
    onDismiss: E,
    primaryButtonText: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
    primaryButtonColor: i.Button.Colors.BRAND,
    onPrimaryButtonClick: g,
    secondaryButtonText: C.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
    secondaryButtonColor: i.Button.Colors.PRIMARY,
    onSecondaryButtonClick: A
  })
}