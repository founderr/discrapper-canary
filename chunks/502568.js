"use strict";
n.r(t), n.d(t, {
  Divider: function() {
    return g
  },
  Icon: function() {
    return x
  }
});
var l = n("735250"),
  r = n("470079"),
  a = n("120356"),
  i = n.n(a),
  o = n("608863"),
  s = n("873546"),
  u = n("481060"),
  c = n("290297"),
  d = n("292937"),
  f = n("692437"),
  m = n("806519"),
  h = n("550463");
let x = e => {
    let {
      className: t,
      iconClassName: n,
      children: r,
      selected: a = !1,
      disabled: o = !1,
      showBadge: s = !1,
      color: c,
      foreground: d,
      background: f,
      icon: x,
      onClick: g,
      onContextMenu: p,
      tooltip: C = null,
      tooltipColor: b,
      tooltipPosition: v = "bottom",
      tooltipDisabled: M,
      hideOnClick: j = !0,
      role: y,
      "aria-label": S,
      "aria-hidden": E,
      "aria-checked": k,
      "aria-expanded": A,
      "aria-haspopup": T
    } = e, N = (0, l.jsx)(x, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: i()(n, h.icon),
      foreground: null != d ? d : void 0,
      background: null != f ? f : void 0,
      color: c
    }), I = S;
    return null == I && "string" == typeof C && (I = C), (0, l.jsx)(u.Tooltip, {
      text: C,
      color: b,
      position: v,
      hideOnClick: j,
      shouldShow: !M,
      children: e => {
        let {
          onMouseEnter: C,
          onMouseLeave: b,
          onFocus: v,
          onBlur: M
        } = e;
        return null == g ? (0, l.jsx)("div", {
          className: i()(t, [h.iconWrapper]),
          children: (0, l.jsx)(x, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: i()(n, h.icon),
            foreground: null != d ? d : void 0,
            background: null != f ? f : void 0,
            color: c,
            "aria-hidden": E,
            onMouseEnter: C,
            onMouseLeave: b,
            onFocus: v,
            onBlur: M
          })
        }) : (0, l.jsxs)(u.Clickable, {
          tag: "div",
          onClick: o ? void 0 : g,
          onContextMenu: o ? void 0 : p,
          onMouseEnter: C,
          onMouseLeave: b,
          onFocus: v,
          onBlur: M,
          className: i()(t, {
            [h.iconWrapper]: !0,
            [h.clickable]: !o && null != g,
            [h.selected]: a
          }),
          role: y,
          "aria-label": I,
          "aria-hidden": E,
          "aria-checked": k,
          "aria-haspopup": T,
          "aria-expanded": A,
          tabIndex: o || null == g ? -1 : 0,
          children: [s ? (0, l.jsx)(m.default, {
            mask: m.default.Masks.HEADER_BAR_BADGE,
            children: N
          }) : N, s ? (0, l.jsx)("span", {
            className: h.iconBadge
          }) : null, r]
        })
      }
    })
  },
  g = e => {
    let {
      className: t
    } = e;
    return (0, l.jsx)("div", {
      className: i()(h.divider, t)
    })
  },
  p = e => {
    let {
      className: t,
      innerClassName: n,
      children: a,
      childrenBottom: d,
      toolbar: f,
      onDoubleClick: m,
      "aria-label": x,
      "aria-labelledby": g,
      role: p,
      scrollable: C,
      transparent: b = !1
    } = e, v = r.useRef(null), M = r.useContext(c.default);
    return (0, l.jsx)("section", {
      className: i()(t, h.container, {
        [h.themed]: !b,
        [h.transparent]: b,
        [h.themedMobile]: s.isMobile
      }),
      "aria-label": x,
      "aria-labelledby": g,
      role: p,
      ref: v,
      children: (0, l.jsxs)(u.FocusRingScope, {
        containerRef: v,
        children: [(0, l.jsxs)("div", {
          className: h.upperContainer,
          children: [(0, l.jsxs)("div", {
            className: i()(h.children, n, {
              [h.scrollable]: C
            }),
            onDoubleClick: m,
            children: [s.isMobile && null != M ? (0, l.jsx)(o.HamburgerButton, {
              onClick: M,
              className: h.hamburger
            }) : null, a]
          }), null != f ? (0, l.jsx)("div", {
            className: h.toolbar,
            children: f
          }) : null]
        }), d]
      })
    })
  };
p.Icon = x, p.Title = e => {
  let {
    className: t,
    wrapperClassName: n,
    children: r,
    onContextMenu: a,
    onClick: o,
    id: s,
    muted: c = !1,
    level: d = 1
  } = e, f = (0, l.jsx)(u.HeadingLevel, {
    forceLevel: d,
    children: (0, l.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      color: c ? "header-secondary" : void 0,
      className: i()(t, h.title),
      id: s,
      children: r
    })
  });
  return null != o ? (0, l.jsx)(u.Clickable, {
    onClick: o,
    onContextMenu: a,
    className: i()(n, h.titleWrapper),
    children: f
  }) : (0, l.jsx)("div", {
    className: i()(n, h.titleWrapper),
    onContextMenu: a,
    children: f
  })
}, p.Divider = g, p.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, l.jsx)(f.default, {
    className: h.caret
  }) : (0, l.jsx)(d.default, {
    className: h.caret
  })
}, t.default = p