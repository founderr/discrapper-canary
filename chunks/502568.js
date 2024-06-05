"use strict";
n.r(t), n.d(t, {
  Divider: function() {
    return C
  },
  Icon: function() {
    return p
  }
});
var r = n("735250"),
  l = n("470079"),
  o = n("120356"),
  i = n.n(o),
  a = n("608863"),
  c = n("873546"),
  s = n("481060"),
  u = n("290297"),
  d = n("292937"),
  f = n("692437"),
  h = n("806519"),
  g = n("627267");
let p = e => {
    let {
      className: t,
      iconClassName: n,
      children: l,
      selected: o = !1,
      disabled: a = !1,
      showBadge: c = !1,
      color: u,
      foreground: d,
      background: f,
      icon: p,
      onClick: C,
      onContextMenu: m,
      tooltip: x = null,
      tooltipColor: b,
      tooltipPosition: v = "bottom",
      tooltipDisabled: E,
      hideOnClick: S = !0,
      role: y,
      "aria-label": k,
      "aria-hidden": j,
      "aria-checked": M,
      "aria-expanded": w,
      "aria-haspopup": N
    } = e, H = (0, r.jsx)(p, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: i()(n, g.icon),
      foreground: null != d ? d : void 0,
      background: null != f ? f : void 0,
      color: u
    }), T = k;
    return null == T && "string" == typeof x && (T = x), (0, r.jsx)(s.Tooltip, {
      text: x,
      color: b,
      position: v,
      hideOnClick: S,
      shouldShow: !E,
      children: e => {
        let {
          onMouseEnter: x,
          onMouseLeave: b,
          onFocus: v,
          onBlur: E
        } = e;
        return null == C ? (0, r.jsx)("div", {
          className: i()(t, [g.iconWrapper]),
          children: (0, r.jsx)(p, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: i()(n, g.icon),
            foreground: null != d ? d : void 0,
            background: null != f ? f : void 0,
            color: u,
            "aria-hidden": j,
            onMouseEnter: x,
            onMouseLeave: b,
            onFocus: v,
            onBlur: E
          })
        }) : (0, r.jsxs)(s.Clickable, {
          tag: "div",
          onClick: a ? void 0 : C,
          onContextMenu: a ? void 0 : m,
          onMouseEnter: x,
          onMouseLeave: b,
          onFocus: v,
          onBlur: E,
          className: i()(t, {
            [g.iconWrapper]: !0,
            [g.clickable]: !a && null != C,
            [g.selected]: o
          }),
          role: y,
          "aria-label": T,
          "aria-hidden": j,
          "aria-checked": M,
          "aria-haspopup": N,
          "aria-expanded": w,
          tabIndex: a || null == C ? -1 : 0,
          children: [c ? (0, r.jsx)(h.default, {
            mask: h.default.Masks.HEADER_BAR_BADGE,
            children: H
          }) : H, c ? (0, r.jsx)("span", {
            className: g.iconBadge
          }) : null, l]
        })
      }
    })
  },
  C = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)("div", {
      className: i()(g.divider, t)
    })
  },
  m = e => {
    let {
      className: t,
      innerClassName: n,
      children: o,
      childrenBottom: d,
      toolbar: f,
      onDoubleClick: h,
      "aria-label": p,
      "aria-labelledby": C,
      role: m,
      scrollable: x,
      transparent: b = !1
    } = e, v = l.useRef(null), E = l.useContext(u.default);
    return (0, r.jsx)("section", {
      className: i()(t, g.container, {
        [g.themed]: !b,
        [g.transparent]: b,
        [g.themedMobile]: c.isMobile
      }),
      "aria-label": p,
      "aria-labelledby": C,
      role: m,
      ref: v,
      children: (0, r.jsxs)(s.FocusRingScope, {
        containerRef: v,
        children: [(0, r.jsxs)("div", {
          className: g.upperContainer,
          children: [(0, r.jsxs)("div", {
            className: i()(g.children, n, {
              [g.scrollable]: x
            }),
            onDoubleClick: h,
            children: [c.isMobile && null != E ? (0, r.jsx)(a.HamburgerButton, {
              onClick: E,
              className: g.hamburger
            }) : null, o]
          }), null != f ? (0, r.jsx)("div", {
            className: g.toolbar,
            children: f
          }) : null]
        }), d]
      })
    })
  };
m.Icon = p, m.Title = e => {
  let {
    className: t,
    wrapperClassName: n,
    children: l,
    onContextMenu: o,
    onClick: a,
    id: c,
    muted: u = !1,
    level: d = 1
  } = e, f = (0, r.jsx)(s.HeadingLevel, {
    forceLevel: d,
    children: (0, r.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      color: u ? "header-secondary" : void 0,
      className: i()(t, g.title),
      id: c,
      children: l
    })
  });
  return null != a ? (0, r.jsx)(s.Clickable, {
    onClick: a,
    onContextMenu: o,
    className: i()(n, g.titleWrapper),
    children: f
  }) : (0, r.jsx)("div", {
    className: i()(n, g.titleWrapper),
    onContextMenu: o,
    children: f
  })
}, m.Divider = C, m.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, r.jsx)(f.default, {
    className: g.caret
  }) : (0, r.jsx)(d.default, {
    className: g.caret
  })
}, t.default = m