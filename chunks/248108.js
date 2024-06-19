n.d(t, {
  Z: function() {
    return k
  }
}), n(47120);
var l, a = n(735250),
  i = n(470079),
  r = n(39383),
  s = n.n(r),
  o = n(948789),
  c = n(66037),
  u = n(950132),
  d = n(231338),
  h = n(431138),
  p = n(392792);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = d.j_.MAIN_NAVIGATION_MENU;
class k extends(l = i.PureComponent) {
  render() {
    let {
      title: e,
      links: t,
      isOpen: n,
      isMobile: l,
      TrackClick: i,
      avoidRouter: r
    } = this.props, s = l && n ? (0, a.jsx)("ul", {
      className: p.mobileSubMenuOpen,
      id: this._dropdownId,
      children: this.renderMobileSubMenu()
    }) : null;
    return l ? (0, a.jsxs)("li", {
      className: p.__invalid_subListHeading,
      tabIndex: -1,
      onClick: this.toggleMenu,
      onKeyDown: this.handleKeyDown,
      children: [(0, a.jsxs)("span", {
        className: p.mobileMenuItem,
        "aria-label": "Open ".concat(e, " Nav"),
        "aria-expanded": n,
        "aria-controls": this._dropdownId,
        "aria-haspopup": "true",
        role: "menuitem",
        tabIndex: 0,
        children: [e, (0, a.jsx)("img", {
          src: h.r.ICON_ARROW_DOWN,
          className: p.iconArrow,
          alt: "Open Nav"
        })]
      }, "more"), s]
    }, "dropdown_".concat(e)) : (0, a.jsxs)("li", {
      role: "none",
      tabIndex: -1,
      onFocus: this.openMenu,
      onBlur: this.closeMenu,
      onMouseEnter: this.openMenu,
      onMouseLeave: this.closeMenu,
      className: p.desktopSubMenuItem,
      children: [(0, a.jsxs)("span", {
        className: p.desktopMenuMore,
        role: "menuitem",
        tabIndex: 0,
        "aria-haspopup": "true",
        "aria-expanded": n,
        "aria-controls": this._dropdownId,
        children: [e, (0, a.jsx)("img", {
          src: h.r.ICON_ARROW_DOWN,
          className: p.iconArrow,
          alt: "Open Nav"
        })]
      }, "more"), (0, a.jsx)(u.h, {
        id: this._dropdownId,
        avoidRouter: r,
        TrackClick: i,
        isOpen: n,
        dropdownLinks: t,
        "aria-label": e
      })]
    }, "dropdown_".concat(e))
  }
  constructor(...e) {
    super(...e), m(this, "_dropdownId", s()("subMenuDropdown")), m(this, "closeMenu", () => {
      this.props.onClose()
    }), m(this, "openMenu", () => {
      let {
        title: e,
        onOpen: t
      } = this.props;
      t(e)
    }), m(this, "toggleMenu", () => {
      let {
        isOpen: e,
        title: t,
        onOpen: n,
        onClose: l
      } = this.props;
      e ? l() : n(t)
    }), m(this, "handleKeyDown", e => {
      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), this.toggleMenu())
    }), m(this, "renderMobileSubMenu", () => {
      let {
        links: e,
        TrackClick: t,
        avoidRouter: n
      } = this.props, l = (0, o.fQ)(this.context.router);
      return e.map(e => e.external ? (0, a.jsx)("li", {
        className: p.subListItemInactive,
        children: (0, a.jsx)(t, {
          eventName: N,
          className: p.subListItemLink,
          data: {
            linkClicked: "mobile-".concat(e.linkClicked)
          },
          rel: "me",
          href: e.route,
          children: e.title
        })
      }, e.route) : (0, a.jsx)("li", {
        className: l(e.route) ? p.subListItemActive : p.subListItemInactive,
        children: (0, a.jsx)(c.Z, {
          avoidRouter: n,
          to: e.route,
          from: d.j_.MAIN_NAVIGATION_MENU,
          children: (0, a.jsx)(t, {
            className: p.subListItemLink,
            tag: "span",
            eventName: N,
            data: {
              linkClicked: "mobile-".concat(e.linkClicked)
            },
            children: e.title
          })
        })
      }, e.route))
    })
  }
}
m(k, "defaultProps", {
  isOpen: !1,
  isMobileMenuOpen: !1
})