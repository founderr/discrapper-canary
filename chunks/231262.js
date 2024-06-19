n.d(t, {
  h: function() {
    return p
  }
});
var l = n(735250),
  a = n(470079),
  i = n(557533),
  r = n.n(i),
  s = n(794010),
  o = n(653371),
  c = n(388755),
  u = n(330711),
  d = n(681206);
let h = null;
class p extends a.PureComponent {
  render() {
    let {
      token: e,
      className: t,
      onChangeLocale: n,
      mainContentId: i,
      mobileClassName: s,
      avoidRouter: p,
      authRedirectTo: m,
      openNavAriaLabel: N,
      hideNavAriaLabel: k,
      skipToContentLabel: x
    } = this.props;
    return null == h ? null : (0, l.jsxs)(a.Fragment, {
      children: [(0, l.jsx)(o.a, {
        className: r()(d.desktopHeader, t),
        TrackClick: h,
        token: e,
        avoidRouter: p,
        authRedirectTo: m,
        NavigationMessages: u.Z.Messages.Navigation,
        onChangeLocale: n,
        mainContentId: i,
        skipToContentLabel: x
      }), (0, l.jsx)(c.D, {
        className: r()(d.mobileHeader, s),
        token: e,
        avoidRouter: p,
        TrackClick: h,
        NavigationMessages: u.Z.Messages.Navigation,
        onChangeLocale: n,
        openNavAriaLabel: N,
        hideNavAriaLabel: k
      })]
    })
  }
  constructor(e) {
    super(e), null != e.locale && u.Z.setLocale(e.locale), h = t => (0, l.jsx)(s.Z, {
      track: e.track,
      trackOutboundLink: e.trackOutboundLink,
      ...t
    })
  }
}