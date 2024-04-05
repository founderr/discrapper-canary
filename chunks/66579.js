"use strict";
n.r(t), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("803997"),
  l = n.n(s),
  i = n("481060"),
  u = n("285952"),
  o = n("259580"),
  d = n("680641");
class c extends r.PureComponent {
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
    return (0, a.jsx)(u.default, {
      justify: u.default.Justify.START,
      className: l()(d.breadcrumbs, t),
      children: n
    })
  }
  constructor(...e) {
    var t, n, r;
    super(...e), t = this, n = "renderBreadcrumb", r = (e, t) => {
      let {
        activeId: n,
        onBreadcrumbClick: r,
        breadcrumbs: s,
        renderCustomBreadcrumb: u,
        separatorClassName: c
      } = this.props, f = e.id === n, _ = t === s.length - 1, I = null != u ? u(e, f) : (0, a.jsx)("span", {
        className: l()(d.breadcrumb, {
          [d.activeBreadcrumb]: f,
          [d.interactiveBreadcrumb]: null != r
        }),
        children: e.label
      });
      return (0, a.jsxs)("div", {
        className: l()(d.breadcrumbWrapper, {
          [d.breadcrumbFinalWrapper]: _
        }),
        children: [null != r ? (0, a.jsx)(i.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: d.breadcrumbClickWrapper,
          children: I
        }) : I, _ ? null : (0, a.jsx)(o.default, {
          className: l()(d.breadcrumbArrow, c),
          direction: o.default.Directions.RIGHT
        })]
      }, e.id)
    }, n in t ? Object.defineProperty(t, n, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = r
  }
}
t.default = c