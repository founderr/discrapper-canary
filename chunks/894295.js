"use strict";
n.r(t), n.d(t, {
  InappropriateConversationWarningBanner: function() {
    return E
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("432710"),
  i = n("77078"),
  r = n("736964"),
  o = n("155084"),
  u = n("277734"),
  d = n("764828"),
  c = n("217736"),
  f = n("133829"),
  h = n("324252"),
  C = n("49111"),
  p = n("782340");

function E(e) {
  let {
    channelId: t,
    warningId: E,
    senderId: m
  } = e, g = s.useCallback(() => {
    (0, u.dismissChannelSafetyWarnings)(t, [E])
  }, [t, E]);
  s.useEffect(() => {
    (0, c.trackViewedEvent)(C.AnalyticEvents.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: E,
      senderId: m,
      warningType: d.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
    }), o.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [t, E, m]);
  let S = s.useCallback(() => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("161297").then(n.bind(n, "161297"));
        return t => {
          let {
            transitionState: n,
            onClose: s
          } = t;
          return (0, a.jsx)(e, {
            transitionState: n,
            onClose: s
          })
        }
      }), (0, c.trackCtaEvent)({
        channelId: t,
        warningId: E,
        senderId: m,
        warningType: d.SafetyWarningTypes.STRANGER_DANGER,
        cta: c.CtaEventTypes.OPEN_MORE_TIPS
      })
    }, [t, m, E]),
    _ = s.useCallback(e => () => {
      r.default.addRelationship({
        userId: m,
        context: {
          location: h.LOCATION_CONTEXT_WEB
        },
        type: C.RelationshipTypes.BLOCKED
      }), g(), (0, i.showToast)((0, i.createToast)(p.default.Messages.STRANGER_DANGER_BLOCK_CONFIRM, i.ToastType.SUCCESS)), (0, c.trackCtaEvent)({
        channelId: t,
        warningId: E,
        senderId: m,
        warningType: d.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
        cta: e
      })
    }, [g, t, E, m]),
    T = s.useCallback(() => {}, []),
    A = s.useCallback(e => {
      _(e)(), T()
    }, [T, _]),
    M = s.useCallback((e, s) => {
      (0, i.openModalLazy)(async () => {
        let {
          default: l
        } = await n.el("811578").then(n.bind(n, "811578"));
        return n => {
          let {
            transitionState: i,
            onClose: r
          } = n;
          return (0, a.jsx)(l, {
            transitionState: i,
            onBlock: _(e),
            onBlockAndReport: () => A(e),
            onCancel: () => {
              null == r || r(), (0, c.trackCtaEvent)({
                channelId: t,
                warningId: E,
                senderId: m,
                warningType: d.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
                cta: s
              })
            },
            onClose: r,
            userId: m
          })
        }
      })
    }, [_, A, m, t, E]);
  return (0, a.jsx)(f.SafetyWarningBanner, {
    channelId: t,
    warningId: E,
    senderId: m,
    warningType: d.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
    header: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
    description: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
    onDismiss: g,
    primaryButtonText: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
    primaryButtonColor: i.Button.Colors.BRAND,
    onPrimaryButtonClick: S,
    secondaryButtonText: p.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
    secondaryButtonColor: i.Button.Colors.PRIMARY,
    onSecondaryButtonClick: () => M(c.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM, c.CtaEventTypes.USER_BANNER_BLOCK_CANCEL)
  })
}