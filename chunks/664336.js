"use strict";
t.r(r), t.d(r, {
  Icon: function() {
    return g
  },
  Divider: function() {
    return f
  },
  default: function() {
    return b
  }
});
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  l = t.n(i),
  o = t("353386"),
  s = t("394846"),
  c = t("77078"),
  d = t("597590"),
  u = t("980428"),
  h = t("772280"),
  p = t("587974"),
  m = t("892307");
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
      onContextMenu: y,
      tooltip: b = null,
      tooltipColor: x,
      tooltipPosition: k = "bottom",
      hideOnClick: v = !0,
      role: C,
      "aria-label": S,
      "aria-hidden": j,
      "aria-checked": T,
      "aria-expanded": w,
      "aria-haspopup": N
    } = e, E = (0, a.jsx)(g, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: l(t, m.icon),
      foreground: null != u ? u : void 0,
      background: null != h ? h : void 0,
      color: d
    }), L = S;
    return null == L && "string" == typeof b && (L = b), (0, a.jsx)(c.Tooltip, {
      text: b,
      color: x,
      position: k,
      hideOnClick: v,
      children: e => {
        let {
          onMouseEnter: b,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v
        } = e;
        return null == f ? (0, a.jsx)("div", {
          className: l(r, [m.iconWrapper]),
          children: (0, a.jsx)(g, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: l(t, m.icon),
            foreground: null != u ? u : void 0,
            background: null != h ? h : void 0,
            color: d,
            "aria-hidden": j,
            onMouseEnter: b,
            onMouseLeave: x,
            onFocus: k,
            onBlur: v
          })
        }) : (0, a.jsxs)(c.Clickable, {
          tag: "div",
          onClick: o ? void 0 : f,
          onContextMenu: o ? void 0 : y,
          onMouseEnter: b,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v,
          className: l(r, {
            [m.iconWrapper]: !0,
            [m.clickable]: !o && null != f,
            [m.selected]: i
          }),
          role: C,
          "aria-label": L,
          "aria-hidden": j,
          "aria-checked": T,
          "aria-haspopup": N,
          "aria-expanded": w,
          tabIndex: o || null == f ? -1 : 0,
          children: [s ? (0, a.jsx)(p.default, {
            mask: p.default.Masks.HEADER_BAR_BADGE,
            children: E
          }) : E, s ? (0, a.jsx)("span", {
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
      className: l(m.divider, r)
    })
  },
  y = e => {
    let {
      className: r,
      innerClassName: t,
      children: i,
      childrenBottom: u,
      toolbar: h,
      onDoubleClick: p,
      "aria-label": g,
      "aria-labelledby": f,
      role: y,
      scrollable: b,
      transparent: x = !1
    } = e, k = n.useRef(null), v = n.useContext(d.default);
    return (0, a.jsx)("section", {
      className: l(r, m.container, {
        [m.themed]: !x,
        [m.transparent]: x,
        [m.themedMobile]: s.isMobile
      }),
      "aria-label": g,
      "aria-labelledby": f,
      role: y,
      ref: k,
      children: (0, a.jsxs)(c.FocusRingScope, {
        containerRef: k,
        children: [(0, a.jsxs)("div", {
          className: m.upperContainer,
          children: [(0, a.jsxs)("div", {
            className: l(m.children, t, {
              [m.scrollable]: b
            }),
            onDoubleClick: p,
            children: [s.isMobile && null != v ? (0, a.jsx)(o.default, {
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
y.Icon = g, y.Title = e => {
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
      className: l(r, m.title),
      id: s,
      children: n
    })
  });
  return null != o ? (0, a.jsx)(c.Clickable, {
    onClick: o,
    onContextMenu: i,
    className: l(t, m.titleWrapper),
    children: h
  }) : (0, a.jsx)("div", {
    className: l(t, m.titleWrapper),
    onContextMenu: i,
    children: h
  })
}, y.Divider = f, y.Caret = function(e) {
  let {
    direction: r = "right"
  } = e;
  return "right" === r ? (0, a.jsx)(h.default, {
    className: m.caret
  }) : (0, a.jsx)(u.default, {
    className: m.caret
  })
};
var b = y