n.d(t, {
    o: function () {
        return f;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(748780),
    c = n(481060),
    d = n(267407);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = {
    friction: 7,
    tension: 60
};
class f extends (r = o.Component) {
    componentWillAppear(e) {
        this.animateTo(1).start(e);
    }
    componentWillEnter(e) {
        this.animateTo(1).start(e);
    }
    componentWillLeave(e) {
        let { reducedMotion: t } = this.context;
        t.enabled ? this.animateTo(0).start(e) : u.Z.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e);
    }
    animateTo(e) {
        return u.Z.spring(this.animation, {
            ...E,
            toValue: e
        });
    }
    getAnimatedStyle() {
        let { reducedMotion: e } = this.context;
        return u.Z.accelerate({
            opacity: this.animation,
            transform: e.enabled
                ? void 0
                : [
                      {
                          translateY: this.animation.interpolate({
                              inputRange: [0, 1],
                              outputRange: ['150%', '0%']
                          })
                      }
                  ]
        });
    }
    render() {
        let { className: e, children: t } = this.props;
        return (0, a.jsx)(u.Z.div, {
            className: l()(e, d.slider),
            style: this.getAnimatedStyle(),
            children: t
        });
    }
    constructor(...e) {
        super(...e), _(this, 'animation', new u.Z.Value(0));
    }
}
_(f, 'contextType', c.AccessibilityPreferencesContext);
