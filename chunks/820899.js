"use strict";
n.r(t), n.d(t, {
  StrangerDangerWarningBanner: function() {
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
  }, [t, E]), S = s.useCallback(e => () => {
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
      warningType: d.SafetyWarningTypes.STRANGER_DANGER,
      cta: e
    })
  }, [g, t, E, m]);
  s.useEffect(() => {
    (0, c.trackViewedEvent)(C.AnalyticEvents.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: E,
      senderId: m,
      warningType: d.SafetyWarningTypes.STRANGER_DANGER
    }), o.default.increment({
      name: l.MetricEvents.SAFETY_WARNING_VIEW
    })
  }, [t, E, m]);
  let _ = () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("664639").then(n.bind(n, "664639"));
        return n => {
          let {
            transitionState: s,
            onClose: l
          } = n;
          return (0, a.jsx)(e, {
            transitionState: s,
            onClose: l,
            channelId: t,
            warningId: E,
            senderId: m,
            handleBlock: () => {
              T(c.CtaEventTypes.USER_MODAL_BLOCK_CONFIRM, c.CtaEventTypes.USER_MODAL_BLOCK_CANCEL, _)
            }
          })
        }
      })
    },
    T = (e, s, l) => {
      (0, i.openModalLazy)(async () => {
        let {
          default: i
        } = await n.el("968710").then(n.bind(n, "968710"));
        return n => (0, a.jsx)(i, {
          ...n,
          userId: m,
          confirmBlock: S(e),
          onCancel: () => {
            null == l || l(), (0, c.trackCtaEvent)({
              channelId: t,
              warningId: E,
              senderId: m,
              warningType: d.SafetyWarningTypes.STRANGER_DANGER,
              cta: s
            })
          }
        })
      })
    };
  return (0, a.jsx)(f.SafetyWarningBanner, {
    channelId: t,
    warningId: E,
    senderId: m,
    warningType: d.SafetyWarningTypes.STRANGER_DANGER,
    header: p.default.Messages.STRANGER_DANGER_BANNER_HEADER,
    description: p.default.Messages.STRANGER_DANGER_BANNER_DESCRIPTION,
    onDismiss: g,
    primaryButtonText: p.default.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
    primaryButtonColor: i.Button.Colors.BRAND,
    onPrimaryButtonClick: () => {
      _(), (0, c.trackCtaEvent)({
        channelId: t,
        warningId: E,
        senderId: m,
        warningType: d.SafetyWarningTypes.STRANGER_DANGER,
        cta: c.CtaEventTypes.OPEN_MORE_TIPS
      })
    },
    secondaryButtonText: p.default.Messages.STRANGER_DANGER_BANNER_BLOCK,
    secondaryButtonColor: i.Button.Colors.RED,
    onSecondaryButtonClick: () => T(c.CtaEventTypes.USER_BANNER_BLOCK_CONFIRM, c.CtaEventTypes.USER_BANNER_BLOCK_CANCEL)
  })
}