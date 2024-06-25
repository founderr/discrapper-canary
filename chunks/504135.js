"use strict";
n.d(t, {
  s: function() {
    return I
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(1561),
  l = n(761224),
  u = n(898560),
  _ = n(743236),
  c = n(481060),
  d = n(939350),
  E = n(639897);

function I(e) {
  let {
    color: t = "default",
    label: n,
    icon: s,
    showIconFirst: I = !1,
    imageUrl: T,
    hint: h,
    subtext: f,
    hasSubmenu: S,
    disabled: A,
    isFocused: N,
    menuItemProps: m,
    action: O,
    onClose: p,
    onFocus: R,
    className: g,
    focusedClassName: C,
    subMenuIconClassName: v,
    dontCloseOnActionIfHoldingShiftKey: L,
    dontCloseOnAction: D,
    iconProps: M,
    sparkle: P
  } = e, y = r.useContext(u.r), U = r.useRef(null), b = r.useCallback(e => {
    if (null == O) return !1;
    !(e.shiftKey && L) && !D && p(), e.persist(), null == y || y(), requestAnimationFrame(() => O(e))
  }, [O, p, y, L, D]);
  return r.useEffect(() => {
    N && ((0, _.F)(U), null == R || R())
  }, [N, R]), (0, i.jsxs)(a.P, {
    innerRef: U,
    className: o()(E.item, E.labelContainer, d._[t], g, {
      [E.disabled]: A,
      [E.focused]: N,
      [null != C ? C : ""]: N
    }),
    onClick: A ? void 0 : b,
    "aria-disabled": A,
    ...m,
    "data-menu-item": "true",
    children: [I && null != s && (0, i.jsx)("div", {
      className: E.iconContainerLeft,
      children: (0, i.jsx)(s, {
        color: "currentColor",
        ...M,
        className: o()(E.icon, null == M ? void 0 : M.className),
        isFocused: N
      })
    }), (0, i.jsxs)("div", {
      className: E.label,
      children: [(0, l.I)(n, e), null != f && (0, i.jsx)("div", {
        className: E.subtext,
        children: f
      })]
    }), null != h && (0, i.jsx)("div", {
      className: E.hintContainer,
      children: (0, l.I)(h, e)
    }), !I && null != s && (0, i.jsx)("div", {
      className: E.iconContainer,
      children: (0, i.jsx)(s, {
        color: "currentColor",
        ...M,
        className: o()(E.icon, null == M ? void 0 : M.className),
        isFocused: N
      })
    }), null != T && (0, i.jsx)("div", {
      className: E.imageContainer,
      children: (0, i.jsx)("img", {
        className: E.image,
        src: (0, l.I)(T, e),
        alt: ""
      })
    }), S && (0, i.jsxs)("div", {
      className: E.iconContainer,
      children: [(0, i.jsx)(c.ChevronSmallRightIcon, {
        size: "md",
        color: "currentColor",
        className: o()(E.caret, v)
      }), P && (0, i.jsx)(c.LottieSparkle, {
        className: E.sparkles
      })]
    })]
  })
}