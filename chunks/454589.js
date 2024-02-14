"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  a = n("414456"),
  u = n.n(a),
  l = n("77078"),
  o = n("145131"),
  s = n("461380"),
  c = n("361466");
class d extends i.PureComponent {
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
    return (0, r.jsx)(o.default, {
      justify: o.default.Justify.START,
      className: u(c.breadcrumbs, t),
      children: n
    })
  }
  constructor(...e) {
    super(...e), this.renderBreadcrumb = (e, t) => {
      let {
        activeId: n,
        onBreadcrumbClick: i,
        breadcrumbs: a,
        renderCustomBreadcrumb: o,
        separatorClassName: d
      } = this.props, E = e.id === n, _ = t === a.length - 1, f = null != o ? o(e, E) : (0, r.jsx)("span", {
        className: u(c.breadcrumb, {
          [c.activeBreadcrumb]: E,
          [c.interactiveBreadcrumb]: null != i
        }),
        children: e.label
      });
      return (0, r.jsxs)("div", {
        className: u(c.breadcrumbWrapper, {
          [c.breadcrumbFinalWrapper]: _
        }),
        children: [null != i ? (0, r.jsx)(l.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: c.breadcrumbClickWrapper,
          children: f
        }) : f, _ ? null : (0, r.jsx)(s.default, {
          className: u(c.breadcrumbArrow, d),
          direction: s.default.Directions.RIGHT
        })]
      }, e.id)
    }
  }
}
var E = d