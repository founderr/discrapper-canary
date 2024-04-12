"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("143927"),
  i = a("481060"),
  r = a("207796"),
  o = a("689938"),
  u = a("860484");
t.default = function(e) {
  let {
    children: t
  } = e, a = (0, r.useClanDiscoveryUIStore)(e => e.setMode, l.default), d = s.useCallback(() => {
    a(r.ClanDiscoveryMode.DISCOVERY)
  }, [a]);
  return (0, n.jsxs)("div", {
    className: u.container,
    children: [(0, n.jsx)("div", {
      className: u.saveContainer,
      children: (0, n.jsx)(i.Button, {
        onClick: d,
        look: i.ButtonLooks.OUTLINED,
        color: i.ButtonColors.PRIMARY,
        children: o.default.Messages.SAVE
      })
    }), (0, n.jsx)(i.Scroller, {
      fade: !0,
      className: u.content,
      children: t
    })]
  })
}