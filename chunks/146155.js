"use strict";
n.r(t), n.d(t, {
  MenuRadioItem: function() {
    return f
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("227645"),
  l = n("199285"),
  u = n("697917"),
  c = n("904276"),
  d = n("875436"),
  p = n("389802"),
  h = n("639826");

function f(e) {
  let {
    color: t = "default",
    label: n,
    checked: s,
    subtext: f,
    disabled: E,
    isFocused: _,
    menuItemProps: m,
    action: S
  } = e, g = r.useRef(null);
  return r.useEffect(() => {
    _ && (0, u.ensureItemVisible)(g)
  }, [_]), (0, i.jsxs)(o.Clickable, {
    innerRef: g,
    className: a(h.item, h.labelContainer, p.MENU_ITEM_COLORS[t], {
      [h.disabled]: E,
      [h.focused]: _
    }),
    onClick: E ? void 0 : S,
    ...m,
    "aria-checked": s,
    "aria-disabled": E,
    children: [(0, i.jsxs)("div", {
      className: h.label,
      children: [(0, l.renderSubnode)(n, e), null != f && (0, i.jsx)("div", {
        className: h.subtext,
        children: f
      })]
    }), (0, i.jsx)("div", {
      className: h.iconContainer,
      children: s ? (0, i.jsx)(d.default, {
        className: h.icon,
        background: h.radio,
        foreground: h.radioSelection
      }) : (0, i.jsx)(c.default, {
        className: h.icon,
        foreground: h.radio
      })
    })]
  })
}