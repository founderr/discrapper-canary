"use strict";
n.r(t), n.d(t, {
  Divider: function() {
    return m
  },
  Icon: function() {
    return p
  }
});
var r = n("735250"),
  l = n("470079"),
  o = n("120356"),
  a = n.n(o),
  i = n("608863"),
  s = n("873546"),
  u = n("481060"),
  c = n("290297"),
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
      disabled: i = !1,
      showBadge: s = !1,
      color: c,
      foreground: d,
      background: f,
      icon: p,
      onClick: m,
      onContextMenu: x,
      tooltip: C = null,
      tooltipColor: b,
      tooltipPosition: M = "bottom",
      tooltipDisabled: v,
      hideOnClick: y = !0,
      role: j,
      "aria-label": S,
      "aria-hidden": E,
      "aria-checked": k,
      "aria-expanded": w,
      "aria-haspopup": N
    } = e, T = (0, r.jsx)(p, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: a()(n, g.icon),
      foreground: null != d ? d : void 0,
      background: null != f ? f : void 0,
      color: c
    }), L = S;
    return null == L && "string" == typeof C && (L = C), (0, r.jsx)(u.Tooltip, {
      text: C,
      color: b,
      position: M,
      hideOnClick: y,
      shouldShow: !v,
      children: e => {
        let {
          onMouseEnter: C,
          onMouseLeave: b,
          onFocus: M,
          onBlur: v
        } = e;
        return null == m ? (0, r.jsx)("div", {
          className: a()(t, [g.iconWrapper]),
          children: (0, r.jsx)(p, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: a()(n, g.icon),
            foreground: null != d ? d : void 0,
            background: null != f ? f : void 0,
            color: c,
            "aria-hidden": E,
            onMouseEnter: C,
            onMouseLeave: b,
            onFocus: M,
            onBlur: v
          })
        }) : (0, r.jsxs)(u.Clickable, {
          tag: "div",
          onClick: i ? void 0 : m,
          onContextMenu: i ? void 0 : x,
          onMouseEnter: C,
          onMouseLeave: b,
          onFocus: M,
          onBlur: v,
          className: a()(t, {
            [g.iconWrapper]: !0,
            [g.clickable]: !i && null != m,
            [g.selected]: o
          }),
          role: j,
          "aria-label": L,
          "aria-hidden": E,
          "aria-checked": k,
          "aria-haspopup": N,
          "aria-expanded": w,
          tabIndex: i || null == m ? -1 : 0,
          children: [s ? (0, r.jsx)(h.default, {
            mask: h.default.Masks.HEADER_BAR_BADGE,
            children: T
          }) : T, s ? (0, r.jsx)("span", {
            className: g.iconBadge
          }) : null, l]
        })
      }
    })
  },
  m = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)("div", {
      className: a()(g.divider, t)
    })
  },
  x = e => {
    let {
      className: t,
      innerClassName: n,
      children: o,
      childrenBottom: d,
      toolbar: f,
      onDoubleClick: h,
      "aria-label": p,
      "aria-labelledby": m,
      role: x,
      scrollable: C,
      transparent: b = !1
    } = e, M = l.useRef(null), v = l.useContext(c.default);
    return (0, r.jsx)("section", {
      className: a()(t, g.container, {
        [g.themed]: !b,
        [g.transparent]: b,
        [g.themedMobile]: s.isMobile
      }),
      "aria-label": p,
      "aria-labelledby": m,
      role: x,
      ref: M,
      children: (0, r.jsxs)(u.FocusRingScope, {
        containerRef: M,
        children: [(0, r.jsxs)("div", {
          className: g.upperContainer,
          children: [(0, r.jsxs)("div", {
            className: a()(g.children, n, {
              [g.scrollable]: C
            }),
            onDoubleClick: h,
            children: [s.isMobile && null != v ? (0, r.jsx)(i.HamburgerButton, {
              onClick: v,
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
x.Icon = p, x.Title = e => {
  let {
    className: t,
    wrapperClassName: n,
    children: l,
    onContextMenu: o,
    onClick: i,
    id: s,
    muted: c = !1,
    level: d = 1
  } = e, f = (0, r.jsx)(u.HeadingLevel, {
    forceLevel: d,
    children: (0, r.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      color: c ? "header-secondary" : void 0,
      className: a()(t, g.title),
      id: s,
      children: l
    })
  });
  return null != i ? (0, r.jsx)(u.Clickable, {
    onClick: i,
    onContextMenu: o,
    className: a()(n, g.titleWrapper),
    children: f
  }) : (0, r.jsx)("div", {
    className: a()(n, g.titleWrapper),
    onContextMenu: o,
    children: f
  })
}, x.Divider = m, x.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, r.jsx)(f.default, {
    className: g.caret
  }) : (0, r.jsx)(d.default, {
    className: g.caret
  })
}, t.default = x