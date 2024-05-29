"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("481060"),
  o = a("285952"),
  c = a("259580"),
  d = a("238810");
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
    } = this.props, a = e.map(this.renderBreadcrumb);
    return (0, n.jsx)(o.default, {
      justify: o.default.Justify.START,
      className: i()(d.breadcrumbs, t),
      children: a
    })
  }
  constructor(...e) {
    var t, a, r;
    super(...e), t = this, a = "renderBreadcrumb", r = (e, t) => {
      let {
        activeId: a,
        onBreadcrumbClick: r,
        breadcrumbs: s,
        renderCustomBreadcrumb: o,
        separatorClassName: u
      } = this.props, f = e.id === a, m = t === s.length - 1, h = null != o ? o(e, f) : (0, n.jsx)("span", {
        className: i()(d.breadcrumb, {
          [d.activeBreadcrumb]: f,
          [d.interactiveBreadcrumb]: null != r
        }),
        children: e.label
      });
      return (0, n.jsxs)("div", {
        className: i()(d.breadcrumbWrapper, {
          [d.breadcrumbFinalWrapper]: m
        }),
        children: [null != r ? (0, n.jsx)(l.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: d.breadcrumbClickWrapper,
          children: h
        }) : h, m ? null : (0, n.jsx)(c.default, {
          className: i()(d.breadcrumbArrow, u),
          direction: c.default.Directions.RIGHT
        })]
      }, e.id)
    }, a in t ? Object.defineProperty(t, a, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = r
  }
}
t.default = u