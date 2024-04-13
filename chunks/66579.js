"use strict";
n.r(t), n("47120");
var r = n("735250"),
  i = n("470079"),
  s = n("803997"),
  a = n.n(s),
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
      className: a()(d.breadcrumbs, t),
      children: n
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "renderBreadcrumb", i = (e, t) => {
      let {
        activeId: n,
        onBreadcrumbClick: i,
        breadcrumbs: s,
        renderCustomBreadcrumb: u,
        separatorClassName: c
      } = this.props, f = e.id === n, p = t === s.length - 1, E = null != u ? u(e, f) : (0, r.jsx)("span", {
        className: a()(d.breadcrumb, {
          [d.activeBreadcrumb]: f,
          [d.interactiveBreadcrumb]: null != i
        }),
        children: e.label
      });
      return (0, r.jsxs)("div", {
        className: a()(d.breadcrumbWrapper, {
          [d.breadcrumbFinalWrapper]: p
        }),
        children: [null != i ? (0, r.jsx)(l.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: d.breadcrumbClickWrapper,
          children: E
        }) : E, p ? null : (0, r.jsx)(o.default, {
          className: a()(d.breadcrumbArrow, c),
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