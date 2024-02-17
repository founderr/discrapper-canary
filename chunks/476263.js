"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var l = n("37983"),
  a = n("884691"),
  r = n("414456"),
  s = n.n(r),
  i = n("90915"),
  u = n("446674"),
  o = n("669491"),
  c = n("77078"),
  d = n("80300"),
  f = n("471671"),
  E = n("103603"),
  h = n("474293"),
  g = n("580357"),
  _ = n("356659");
let v = {
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
    [v.SMOL]: 16,
    [v.MINI]: 20,
    [v.SMALLER]: 24,
    [v.SMALL]: 30,
    [v.MEDIUM]: 40,
    [v.LARGE]: 50,
    [v.LARGER]: 64,
    [v.XLARGE]: 100
  },
  R = {
    [v.SMOL]: [10, 10, 8, 6, 6, 4],
    [v.MINI]: [12, 12, 10, 10, 8, 6, 4],
    [v.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
    [v.SMALL]: [14, 14, 12, 12, 10, 8, 6],
    [v.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
    [v.LARGE]: [18, 18, 16, 16, 14, 12, 10],
    [v.LARGER]: [19, 19, 17, 17, 15, 13, 11],
    [v.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
  };
class m extends a.PureComponent {
  renderAcronym() {
    let {
      guild: e,
      iconSrc: t
    } = this.props;
    return null != e.icon || null != t ? null : (0, l.jsx)("div", {
      className: _.acronym,
      children: e.acronym
    })
  }
  renderBadge() {
    let {
      showBadge: e,
      guild: t,
      badgeStrokeColor: n
    } = this.props;
    return e && null != t.hasFeature ? (0, l.jsx)(g.default, {
      className: _.guildIconBadge,
      guild: t,
      badgeStrokeColor: n
    }) : null
  }
  renderIcon() {
    var e, t;
    let {
      guild: n,
      className: a,
      showBadge: r,
      active: i,
      size: u,
      style: o = {},
      textScale: d,
      showTooltip: f,
      tooltipPosition: E,
      onClick: g,
      to: v,
      badgeStrokeColor: S,
      animate: m,
      tabIndex: T,
      iconSrc: C,
      "aria-hidden": N,
      ...p
    } = this.props, I = R[u], x = null != g ? c.Clickable : "div";
    return (0, l.jsxs)(x, {
      className: s(_.icon, a, (0, h.getClass)(_, "iconSize", u), {
        [null !== (e = (0, h.getClass)(_, "iconActive", u)) && void 0 !== e ? e : ""]: i,
        [_.iconInactive]: !i,
        [_.noIcon]: null == n.icon
      }),
      "aria-hidden": N,
      style: null == n.icon ? {
        fontSize: (null !== (t = I[n.acronym.length]) && void 0 !== t ? t : I[I.length - 1]) * d,
        ...o
      } : o,
      onClick: null != v || null == g ? void 0 : g,
      tabIndex: T,
      ...p,
      children: [this.renderAcronym(), this.renderBadge()]
    })
  }
  renderTooltip() {
    let {
      guild: e,
      showTooltip: t,
      tooltipPosition: n
    } = this.props;
    return t ? (0, l.jsx)(c.Tooltip, {
      text: e.name,
      position: n,
      "aria-label": !1,
      children: e => a.cloneElement(a.Children.only(this.renderIcon()), {
        ...e
      })
    }) : this.renderIcon()
  }
  render() {
    let {
      to: e,
      guild: t,
      source: n,
      tabIndex: a,
      "aria-hidden": r
    } = this.props;
    return null != e ? (0, l.jsx)(i.Link, {
      "aria-hidden": r,
      to: {
        pathname: e,
        state: null != n ? {
          analyticsSource: n
        } : null
      },
      "aria-label": t.toString(),
      tabIndex: a,
      children: this.renderTooltip()
    }) : this.renderTooltip()
  }
}
let T = u.default.connectStores([f.default], e => {
  let {
    guild: t,
    animate: n,
    iconSrc: l,
    style: a,
    size: r
  } = e;
  return {
    style: {
      ...a,
      backgroundImage: (0, E.makeCssUrlString)(null != l ? l : t.getIconURL(S[r], n && f.default.isFocused()))
    }
  }
})((0, d.backgroundImagePreloader)(e => (0, l.jsx)(m, {
  ...e
})));
class C extends a.PureComponent {
  render() {
    return (0, l.jsx)(T, {
      ...this.props
    })
  }
}
C.Sizes = v, C.defaultProps = {
  size: v.LARGE,
  textScale: 1,
  showBadge: !1,
  showTooltip: !1,
  active: !1,
  tooltipPosition: "top",
  badgeStrokeColor: o.default.unsafe_rawColors.WHITE_500.css,
  animate: !1
};
var N = C