"use strict";
l.r(r), l("47120");
var t = l("735250"),
  s = l("470079"),
  n = l("120356"),
  a = l.n(n),
  i = l("481060"),
  o = l("285952"),
  c = l("259580"),
  d = l("680641");
class u extends s.PureComponent {
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
    var r, l, s;
    super(...e), r = this, l = "renderBreadcrumb", s = (e, r) => {
      let {
        activeId: l,
        onBreadcrumbClick: s,
        breadcrumbs: n,
        renderCustomBreadcrumb: o,
        separatorClassName: u
      } = this.props, p = e.id === l, m = r === n.length - 1, E = null != o ? o(e, p) : (0, t.jsx)("span", {
        className: a()(d.breadcrumb, {
          [d.activeBreadcrumb]: p,
          [d.interactiveBreadcrumb]: null != s
        }),
        children: e.label
      });
      return (0, t.jsxs)("div", {
        className: a()(d.breadcrumbWrapper, {
          [d.breadcrumbFinalWrapper]: m
        }),
        children: [null != s ? (0, t.jsx)(i.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: d.breadcrumbClickWrapper,
          children: E
        }) : E, m ? null : (0, t.jsx)(c.default, {
          className: a()(d.breadcrumbArrow, u),
          direction: c.default.Directions.RIGHT
        })]
      }, e.id)
    }, l in r ? Object.defineProperty(r, l, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : r[l] = s
  }
}
r.default = u