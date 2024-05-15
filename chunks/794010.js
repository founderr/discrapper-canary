"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120");
var s, l = n("735250"),
  i = n("470079");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class r extends(s = i.PureComponent) {
  render() {
    let {
      tag: e,
      children: t,
      eventName: n,
      data: s,
      track: i,
      trackOutboundLink: a,
      ...r
    } = this.props;
    return null == e ? null : (0, l.jsx)(e, {
      ...r,
      onClick: this.handleClick,
      children: t
    })
  }
  constructor(...e) {
    super(...e), a(this, "handleClick", e => {
      let {
        eventName: t,
        data: n,
        href: s,
        onClick: l,
        trackOutboundLink: i,
        track: a
      } = this.props;
      if (n.googleAnalytics && i && (null != s ? i(s) : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")), l && l(e), !t) return !1;
      a(t, n)
    })
  }
}
a(r, "defaultProps", {
  tag: "a",
  data: {}
})