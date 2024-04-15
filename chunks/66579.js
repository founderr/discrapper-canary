"use strict";
n.r(t), n("47120");
var r = n("735250"),
  i = n("470079"),
  a = n("120356"),
  s = n.n(a),
  l = n("481060"),
  u = n("285952"),
  o = n("259580"),
  d = n("680641");
class c extends i.PureComponent {
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
    return (0, r.jsx)(u.default, {
      justify: u.default.Justify.START,
      className: s()(d.breadcrumbs, t),
      children: n
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "renderBreadcrumb", i = (e, t) => {
      let {
        activeId: n,
        onBreadcrumbClick: i,
        breadcrumbs: a,
        renderCustomBreadcrumb: u,
        separatorClassName: c
      } = this.props, f = e.id === n, p = t === a.length - 1, E = null != u ? u(e, f) : (0, r.jsx)("span", {
        className: s()(d.breadcrumb, {
          [d.activeBreadcrumb]: f,
          [d.interactiveBreadcrumb]: null != i
        }),
        children: e.label
      });
      return (0, r.jsxs)("div", {
        className: s()(d.breadcrumbWrapper, {
          [d.breadcrumbFinalWrapper]: p
        }),
        children: [null != i ? (0, r.jsx)(l.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: d.breadcrumbClickWrapper,
          children: E
        }) : E, p ? null : (0, r.jsx)(o.default, {
          className: s()(d.breadcrumbArrow, c),
          direction: o.default.Directions.RIGHT
        })]
      }, e.id)
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.default = c