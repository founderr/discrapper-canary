"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var l = n("37983"),
  i = n("884691"),
  s = n("414456"),
  r = n.n(s),
  o = n("90915"),
  a = n("446674"),
  u = n("669491"),
  d = n("77078"),
  c = n("80300"),
  f = n("471671"),
  p = n("103603"),
  h = n("474293"),
  m = n("580357"),
  E = n("491088");
let I = {
    SMOL: "Smol",
    MINI: "Mini",
    SMALLER: "Smaller",
    SMALL: "Small",
    MEDIUM: "Medium",
    LARGE: "Large",
    LARGER: "Larger",
    XLARGE: "XLarge"
  },
  S = {
    [I.SMOL]: 16,
    [I.MINI]: 20,
    [I.SMALLER]: 24,
    [I.SMALL]: 30,
    [I.MEDIUM]: 40,
    [I.LARGE]: 50,
    [I.LARGER]: 64,
    [I.XLARGE]: 100
  },
  g = {
    [I.SMOL]: [10, 10, 8, 6, 6, 4],
    [I.MINI]: [12, 12, 10, 10, 8, 6, 4],
    [I.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
    [I.SMALL]: [14, 14, 12, 12, 10, 8, 6],
    [I.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
    [I.LARGE]: [18, 18, 16, 16, 14, 12, 10],
    [I.LARGER]: [19, 19, 17, 17, 15, 13, 11],
    [I.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
  };
class _ extends i.PureComponent {
  renderAcronym() {
    let {
      guild: e,
      iconSrc: t
    } = this.props;
    return null != e.icon || null != t ? null : (0, l.jsx)("div", {
      className: E.acronym,
      children: e.acronym
    })
  }
  renderBadge() {
    let {
      showBadge: e,
      guild: t,
      badgeStrokeColor: n
    } = this.props;
    return e && null != t.hasFeature ? (0, l.jsx)(m.default, {
      className: E.guildIconBadge,
      guild: t,
      badgeStrokeColor: n
    }) : null
  }
  renderIcon() {
    var e, t;
    let {
      guild: n,
      className: i,
      showBadge: s,
      active: o,
      size: a,
      style: u = {},
      textScale: c,
      showTooltip: f,
      tooltipPosition: p,
      onClick: m,
      to: I,
      badgeStrokeColor: S,
      animate: _,
      tabIndex: C,
      iconSrc: L,
      "aria-hidden": R,
      ...N
    } = this.props, v = g[a], x = null != m ? d.Clickable : "div";
    return (0, l.jsxs)(x, {
      className: r(E.icon, i, (0, h.getClass)(E, "iconSize", a), {
        [null !== (e = (0, h.getClass)(E, "iconActive", a)) && void 0 !== e ? e : ""]: o,
        [E.iconInactive]: !o,
        [E.noIcon]: null == n.icon
      }),
      "aria-hidden": R,
      style: null == n.icon ? {
        fontSize: (null !== (t = v[n.acronym.length]) && void 0 !== t ? t : v[v.length - 1]) * c,
        ...u
      } : u,
      onClick: null != I || null == m ? void 0 : m,
      tabIndex: C,
      ...N,
      children: [this.renderAcronym(), this.renderBadge()]
    })
  }
  renderTooltip() {
    let {
      guild: e,
      showTooltip: t,
      tooltipPosition: n
    } = this.props;
    return t ? (0, l.jsx)(d.Tooltip, {
      text: e.name,
      position: n,
      "aria-label": !1,
      children: e => i.cloneElement(i.Children.only(this.renderIcon()), {
        ...e
      })
    }) : this.renderIcon()
  }
  render() {
    let {
      to: e,
      guild: t,
      source: n,
      tabIndex: i,
      "aria-hidden": s
    } = this.props;
    return null != e ? (0, l.jsx)(o.Link, {
      "aria-hidden": s,
      to: {
        pathname: e,
        state: null != n ? {
          analyticsSource: n
        } : null
      },
      "aria-label": t.toString(),
      tabIndex: i,
      children: this.renderTooltip()
    }) : this.renderTooltip()
  }
}
let C = a.default.connectStores([f.default], e => {
  let {
    guild: t,
    animate: n,
    iconSrc: l,
    style: i,
    size: s
  } = e;
  return {
    style: {
      ...i,
      backgroundImage: (0, p.makeCssUrlString)(null != l ? l : t.getIconURL(S[s], n && f.default.isFocused()))
    }
  }
})((0, c.backgroundImagePreloader)(e => (0, l.jsx)(_, {
  ...e
})));
class L extends i.PureComponent {
  render() {
    return (0, l.jsx)(C, {
      ...this.props
    })
  }
}
L.Sizes = I, L.defaultProps = {
  size: I.LARGE,
  textScale: 1,
  showBadge: !1,
  showTooltip: !1,
  active: !1,
  tooltipPosition: "top",
  badgeStrokeColor: u.default.unsafe_rawColors.WHITE_500.css,
  animate: !1
};
var R = L