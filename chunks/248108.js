n.d(t, {
  Z: function() {
    return k
  }
}), n(47120);
var a, l = n(735250),
  i = n(470079),
  s = n(39383),
  r = n.n(s),
  o = n(948789),
  c = n(66037),
  d = n(950132),
  u = n(231338),
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
let N = u.j_.MAIN_NAVIGATION_MENU;
class k extends(a = i.PureComponent) {
  render() {
    let {
      title: e,
      links: t,
      isOpen: n,
      isMobile: a,
      TrackClick: i,
      avoidRouter: s
    } = this.props, r = a && n ? (0, l.jsx)("ul", {
      className: p.mobileSubMenuOpen,
      id: this._dropdownId,
      children: this.renderMobileSubMenu()
    }) : null;
    return a ? (0, l.jsxs)("li", {
      className: p.__invalid_subListHeading,
      tabIndex: -1,
      onClick: this.toggleMenu,
      onKeyDown: this.handleKeyDown,
      children: [(0, l.jsxs)("span", {
        className: p.mobileMenuItem,
        "aria-label": "Open ".concat(e, " Nav"),
        "aria-expanded": n,
        "aria-controls": this._dropdownId,
        "aria-haspopup": "true",
        role: "menuitem",
        tabIndex: 0,
        children: [e, (0, l.jsx)("img", {
          src: h.r.ICON_ARROW_DOWN,
          className: p.iconArrow,
          alt: "Open Nav"
        })]
      }, "more"), r]
    }, "dropdown_".concat(e)) : (0, l.jsxs)("li", {
      role: "none",
      tabIndex: -1,
      onFocus: this.openMenu,
      onBlur: this.closeMenu,
      onMouseEnter: this.openMenu,
      onMouseLeave: this.closeMenu,
      className: p.desktopSubMenuItem,
      children: [(0, l.jsxs)("span", {
        className: p.desktopMenuMore,
        role: "menuitem",
        tabIndex: 0,
        "aria-haspopup": "true",
        "aria-expanded": n,
        "aria-controls": this._dropdownId,
        children: [e, (0, l.jsx)("img", {
          src: h.r.ICON_ARROW_DOWN,
          className: p.iconArrow,
          alt: "Open Nav"
        })]
      }, "more"), (0, l.jsx)(d.h, {
        id: this._dropdownId,
        avoidRouter: s,
        TrackClick: i,
        isOpen: n,
        dropdownLinks: t,
        "aria-label": e
      })]
    }, "dropdown_".concat(e))
  }
  constructor(...e) {
    super(...e), m(this, "_dropdownId", r()("subMenuDropdown")), m(this, "closeMenu", () => {
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
        onClose: a
      } = this.props;
      e ? a() : n(t)
    }), m(this, "handleKeyDown", e => {
      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), this.toggleMenu())
    }), m(this, "renderMobileSubMenu", () => {
      let {
        links: e,
        TrackClick: t,
        avoidRouter: n
      } = this.props, a = (0, o.fQ)(this.context.router);
      return e.map(e => e.external ? (0, l.jsx)("li", {
        className: p.subListItemInactive,
        children: (0, l.jsx)(t, {
          eventName: N,
          className: p.subListItemLink,
          data: {
            linkClicked: "mobile-".concat(e.linkClicked)
          },
          rel: "me",
          href: e.route,
          children: e.title
        })
      }, e.route) : (0, l.jsx)("li", {
        className: a(e.route) ? p.subListItemActive : p.subListItemInactive,
        children: (0, l.jsx)(c.Z, {
          avoidRouter: n,
          to: e.route,
          from: u.j_.MAIN_NAVIGATION_MENU,
          children: (0, l.jsx)(t, {
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