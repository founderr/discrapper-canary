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
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("608863"),
  c = r("873546"),
  s = r("481060"),
  d = r("290297"),
  u = r("292937"),
  h = r("692437"),
  m = r("806519"),
  p = r("627267");
let g = e => {
    let {
      className: t,
      iconClassName: r,
      children: i,
      selected: l = !1,
      disabled: o = !1,
      showBadge: c = !1,
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
      hideOnClick: j = !0,
      role: C,
      "aria-label": S,
      "aria-hidden": w,
      "aria-checked": T,
      "aria-expanded": N,
      "aria-haspopup": L
    } = e, E = (0, a.jsx)(g, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: n()(r, p.icon),
      foreground: null != u ? u : void 0,
      background: null != h ? h : void 0,
      color: d
    }), _ = S;
    return null == _ && "string" == typeof b && (_ = b), (0, a.jsx)(s.Tooltip, {
      text: b,
      color: x,
      position: k,
      hideOnClick: j,
      shouldShow: !v,
      children: e => {
        let {
          onMouseEnter: b,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v
        } = e;
        return null == f ? (0, a.jsx)("div", {
          className: n()(t, [p.iconWrapper]),
          children: (0, a.jsx)(g, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: n()(r, p.icon),
            foreground: null != u ? u : void 0,
            background: null != h ? h : void 0,
            color: d,
            "aria-hidden": w,
            onMouseEnter: b,
            onMouseLeave: x,
            onFocus: k,
            onBlur: v
          })
        }) : (0, a.jsxs)(s.Clickable, {
          tag: "div",
          onClick: o ? void 0 : f,
          onContextMenu: o ? void 0 : y,
          onMouseEnter: b,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v,
          className: n()(t, {
            [p.iconWrapper]: !0,
            [p.clickable]: !o && null != f,
            [p.selected]: l
          }),
          role: C,
          "aria-label": _,
          "aria-hidden": w,
          "aria-checked": T,
          "aria-haspopup": L,
          "aria-expanded": N,
          tabIndex: o || null == f ? -1 : 0,
          children: [c ? (0, a.jsx)(m.default, {
            mask: m.default.Masks.HEADER_BAR_BADGE,
            children: E
          }) : E, c ? (0, a.jsx)("span", {
            className: p.iconBadge
          }) : null, i]
        })
      }
    })
  },
  f = e => {
    let {
      className: t
    } = e;
    return (0, a.jsx)("div", {
      className: n()(p.divider, t)
    })
  },
  y = e => {
    let {
      className: t,
      innerClassName: r,
      children: l,
      childrenBottom: u,
      toolbar: h,
      onDoubleClick: m,
      "aria-label": g,
      "aria-labelledby": f,
      role: y,
      scrollable: b,
      transparent: x = !1
    } = e, k = i.useRef(null), v = i.useContext(d.default);
    return (0, a.jsx)("section", {
      className: n()(t, p.container, {
        [p.themed]: !x,
        [p.transparent]: x,
        [p.themedMobile]: c.isMobile
      }),
      "aria-label": g,
      "aria-labelledby": f,
      role: y,
      ref: k,
      children: (0, a.jsxs)(s.FocusRingScope, {
        containerRef: k,
        children: [(0, a.jsxs)("div", {
          className: p.upperContainer,
          children: [(0, a.jsxs)("div", {
            className: n()(p.children, r, {
              [p.scrollable]: b
            }),
            onDoubleClick: m,
            children: [c.isMobile && null != v ? (0, a.jsx)(o.HamburgerButton, {
              onClick: v,
              className: p.hamburger
            }) : null, l]
          }), null != h ? (0, a.jsx)("div", {
            className: p.toolbar,
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
    children: i,
    onContextMenu: l,
    onClick: o,
    id: c,
    muted: d = !1,
    level: u = 1
  } = e, h = (0, a.jsx)(s.HeadingLevel, {
    forceLevel: u,
    children: (0, a.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      color: d ? "header-secondary" : void 0,
      className: n()(t, p.title),
      id: c,
      children: i
    })
  });
  return null != o ? (0, a.jsx)(s.Clickable, {
    onClick: o,
    onContextMenu: l,
    className: n()(r, p.titleWrapper),
    children: h
  }) : (0, a.jsx)("div", {
    className: n()(r, p.titleWrapper),
    onContextMenu: l,
    children: h
  })
}, y.Divider = f, y.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, a.jsx)(h.default, {
    className: p.caret
  }) : (0, a.jsx)(u.default, {
    className: p.caret
  })
}, t.default = y