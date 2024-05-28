"use strict";
n.r(t), n.d(t, {
  Divider: function() {
    return h
  },
  Icon: function() {
    return g
  }
});
var r = n("735250"),
  i = n("470079"),
  l = n("120356"),
  s = n.n(l),
  o = n("608863"),
  u = n("873546"),
  a = n("481060"),
  c = n("290297"),
  d = n("292937"),
  f = n("692437"),
  S = n("806519"),
  p = n("627267");
let g = e => {
    let {
      className: t,
      iconClassName: n,
      children: i,
      selected: l = !1,
      disabled: o = !1,
      showBadge: u = !1,
      color: c,
      foreground: d,
      background: f,
      icon: g,
      onClick: h,
      onContextMenu: E,
      tooltip: _ = null,
      tooltipColor: C,
      tooltipPosition: I = "bottom",
      tooltipDisabled: m,
      hideOnClick: T = !0,
      role: v,
      "aria-label": R,
      "aria-hidden": N,
      "aria-checked": O,
      "aria-expanded": b,
      "aria-haspopup": M
    } = e, A = (0, r.jsx)(g, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: s()(n, p.icon),
      foreground: null != d ? d : void 0,
      background: null != f ? f : void 0,
      color: c
    }), L = R;
    return null == L && "string" == typeof _ && (L = _), (0, r.jsx)(a.Tooltip, {
      text: _,
      color: C,
      position: I,
      hideOnClick: T,
      shouldShow: !m,
      children: e => {
        let {
          onMouseEnter: _,
          onMouseLeave: C,
          onFocus: I,
          onBlur: m
        } = e;
        return null == h ? (0, r.jsx)("div", {
          className: s()(t, [p.iconWrapper]),
          children: (0, r.jsx)(g, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: s()(n, p.icon),
            foreground: null != d ? d : void 0,
            background: null != f ? f : void 0,
            color: c,
            "aria-hidden": N,
            onMouseEnter: _,
            onMouseLeave: C,
            onFocus: I,
            onBlur: m
          })
        }) : (0, r.jsxs)(a.Clickable, {
          tag: "div",
          onClick: o ? void 0 : h,
          onContextMenu: o ? void 0 : E,
          onMouseEnter: _,
          onMouseLeave: C,
          onFocus: I,
          onBlur: m,
          className: s()(t, {
            [p.iconWrapper]: !0,
            [p.clickable]: !o && null != h,
            [p.selected]: l
          }),
          role: v,
          "aria-label": L,
          "aria-hidden": N,
          "aria-checked": O,
          "aria-haspopup": M,
          "aria-expanded": b,
          tabIndex: o || null == h ? -1 : 0,
          children: [u ? (0, r.jsx)(S.default, {
            mask: S.default.Masks.HEADER_BAR_BADGE,
            children: A
          }) : A, u ? (0, r.jsx)("span", {
            className: p.iconBadge
          }) : null, i]
        })
      }
    })
  },
  h = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)("div", {
      className: s()(p.divider, t)
    })
  },
  E = e => {
    let {
      className: t,
      innerClassName: n,
      children: l,
      childrenBottom: d,
      toolbar: f,
      onDoubleClick: S,
      "aria-label": g,
      "aria-labelledby": h,
      role: E,
      scrollable: _,
      transparent: C = !1
    } = e, I = i.useRef(null), m = i.useContext(c.default);
    return (0, r.jsx)("section", {
      className: s()(t, p.container, {
        [p.themed]: !C,
        [p.transparent]: C,
        [p.themedMobile]: u.isMobile
      }),
      "aria-label": g,
      "aria-labelledby": h,
      role: E,
      ref: I,
      children: (0, r.jsxs)(a.FocusRingScope, {
        containerRef: I,
        children: [(0, r.jsxs)("div", {
          className: p.upperContainer,
          children: [(0, r.jsxs)("div", {
            className: s()(p.children, n, {
              [p.scrollable]: _
            }),
            onDoubleClick: S,
            children: [u.isMobile && null != m ? (0, r.jsx)(o.HamburgerButton, {
              onClick: m,
              className: p.hamburger
            }) : null, l]
          }), null != f ? (0, r.jsx)("div", {
            className: p.toolbar,
            children: f
          }) : null]
        }), d]
      })
    })
  };
E.Icon = g, E.Title = e => {
  let {
    className: t,
    wrapperClassName: n,
    children: i,
    onContextMenu: l,
    onClick: o,
    id: u,
    muted: c = !1,
    level: d = 1
  } = e, f = (0, r.jsx)(a.HeadingLevel, {
    forceLevel: d,
    children: (0, r.jsx)(a.Heading, {
      variant: "heading-md/semibold",
      color: c ? "header-secondary" : void 0,
      className: s()(t, p.title),
      id: u,
      children: i
    })
  });
  return null != o ? (0, r.jsx)(a.Clickable, {
    onClick: o,
    onContextMenu: l,
    className: s()(n, p.titleWrapper),
    children: f
  }) : (0, r.jsx)("div", {
    className: s()(n, p.titleWrapper),
    onContextMenu: l,
    children: f
  })
}, E.Divider = h, E.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, r.jsx)(f.default, {
    className: p.caret
  }) : (0, r.jsx)(d.default, {
    className: p.caret
  })
}, t.default = E