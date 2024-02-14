"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("222007");
var r = s("37983"),
  n = s("884691"),
  i = s("414456"),
  l = s.n(i),
  a = s("77078"),
  u = s("145131"),
  o = s("461380"),
  c = s("361466");
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
    } = this.props, s = e.map(this.renderBreadcrumb);
    return (0, r.jsx)(u.default, {
      justify: u.default.Justify.START,
      className: l(c.breadcrumbs, t),
      children: s
    })
  }
  constructor(...e) {
    super(...e), this.renderBreadcrumb = (e, t) => {
      let {
        activeId: s,
        onBreadcrumbClick: n,
        breadcrumbs: i,
        renderCustomBreadcrumb: u,
        separatorClassName: d
      } = this.props, f = e.id === s, h = t === i.length - 1, p = null != u ? u(e, f) : (0, r.jsx)("span", {
        className: l(c.breadcrumb, {
          [c.activeBreadcrumb]: f,
          [c.interactiveBreadcrumb]: null != n
        }),
        children: e.label
      });
      return (0, r.jsxs)("div", {
        className: l(c.breadcrumbWrapper, {
          [c.breadcrumbFinalWrapper]: h
        }),
        children: [null != n ? (0, r.jsx)(a.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: c.breadcrumbClickWrapper,
          children: p
        }) : p, h ? null : (0, r.jsx)(o.default, {
          className: l(c.breadcrumbArrow, d),
          direction: o.default.Directions.RIGHT
        })]
      }, e.id)
    }
  }
}
var f = d