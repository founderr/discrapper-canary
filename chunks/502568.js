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
  g = n("550463");
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
      onContextMenu: p,
      tooltip: _ = null,
      tooltipColor: m,
      tooltipPosition: C = "bottom",
      tooltipDisabled: I,
      hideOnClick: T = !0,
      role: v,
      "aria-label": N,
      "aria-hidden": R,
      "aria-checked": M,
      "aria-expanded": b,
      "aria-haspopup": O
    } = e, A = (0, r.jsx)(h, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: s()(n, g.icon),
      foreground: null != d ? d : void 0,
      background: null != f ? f : void 0,
      color: c
    }), L = N;
    return null == L && "string" == typeof _ && (L = _), (0, r.jsx)(a.Tooltip, {
      text: _,
      color: m,
      position: C,
      hideOnClick: T,
      shouldShow: !I,
      children: e => {
        let {
          onMouseEnter: _,
          onMouseLeave: m,
          onFocus: C,
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
            "aria-hidden": R,
            onMouseEnter: _,
            onMouseLeave: m,
            onFocus: C,
            onBlur: I
          })
        }) : (0, r.jsxs)(a.Clickable, {
          tag: "div",
          onClick: o ? void 0 : E,
          onContextMenu: o ? void 0 : p,
          onMouseEnter: _,
          onMouseLeave: m,
          onFocus: C,
          onBlur: I,
          className: s()(t, {
            [g.iconWrapper]: !0,
            [g.clickable]: !o && null != E,
            [g.selected]: l
          }),
          role: v,
          "aria-label": L,
          "aria-hidden": R,
          "aria-checked": M,
          "aria-haspopup": O,
          "aria-expanded": b,
          tabIndex: o || null == E ? -1 : 0,
          children: [u ? (0, r.jsx)(S.default, {
            mask: S.default.Masks.HEADER_BAR_BADGE,
            children: A
          }) : A, u ? (0, r.jsx)("span", {
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
  p = e => {
    let {
      className: t,
      innerClassName: n,
      children: l,
      childrenBottom: d,
      toolbar: f,
      onDoubleClick: S,
      "aria-label": h,
      "aria-labelledby": E,
      role: p,
      scrollable: _,
      transparent: m = !1
    } = e, C = i.useRef(null), I = i.useContext(c.default);
    return (0, r.jsx)("section", {
      className: s()(t, g.container, {
        [g.themed]: !m,
        [g.transparent]: m,
        [g.themedMobile]: u.isMobile
      }),
      "aria-label": h,
      "aria-labelledby": E,
      role: p,
      ref: C,
      children: (0, r.jsxs)(a.FocusRingScope, {
        containerRef: C,
        children: [(0, r.jsxs)("div", {
          className: g.upperContainer,
          children: [(0, r.jsxs)("div", {
            className: s()(g.children, n, {
              [g.scrollable]: _
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
p.Icon = h, p.Title = e => {
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
}, p.Divider = E, p.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, r.jsx)(f.default, {
    className: g.caret
  }) : (0, r.jsx)(d.default, {
    className: g.caret
  })
}, t.default = p