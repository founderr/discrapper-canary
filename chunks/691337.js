"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("481060"),
  l = n("285952"),
  u = n("259580"),
  d = n("287805");
class _ extends r.PureComponent {
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
    return (0, i.jsx)(l.default, {
      justify: l.default.Justify.START,
      className: a()(d.breadcrumbs, t),
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
        renderCustomBreadcrumb: l,
        separatorClassName: _
      } = this.props, c = e.id === n, E = t === s.length - 1, I = null != l ? l(e, c) : (0, i.jsx)("span", {
        className: a()(d.breadcrumb, {
          [d.activeBreadcrumb]: c,
          [d.interactiveBreadcrumb]: null != r
        }),
        children: e.label
      });
      return (0, i.jsxs)("div", {
        className: a()(d.breadcrumbWrapper, {
          [d.breadcrumbFinalWrapper]: E
        }),
        children: [null != r ? (0, i.jsx)(o.Clickable, {
          tag: "span",
          onClick: () => this.handleClick(e),
          className: d.breadcrumbClickWrapper,
          children: I
        }) : I, E ? null : (0, i.jsx)(u.default, {
          className: a()(d.breadcrumbArrow, _),
          direction: u.default.Directions.RIGHT
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
t.default = _