n.d(t, {
  D: function() {
    return g
  }
}), n(47120);
var l = n(735250),
  a = n(470079),
  i = n(557533),
  r = n.n(i),
  s = n(39383),
  o = n.n(s),
  c = n(608863),
  u = n(66037),
  d = n(643103),
  h = n(34211),
  p = n(231338),
  m = n(431138),
  N = n(202437);

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let x = p.j_.MAIN_NAVIGATION_MENU;
class g extends a.PureComponent {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }
  render() {
    let {
      className: e,
      NavigationMessages: t,
      TrackClick: n,
      onChangeLocale: a,
      avoidRouter: i,
      openNavAriaLabel: s,
      hideNavAriaLabel: o
    } = this.props, {
      menuOpen: k
    } = this.state;
    return (0, l.jsx)("header", {
      className: r()(N.header, e),
      children: (0, l.jsxs)("nav", {
        className: N.headerInner,
        children: [(0, l.jsx)(n, {
          tag: "div",
          eventName: x,
          className: N.headerLogo,
          data: {
            linkClicked: "logo"
          },
          children: (0, l.jsx)(u.Z, {
            avoidRouter: i,
            className: N.logoWrapper,
            to: p.am.INDEX,
            from: p.j_.MAIN_NAVIGATION_MENU,
            children: (0, l.jsx)("img", {
              className: N.logo,
              src: m.r.ASSET_LOGO_DISCORD_SVG,
              alt: "Discord",
              itemProp: "logo"
            })
          })
        }), (0, l.jsx)(n, {
          tag: "div",
          className: N.hamburgerButton,
          eventName: x,
          data: {
            linkClicked: "mobile-menu"
          },
          children: (0, l.jsx)(c.r, {
            open: k,
            "aria-haspopup": "true",
            "aria-label": k ? o : s,
            "aria-expanded": k,
            "aria-controls": this._mainNavId,
            onClick: this.toggleMenu
          })
        }), (0, l.jsxs)("ul", {
          className: k ? N.headerNavOpen : N.headerNav,
          children: [(0, l.jsx)(h.o, {
            avoidRouter: i,
            TrackClick: n,
            styles: N,
            isMobile: !0,
            isVisible: k,
            NavigationMessages: t
          }), (0, l.jsx)(d.p, {
            onChange: a
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), k(this, "_mainNavId", o()("mainNav")), k(this, "state", {
      menuOpen: !1
    }), k(this, "toggleMenu", () => {
      this.setState({
        menuOpen: !this.state.menuOpen
      })
    }), k(this, "handleKeyDown", e => {
      let {
        menuOpen: t
      } = this.state;
      ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), t && this.toggleMenu())
    })
  }
}