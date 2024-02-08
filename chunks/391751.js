"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("179137"),
  i = n("561359"),
  r = n("664336"),
  u = n("782340"),
  o = l.memo(function(e) {
    let {
      channel: t
    } = e, n = (0, s.useShouldShowSafetyToolsButtonForChannel)(t.id), o = l.useCallback(() => {}, []);
    return n ? (0, a.jsx)(r.default.Icon, {
      icon: i.default,
      onClick: o,
      tooltip: u.default.Messages.SAFETY_TOOLS_BUTTON_LABEL
    }) : null
  })