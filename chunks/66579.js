"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  o = n.n(s),
  i = n("481060"),
  l = n("285952"),
  u = n("259580"),
  c = n("680641");
class d extends r.PureComponent {
  handleClick(e) {
    let {
      onBreadcrumbClick: t
    } = this.props;
    null != t && t(e)
  }
  render() {
    let {
      breadcrumbs: e,
      className: t
    } = this.props, n = e.map(this.renderBreadcrumb);
    return (0, a.jsx)(l.default, {
      justify: l.default.Justify.START,
      className: o()(c.breadcrumbs, t),
      children: n
    })
  }
  constructor(...e) {
    var t, n, r;
    super(...e), t = this, n = "renderBreadcrumb", r = (e, t) => {
      let {
        activeId: n,
        onBreadcrumbClick: r,
        breadcrumbs: s,
        renderCustomBreadcrumb: l,
        separatorClassName: d
      } = this.props, p = e.id === n, f = t === s.length - 1, y = null != l ? l(e, p) : (0, a.jsx)("span", {
        className: o()(c.breadcrumb, {
          [c.activeBreadcrumb]: p,
          [c.interactiveBreadcrumb]: null != r
        }),
        children: e.label
      });
      return (0, a.jsxs)("div", {
        className: o()(c.breadcrumbWrapper, {
          [c.breadcrumbFinalWrapper]: f
        }),
        children: [null != r ? (0, a.jsx)(i.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: c.breadcrumbClickWrapper,
          children: y
        }) : y, f ? null : (0, a.jsx)(u.default, {
          className: o()(c.breadcrumbArrow, d),
          direction: u.default.Directions.RIGHT
        })]
      }, e.id)
    }, n in t ? Object.defineProperty(t, n, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = r
  }
}
t.default = d