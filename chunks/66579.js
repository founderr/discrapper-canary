"use strict";
l.r(r), l("47120");
var t = l("735250"),
  n = l("470079"),
  s = l("120356"),
  a = l.n(s),
  i = l("481060"),
  o = l("285952"),
  c = l("259580"),
  d = l("238810");
class u extends n.PureComponent {
  handleClick(e) {
    let {
      onBreadcrumbClick: r
    } = this.props;
    null != r && r(e)
  }
  render() {
    let {
      breadcrumbs: e,
      className: r
    } = this.props, l = e.map(this.renderBreadcrumb);
    return (0, t.jsx)(o.default, {
      justify: o.default.Justify.START,
      className: a()(d.breadcrumbs, r),
      children: l
    })
  }
  constructor(...e) {
    var r, l, n;
    super(...e), r = this, l = "renderBreadcrumb", n = (e, r) => {
      let {
        activeId: l,
        onBreadcrumbClick: n,
        breadcrumbs: s,
        renderCustomBreadcrumb: o,
        separatorClassName: u
      } = this.props, p = e.id === l, m = r === s.length - 1, f = null != o ? o(e, p) : (0, t.jsx)("span", {
        className: a()(d.breadcrumb, {
          [d.activeBreadcrumb]: p,
          [d.interactiveBreadcrumb]: null != n
        }),
        children: e.label
      });
      return (0, t.jsxs)("div", {
        className: a()(d.breadcrumbWrapper, {
          [d.breadcrumbFinalWrapper]: m
        }),
        children: [null != n ? (0, t.jsx)(i.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: d.breadcrumbClickWrapper,
          children: f
        }) : f, m ? null : (0, t.jsx)(c.default, {
          className: a()(d.breadcrumbArrow, u),
          direction: c.default.Directions.RIGHT
        })]
      }, e.id)
    }, l in r ? Object.defineProperty(r, l, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : r[l] = n
  }
}
r.default = u