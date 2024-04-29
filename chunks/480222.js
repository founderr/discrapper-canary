"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("143927"),
  i = a("481060"),
  r = a("207796"),
  o = a("420212"),
  u = a("689938"),
  d = a("885107");
t.default = function(e) {
  let {
    children: t
  } = e, a = (0, r.useClanDiscoveryUIStore)(e => e.setMode, l.default), c = s.useCallback(() => {
    a(r.ClanDiscoveryMode.DISCOVERY)
  }, [a]);
  return s.useEffect(() => {
    let e = e => {
      e.key === o.KeyboardKeysUpdated.ESCAPE && a(r.ClanDiscoveryMode.DISCOVERY)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [a]), (0, n.jsxs)("div", {
    className: d.container,
    children: [(0, n.jsx)("div", {
      className: d.saveContainer,
      children: (0, n.jsx)(i.Button, {
        onClick: c,
        look: i.ButtonLooks.OUTLINED,
        color: i.ButtonColors.PRIMARY,
        children: u.default.Messages.SAVE
      })
    }), (0, n.jsx)("div", {
      className: d.contentWrapper,
      children: (0, n.jsx)(i.Scroller, {
        fade: !0,
        className: d.content,
        children: t
      })
    })]
  })
}