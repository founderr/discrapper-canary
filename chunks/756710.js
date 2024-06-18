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
  _ = n(768160);

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
    onClose: S
  } = e, f = r.useRef(null);
  r.useEffect(() => {
    s && (0, l.F)(f)
  }, [s]);
  let N = r.useCallback(e => {
      if (null == I) return !1;
      !(e.shiftKey && T) && !h && S(), e.persist(), requestAnimationFrame(() => I(e))
    }, [I, S, T, h]),
    A = d ? o()(_.item, u._[n], {
      [_.focused]: s
    }) : _.customItem;
  return (0, i.jsx)(a.P, {
    innerRef: f,
    className: A,
    onClick: c ? void 0 : N,
    "aria-disabled": c,
    ...E,
    children: t({
      color: n,
      disabled: c,
      isFocused: s
    })
  })
}