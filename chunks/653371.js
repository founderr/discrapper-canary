n.d(t, {
  a: function() {
    return C
  }
}), n(47120), n(653041);
var l = n(735250),
  a = n(470079),
  i = n(557533),
  r = n.n(i),
  s = n(771950),
  o = n(860911),
  c = n(66037),
  u = n(787907),
  d = n(643103),
  h = n(34211),
  p = n(231338),
  m = n(436620),
  N = n(431138),
  k = n(705478);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = p.j_.MAIN_NAVIGATION_MENU,
  f = () => [{
    route: (0, s.L)(p.RK.TWITTER),
    linkClicked: "twitter",
    alt: "Discord's Twitter",
    img: N.r.ASSET_SOCIAL_TWITTER
  }, {
    route: p.fK.FACEBOOK_URL,
    linkClicked: "facebook",
    alt: "Discord's Facebook",
    img: N.r.ASSET_SOCIAL_FACEBOOK
  }, {
    route: p.fK.INSTAGRAM_URL,
    linkClicked: "instagram",
    alt: "Discord's Instagram",
    img: N.r.ASSET_SOCIAL_INSTAGRAM
  }];
class C extends a.PureComponent {
  componentDidMount() {
    this.setState({
      isAppCompatible: m.KO
    })
  }
  render() {
    let {
      className: e,
      mainContentId: t,
      skipToContentLabel: n,
      NavigationMessages: a,
      onChangeLocale: i,
      TrackClick: s,
      avoidRouter: o
    } = this.props;
    return (0, l.jsxs)("header", {
      className: r()(k.header, e),
      children: [(0, l.jsxs)("nav", {
        className: k.headerInner,
        children: [(0, l.jsxs)("div", {
          className: k.headerLogo,
          children: [(0, l.jsx)(s, {
            tag: "div",
            eventName: g,
            data: {
              linkClicked: "logo"
            },
            children: (0, l.jsx)(c.Z, {
              avoidRouter: o,
              to: p.am.INDEX,
              from: p.j_.MAIN_NAVIGATION_MENU,
              children: (0, l.jsx)(u.O, {})
            })
          }), null != t ? (0, l.jsx)("a", {
            className: k.skipToContent,
            href: "#".concat(t),
            children: n
          }) : null]
        }), (0, l.jsx)("ul", {
          className: k.headerNav,
          children: (0, l.jsx)(h.o, {
            avoidRouter: o,
            TrackClick: s,
            styles: k,
            NavigationMessages: a
          })
        }), (0, l.jsxs)("ul", {
          className: k.headerNavRight,
          children: [this.renderSocialMediaNav(), (0, l.jsx)(d.p, {
            onChange: i
          })]
        })]
      }), null != t && (0, l.jsx)("div", {
        id: t,
        tabIndex: -1
      })]
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      isAppCompatible: !0
    }), x(this, "getAppButton", () => {
      let {
        token: e,
        NavigationMessages: t,
        TrackClick: n,
        authRedirectTo: a
      } = this.props, {
        isAppCompatible: i
      } = this.state, r = (0, o.U)(a), s = t.LOGIN;
      return null != e && (r = p.$w.ME, s = t.OPEN), i ? (0, l.jsx)("li", {
        className: k.listItemInactive,
        children: (0, l.jsx)(n, {
          eventName: g,
          className: k.appButton,
          data: {
            linkClicked: e ? "open" : "login",
            googleAnalytics: !0
          },
          href: r,
          children: s
        })
      }, "app-button") : null
    }), x(this, "renderSocialMediaNav", () => {
      let {
        TrackClick: e
      } = this.props, t = f().map(t => (0, l.jsx)("li", {
        className: r()(k.listItemInactive, k.listItemSocialMedia),
        children: (0, l.jsx)(e, {
          eventName: g,
          className: k.rightNavLink,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          target: "_blank",
          children: (0, l.jsx)("img", {
            src: t.img,
            alt: t.alt
          })
        })
      }, t.route)), n = this.getAppButton();
      return null != n && t.push(n), t
    })
  }
}