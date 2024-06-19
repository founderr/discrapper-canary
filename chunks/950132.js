n.d(t, {
  h: function() {
    return x
  }
});
var l, a, i, r, s = n(735250),
  o = n(470079),
  c = n(476400),
  u = n.n(c),
  d = n(948789),
  h = n(982905),
  p = n(66037),
  m = n(231338),
  N = n(953920);
let k = m.j_.MAIN_NAVIGATION_MENU;
class x extends(r = o.PureComponent) {
  render() {
    let e = (0, d.fQ)(this.context.router),
      {
        isOpen: t,
        dropdownLinks: n,
        TrackClick: l,
        avoidRouter: a,
        id: i,
        "aria-label": r
      } = this.props,
      o = n.map((t, n) => t.divider ? (0, s.jsx)("hr", {
        className: N.divider
      }, "divider-".concat(n)) : t.external ? (0, s.jsx)("li", {
        className: N.moreListItemInactive,
        children: (0, s.jsx)(l, {
          className: N.moreListLink,
          eventName: k,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          children: (0, s.jsx)("span", {
            className: N.moreListLinkCopy,
            children: t.title
          })
        })
      }, t.route) : (0, s.jsx)("li", {
        className: (0, h.l)(N, "moreListItem", e(t.route) ? "Active" : "Inactive"),
        children: (0, s.jsx)(p.Z, {
          avoidRouter: a,
          className: N.moreListLink,
          to: t.route,
          from: m.j_.MAIN_NAVIGATION_MENU,
          role: "menuitem",
          children: (0, s.jsx)(l, {
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
    return (0, s.jsx)("ul", {
      id: i,
      className: (0, h.l)(N, "moreList", t ? "Open" : "Closed"),
      "aria-label": r,
      children: o
    })
  }
}
l = x, a = "contextTypes", i = {
  router: u().object.isRequired
}, a in l ? Object.defineProperty(l, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = i