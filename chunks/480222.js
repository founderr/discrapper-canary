"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("143927"),
  i = n("481060"),
  r = n("207796"),
  o = n("689938"),
  u = n("860484");
t.default = function(e) {
  let {
    children: t
  } = e, n = (0, r.useClanDiscoveryUIStore)(e => e.setMode, l.default), d = s.useCallback(() => {
    n(r.ClanDiscoveryMode.DISCOVERY)
  }, [n]);
  return (0, a.jsxs)("div", {
    className: u.container,
    children: [(0, a.jsx)("div", {
      className: u.saveContainer,
      children: (0, a.jsx)(i.Button, {
        onClick: d,
        look: i.ButtonLooks.OUTLINED,
        color: i.ButtonColors.PRIMARY,
        children: o.default.Messages.SAVE
      })
    }), (0, a.jsx)(i.Scroller, {
      fade: !0,
      className: u.content,
      children: t
    })]
  })
}