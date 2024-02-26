"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("774298"),
  r = n("13355"),
  u = n("217736"),
  o = n("561359"),
  d = n("664336"),
  c = n("324252"),
  f = n("782340"),
  h = a.memo(function(e) {
    let {
      channel: t
    } = e, a = (0, i.useInappropriateConversationSafetyToolsWarningForChannel)(t.id), h = null != (0, r.useSafetyToolsButtonTooltipForChannel)(t.id);
    return null == a ? null : (0, l.jsx)(d.default.Icon, {
      icon: o.default,
      onClick: () => {
        (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("161297").then(n.bind(n, "161297"));
          return n => {
            let {
              onClose: s,
              transitionState: i
            } = n;
            return (0, l.jsx)(e, {
              otherUserId: t.getRecipientId(),
              channelId: t.id,
              warningId: a.id,
              warningType: a.type,
              onClose: s,
              transitionState: i
            })
          }
        }, {
          modalKey: c.SAFETY_TOOLS_MODAL_KEY
        }), (0, u.trackCtaEvent)({
          channelId: t.id,
          senderId: t.getRecipientId(),
          warningId: a.id,
          warningType: a.type,
          cta: u.CtaEventTypes.USER_SAFETY_TOOLS_BUTTON_CLICK,
          isNudgeWarning: h
        })
      },
      tooltip: f.default.Messages.SAFETY_TOOLS_BUTTON_LABEL
    })
  })