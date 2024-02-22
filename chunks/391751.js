"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("179137"),
  r = n("561359"),
  u = n("664336"),
  o = n("324252"),
  d = n("782340"),
  c = a.memo(function(e) {
    let {
      channel: t
    } = e, c = (0, i.useShouldShowSafetyToolsButtonForChannel)(t.id), f = a.useCallback(() => {
      (0, s.openModalLazy)(async () => {
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
            onClose: a,
            transitionState: s
          })
        }
      }, {
        modalKey: o.SAFETY_TOOLS_MODAL_KEY
      })
    }, [t]);
    return c ? (0, l.jsx)(u.default.Icon, {
      icon: r.default,
      onClick: f,
      tooltip: d.default.Messages.SAFETY_TOOLS_BUTTON_LABEL
    }) : null
  })