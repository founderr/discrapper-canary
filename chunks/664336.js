"use strict";
r.r(t), r.d(t, {
  Icon: function() {
    return m
  },
  Divider: function() {
    return g
  },
  default: function() {
    return b
  }
});
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  l = r.n(i),
  o = r("353386"),
  s = r("394846"),
  c = r("77078"),
  d = r("597590"),
  u = r("980428"),
  h = r("772280"),
  p = r("587974"),
  f = r("892307");
let m = e => {
    let {
      className: t,
      iconClassName: r,
      children: n,
      selected: i = !1,
      disabled: o = !1,
      showBadge: s = !1,
      color: d,
      foreground: u,
      background: h,
      icon: m,
      onClick: g,
      onContextMenu: y,
      tooltip: b = null,
      tooltipColor: x,
      tooltipPosition: k = "bottom",
      tooltipDisabled: v,
      hideOnClick: C = !0,
      role: S,
      "aria-label": j,
      "aria-hidden": w,
      "aria-checked": T,
      "aria-expanded": N,
      "aria-haspopup": E
    } = e, L = (0, a.jsx)(m, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: l(r, f.icon),
      foreground: null != u ? u : void 0,
      background: null != h ? h : void 0,
      color: d
    }), _ = j;
    return null == _ && "string" == typeof b && (_ = b), (0, a.jsx)(c.Tooltip, {
      text: b,
      color: x,
      position: k,
      hideOnClick: C,
      shouldShow: !v,
      children: e => {
        let {
          onMouseEnter: b,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v
        } = e;
        return null == g ? (0, a.jsx)("div", {
          className: l(t, [f.iconWrapper]),
          children: (0, a.jsx)(m, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: l(r, f.icon),
            foreground: null != u ? u : void 0,
            background: null != h ? h : void 0,
            color: d,
            "aria-hidden": w,
            onMouseEnter: b,
            onMouseLeave: x,
            onFocus: k,
            onBlur: v
          })
        }) : (0, a.jsxs)(c.Clickable, {
          tag: "div",
          onClick: o ? void 0 : g,
          onContextMenu: o ? void 0 : y,
          onMouseEnter: b,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v,
          className: l(t, {
            [f.iconWrapper]: !0,
            [f.clickable]: !o && null != g,
            [f.selected]: i
          }),
          role: S,
          "aria-label": _,
          "aria-hidden": w,
          "aria-checked": T,
          "aria-haspopup": E,
          "aria-expanded": N,
          tabIndex: o || null == g ? -1 : 0,
          children: [s ? (0, a.jsx)(p.default, {
            mask: p.default.Masks.HEADER_BAR_BADGE,
            children: L
          }) : L, s ? (0, a.jsx)("span", {
            className: f.iconBadge
          }) : null, n]
        })
      }
    })
  },
  g = e => {
    let {
      className: t
    } = e;
    return (0, a.jsx)("div", {
      className: l(f.divider, t)
    })
  },
  y = e => {
    let {
      className: t,
      innerClassName: r,
      children: i,
      childrenBottom: u,
      toolbar: h,
      onDoubleClick: p,
      "aria-label": m,
      "aria-labelledby": g,
      role: y,
      scrollable: b,
      transparent: x = !1
    } = e, k = n.useRef(null), v = n.useContext(d.default);
    return (0, a.jsx)("section", {
      className: l(t, f.container, {
        [f.themed]: !x,
        [f.transparent]: x,
        [f.themedMobile]: s.isMobile
      }),
      "aria-label": m,
      "aria-labelledby": g,
      role: y,
      ref: k,
      children: (0, a.jsxs)(c.FocusRingScope, {
        containerRef: k,
        children: [(0, a.jsxs)("div", {
          className: f.upperContainer,
          children: [(0, a.jsxs)("div", {
            className: l(f.children, r, {
              [f.scrollable]: b
            }),
            onDoubleClick: p,
            children: [s.isMobile && null != v ? (0, a.jsx)(o.default, {
              onClick: v,
              className: f.hamburger
            }) : null, i]
          }), null != h ? (0, a.jsx)("div", {
            className: f.toolbar,
            children: h
          }) : null]
        }), u]
      })
    })
  };
y.Icon = m, y.Title = e => {
  let {
    className: t,
    wrapperClassName: r,
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
      className: l(t, f.title),
      id: s,
      children: n
    })
  });
  return null != o ? (0, a.jsx)(c.Clickable, {
    onClick: o,
    onContextMenu: i,
    className: l(r, f.titleWrapper),
    children: h
  }) : (0, a.jsx)("div", {
    className: l(r, f.titleWrapper),
    onContextMenu: i,
    children: h
  })
}, y.Divider = g, y.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, a.jsx)(h.default, {
    className: f.caret
  }) : (0, a.jsx)(u.default, {
    className: f.caret
  })
};
var b = y