"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  i = n("179137"),
  r = n("561359"),
  o = n("664336"),
  u = n("782340"),
  d = l.memo(function(e) {
    let {
      channel: t
    } = e, d = (0, i.useShouldShowSafetyToolsButtonForChannel)(t.id), c = l.useCallback(() => {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("161297").then(n.bind(n, "161297"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    }, []);
    return d ? (0, a.jsx)(o.default.Icon, {
      icon: r.default,
      onClick: c,
      tooltip: u.default.Messages.SAFETY_TOOLS_BUTTON_LABEL
    }) : null
  })