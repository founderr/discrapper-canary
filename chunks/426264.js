"use strict";
n.r(t), n.d(t, {
  MenuItem: function() {
    return E
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("227645"),
  l = n("199285"),
  u = n("107728"),
  c = n("697917"),
  d = n("886074"),
  p = n("772280"),
  h = n("389802"),
  f = n("639826");

function E(e) {
  let {
    color: t = "default",
    label: n,
    icon: s,
    showIconFirst: E = !1,
    imageUrl: _,
    hint: m,
    subtext: S,
    hasSubmenu: g,
    disabled: T,
    isFocused: I,
    menuItemProps: v,
    action: C,
    onClose: A,
    onFocus: R,
    className: N,
    focusedClassName: y,
    subMenuIconClassName: O,
    dontCloseOnActionIfHoldingShiftKey: D,
    iconProps: b,
    sparkle: P
  } = e, L = r.useContext(u.OnMenuSelectContext), M = r.useRef(null), U = r.useCallback(e => {
    if (null == C) return !1;
    !(e.shiftKey && D) && A(), e.persist(), null == L || L(), requestAnimationFrame(() => C(e))
  }, [C, A, L, D]);
  return r.useEffect(() => {
    I && ((0, c.ensureItemVisible)(M), null == R || R())
  }, [I, R]), (0, i.jsxs)(o.Clickable, {
    innerRef: M,
    className: a(f.item, f.labelContainer, h.MENU_ITEM_COLORS[t], N, {
      [f.disabled]: T,
      [f.focused]: I,
      [null != y ? y : ""]: I
    }),
    onClick: T ? void 0 : U,
    "aria-disabled": T,
    ...v,
    "data-menu-item": "true",
    children: [E && null != s && (0, i.jsx)("div", {
      className: f.iconContainerLeft,
      children: (0, i.jsx)(s, {
        ...b,
        className: a(f.icon, null == b ? void 0 : b.className),
        isFocused: I
      })
    }), (0, i.jsxs)("div", {
      className: f.label,
      children: [(0, l.renderSubnode)(n, e), null != S && (0, i.jsx)("div", {
        className: f.subtext,
        children: S
      })]
    }), null != m && (0, i.jsx)("div", {
      className: f.hintContainer,
      children: (0, l.renderSubnode)(m, e)
    }), !E && null != s && (0, i.jsx)("div", {
      className: f.iconContainer,
      children: (0, i.jsx)(s, {
        ...b,
        className: a(f.icon, null == b ? void 0 : b.className),
        isFocused: I
      })
    }), null != _ && (0, i.jsx)("div", {
      className: f.imageContainer,
      children: (0, i.jsx)("img", {
        className: f.image,
        src: (0, l.renderSubnode)(_, e),
        alt: ""
      })
    }), g && (0, i.jsxs)("div", {
      className: f.iconContainer,
      children: [(0, i.jsx)(p.default, {
        className: a(f.caret, O)
      }), P && (0, i.jsx)(d.default, {
        className: f.sparkles
      })]
    })]
  })
}