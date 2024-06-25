n.d(t, {
  h: function() {
    return p
  }
});
var a = n(735250),
  l = n(470079),
  i = n(557533),
  s = n.n(i),
  r = n(794010),
  o = n(653371),
  c = n(388755),
  d = n(330711),
  u = n(681206);
let h = null;
class p extends l.PureComponent {
  render() {
    let {
      token: e,
      className: t,
      onChangeLocale: n,
      mainContentId: i,
      mobileClassName: r,
      avoidRouter: p,
      authRedirectTo: m,
      openNavAriaLabel: N,
      hideNavAriaLabel: k,
      skipToContentLabel: g
    } = this.props;
    return null == h ? null : (0, a.jsxs)(l.Fragment, {
      children: [(0, a.jsx)(o.a, {
        className: s()(u.desktopHeader, t),
        TrackClick: h,
        token: e,
        avoidRouter: p,
        authRedirectTo: m,
        NavigationMessages: d.Z.Messages.Navigation,
        onChangeLocale: n,
        mainContentId: i,
        skipToContentLabel: g
      }), (0, a.jsx)(c.D, {
        className: s()(u.mobileHeader, r),
        token: e,
        avoidRouter: p,
        TrackClick: h,
        NavigationMessages: d.Z.Messages.Navigation,
        onChangeLocale: n,
        openNavAriaLabel: N,
        hideNavAriaLabel: k
      })]
    })
  }
  constructor(e) {
    super(e), null != e.locale && d.Z.setLocale(e.locale), h = t => (0, a.jsx)(r.Z, {
      track: e.track,
      trackOutboundLink: e.trackOutboundLink,
      ...t
    })
  }
}