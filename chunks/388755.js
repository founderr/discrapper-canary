n.d(t, {
  D: function() {
    return C
  }
}), n(47120);
var a = n(735250),
  l = n(470079),
  i = n(557533),
  s = n.n(i),
  r = n(39383),
  o = n.n(r),
  c = n(608863),
  d = n(66037),
  u = n(643103),
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
let g = p.j_.MAIN_NAVIGATION_MENU;
class C extends l.PureComponent {
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
      onChangeLocale: l,
      avoidRouter: i,
      openNavAriaLabel: r,
      hideNavAriaLabel: o
    } = this.props, {
      menuOpen: k
    } = this.state;
    return (0, a.jsx)("header", {
      className: s()(N.header, e),
      children: (0, a.jsxs)("nav", {
        className: N.headerInner,
        children: [(0, a.jsx)(n, {
          tag: "div",
          eventName: g,
          className: N.headerLogo,
          data: {
            linkClicked: "logo"
          },
          children: (0, a.jsx)(d.Z, {
            avoidRouter: i,
            className: N.logoWrapper,
            to: p.am.INDEX,
            from: p.j_.MAIN_NAVIGATION_MENU,
            children: (0, a.jsx)("img", {
              className: N.logo,
              src: m.r.ASSET_LOGO_DISCORD_SVG,
              alt: "Discord",
              itemProp: "logo"
            })
          })
        }), (0, a.jsx)(n, {
          tag: "div",
          className: N.hamburgerButton,
          eventName: g,
          data: {
            linkClicked: "mobile-menu"
          },
          children: (0, a.jsx)(c.r, {
            open: k,
            "aria-haspopup": "true",
            "aria-label": k ? o : r,
            "aria-expanded": k,
            "aria-controls": this._mainNavId,
            onClick: this.toggleMenu
          })
        }), (0, a.jsxs)("ul", {
          className: k ? N.headerNavOpen : N.headerNav,
          children: [(0, a.jsx)(h.o, {
            avoidRouter: i,
            TrackClick: n,
            styles: N,
            isMobile: !0,
            isVisible: k,
            NavigationMessages: t
          }), (0, a.jsx)(u.p, {
            onChange: l
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