"use strict";
t.r(r), t.d(r, {
  Divider: function() {
    return f
  },
  Icon: function() {
    return g
  }
});
var a = t("735250"),
  n = t("470079"),
  i = t("120356"),
  l = t.n(i),
  o = t("608863"),
  s = t("873546"),
  c = t("481060"),
  d = t("290297"),
  u = t("292937"),
  h = t("692437"),
  p = t("806519"),
  m = t("550463");
let g = e => {
    let {
      className: r,
      iconClassName: t,
      children: n,
      selected: i = !1,
      disabled: o = !1,
      showBadge: s = !1,
      color: d,
      foreground: u,
      background: h,
      icon: g,
      onClick: f,
      onContextMenu: b,
      tooltip: y = null,
      tooltipColor: x,
      tooltipPosition: k = "bottom",
      tooltipDisabled: v,
      hideOnClick: C = !0,
      role: S,
      "aria-label": j,
      "aria-hidden": T,
      "aria-checked": N,
      "aria-expanded": w,
      "aria-haspopup": E
    } = e, _ = (0, a.jsx)(g, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: l()(t, m.icon),
      foreground: null != u ? u : void 0,
      background: null != h ? h : void 0,
      color: d
    }), L = j;
    return null == L && "string" == typeof y && (L = y), (0, a.jsx)(c.Tooltip, {
      text: y,
      color: x,
      position: k,
      hideOnClick: C,
      shouldShow: !v,
      children: e => {
        let {
          onMouseEnter: y,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v
        } = e;
        return null == f ? (0, a.jsx)("div", {
          className: l()(r, [m.iconWrapper]),
          children: (0, a.jsx)(g, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: l()(t, m.icon),
            foreground: null != u ? u : void 0,
            background: null != h ? h : void 0,
            color: d,
            "aria-hidden": T,
            onMouseEnter: y,
            onMouseLeave: x,
            onFocus: k,
            onBlur: v
          })
        }) : (0, a.jsxs)(c.Clickable, {
          tag: "div",
          onClick: o ? void 0 : f,
          onContextMenu: o ? void 0 : b,
          onMouseEnter: y,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v,
          className: l()(r, {
            [m.iconWrapper]: !0,
            [m.clickable]: !o && null != f,
            [m.selected]: i
          }),
          role: S,
          "aria-label": L,
          "aria-hidden": T,
          "aria-checked": N,
          "aria-haspopup": E,
          "aria-expanded": w,
          tabIndex: o || null == f ? -1 : 0,
          children: [s ? (0, a.jsx)(p.default, {
            mask: p.default.Masks.HEADER_BAR_BADGE,
            children: _
          }) : _, s ? (0, a.jsx)("span", {
            className: m.iconBadge
          }) : null, n]
        })
      }
    })
  },
  f = e => {
    let {
      className: r
    } = e;
    return (0, a.jsx)("div", {
      className: l()(m.divider, r)
    })
  },
  b = e => {
    let {
      className: r,
      innerClassName: t,
      children: i,
      childrenBottom: u,
      toolbar: h,
      onDoubleClick: p,
      "aria-label": g,
      "aria-labelledby": f,
      role: b,
      scrollable: y,
      transparent: x = !1
    } = e, k = n.useRef(null), v = n.useContext(d.default);
    return (0, a.jsx)("section", {
      className: l()(r, m.container, {
        [m.themed]: !x,
        [m.transparent]: x,
        [m.themedMobile]: s.isMobile
      }),
      "aria-label": g,
      "aria-labelledby": f,
      role: b,
      ref: k,
      children: (0, a.jsxs)(c.FocusRingScope, {
        containerRef: k,
        children: [(0, a.jsxs)("div", {
          className: m.upperContainer,
          children: [(0, a.jsxs)("div", {
            className: l()(m.children, t, {
              [m.scrollable]: y
            }),
            onDoubleClick: p,
            children: [s.isMobile && null != v ? (0, a.jsx)(o.HamburgerButton, {
              onClick: v,
              className: m.hamburger
            }) : null, i]
          }), null != h ? (0, a.jsx)("div", {
            className: m.toolbar,
            children: h
          }) : null]
        }), u]
      })
    })
  };
b.Icon = g, b.Title = e => {
  let {
    className: r,
    wrapperClassName: t,
    children: n,
    onContextMenu: i,
    onClick: o,
    id: s,
    muted: d = !1,
    level: u = 1
  } = e, h = (0, a.jsx)(c.HeadingLevel, {
    forceLevel: u,
    children: (0, a.jsx)(c.Heading, {
      variant: "heading-md/semibold",
      color: d ? "header-secondary" : void 0,
      className: l()(r, m.title),
      id: s,
      children: n
    })
  });
  return null != o ? (0, a.jsx)(c.Clickable, {
    onClick: o,
    onContextMenu: i,
    className: l()(t, m.titleWrapper),
    children: h
  }) : (0, a.jsx)("div", {
    className: l()(t, m.titleWrapper),
    onContextMenu: i,
    children: h
  })
}, b.Divider = f, b.Caret = function(e) {
  let {
    direction: r = "right"
  } = e;
  return "right" === r ? (0, a.jsx)(h.default, {
    className: m.caret
  }) : (0, a.jsx)(u.default, {
    className: m.caret
  })
}, r.default = b