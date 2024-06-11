"use strict";
n.r(t), n.d(t, {
  Divider: function() {
    return f
  },
  Icon: function() {
    return T
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("608863"),
  l = n("873546"),
  u = n("481060"),
  d = n("290297"),
  _ = n("292937"),
  c = n("692437"),
  E = n("806519"),
  I = n("627267");
let T = e => {
    let {
      className: t,
      iconClassName: n,
      children: r,
      selected: s = !1,
      disabled: o = !1,
      showBadge: l = !1,
      color: d,
      foreground: _,
      background: c,
      icon: T,
      onClick: f,
      onContextMenu: S,
      tooltip: h = null,
      tooltipColor: A,
      tooltipPosition: m = "bottom",
      tooltipDisabled: N,
      hideOnClick: p = !0,
      role: O,
      "aria-label": C,
      "aria-hidden": R,
      "aria-checked": g,
      "aria-expanded": L,
      "aria-haspopup": v
    } = e, D = (0, i.jsx)(T, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: a()(n, I.icon),
      foreground: null != _ ? _ : void 0,
      background: null != c ? c : void 0,
      color: d
    }), M = C;
    return null == M && "string" == typeof h && (M = h), (0, i.jsx)(u.Tooltip, {
      text: h,
      color: A,
      position: m,
      hideOnClick: p,
      shouldShow: !N,
      children: e => {
        let {
          onMouseEnter: h,
          onMouseLeave: A,
          onFocus: m,
          onBlur: N
        } = e;
        return null == f ? (0, i.jsx)("div", {
          className: a()(t, [I.iconWrapper]),
          children: (0, i.jsx)(T, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: a()(n, I.icon),
            foreground: null != _ ? _ : void 0,
            background: null != c ? c : void 0,
            color: d,
            "aria-hidden": R,
            onMouseEnter: h,
            onMouseLeave: A,
            onFocus: m,
            onBlur: N
          })
        }) : (0, i.jsxs)(u.Clickable, {
          tag: "div",
          onClick: o ? void 0 : f,
          onContextMenu: o ? void 0 : S,
          onMouseEnter: h,
          onMouseLeave: A,
          onFocus: m,
          onBlur: N,
          className: a()(t, {
            [I.iconWrapper]: !0,
            [I.clickable]: !o && null != f,
            [I.selected]: s
          }),
          role: O,
          "aria-label": M,
          "aria-hidden": R,
          "aria-checked": g,
          "aria-haspopup": v,
          "aria-expanded": L,
          tabIndex: o || null == f ? -1 : 0,
          children: [l ? (0, i.jsx)(E.default, {
            mask: E.default.Masks.HEADER_BAR_BADGE,
            children: D
          }) : D, l ? (0, i.jsx)("span", {
            className: I.iconBadge
          }) : null, r]
        })
      }
    })
  },
  f = e => {
    let {
      className: t
    } = e;
    return (0, i.jsx)("div", {
      className: a()(I.divider, t)
    })
  },
  S = e => {
    let {
      className: t,
      innerClassName: n,
      children: s,
      childrenBottom: _,
      toolbar: c,
      onDoubleClick: E,
      "aria-label": T,
      "aria-labelledby": f,
      role: S,
      scrollable: h,
      transparent: A = !1
    } = e, m = r.useRef(null), N = r.useContext(d.default);
    return (0, i.jsx)("section", {
      className: a()(t, I.container, {
        [I.themed]: !A,
        [I.transparent]: A,
        [I.themedMobile]: l.isMobile
      }),
      "aria-label": T,
      "aria-labelledby": f,
      role: S,
      ref: m,
      children: (0, i.jsxs)(u.FocusRingScope, {
        containerRef: m,
        children: [(0, i.jsxs)("div", {
          className: I.upperContainer,
          children: [(0, i.jsxs)("div", {
            className: a()(I.children, n, {
              [I.scrollable]: h
            }),
            onDoubleClick: E,
            children: [l.isMobile && null != N ? (0, i.jsx)(o.HamburgerButton, {
              onClick: N,
              className: I.hamburger
            }) : null, s]
          }), null != c ? (0, i.jsx)("div", {
            className: I.toolbar,
            children: c
          }) : null]
        }), _]
      })
    })
  };
S.Icon = T, S.Title = e => {
  let {
    className: t,
    wrapperClassName: n,
    children: r,
    onContextMenu: s,
    onClick: o,
    id: l,
    muted: d = !1,
    level: _ = 1
  } = e, c = (0, i.jsx)(u.HeadingLevel, {
    forceLevel: _,
    children: (0, i.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      color: d ? "header-secondary" : void 0,
      className: a()(t, I.title),
      id: l,
      children: r
    })
  });
  return null != o ? (0, i.jsx)(u.Clickable, {
    onClick: o,
    onContextMenu: s,
    className: a()(n, I.titleWrapper),
    children: c
  }) : (0, i.jsx)("div", {
    className: a()(n, I.titleWrapper),
    onContextMenu: s,
    children: c
  })
}, S.Divider = f, S.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, i.jsx)(c.default, {
    className: I.caret
  }) : (0, i.jsx)(_.default, {
    className: I.caret
  })
}, t.default = S