"use strict";
n.r(t), n.d(t, {
  MenuCustomItem: function() {
    return c
  }
});
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("227645"),
  l = n("697917"),
  u = n("389802"),
  d = n("946032");

function c(e) {
  let {
    children: t,
    color: n = "default",
    isFocused: r = !1,
    disabled: c = !1,
    keepItemStyles: f = !1,
    menuItemProps: _,
    action: h,
    dontCloseOnActionIfHoldingShiftKey: g,
    onClose: m
  } = e, E = s.useRef(null);
  s.useEffect(() => {
    r && (0, l.ensureItemVisible)(E)
  }, [r]);
  let p = s.useCallback(e => {
      if (null == h) return !1;
      !(e.shiftKey && g) && m(), e.persist(), requestAnimationFrame(() => h(e))
    }, [h, m, g]),
    v = f ? a(d.item, u.MENU_ITEM_COLORS[n], {
      [d.focused]: r
    }) : d.customItem;
  return (0, i.jsx)(o.Clickable, {
    innerRef: E,
    className: v,
    onClick: c ? void 0 : p,
    "aria-disabled": c,
    ..._,
    children: t({
      color: n,
      disabled: c,
      isFocused: r
    })
  })
}