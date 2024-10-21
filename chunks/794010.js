a.d(t, {
    Z: function () {
        return l;
    }
}),
    a(47120);
var n,
    s = a(200651),
    r = a(192379);
function i(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = a),
        e
    );
}
class l extends (n = r.PureComponent) {
    render() {
        let { tag: e, children: t, eventName: a, data: n, track: r, trackOutboundLink: i, ...l } = this.props;
        return null == e
            ? null
            : (0, s.jsx)(e, {
                  ...l,
                  onClick: this.handleClick,
                  children: t
              });
    }
    constructor(...e) {
        super(...e),
            i(this, 'handleClick', (e) => {
                let { eventName: t, data: a, href: n, onClick: s, trackOutboundLink: r, track: i } = this.props;
                if ((a.googleAnalytics && r && (null != n ? r(n) : console.warn('TrackClick.handleClick: No href provided when using data.googleAnalytics')), s && s(e), !t)) return !1;
                i(t, a);
            });
    }
}
i(l, 'defaultProps', {
    tag: 'a',
    data: {}
});
