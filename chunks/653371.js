n.d(t, {
  a: function() {
    return I
  }
}), n(47120), n(653041);
var a = n(735250),
  l = n(470079),
  i = n(557533),
  s = n.n(i),
  r = n(771950),
  o = n(860911),
  c = n(66037),
  d = n(787907),
  u = n(643103),
  h = n(34211),
  p = n(231338),
  m = n(436620),
  N = n(431138),
  k = n(705478);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = p.j_.MAIN_NAVIGATION_MENU,
  x = () => [{
    route: (0, r.L)(p.RK.TWITTER),
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
class I extends l.PureComponent {
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
      NavigationMessages: l,
      onChangeLocale: i,
      TrackClick: r,
      avoidRouter: o
    } = this.props;
    return (0, a.jsxs)("header", {
      className: s()(k.header, e),
      children: [(0, a.jsxs)("nav", {
        className: k.headerInner,
        children: [(0, a.jsxs)("div", {
          className: k.headerLogo,
          children: [(0, a.jsx)(r, {
            tag: "div",
            eventName: C,
            data: {
              linkClicked: "logo"
            },
            children: (0, a.jsx)(c.Z, {
              avoidRouter: o,
              to: p.am.INDEX,
              from: p.j_.MAIN_NAVIGATION_MENU,
              children: (0, a.jsx)(d.O, {})
            })
          }), null != t ? (0, a.jsx)("a", {
            className: k.skipToContent,
            href: "#".concat(t),
            children: n
          }) : null]
        }), (0, a.jsx)("ul", {
          className: k.headerNav,
          children: (0, a.jsx)(h.o, {
            avoidRouter: o,
            TrackClick: r,
            styles: k,
            NavigationMessages: l
          })
        }), (0, a.jsxs)("ul", {
          className: k.headerNavRight,
          children: [this.renderSocialMediaNav(), (0, a.jsx)(u.p, {
            onChange: i
          })]
        })]
      }), null != t && (0, a.jsx)("div", {
        id: t,
        tabIndex: -1
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      isAppCompatible: !0
    }), g(this, "getAppButton", () => {
      let {
        token: e,
        NavigationMessages: t,
        TrackClick: n,
        authRedirectTo: l
      } = this.props, {
        isAppCompatible: i
      } = this.state, s = (0, o.U)(l), r = t.LOGIN;
      return null != e && (s = p.$w.ME, r = t.OPEN), i ? (0, a.jsx)("li", {
        className: k.listItemInactive,
        children: (0, a.jsx)(n, {
          eventName: C,
          className: k.appButton,
          data: {
            linkClicked: e ? "open" : "login",
            googleAnalytics: !0
          },
          href: s,
          children: r
        })
      }, "app-button") : null
    }), g(this, "renderSocialMediaNav", () => {
      let {
        TrackClick: e
      } = this.props, t = x().map(t => (0, a.jsx)("li", {
        className: s()(k.listItemInactive, k.listItemSocialMedia),
        children: (0, a.jsx)(e, {
          eventName: C,
          className: k.rightNavLink,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          target: "_blank",
          children: (0, a.jsx)("img", {
            src: t.img,
            alt: t.alt
          })
        })
      }, t.route)), n = this.getAppButton();
      return null != n && t.push(n), t
    })
  }
}