"use strict";
r.r(t), r.d(t, {
  Divider: function() {
    return f
  },
  Icon: function() {
    return g
  }
});
var a = r("735250"),
  n = r("470079"),
  i = r("120356"),
  l = r.n(i),
  o = r("608863"),
  s = r("873546"),
  c = r("481060"),
  d = r("290297"),
  u = r("292937"),
  h = r("692437"),
  p = r("806519"),
  m = r("627267");
let g = e => {
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
      icon: g,
      onClick: f,
      onContextMenu: y,
      tooltip: b = null,
      tooltipColor: x,
      tooltipPosition: k = "bottom",
      tooltipDisabled: v,
      hideOnClick: S = !0,
      role: C,
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
      className: l()(r, m.icon),
      foreground: null != u ? u : void 0,
      background: null != h ? h : void 0,
      color: d
    }), P = j;
    return null == P && "string" == typeof b && (P = b), (0, a.jsx)(c.Tooltip, {
      text: b,
      color: x,
      position: k,
      hideOnClick: S,
      shouldShow: !v,
      children: e => {
        let {
          onMouseEnter: b,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v
        } = e;
        return null == f ? (0, a.jsx)("div", {
          className: l()(t, [m.iconWrapper]),
          children: (0, a.jsx)(g, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: l()(r, m.icon),
            foreground: null != u ? u : void 0,
            background: null != h ? h : void 0,
            color: d,
            "aria-hidden": T,
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
          className: l()(t, {
            [m.iconWrapper]: !0,
            [m.clickable]: !o && null != f,
            [m.selected]: i
          }),
          role: C,
          "aria-label": P,
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
      className: t
    } = e;
    return (0, a.jsx)("div", {
      className: l()(m.divider, t)
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
      "aria-label": g,
      "aria-labelledby": f,
      role: y,
      scrollable: b,
      transparent: x = !1
    } = e, k = n.useRef(null), v = n.useContext(d.default);
    return (0, a.jsx)("section", {
      className: l()(t, m.container, {
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
            className: l()(m.children, r, {
              [m.scrollable]: b
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
y.Icon = g, y.Title = e => {
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
      className: l()(t, m.title),
      id: s,
      children: n
    })
  });
  return null != o ? (0, a.jsx)(c.Clickable, {
    onClick: o,
    onContextMenu: i,
    className: l()(r, m.titleWrapper),
    children: h
  }) : (0, a.jsx)("div", {
    className: l()(r, m.titleWrapper),
    onContextMenu: i,
    children: h
  })
}, y.Divider = f, y.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, a.jsx)(h.default, {
    className: m.caret
  }) : (0, a.jsx)(u.default, {
    className: m.caret
  })
}, t.default = y