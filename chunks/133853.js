n.d(e, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var a,
    r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(748780),
    c = n(481060),
    u = n(981631),
    d = n(817623);
function f(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
class p extends (a = o.Component) {
    componentDidMount() {
        this.props.show && this.animate(1);
    }
    componentDidUpdate(t) {
        t.show !== this.props.show && this.animate(this.props.show ? 1 : 0);
    }
    getAnimatedStyle() {
        let { anim: t } = this,
            { reducedMotion: e } = this.context;
        return {
            opacity: t,
            transform: e.enabled
                ? void 0
                : [
                      {
                          translateY: t.interpolate({
                              inputRange: [0, 1],
                              outputRange: ['-100px', '0px']
                          })
                      },
                      { translateZ: 0 }
                  ]
        };
    }
    render() {
        return (0, r.jsx)(s.Z.a, {
            href: u.Z5c.INDEX,
            target: '_blank',
            rel: 'noopener',
            className: l()(d.logo, this.props.className),
            style: this.getAnimatedStyle()
        });
    }
    constructor(...t) {
        super(...t),
            f(this, 'anim', new s.Z.Value(0)),
            f(this, 'animate', (t) => {
                s.Z.spring(this.anim, {
                    toValue: t,
                    friction: 10,
                    tension: 100
                }).start();
            });
    }
}
f(p, 'contextType', c.AccessibilityPreferencesContext);
