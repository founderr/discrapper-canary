"use strict";
n.r(l), n.d(l, {
  Icon: function() {
    return x
  },
  Divider: function() {
    return v
  },
  default: function() {
    return g
  }
});
var r = n("37983"),
  t = n("884691"),
  a = n("414456"),
  o = n.n(a),
  i = n("353386"),
  s = n("394846"),
  c = n("77078"),
  u = n("597590"),
  d = n("980428"),
  h = n("772280"),
  p = n("587974"),
  f = n("133934");
let x = e => {
    let {
      className: l,
      iconClassName: n,
      children: t,
      selected: a = !1,
      disabled: i = !1,
      showBadge: s = !1,
      color: u,
      foreground: d,
      background: h,
      icon: x,
      onClick: v,
      onContextMenu: m,
      tooltip: g = null,
      tooltipColor: C,
      tooltipPosition: j = "bottom",
      hideOnClick: b = !0,
      role: N,
      "aria-label": k,
      "aria-hidden": w,
      "aria-checked": E,
      "aria-expanded": I,
      "aria-haspopup": M
    } = e, y = (0, r.jsx)(x, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: o(n, f.icon),
      foreground: null != d ? d : void 0,
      background: null != h ? h : void 0,
      color: u
    }), P = k;
    return null == P && "string" == typeof g && (P = g), (0, r.jsx)(c.Tooltip, {
      text: g,
      color: C,
      position: j,
      hideOnClick: b,
      children: e => {
        let {
          onMouseEnter: g,
          onMouseLeave: C,
          onFocus: j,
          onBlur: b
        } = e;
        return null == v ? (0, r.jsx)("div", {
          className: o(l, [f.iconWrapper]),
          children: (0, r.jsx)(x, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: o(n, f.icon),
            foreground: null != d ? d : void 0,
            background: null != h ? h : void 0,
            color: u,
            "aria-hidden": w,
            onMouseEnter: g,
            onMouseLeave: C,
            onFocus: j,
            onBlur: b
          })
        }) : (0, r.jsxs)(c.Clickable, {
          tag: "div",
          onClick: i ? void 0 : v,
          onContextMenu: i ? void 0 : m,
          onMouseEnter: g,
          onMouseLeave: C,
          onFocus: j,
          onBlur: b,
          className: o(l, {
            [f.iconWrapper]: !0,
            [f.clickable]: !i && null != v,
            [f.selected]: a
          }),
          role: N,
          "aria-label": P,
          "aria-hidden": w,
          "aria-checked": E,
          "aria-haspopup": M,
          "aria-expanded": I,
          tabIndex: i || null == v ? -1 : 0,
          children: [s ? (0, r.jsx)(p.default, {
            mask: p.default.Masks.HEADER_BAR_BADGE,
            children: y
          }) : y, s ? (0, r.jsx)("span", {
            className: f.iconBadge
          }) : null, t]
        })
      }
    })
  },
  v = e => {
    let {
      className: l
    } = e;
    return (0, r.jsx)("div", {
      className: o(f.divider, l)
    })
  },
  m = e => {
    let {
      className: l,
      innerClassName: n,
      children: a,
      childrenBottom: d,
      toolbar: h,
      onDoubleClick: p,
      "aria-label": x,
      "aria-labelledby": v,
      role: m,
      scrollable: g,
      transparent: C = !1
    } = e, j = t.useRef(null), b = t.useContext(u.default);
    return (0, r.jsx)("section", {
      className: o(l, f.container, {
        [f.themed]: !C,
        [f.transparent]: C,
        [f.themedMobile]: s.isMobile
      }),
      "aria-label": x,
      "aria-labelledby": v,
      role: m,
      ref: j,
      children: (0, r.jsxs)(c.FocusRingScope, {
        containerRef: j,
        children: [(0, r.jsxs)("div", {
          className: f.upperContainer,
          children: [(0, r.jsxs)("div", {
            className: o(f.children, n, {
              [f.scrollable]: g
            }),
            onDoubleClick: p,
            children: [s.isMobile && null != b ? (0, r.jsx)(i.default, {
              onClick: b,
              className: f.hamburger
            }) : null, a]
          }), null != h ? (0, r.jsx)("div", {
            className: f.toolbar,
            children: h
          }) : null]
        }), d]
      })
    })
  };
m.Icon = x, m.Title = e => {
  let {
    className: l,
    wrapperClassName: n,
    children: t,
    onContextMenu: a,
    onClick: i,
    id: s,
    muted: u = !1,
    level: d = 1
  } = e, h = (0, r.jsx)(c.HeadingLevel, {
    forceLevel: d,
    children: (0, r.jsx)(c.Heading, {
      variant: "heading-md/semibold",
      color: u ? "header-secondary" : void 0,
      className: o(l, f.title),
      id: s,
      children: t
    })
  });
  return null != i ? (0, r.jsx)(c.Clickable, {
    onClick: i,
    onContextMenu: a,
    className: o(n, f.titleWrapper),
    children: h
  }) : (0, r.jsx)("div", {
    className: o(n, f.titleWrapper),
    onContextMenu: a,
    children: h
  })
}, m.Divider = v, m.Caret = function(e) {
  let {
    direction: l = "right"
  } = e;
  return "right" === l ? (0, r.jsx)(h.default, {
    className: f.caret
  }) : (0, r.jsx)(d.default, {
    className: f.caret
  })
};
var g = m