n.d(t, {
  h: function() {
    return g
  }
});
var a, l, i, s, r = n(735250),
  o = n(470079),
  c = n(476400),
  d = n.n(c),
  u = n(948789),
  h = n(982905),
  p = n(66037),
  m = n(231338),
  N = n(953920);
let k = m.j_.MAIN_NAVIGATION_MENU;
class g extends(s = o.PureComponent) {
  render() {
    let e = (0, u.fQ)(this.context.router),
      {
        isOpen: t,
        dropdownLinks: n,
        TrackClick: a,
        avoidRouter: l,
        id: i,
        "aria-label": s
      } = this.props,
      o = n.map((t, n) => t.divider ? (0, r.jsx)("hr", {
        className: N.divider
      }, "divider-".concat(n)) : t.external ? (0, r.jsx)("li", {
        className: N.moreListItemInactive,
        children: (0, r.jsx)(a, {
          className: N.moreListLink,
          eventName: k,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          children: (0, r.jsx)("span", {
            className: N.moreListLinkCopy,
            children: t.title
          })
        })
      }, t.route) : (0, r.jsx)("li", {
        className: (0, h.l)(N, "moreListItem", e(t.route) ? "Active" : "Inactive"),
        children: (0, r.jsx)(p.Z, {
          avoidRouter: l,
          className: N.moreListLink,
          to: t.route,
          from: m.j_.MAIN_NAVIGATION_MENU,
          role: "menuitem",
          children: (0, r.jsx)(a, {
            tag: "span",
            className: N.moreListLinkCopy,
            eventName: k,
            data: {
              linkClicked: t.linkClicked
            },
            children: t.title
          })
        })
      }, t.route));
    return (0, r.jsx)("ul", {
      id: i,
      className: (0, h.l)(N, "moreList", t ? "Open" : "Closed"),
      "aria-label": s,
      children: o
    })
  }
}
a = g, l = "contextTypes", i = {
  router: d().object.isRequired
}, l in a ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i