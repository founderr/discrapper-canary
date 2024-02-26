"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("774298"),
  r = n("561359"),
  u = n("664336"),
  o = n("324252"),
  d = n("782340"),
  c = a.memo(function(e) {
    let {
      channel: t
    } = e, a = (0, i.useInappropriateConversationSafetyToolsWarningForChannel)(t.id);
    return null == a ? null : (0, l.jsx)(u.default.Icon, {
      icon: r.default,
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
          modalKey: o.SAFETY_TOOLS_MODAL_KEY
        })
      },
      tooltip: d.default.Messages.SAFETY_TOOLS_BUTTON_LABEL
    })
  })