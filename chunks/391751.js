"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("277734"),
  r = n("774298"),
  u = n("13355"),
  o = n("217736"),
  d = n("561359"),
  c = n("664336"),
  f = n("324252"),
  h = n("782340"),
  m = n("209515"),
  p = a.memo(function(e) {
    let {
      channel: t
    } = e, p = (0, r.useInappropriateConversationSafetyToolsWarningForChannel)(t.id), E = (0, u.useSafetyToolsButtonTooltipForChannel)(t.id);
    a.useEffect(() => {
      null != E && null != p && (s.AccessibilityAnnouncer.announce(h.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TOOLTIP_ANNOUNCEMENT), setTimeout(() => {
        (0, i.dismissChannelSafetyWarnings)(t.id, [E.id])
      }, 5e3), (0, o.trackNamedViewEvent)({
        channelId: t.id,
        senderId: t.getRecipientId(),
        warningId: p.id,
        warningType: p.type,
        isNudgeWarning: null != E,
        viewName: o.ViewNameTypes.SAFETY_TOOLS_NUDGE_TOOLTIP
      }))
    }, [t, p, E]), a.useEffect(() => {
      null != p && (0, o.trackNamedViewEvent)({
        channelId: t.id,
        senderId: t.getRecipientId(),
        warningId: p.id,
        warningType: p.type,
        isNudgeWarning: null != E,
        viewName: o.ViewNameTypes.SAFETY_TOOLS_BUTTON
      })
    }, []);
    let g = a.useCallback(() => {
      null != E && (0, i.dismissChannelSafetyWarnings)(t.id, [E.id]), null != p && ((0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("161297").then(n.bind(n, "161297"));
        return n => {
          let {
            onClose: a,
            transitionState: s
          } = n;
          return (0, l.jsx)(e, {
            otherUserId: t.getRecipientId(),
            channelId: t.id,
            warningId: p.id,
            warningType: p.type,
            onClose: a,
            transitionState: s
          })
        }
      }, {
        modalKey: f.SAFETY_TOOLS_MODAL_KEY
      }), (0, o.trackCtaEvent)({
        channelId: t.id,
        senderId: t.getRecipientId(),
        warningId: p.id,
        warningType: p.type,
        cta: o.CtaEventTypes.USER_SAFETY_TOOLS_BUTTON_CLICK,
        isNudgeWarning: null != E
      }))
    }, [t, p, E]);
    return null == p ? null : (0, l.jsx)(s.Tooltip, {
      text: h.default.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TOOLTIP,
      color: s.TooltipColors.BRAND,
      position: "bottom",
      tooltipClassName: m.tooltip,
      tooltipContentClassName: m.tooltipContent,
      forceOpen: null != E,
      children: () => (0, l.jsx)(c.default.Icon, {
        icon: d.default,
        onClick: g,
        tooltip: h.default.Messages.SAFETY_TOOLS_BUTTON_LABEL,
        tooltipDisabled: null != E
      })
    })
  })