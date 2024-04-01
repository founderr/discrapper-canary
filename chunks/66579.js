"use strict";
r.r(t), r("47120");
var n = r("735250"),
  s = r("470079"),
  a = r("803997"),
  i = r.n(a),
  l = r("481060"),
  c = r("285952"),
  u = r("259580"),
  o = r("680641");
class d extends s.PureComponent {
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
    return (0, n.jsx)(c.default, {
      justify: c.default.Justify.START,
      className: i()(o.breadcrumbs, t),
      children: r
    })
  }
  constructor(...e) {
    var t, r, s;
    super(...e), t = this, r = "renderBreadcrumb", s = (e, t) => {
      let {
        activeId: r,
        onBreadcrumbClick: s,
        breadcrumbs: a,
        renderCustomBreadcrumb: c,
        separatorClassName: d
      } = this.props, f = e.id === r, p = t === a.length - 1, m = null != c ? c(e, f) : (0, n.jsx)("span", {
        className: i()(o.breadcrumb, {
          [o.activeBreadcrumb]: f,
          [o.interactiveBreadcrumb]: null != s
        }),
        children: e.label
      });
      return (0, n.jsxs)("div", {
        className: i()(o.breadcrumbWrapper, {
          [o.breadcrumbFinalWrapper]: p
        }),
        children: [null != s ? (0, n.jsx)(l.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: o.breadcrumbClickWrapper,
          children: m
        }) : m, p ? null : (0, n.jsx)(u.default, {
          className: i()(o.breadcrumbArrow, d),
          direction: u.default.Directions.RIGHT
        })]
      }, e.id)
    }, r in t ? Object.defineProperty(t, r, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[r] = s
  }
}
t.default = d