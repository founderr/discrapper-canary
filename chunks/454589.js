"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
}), r("222007");
var s = r("37983"),
  n = r("884691"),
  i = r("414456"),
  l = r.n(i),
  a = r("77078"),
  u = r("145131"),
  o = r("461380"),
  c = r("361466");
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
    return (0, s.jsx)(u.default, {
      justify: u.default.Justify.START,
      className: l(c.breadcrumbs, t),
      children: r
    })
  }
  constructor(...e) {
    super(...e), this.renderBreadcrumb = (e, t) => {
      let {
        activeId: r,
        onBreadcrumbClick: n,
        breadcrumbs: i,
        renderCustomBreadcrumb: u,
        separatorClassName: d
      } = this.props, f = e.id === r, h = t === i.length - 1, p = null != u ? u(e, f) : (0, s.jsx)("span", {
        className: l(c.breadcrumb, {
          [c.activeBreadcrumb]: f,
          [c.interactiveBreadcrumb]: null != n
        }),
        children: e.label
      });
      return (0, s.jsxs)("div", {
        className: l(c.breadcrumbWrapper, {
          [c.breadcrumbFinalWrapper]: h
        }),
        children: [null != n ? (0, s.jsx)(a.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: c.breadcrumbClickWrapper,
          children: p
        }) : p, h ? null : (0, s.jsx)(o.default, {
          className: l(c.breadcrumbArrow, d),
          direction: o.default.Directions.RIGHT
        })]
      }, e.id)
    }
  }
}
var f = d