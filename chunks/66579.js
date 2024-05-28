"use strict";
r.r(t), r("47120");
var s = r("735250"),
  n = r("470079"),
  l = r("120356"),
  i = r.n(l),
  a = r("481060"),
  o = r("285952"),
  c = r("259580"),
  u = r("238810");
class d extends n.PureComponent {
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
    } = this.props, r = e.map(this.renderBreadcrumb);
    return (0, s.jsx)(o.default, {
      justify: o.default.Justify.START,
      className: i()(u.breadcrumbs, t),
      children: r
    })
  }
  constructor(...e) {
    var t, r, n;
    super(...e), t = this, r = "renderBreadcrumb", n = (e, t) => {
      let {
        activeId: r,
        onBreadcrumbClick: n,
        breadcrumbs: l,
        renderCustomBreadcrumb: o,
        separatorClassName: d
      } = this.props, f = e.id === r, p = t === l.length - 1, h = null != o ? o(e, f) : (0, s.jsx)("span", {
        className: i()(u.breadcrumb, {
          [u.activeBreadcrumb]: f,
          [u.interactiveBreadcrumb]: null != n
        }),
        children: e.label
      });
      return (0, s.jsxs)("div", {
        className: i()(u.breadcrumbWrapper, {
          [u.breadcrumbFinalWrapper]: p
        }),
        children: [null != n ? (0, s.jsx)(a.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: u.breadcrumbClickWrapper,
          children: h
        }) : h, p ? null : (0, s.jsx)(c.default, {
          className: i()(u.breadcrumbArrow, d),
          direction: c.default.Directions.RIGHT
        })]
      }, e.id)
    }, r in t ? Object.defineProperty(t, r, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[r] = n
  }
}
t.default = d