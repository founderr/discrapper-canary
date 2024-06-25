n.r(t), n(47120);
var a = n(735250),
  l = n(470079),
  i = n(548668),
  s = n(231262),
  r = n(501522),
  o = n(442837),
  c = n(153867),
  d = n(706454),
  u = n(626135),
  h = n(981631),
  p = n(689938),
  m = n(595115);
class N extends l.Component {
  shouldScrollToTop(e) {
    let {
      location: t
    } = e;
    return t.pathname.startsWith(h.Z5c.APPLICATION_STORE_LISTING_SKU("")) || t.pathname.startsWith(h.Z5c.APPLICATION_STORE_LISTING_APPLICATION(""))
  }
  render() {
    let {
      location: e,
      className: t,
      render: n,
      locale: o
    } = this.props;
    return (0, a.jsx)(r.Z, {
      className: t,
      shouldScrollToTop: this.shouldScrollToTop,
      render: (t, r) => (0, a.jsxs)(l.Fragment, {
        children: [(0, a.jsx)(s.h, {
          avoidRouter: !0,
          locale: o,
          authRedirectTo: e.pathname,
          track: u.default.track,
          className: m.marketingHeader,
          onChangeLocale: this.handleHeaderLocaleChange,
          mobileClassName: m.marketingHeader,
          openNavAriaLabel: p.Z.Messages.OPEN_NAVIGATION,
          hideNavAriaLabel: p.Z.Messages.HIDE_NAVIGATION,
          skipToContentLabel: p.Z.Messages.SKIP_TO_CONTENT
        }), n(t, r), (0, a.jsx)(i.$, {
          locale: o,
          authRedirectTo: e.pathname,
          avoidRouter: !0,
          track: u.default.track,
          className: m.marketingFooter
        })]
      })
    })
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "handleHeaderLocaleChange", a = e => {
      e !== this.props.locale && c.ZP.overrideLocale(e)
    }, n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}
t.default = o.ZP.connectStores([d.default], () => ({
  locale: d.default.locale
}))(N)