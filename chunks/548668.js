let l;
n.d(t, {
  $: function() {
    return O
  }
});
var a, i = n(735250),
  r = n(470079),
  s = n(557533),
  o = n.n(s),
  c = n(622535),
  u = n(213919),
  d = n(982905),
  h = n(794010),
  p = n(66037),
  m = n(231338),
  N = n(436620),
  k = n(330711),
  x = n(554190);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = "Footer Navigation",
  C = {
    BLURPLE: "Blurple",
    PRIMARY: "Primary"
  },
  A = e => [{
    title: e.PRODUCT,
    routes: [{
      link: m.am.DOWNLOAD,
      title: e.DOWNLOAD,
      tracking: "download"
    }, {
      link: m.am.BRANDING,
      title: e.BRANDING,
      tracking: "branding"
    }, {
      link: m.am.NITRO,
      title: e.NITRO,
      tracking: "nitro",
      external: !0
    }]
  }, {
    title: e.DEVELOPERS,
    routes: [{
      link: m.am.RICH_PRESENCE,
      title: e.RICH_PRESENCE,
      tracking: "rich_presence"
    }, {
      link: m.am.VERIFICATION,
      title: e.VERIFICATION,
      tracking: "verification",
      external: !0
    }, {
      link: m.yX.DEV_PORTAL_APPLICATIONS,
      title: e.APPLICATIONS,
      tracking: "developers",
      external: !0
    }, {
      link: m.yX.DEV_PORTAL_DOCUMENTATION,
      title: e.DOCUMENTATION,
      tracking: "documentation",
      external: !0
    }]
  }, {
    title: e.RESOURCES,
    routes: [{
      link: m.yX.HELP_AND_SUPPORT,
      title: e.HELP_AND_SUPPORT,
      tracking: "helpandsupport",
      external: !0
    }, {
      link: m.am.GUIDELINES,
      title: e.GUIDELINES,
      tracking: "guidelines",
      external: !0
    }, {
      link: m.yX.FEEDBACK,
      title: e.FEEDBACK,
      tracking: "feedback",
      external: !0
    }, {
      link: m.am.TERMS,
      title: e.TERMS,
      tracking: "terms",
      external: !0
    }, {
      link: m.am.PRIVACY,
      title: e.PRIVACY,
      tracking: "privacy",
      external: !0
    }, {
      link: m.am.SECURITY,
      title: e.SECURITY,
      tracking: "security"
    }, {
      link: m.yX.STATUS,
      title: e.STATUS,
      tracking: "status",
      external: !0
    }, {
      link: m.am.SAFETY_LANDING,
      title: e.SAFETY_CENTER,
      tracking: "safetycenter",
      external: !0
    }]
  }, {
    title: e.COMPANY,
    routes: [{
      link: m.am.COMPANY,
      title: e.ABOUT,
      tracking: "about"
    }, {
      link: m.am.BLOG,
      title: e.BLOG,
      tracking: "blog",
      external: !0
    }, {
      link: m.am.JOBS,
      title: e.JOBS,
      tracking: "join",
      external: !0
    }]
  }, {
    title: e.MORE,
    routes: [{
      link: m.am.PARTNERS,
      title: e.PARTNERS,
      tracking: "partners",
      external: !0
    }, {
      link: m.am.HYPESQUAD,
      title: e.HYPESQUAD,
      tracking: "hypesquad",
      external: !0
    }, {
      link: m.yX.PRESS_INQUIRIES,
      title: e.PRESS_INQUIRIES,
      tracking: "pressinquiries",
      external: !0
    }, {
      link: m.am.OPEN_SOURCE,
      title: e.OPEN_SOURCE,
      tracking: "open_source"
    }]
  }],
  I = e => {
    let {
      colorVariant: t,
      animate: n
    } = e;
    return (0, i.jsx)("svg", {
      className: (0, d.l)(x, "footerBackground", t),
      preserveAspectRatio: "none",
      width: "1920",
      height: "100%",
      viewBox: "0 0 1920 330",
      version: "1.1",
      children: (0, i.jsx)("path", {
        className: (0, d.l)(x, "footerBackground", n ? "Play" : "Paused"),
        fill: "#1a1c1e",
        fillOpacity: "0.3",
        d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z"
      })
    })
  };
class O extends(a = r.PureComponent) {
  componentDidMount() {
    this.setState({
      token: (0, u.getToken)(),
      isAppCompatible: N.KO
    })
  }
  renderAppButton(e) {
    if ("STATIC_RENDERER" === this.props.platform) return null;
    let {
      downloadLink: t,
      isMobile: n,
      mobileDownloadText: a,
      platform: r,
      variant: s,
      authRedirectTo: o
    } = this.props, {
      isAppCompatible: c
    } = this.state;
    if (n) return (0, i.jsx)(l, {
      eventName: "Download App",
      data: {
        Platform: r,
        PTB: !1,
        Released: !0,
        "Referring Location": "Footer"
      },
      alt: "Download Discord",
      target: "_blank",
      className: (0, d.l)(x, "button", s),
      href: t,
      children: a
    });
    if (!c) return (0, i.jsx)(l, {
      eventName: "Download App",
      data: {
        Platform: r,
        PTB: !1,
        Released: !0,
        "Referring Location": "Footer"
      },
      alt: "Download Discord",
      className: (0, d.l)(x, "button", s),
      href: m.am.DOWNLOAD,
      children: k.Z.Messages.Navigation.DOWNLOAD
    });
    let u = null != o ? m.$w.REGISTER_WITH_REDIRECT(o) : m.$w.REGISTER,
      h = k.Z.Messages.Common.SIGN_UP_NOW;
    return e && (u = m.$w.ME, h = k.Z.Messages.Common.OPEN_DISCORD), (0, i.jsx)(l, {
      eventName: f,
      className: (0, d.l)(x, "button", this.props.variant),
      data: {
        linkClicked: e ? "open" : "login",
        googleAnalytics: !0
      },
      href: u,
      children: h
    })
  }
  render() {
    let {
      variant: e,
      style: t,
      className: a,
      avoidRouter: r,
      showWave: s
    } = this.props, {
      animateBackground: u,
      token: h
    } = this.state, N = A(k.Z.Messages.Navigation).map(e => {
      let t = e.routes.map((e, t) => e.external ? (0, i.jsx)(l, {
        className: x.route,
        eventName: f,
        data: {
          linkClicked: e.tracking
        },
        href: e.link,
        children: e.title
      }, e.link || t) : (0, i.jsx)(p.Z, {
        avoidRouter: r,
        to: e.link,
        from: "footer_navigation",
        className: x.route,
        children: (0, i.jsx)(l, {
          tag: "span",
          eventName: f,
          data: {
            linkClicked: e.tracking
          },
          children: e.title
        })
      }, e.link));
      return (0, i.jsxs)("div", {
        className: x.navigationSection,
        children: [(0, i.jsx)("h3", {
          className: x.navigationHeader,
          children: e.title
        }), t]
      }, e.title)
    });
    return (0, i.jsx)(c.$, {
      onChange: this.handleVisibility,
      children: (0, i.jsxs)("footer", {
        className: o()((0, d.l)(x, "footer", e), a),
        style: t,
        children: [s ? (0, i.jsx)(I, {
          colorVariant: e,
          animate: u
        }) : null, (0, i.jsxs)("div", {
          className: x.footerContent,
          children: [(0, i.jsxs)("div", {
            className: x.navigation,
            children: [(0, i.jsx)("div", {
              className: x.logoWrap,
              children: (0, i.jsx)(l, {
                className: x.logo,
                href: m.am.INDEX,
                eventName: f,
                data: {
                  linkClicked: "logo"
                },
                children: (0, i.jsx)("img", {
                  alt: k.Z.Messages.Navigation.HOME,
                  src: n(131529)
                })
              })
            }), N]
          }), (0, i.jsx)("div", {
            className: x.separator
          }), (0, i.jsxs)("div", {
            className: x.joinDiscord,
            children: [(0, i.jsxs)("div", {
              className: x.stats,
              children: [(0, i.jsx)("h2", {
                className: x.readyToJoin,
                children: k.Z.Messages.Footer.READY_TO_TRY_DISCORD
              }), (0, i.jsx)("h3", {
                className: x.joinOtherPlayers,
                children: k.Z.Messages.Footer.JOIN_OVER_PLAYERS_TODAY.format({
                  num: m.vS
                })
              })]
            }), this.renderAppButton(h)]
          })]
        })]
      })
    })
  }
  constructor(e) {
    super(e), g(this, "state", {
      animateBackground: !1,
      isMobile: null,
      token: null,
      isAppCompatible: !0
    }), g(this, "handleVisibility", e => {
      this.setState({
        animateBackground: e
      })
    }), null != e.locale && k.Z.setLocale(e.locale), l = t => (0, i.jsx)(h.Z, {
      track: e.track,
      trackOutboundLink: e.trackOutboundLink,
      ...t
    })
  }
}
g(O, "Variants", C), g(O, "defaultProps", {
  variant: C.PRIMARY,
  showWave: !0
})