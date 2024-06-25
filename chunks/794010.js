n.d(t, {
  Z: function() {
    return r
  }
}), n(47120);
var a, l = n(735250),
  i = n(470079);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class r extends(a = i.PureComponent) {
  render() {
    let {
      tag: e,
      children: t,
      eventName: n,
      data: a,
      track: i,
      trackOutboundLink: s,
      ...r
    } = this.props;
    return null == e ? null : (0, l.jsx)(e, {
      ...r,
      onClick: this.handleClick,
      children: t
    })
  }
  constructor(...e) {
    super(...e), s(this, "handleClick", e => {
      let {
        eventName: t,
        data: n,
        href: a,
        onClick: l,
        trackOutboundLink: i,
        track: s
      } = this.props;
      if (n.googleAnalytics && i && (null != a ? i(a) : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")), l && l(e), !t) return !1;
      s(t, n)
    })
  }
}
s(r, "defaultProps", {
  tag: "a",
  data: {}
})