"use strict";
n.d(t, {
  o: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(1561),
  l = n(743236),
  u = n(939350),
  _ = n(639897);

function c(e) {
  let {
    children: t,
    color: n = "default",
    isFocused: s = !1,
    disabled: c = !1,
    keepItemStyles: d = !1,
    menuItemProps: E,
    action: I,
    dontCloseOnActionIfHoldingShiftKey: T,
    dontCloseOnAction: h,
    onClose: f
  } = e, S = r.useRef(null);
  r.useEffect(() => {
    s && (0, l.F)(S)
  }, [s]);
  let A = r.useCallback(e => {
      if (null == I) return !1;
      !(e.shiftKey && T) && !h && f(), e.persist(), requestAnimationFrame(() => I(e))
    }, [I, f, T, h]),
    N = d ? o()(_.item, u._[n], {
      [_.focused]: s
    }) : _.customItem;
  return (0, i.jsx)(a.P, {
    innerRef: S,
    className: N,
    onClick: c ? void 0 : A,
    "aria-disabled": c,
    ...E,
    children: t({
      color: n,
      disabled: c,
      isFocused: s
    })
  })
}