"use strict";
r.r(t), r.d(t, {
  default: function() {
    return S
  }
}), r("222007");
var s = r("37983"),
  l = r("884691"),
  n = r("414456"),
  a = r.n(n),
  i = r("77078"),
  c = r("145131"),
  o = r("461380"),
  u = r("361466");
class d extends l.PureComponent {
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
    return (0, s.jsx)(c.default, {
      justify: c.default.Justify.START,
      className: a(u.breadcrumbs, t),
      children: r
    })
  }
  constructor(...e) {
    super(...e), this.renderBreadcrumb = (e, t) => {
      let {
        activeId: r,
        onBreadcrumbClick: l,
        breadcrumbs: n,
        renderCustomBreadcrumb: c,
        separatorClassName: d
      } = this.props, S = e.id === r, m = t === n.length - 1, E = null != c ? c(e, S) : (0, s.jsx)("span", {
        className: a(u.breadcrumb, {
          [u.activeBreadcrumb]: S,
          [u.interactiveBreadcrumb]: null != l
        }),
        children: e.label
      });
      return (0, s.jsxs)("div", {
        className: a(u.breadcrumbWrapper, {
          [u.breadcrumbFinalWrapper]: m
        }),
        children: [null != l ? (0, s.jsx)(i.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: u.breadcrumbClickWrapper,
          children: E
        }) : E, m ? null : (0, s.jsx)(o.default, {
          className: a(u.breadcrumbArrow, d),
          direction: o.default.Directions.RIGHT
        })]
      }, e.id)
    }
  }
}
var S = d