"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("179137"),
  i = n("561359"),
  r = n("664336"),
  o = n("782340"),
  u = l.memo(function(e) {
    let {
      channel: t
    } = e, n = (0, s.useShouldShowSafetyToolsButtonForChannel)(t.id), u = l.useCallback(() => {}, []);
    return n ? (0, a.jsx)(r.default.Icon, {
      icon: i.default,
      onClick: u,
      tooltip: o.default.Messages.SAFETY_TOOLS_BUTTON_LABEL
    }) : null
  })