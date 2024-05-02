"use strict";
n.r(t), n.d(t, {
  Divider: function() {
    return E
  },
  Icon: function() {
    return h
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
  g = n("550739");
let h = e => {
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
      icon: h,
      onClick: E,
      onContextMenu: _,
      tooltip: p = null,
      tooltipColor: C,
      tooltipPosition: m = "bottom",
      tooltipDisabled: I,
      hideOnClick: T = !0,
      role: R,
      "aria-label": M,
      "aria-hidden": N,
      "aria-checked": v,
      "aria-expanded": O,
      "aria-haspopup": b
    } = e, x = (0, r.jsx)(h, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: s()(n, g.icon),
      foreground: null != d ? d : void 0,
      background: null != f ? f : void 0,
      color: c
    }), L = M;
    return null == L && "string" == typeof p && (L = p), (0, r.jsx)(a.Tooltip, {
      text: p,
      color: C,
      position: m,
      hideOnClick: T,
      shouldShow: !I,
      children: e => {
        let {
          onMouseEnter: p,
          onMouseLeave: C,
          onFocus: m,
          onBlur: I
        } = e;
        return null == E ? (0, r.jsx)("div", {
          className: s()(t, [g.iconWrapper]),
          children: (0, r.jsx)(h, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: s()(n, g.icon),
            foreground: null != d ? d : void 0,
            background: null != f ? f : void 0,
            color: c,
            "aria-hidden": N,
            onMouseEnter: p,
            onMouseLeave: C,
            onFocus: m,
            onBlur: I
          })
        }) : (0, r.jsxs)(a.Clickable, {
          tag: "div",
          onClick: o ? void 0 : E,
          onContextMenu: o ? void 0 : _,
          onMouseEnter: p,
          onMouseLeave: C,
          onFocus: m,
          onBlur: I,
          className: s()(t, {
            [g.iconWrapper]: !0,
            [g.clickable]: !o && null != E,
            [g.selected]: l
          }),
          role: R,
          "aria-label": L,
          "aria-hidden": N,
          "aria-checked": v,
          "aria-haspopup": b,
          "aria-expanded": O,
          tabIndex: o || null == E ? -1 : 0,
          children: [u ? (0, r.jsx)(S.default, {
            mask: S.default.Masks.HEADER_BAR_BADGE,
            children: x
          }) : x, u ? (0, r.jsx)("span", {
            className: g.iconBadge
          }) : null, i]
        })
      }
    })
  },
  E = e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)("div", {
      className: s()(g.divider, t)
    })
  },
  _ = e => {
    let {
      className: t,
      innerClassName: n,
      children: l,
      childrenBottom: d,
      toolbar: f,
      onDoubleClick: S,
      "aria-label": h,
      "aria-labelledby": E,
      role: _,
      scrollable: p,
      transparent: C = !1
    } = e, m = i.useRef(null), I = i.useContext(c.default);
    return (0, r.jsx)("section", {
      className: s()(t, g.container, {
        [g.themed]: !C,
        [g.transparent]: C,
        [g.themedMobile]: u.isMobile
      }),
      "aria-label": h,
      "aria-labelledby": E,
      role: _,
      ref: m,
      children: (0, r.jsxs)(a.FocusRingScope, {
        containerRef: m,
        children: [(0, r.jsxs)("div", {
          className: g.upperContainer,
          children: [(0, r.jsxs)("div", {
            className: s()(g.children, n, {
              [g.scrollable]: p
            }),
            onDoubleClick: S,
            children: [u.isMobile && null != I ? (0, r.jsx)(o.HamburgerButton, {
              onClick: I,
              className: g.hamburger
            }) : null, l]
          }), null != f ? (0, r.jsx)("div", {
            className: g.toolbar,
            children: f
          }) : null]
        }), d]
      })
    })
  };
_.Icon = h, _.Title = e => {
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
      className: s()(t, g.title),
      id: u,
      children: i
    })
  });
  return null != o ? (0, r.jsx)(a.Clickable, {
    onClick: o,
    onContextMenu: l,
    className: s()(n, g.titleWrapper),
    children: f
  }) : (0, r.jsx)("div", {
    className: s()(n, g.titleWrapper),
    onContextMenu: l,
    children: f
  })
}, _.Divider = E, _.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, r.jsx)(f.default, {
    className: g.caret
  }) : (0, r.jsx)(d.default, {
    className: g.caret
  })
}, t.default = _