"use strict";
n.r(t), n.d(t, {
  MenuCustomItem: function() {
    return d
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("227645"),
  l = n("697917"),
  u = n("389802"),
  c = n("639826");

function d(e) {
  let {
    children: t,
    color: n = "default",
    isFocused: s = !1,
    disabled: d = !1,
    keepItemStyles: p = !1,
    menuItemProps: h,
    action: f,
    dontCloseOnActionIfHoldingShiftKey: E,
    onClose: _
  } = e, m = r.useRef(null);
  r.useEffect(() => {
    s && (0, l.ensureItemVisible)(m)
  }, [s]);
  let S = r.useCallback(e => {
      if (null == f) return !1;
      !(e.shiftKey && E) && _(), e.persist(), requestAnimationFrame(() => f(e))
    }, [f, _, E]),
    g = p ? a(c.item, u.MENU_ITEM_COLORS[n], {
      [c.focused]: s
    }) : c.customItem;
  return (0, i.jsx)(o.Clickable, {
    innerRef: m,
    className: g,
    onClick: d ? void 0 : S,
    "aria-disabled": d,
    ...h,
    children: t({
      color: n,
      disabled: d,
      isFocused: s
    })
  })
}