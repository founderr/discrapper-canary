n.d(t, {
  o: function() {
    return m
  }
}), n(47120);
var l, a = n(735250),
  i = n(470079),
  r = n(948789),
  s = n(66037),
  o = n(248108),
  c = n(231338),
  u = n(330711);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = c.j_.MAIN_NAVIGATION_MENU,
  p = (e, t) => [{
    route: c.am.DOWNLOAD,
    linkClicked: "download",
    title: t.DOWNLOAD
  }, {
    route: c.am.NITRO,
    linkClicked: "nitro",
    title: t.NITRO,
    external: !0
  }, {
    route: c.am.JOBS,
    linkClicked: "jobs",
    title: t.JOBS,
    external: !0
  }, {
    title: t.DEVELOPERS,
    links: [{
      route: c.am.RICH_PRESENCE,
      linkClicked: "rich_presence",
      title: t.RICH_PRESENCE
    }, {
      route: c.am.VERIFICATION,
      linkClicked: "verification",
      title: t.VERIFICATION,
      external: !0
    }, {
      route: c.yX.DEV_PORTAL,
      linkClicked: "developers",
      title: t.DEVELOPER_PORTAL,
      external: !0
    }, {
      route: c.yX.DEV_PORTAL_DOCUMENTATION,
      linkClicked: "documentation",
      title: t.DOCUMENTATION,
      external: !0
    }]
  }, {
    title: t.COMMUNITY,
    links: [{
      route: c.am.OPEN_SOURCE,
      linkClicked: "open_source",
      title: t.OPEN_SOURCE
    }, {
      route: c.am.PARTNERS,
      linkClicked: "partners",
      title: t.PARTNERS,
      external: !0
    }, {
      route: c.am.HYPESQUAD,
      linkClicked: "hypesquad",
      title: t.HYPESQUAD,
      external: !0
    }, {
      route: c.am.GUIDELINES,
      linkClicked: "guidelines",
      title: t.GUIDELINES,
      external: !0
    }]
  }, {
    title: t.SUPPORT,
    links: [{
      route: "//support.discord.com/hc/".concat(e),
      linkClicked: "helpandsupport",
      title: t.HELP_AND_SUPPORT,
      external: !0
    }, {
      route: c.yX.STATUS,
      linkClicked: "status",
      title: t.STATUS,
      external: !0
    }, {
      route: c.am.SAFETY_LANDING,
      linkClicked: "safetycenter",
      title: t.SAFETY_CENTER,
      external: !0
    }]
  }];
class m extends(l = i.PureComponent) {
  render() {
    let e = (0, r.fQ)(this.context.router),
      {
        isMobile: t,
        isVisible: n,
        styles: l,
        NavigationMessages: i,
        TrackClick: d,
        avoidRouter: m
      } = this.props,
      {
        sectionShown: N
      } = this.state;
    return p(null != u.Z ? u.Z.getLocale().toLowerCase() : "", i).map(i => {
      if (null != i.links) return (0, a.jsx)(o.Z, {
        title: i.title,
        links: i.links,
        isOpen: N === i.title,
        isMobile: t,
        avoidRouter: m,
        TrackClick: d,
        onClose: this.closeSubNav,
        onOpen: this.openSubNav
      }, i.title);
      if (i.external && null != i.route) return (0, a.jsx)("li", {
        className: l.listItemInactive,
        role: "none",
        children: (0, a.jsx)(d, {
          className: l.mainNavLink,
          eventName: h,
          data: i.linkClicked ? {
            linkClicked: i.linkClicked
          } : {},
          href: i.route,
          rel: "me",
          children: i.title
        })
      }, "external_link_".concat(i.route));
      if (null != i.route) return (0, a.jsx)("li", {
        className: e(i.route) ? l.listItemActive : l.listItemInactive,
        role: "none",
        children: (0, a.jsx)(s.Z, {
          avoidRouter: m,
          to: i.route,
          from: c.j_.MAIN_NAVIGATION_MENU,
          tabIndex: n ? 0 : -1,
          role: "menuitem",
          children: (0, a.jsx)(d, {
            tag: "span",
            className: l.mainNavLink,
            eventName: h,
            data: {
              linkClicked: i.linkClicked
            },
            children: i.title
          })
        })
      }, "link_".concat(i.route));
      return []
    })
  }
  constructor(...e) {
    super(...e), d(this, "state", {
      sectionShown: null
    }), d(this, "closeSubNav", () => {
      let {
        sectionShown: e
      } = this.state;
      null !== e && this.setState({
        sectionShown: null
      })
    }), d(this, "openSubNav", e => {
      let {
        sectionShown: t
      } = this.state;
      t !== e && this.setState({
        sectionShown: e
      })
    })
  }
}
d(m, "defaultProps", {
  isMobile: !1,
  isVisible: !0
})