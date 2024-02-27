"use strict";
r.r(t), r.d(t, {
  Icon: function() {
    return g
  },
  Divider: function() {
    return f
  },
  default: function() {
    return y
  }
});
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  o = r.n(i),
  l = r("353386"),
  s = r("394846"),
  c = r("77078"),
  d = r("597590"),
  u = r("980428"),
  h = r("772280"),
  p = r("587974"),
  m = r("892307");
let g = e => {
    let {
      className: t,
      iconClassName: r,
      children: n,
      selected: i = !1,
      disabled: l = !1,
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
      "aria-checked": w,
      "aria-expanded": N,
      "aria-haspopup": E
    } = e, L = (0, a.jsx)(g, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: o(r, m.icon),
      foreground: null != u ? u : void 0,
      background: null != h ? h : void 0,
      color: d
    }), _ = j;
    return null == _ && "string" == typeof y && (_ = y), (0, a.jsx)(c.Tooltip, {
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
          className: o(t, [m.iconWrapper]),
          children: (0, a.jsx)(g, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: o(r, m.icon),
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
          onClick: l ? void 0 : f,
          onContextMenu: l ? void 0 : b,
          onMouseEnter: y,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v,
          className: o(t, {
            [m.iconWrapper]: !0,
            [m.clickable]: !l && null != f,
            [m.selected]: i
          }),
          role: S,
          "aria-label": _,
          "aria-hidden": T,
          "aria-checked": w,
          "aria-haspopup": E,
          "aria-expanded": N,
          tabIndex: l || null == f ? -1 : 0,
          children: [s ? (0, a.jsx)(p.default, {
            mask: p.default.Masks.HEADER_BAR_BADGE,
            children: L
          }) : L, s ? (0, a.jsx)("span", {
            className: m.iconBadge
          }) : null, n]
        })
      }
    })
  },
  f = e => {
    let {
      className: t
    } = e;
    return (0, a.jsx)("div", {
      className: o(m.divider, t)
    })
  },
  b = e => {
    let {
      className: t,
      innerClassName: r,
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
      className: o(t, m.container, {
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
            className: o(m.children, r, {
              [m.scrollable]: y
            }),
            onDoubleClick: p,
            children: [s.isMobile && null != v ? (0, a.jsx)(l.default, {
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
    className: t,
    wrapperClassName: r,
    children: n,
    onContextMenu: i,
    onClick: l,
    id: s,
    muted: d = !1,
    level: u = 1
  } = e, h = (0, a.jsx)(c.HeadingLevel, {
    forceLevel: u,
    children: (0, a.jsx)(c.Heading, {
      variant: "heading-md/semibold",
      color: d ? "header-secondary" : void 0,
      className: o(t, m.title),
      id: s,
      children: n
    })
  });
  return null != l ? (0, a.jsx)(c.Clickable, {
    onClick: l,
    onContextMenu: i,
    className: o(r, m.titleWrapper),
    children: h
  }) : (0, a.jsx)("div", {
    className: o(r, m.titleWrapper),
    onContextMenu: i,
    children: h
  })
}, b.Divider = f, b.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, a.jsx)(h.default, {
    className: m.caret
  }) : (0, a.jsx)(u.default, {
    className: m.caret
  })
};
var y = b