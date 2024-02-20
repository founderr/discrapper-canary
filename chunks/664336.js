"use strict";
A.r(t), A.d(t, {
  Icon: function() {
    return C
  },
  Divider: function() {
    return h
  },
  default: function() {
    return p
  }
});
var a = A("37983"),
  l = A("884691"),
  n = A("414456"),
  r = A.n(n),
  s = A("353386"),
  i = A("394846"),
  o = A("77078"),
  d = A("597590"),
  u = A("980428"),
  c = A("772280"),
  f = A("587974"),
  g = A("892307");
let C = e => {
    let {
      className: t,
      iconClassName: A,
      children: l,
      selected: n = !1,
      disabled: s = !1,
      showBadge: i = !1,
      color: d,
      foreground: u,
      background: c,
      icon: C,
      onClick: h,
      onContextMenu: m,
      tooltip: p = null,
      tooltipColor: T,
      tooltipPosition: v = "bottom",
      hideOnClick: U = !0,
      role: I,
      "aria-label": E,
      "aria-hidden": x,
      "aria-checked": N,
      "aria-expanded": D,
      "aria-haspopup": L
    } = e, q = (0, a.jsx)(C, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: r(A, g.icon),
      foreground: null != u ? u : void 0,
      background: null != c ? c : void 0,
      color: d
    }), O = E;
    return null == O && "string" == typeof p && (O = p), (0, a.jsx)(o.Tooltip, {
      text: p,
      color: T,
      position: v,
      hideOnClick: U,
      children: e => {
        let {
          onMouseEnter: p,
          onMouseLeave: T,
          onFocus: v,
          onBlur: U
        } = e;
        return null == h ? (0, a.jsx)("div", {
          className: r(t, [g.iconWrapper]),
          children: (0, a.jsx)(C, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: r(A, g.icon),
            foreground: null != u ? u : void 0,
            background: null != c ? c : void 0,
            color: d,
            "aria-hidden": x,
            onMouseEnter: p,
            onMouseLeave: T,
            onFocus: v,
            onBlur: U
          })
        }) : (0, a.jsxs)(o.Clickable, {
          tag: "div",
          onClick: s ? void 0 : h,
          onContextMenu: s ? void 0 : m,
          onMouseEnter: p,
          onMouseLeave: T,
          onFocus: v,
          onBlur: U,
          className: r(t, {
            [g.iconWrapper]: !0,
            [g.clickable]: !s && null != h,
            [g.selected]: n
          }),
          role: I,
          "aria-label": O,
          "aria-hidden": x,
          "aria-checked": N,
          "aria-haspopup": L,
          "aria-expanded": D,
          tabIndex: s || null == h ? -1 : 0,
          children: [i ? (0, a.jsx)(f.default, {
            mask: f.default.Masks.HEADER_BAR_BADGE,
            children: q
          }) : q, i ? (0, a.jsx)("span", {
            className: g.iconBadge
          }) : null, l]
        })
      }
    })
  },
  h = e => {
    let {
      className: t
    } = e;
    return (0, a.jsx)("div", {
      className: r(g.divider, t)
    })
  },
  m = e => {
    let {
      className: t,
      innerClassName: A,
      children: n,
      childrenBottom: u,
      toolbar: c,
      onDoubleClick: f,
      "aria-label": C,
      "aria-labelledby": h,
      role: m,
      scrollable: p,
      transparent: T = !1
    } = e, v = l.useRef(null), U = l.useContext(d.default);
    return (0, a.jsx)("section", {
      className: r(t, g.container, {
        [g.themed]: !T,
        [g.transparent]: T,
        [g.themedMobile]: i.isMobile
      }),
      "aria-label": C,
      "aria-labelledby": h,
      role: m,
      ref: v,
      children: (0, a.jsxs)(o.FocusRingScope, {
        containerRef: v,
        children: [(0, a.jsxs)("div", {
          className: g.upperContainer,
          children: [(0, a.jsxs)("div", {
            className: r(g.children, A, {
              [g.scrollable]: p
            }),
            onDoubleClick: f,
            children: [i.isMobile && null != U ? (0, a.jsx)(s.default, {
              onClick: U,
              className: g.hamburger
            }) : null, n]
          }), null != c ? (0, a.jsx)("div", {
            className: g.toolbar,
            children: c
          }) : null]
        }), u]
      })
    })
  };
m.Icon = C, m.Title = e => {
  let {
    className: t,
    wrapperClassName: A,
    children: l,
    onContextMenu: n,
    onClick: s,
    id: i,
    muted: d = !1,
    level: u = 1
  } = e, c = (0, a.jsx)(o.HeadingLevel, {
    forceLevel: u,
    children: (0, a.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      color: d ? "header-secondary" : void 0,
      className: r(t, g.title),
      id: i,
      children: l
    })
  });
  return null != s ? (0, a.jsx)(o.Clickable, {
    onClick: s,
    onContextMenu: n,
    className: r(A, g.titleWrapper),
    children: c
  }) : (0, a.jsx)("div", {
    className: r(A, g.titleWrapper),
    onContextMenu: n,
    children: c
  })
}, m.Divider = h, m.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, a.jsx)(c.default, {
    className: g.caret
  }) : (0, a.jsx)(u.default, {
    className: g.caret
  })
};
var p = m