"use strict";
e.r(s), e.d(s, {
  Divider: function() {
    return a
  },
  Icon: function() {
    return P
  }
});
var S = e("735250"),
  i = e("470079"),
  n = e("120356"),
  _ = e.n(n),
  t = e("608863"),
  r = e("873546"),
  I = e("481060"),
  o = e("290297"),
  N = e("292937"),
  R = e("692437"),
  O = e("806519"),
  A = e("627267");
let P = E => {
    let {
      className: s,
      iconClassName: e,
      children: i,
      selected: n = !1,
      disabled: t = !1,
      showBadge: r = !1,
      color: o,
      foreground: N,
      background: R,
      icon: P,
      onClick: a,
      onContextMenu: M,
      tooltip: T = null,
      tooltipColor: l,
      tooltipPosition: C = "bottom",
      tooltipDisabled: m,
      hideOnClick: D = !0,
      role: c,
      "aria-label": L,
      "aria-hidden": u,
      "aria-checked": d,
      "aria-expanded": g,
      "aria-haspopup": f
    } = E, G = (0, S.jsx)(P, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: _()(e, A.icon),
      foreground: null != N ? N : void 0,
      background: null != R ? R : void 0,
      color: o
    }), p = L;
    return null == p && "string" == typeof T && (p = T), (0, S.jsx)(I.Tooltip, {
      text: T,
      color: l,
      position: C,
      hideOnClick: D,
      shouldShow: !m,
      children: E => {
        let {
          onMouseEnter: T,
          onMouseLeave: l,
          onFocus: C,
          onBlur: m
        } = E;
        return null == a ? (0, S.jsx)("div", {
          className: _()(s, [A.iconWrapper]),
          children: (0, S.jsx)(P, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: _()(e, A.icon),
            foreground: null != N ? N : void 0,
            background: null != R ? R : void 0,
            color: o,
            "aria-hidden": u,
            onMouseEnter: T,
            onMouseLeave: l,
            onFocus: C,
            onBlur: m
          })
        }) : (0, S.jsxs)(I.Clickable, {
          tag: "div",
          onClick: t ? void 0 : a,
          onContextMenu: t ? void 0 : M,
          onMouseEnter: T,
          onMouseLeave: l,
          onFocus: C,
          onBlur: m,
          className: _()(s, {
            [A.iconWrapper]: !0,
            [A.clickable]: !t && null != a,
            [A.selected]: n
          }),
          role: c,
          "aria-label": p,
          "aria-hidden": u,
          "aria-checked": d,
          "aria-haspopup": f,
          "aria-expanded": g,
          tabIndex: t || null == a ? -1 : 0,
          children: [r ? (0, S.jsx)(O.default, {
            mask: O.default.Masks.HEADER_BAR_BADGE,
            children: G
          }) : G, r ? (0, S.jsx)("span", {
            className: A.iconBadge
          }) : null, i]
        })
      }
    })
  },
  a = E => {
    let {
      className: s
    } = E;
    return (0, S.jsx)("div", {
      className: _()(A.divider, s)
    })
  },
  M = E => {
    let {
      className: s,
      innerClassName: e,
      children: n,
      childrenBottom: N,
      toolbar: R,
      onDoubleClick: O,
      "aria-label": P,
      "aria-labelledby": a,
      role: M,
      scrollable: T,
      transparent: l = !1
    } = E, C = i.useRef(null), m = i.useContext(o.default);
    return (0, S.jsx)("section", {
      className: _()(s, A.container, {
        [A.themed]: !l,
        [A.transparent]: l,
        [A.themedMobile]: r.isMobile
      }),
      "aria-label": P,
      "aria-labelledby": a,
      role: M,
      ref: C,
      children: (0, S.jsxs)(I.FocusRingScope, {
        containerRef: C,
        children: [(0, S.jsxs)("div", {
          className: A.upperContainer,
          children: [(0, S.jsxs)("div", {
            className: _()(A.children, e, {
              [A.scrollable]: T
            }),
            onDoubleClick: O,
            children: [r.isMobile && null != m ? (0, S.jsx)(t.HamburgerButton, {
              onClick: m,
              className: A.hamburger
            }) : null, n]
          }), null != R ? (0, S.jsx)("div", {
            className: A.toolbar,
            children: R
          }) : null]
        }), N]
      })
    })
  };
M.Icon = P, M.Title = E => {
  let {
    className: s,
    wrapperClassName: e,
    children: i,
    onContextMenu: n,
    onClick: t,
    id: r,
    muted: o = !1,
    level: N = 1
  } = E, R = (0, S.jsx)(I.HeadingLevel, {
    forceLevel: N,
    children: (0, S.jsx)(I.Heading, {
      variant: "heading-md/semibold",
      color: o ? "header-secondary" : void 0,
      className: _()(s, A.title),
      id: r,
      children: i
    })
  });
  return null != t ? (0, S.jsx)(I.Clickable, {
    onClick: t,
    onContextMenu: n,
    className: _()(e, A.titleWrapper),
    children: R
  }) : (0, S.jsx)("div", {
    className: _()(e, A.titleWrapper),
    onContextMenu: n,
    children: R
  })
}, M.Divider = a, M.Caret = function(E) {
  let {
    direction: s = "right"
  } = E;
  return "right" === s ? (0, S.jsx)(R.default, {
    className: A.caret
  }) : (0, S.jsx)(N.default, {
    className: A.caret
  })
}, s.default = M