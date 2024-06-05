"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("481060"),
  o = n("285952"),
  c = n("259580"),
  d = n("238810");
class u extends r.PureComponent {
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
    return (0, a.jsx)(o.default, {
      justify: o.default.Justify.START,
      className: i()(d.breadcrumbs, t),
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
        renderCustomBreadcrumb: o,
        separatorClassName: u
      } = this.props, f = e.id === n, m = t === s.length - 1, h = null != o ? o(e, f) : (0, a.jsx)("span", {
        className: i()(d.breadcrumb, {
          [d.activeBreadcrumb]: f,
          [d.interactiveBreadcrumb]: null != r
        }),
        children: e.label
      });
      return (0, a.jsxs)("div", {
        className: i()(d.breadcrumbWrapper, {
          [d.breadcrumbFinalWrapper]: m
        }),
        children: [null != r ? (0, a.jsx)(l.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: d.breadcrumbClickWrapper,
          children: h
        }) : h, m ? null : (0, a.jsx)(c.default, {
          className: i()(d.breadcrumbArrow, u),
          direction: c.default.Directions.RIGHT
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
t.default = u