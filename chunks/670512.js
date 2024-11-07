n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(748780),
    c = n(846519),
    u = n(481060),
    d = n(585483),
    h = n(981631),
    p = n(388032),
    f = n(700215);
function m(e, t, n) {
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
let g = {
    friction: 15,
    tension: 100
};
class C extends (i = r.PureComponent) {
    componentDidMount() {
        this.setState({ shown: !0 }), d.S.subscribe(h.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), d.S.unsubscribe(h.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentDidUpdate() {
        let { hasQuery: e } = this.props;
        !e && this.springTo(0);
    }
    springTo(e) {
        let { reducedMotion: t } = this.context;
        !0 !== t.enabled &&
            s.Z.spring(this.state.translateY, {
                toValue: Math.min(e, 250),
                ...g
            }).start();
    }
    renderArrowGroup(e) {
        return (0, l.jsxs)('div', {
            className: o()(f.arrowGroup, e),
            children: [
                (0, l.jsx)(s.Z.div, {
                    className: o()(f.arrowContainer, f.horizontal),
                    style: this.getStyle(),
                    children: (0, l.jsx)('img', {
                        alt: '',
                        src: n(403756),
                        className: f.arrowIcon
                    })
                }),
                (0, l.jsx)('div', {
                    className: o()(f.arrowContainer, f.diag1),
                    children: (0, l.jsx)('img', {
                        alt: '',
                        src: n(536404),
                        className: f.arrowIcon
                    })
                }),
                (0, l.jsx)('div', {
                    className: o()(f.arrowContainer, f.diag2),
                    children: (0, l.jsx)('img', {
                        alt: '',
                        src: n(569347),
                        className: f.arrowIcon
                    })
                })
            ]
        });
    }
    renderContent() {
        return (0, l.jsxs)('div', {
            className: f.tutorialMessages,
            children: [
                (0, l.jsx)('div', {
                    className: f.searchMessage,
                    children: p.intl.string(p.t.Mp0IGB)
                }),
                (0, l.jsx)('div', {
                    className: f.selectMessage,
                    children: p.intl.string(p.t['3CbpwM'])
                })
            ]
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, l.jsxs)('div', {
            ref: this.rootRef,
            className: o()(f.tutorial, {
                [f.shown]: t,
                [f.hasQuery]: e
            }),
            children: [this.renderContent(), this.renderArrowGroup(f.__invalid_left), this.renderArrowGroup(f.right)]
        });
    }
    getStyle() {
        let { reducedMotion: e } = this.context;
        return !0 === e.enabled
            ? {}
            : {
                  opacity: 1,
                  transform: [
                      {
                          translateY: this.state.translateY.interpolate({
                              inputRange: [0, 250],
                              outputRange: ['0px', ''.concat(250, 'px')]
                          })
                      },
                      { translateZ: 0 }
                  ]
              };
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', {
                shown: !1,
                translateY: new s.Z.Value(0)
            }),
            m(this, 'rootRef', r.createRef()),
            m(this, 'focusTimeout', new c.V7()),
            m(this, 'handleResultFocus', (e) => {
                let { node: t } = e;
                this.focusTimeout.start(1, () => {
                    if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                        let { top: e } = this.rootRef.current.getBoundingClientRect(),
                            { top: n } = t.getBoundingClientRect(),
                            i = Math.abs(e - n);
                        this.springTo(i - 118 + 9);
                    } else this.springTo(0);
                });
            });
    }
}
m(C, 'contextType', u.AccessibilityPreferencesContext), (t.Z = C);
