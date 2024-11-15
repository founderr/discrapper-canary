n(47120);
var i = n(200651),
    r = n(192379),
    s = n(954955),
    a = n.n(s),
    l = n(748780),
    o = n(873546),
    c = n(477690),
    u = n(481060),
    d = n(624138),
    h = n(319523);
function g(e, t, n) {
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
let m = (0, d.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    p = {
        START: 0,
        END: 1
    },
    f = {
        friction: 10,
        tension: 130
    };
t.Z = function (e) {
    return class extends r.Component {
        componentDidMount() {
            !o.tq && (window.addEventListener('resize', this.handleResizeDebounced), this.handleResize());
        }
        componentWillUnmount() {
            clearTimeout(this.timeout), window.removeEventListener('resize', this.handleResizeDebounced);
        }
        componentWillAppear(e) {
            this.state.shouldAnimate ? this.animateTo(p.END, e) : e();
        }
        componentWillEnter(e) {
            this.state.shouldAnimate ? (clearTimeout(this.timeout), (this.timeout = setTimeout(() => this.animateTo(p.END, e), 40))) : e();
        }
        componentWillLeave(e) {
            this.state.shouldAnimate ? this.animateTo(p.START, e) : e();
        }
        animateTo(e, t) {
            l.Z.spring(this.anim, {
                toValue: e,
                ...f
            }).start(t);
        }
        getAnimatedStyle(e) {
            return this.state.shouldAnimate
                ? {
                      opacity: this.anim,
                      transform: e
                          ? void 0
                          : [
                                {
                                    scale: this.anim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1.05, 1]
                                    })
                                },
                                {
                                    translateY: this.anim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['-70px', '0px']
                                    })
                                },
                                { translateZ: 0 }
                            ]
                  }
                : null;
        }
        render() {
            return (0, i.jsx)('div', {
                className: h.wrapper,
                children: (0, i.jsx)(u.AccessibilityPreferencesContext.Consumer, {
                    children: (t) => {
                        let { reducedMotion: n } = t;
                        return (0, i.jsx)(l.Z.div, {
                            style: this.getAnimatedStyle(n.enabled),
                            children: (0, i.jsx)(e, { ...this.props })
                        });
                    }
                })
            });
        }
        constructor(...e) {
            super(...e),
                g(this, 'timeout', void 0),
                g(this, 'anim', new l.Z.Value(p.START)),
                g(this, 'state', { shouldAnimate: !o.tq }),
                g(this, 'handleResize', () => {
                    let e = window.innerWidth > m;
                    !this.state.shouldAnimate && e && this.anim.setValue(p.END), this.setState({ shouldAnimate: e });
                }),
                g(this, 'handleResizeDebounced', a()(this.handleResize, 60));
        }
    };
};
