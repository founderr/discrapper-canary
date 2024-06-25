n.d(t, {
  o: function() {
    return m
  }
}), n(47120);
var a, l = n(735250),
  i = n(470079),
  s = n(948789),
  r = n(66037),
  o = n(248108),
  c = n(231338),
  d = n(330711);

function u(e, t, n) {
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
class m extends(a = i.PureComponent) {
  render() {
    let e = (0, s.fQ)(this.context.router),
      {
        isMobile: t,
        isVisible: n,
        styles: a,
        NavigationMessages: i,
        TrackClick: u,
        avoidRouter: m
      } = this.props,
      {
        sectionShown: N
      } = this.state;
    return p(null != d.Z ? d.Z.getLocale().toLowerCase() : "", i).map(i => {
      if (null != i.links) return (0, l.jsx)(o.Z, {
        title: i.title,
        links: i.links,
        isOpen: N === i.title,
        isMobile: t,
        avoidRouter: m,
        TrackClick: u,
        onClose: this.closeSubNav,
        onOpen: this.openSubNav
      }, i.title);
      if (i.external && null != i.route) return (0, l.jsx)("li", {
        className: a.listItemInactive,
        role: "none",
        children: (0, l.jsx)(u, {
          className: a.mainNavLink,
          eventName: h,
          data: i.linkClicked ? {
            linkClicked: i.linkClicked
          } : {},
          href: i.route,
          rel: "me",
          children: i.title
        })
      }, "external_link_".concat(i.route));
      if (null != i.route) return (0, l.jsx)("li", {
        className: e(i.route) ? a.listItemActive : a.listItemInactive,
        role: "none",
        children: (0, l.jsx)(r.Z, {
          avoidRouter: m,
          to: i.route,
          from: c.j_.MAIN_NAVIGATION_MENU,
          tabIndex: n ? 0 : -1,
          role: "menuitem",
          children: (0, l.jsx)(u, {
            tag: "span",
            className: a.mainNavLink,
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
    super(...e), u(this, "state", {
      sectionShown: null
    }), u(this, "closeSubNav", () => {
      let {
        sectionShown: e
      } = this.state;
      null !== e && this.setState({
        sectionShown: null
      })
    }), u(this, "openSubNav", e => {
      let {
        sectionShown: t
      } = this.state;
      t !== e && this.setState({
        sectionShown: e
      })
    })
  }
}
u(m, "defaultProps", {
  isMobile: !1,
  isVisible: !0
})