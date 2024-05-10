"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("143927"),
  l = n("481060"),
  r = n("207796"),
  o = n("420212"),
  u = n("689938"),
  d = n("885107");
t.default = function(e) {
  let {
    children: t
  } = e, n = (0, r.useClanDiscoveryUIStore)(e => e.setMode, i.default), c = s.useCallback(() => {
    n(r.ClanDiscoveryMode.DISCOVERY)
  }, [n]);
  return s.useEffect(() => {
    let e = e => {
      e.key === o.KeyboardKeysUpdated.ESCAPE && n(r.ClanDiscoveryMode.DISCOVERY)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [n]), (0, a.jsxs)("div", {
    className: d.container,
    children: [(0, a.jsx)("div", {
      className: d.saveContainer,
      children: (0, a.jsx)(l.Button, {
        onClick: c,
        look: l.ButtonLooks.OUTLINED,
        color: l.ButtonColors.PRIMARY,
        children: u.default.Messages.SAVE
      })
    }), (0, a.jsx)("div", {
      className: d.contentWrapper,
      children: (0, a.jsx)(l.Scroller, {
        fade: !0,
        className: d.content,
        children: t
      })
    })]
  })
}