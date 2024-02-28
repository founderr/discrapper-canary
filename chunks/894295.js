"use strict";
n.r(t), n.d(t, {
  InappropriateConversationWarningBanner: function() {
    return C
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
  h = n("782340");

function C(e) {
  let {
    channelId: t,
    warningId: C,
    senderId: p
  } = e, E = s.useCallback(() => {
    (0, o.dismissChannelSafetyWarnings)(t, [C])
  }, [t, C]), m = s.useMemo(() => ({
    channelId: t,
    warningId: C,
    senderId: p,
    warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2
  }), [t, C, p]);
  s.useEffect(() => {
    (0, d.trackNamedViewEvent)({
      ...m,
      viewName: d.ViewNameTypes.SAFETY_WARNING_BANNER
    }), r.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [m]);
  let g = s.useCallback(e => {
      (0, d.trackCtaEvent)({
        ...m,
        cta: e
      })
    }, [m]),
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
            otherUserId: p,
            channelId: t,
            warningId: C,
            warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
            transitionState: s,
            onClose: l
          })
        }
      }, {
        modalKey: f.SAFETY_TOOLS_MODAL_KEY
      }), g(d.CtaEventTypes.USER_BANNER_OPEN_SAFETY_TOOLS)
    }, [t, p, C, g]),
    S = s.useCallback(() => {
      E(), g(d.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM)
    }, [E, g]),
    T = s.useCallback(() => {
      E(), g(d.CtaEventTypes.USER_BANNER_BLOCK_AND_REPORT_CONFIRM)
    }, [E, g]),
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
            userId: p,
            channelId: t
          })
        }
      })
    }, [S, T, p, t, g]);
  return (0, a.jsx)(c.SafetyWarningBanner, {
    channelId: t,
    warningId: C,
    senderId: p,
    warningType: u.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2,
    header: h.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
    description: h.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
    onDismiss: E,
    primaryButtonText: h.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
    primaryButtonColor: i.Button.Colors.BRAND,
    onPrimaryButtonClick: _,
    secondaryButtonText: h.default.Messages.INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
    secondaryButtonColor: i.Button.Colors.PRIMARY,
    onSecondaryButtonClick: A
  })
}