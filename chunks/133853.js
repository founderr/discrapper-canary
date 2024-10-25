n.d(e, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var a,
    r = n(200651),
    o = n(192379),
    s = n(120356),
    c = n.n(s),
    i = n(748780),
    l = n(481060),
    u = n(981631),
    d = n(559737);
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
class _ extends (a = o.Component) {
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
        return (0, r.jsx)(i.Z.a, {
            href: u.Z5c.INDEX,
            target: '_blank',
            rel: 'noopener',
            className: c()(d.logo, this.props.className),
            style: this.getAnimatedStyle()
        });
    }
    constructor(...t) {
        super(...t),
            f(this, 'anim', new i.Z.Value(0)),
            f(this, 'animate', (t) => {
                i.Z.spring(this.anim, {
                    toValue: t,
                    friction: 10,
                    tension: 100
                }).start();
            });
    }
}
f(_, 'contextType', l.AccessibilityPreferencesContext);
