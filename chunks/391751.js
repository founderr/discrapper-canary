"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("179137"),
  r = n("561359"),
  o = n("664336"),
  u = n("782340"),
  d = a.memo(function(e) {
    let {
      channel: t
    } = e, d = (0, i.useShouldShowSafetyToolsButtonForChannel)(t.id), c = a.useCallback(() => {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("161297").then(n.bind(n, "161297"));
        return t => (0, l.jsx)(e, {
          ...t
        })
      })
    }, []);
    return d ? (0, l.jsx)(o.default.Icon, {
      icon: r.default,
      onClick: c,
      tooltip: u.default.Messages.SAFETY_TOOLS_BUTTON_LABEL
    }) : null
  })