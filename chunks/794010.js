n.d(t, {
  Z: function() {
    return s
  }
}), n(47120);
var l, a = n(735250),
  i = n(470079);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class s extends(l = i.PureComponent) {
  render() {
    let {
      tag: e,
      children: t,
      eventName: n,
      data: l,
      track: i,
      trackOutboundLink: r,
      ...s
    } = this.props;
    return null == e ? null : (0, a.jsx)(e, {
      ...s,
      onClick: this.handleClick,
      children: t
    })
  }
  constructor(...e) {
    super(...e), r(this, "handleClick", e => {
      let {
        eventName: t,
        data: n,
        href: l,
        onClick: a,
        trackOutboundLink: i,
        track: r
      } = this.props;
      if (n.googleAnalytics && i && (null != l ? i(l) : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")), a && a(e), !t) return !1;
      r(t, n)
    })
  }
}
r(s, "defaultProps", {
  tag: "a",
  data: {}
})