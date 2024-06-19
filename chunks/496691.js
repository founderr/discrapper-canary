n.r(t), n(47120);
var l = n(735250),
  a = n(470079),
  i = n(548668),
  r = n(231262),
  s = n(501522),
  o = n(442837),
  c = n(153867),
  u = n(706454),
  d = n(626135),
  h = n(981631),
  p = n(689938),
  m = n(595115);
class N extends a.Component {
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
    return (0, l.jsx)(s.Z, {
      className: t,
      shouldScrollToTop: this.shouldScrollToTop,
      render: (t, s) => (0, l.jsxs)(a.Fragment, {
        children: [(0, l.jsx)(r.h, {
          avoidRouter: !0,
          locale: o,
          authRedirectTo: e.pathname,
          track: d.default.track,
          className: m.marketingHeader,
          onChangeLocale: this.handleHeaderLocaleChange,
          mobileClassName: m.marketingHeader,
          openNavAriaLabel: p.Z.Messages.OPEN_NAVIGATION,
          hideNavAriaLabel: p.Z.Messages.HIDE_NAVIGATION,
          skipToContentLabel: p.Z.Messages.SKIP_TO_CONTENT
        }), n(t, s), (0, l.jsx)(i.$, {
          locale: o,
          authRedirectTo: e.pathname,
          avoidRouter: !0,
          track: d.default.track,
          className: m.marketingFooter
        })]
      })
    })
  }
  constructor(...e) {
    var t, n, l;
    super(...e), t = this, n = "handleHeaderLocaleChange", l = e => {
      e !== this.props.locale && c.ZP.overrideLocale(e)
    }, n in t ? Object.defineProperty(t, n, {
      value: l,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = l
  }
}
t.default = o.ZP.connectStores([u.default], () => ({
  locale: u.default.locale
}))(N)