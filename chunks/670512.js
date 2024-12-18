n(47120);
var s,
    i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(748780),
    c = n(846519),
    u = n(481060),
    d = n(585483),
    h = n(981631),
    E = n(388032),
    p = n(159381);
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
let m = {
    friction: 15,
    tension: 100
};
class C extends (s = r.PureComponent) {
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
            a.Z.spring(this.state.translateY, {
                toValue: Math.min(e, 250),
                ...m
            }).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)('div', {
            className: l()(p.arrowGroup, e),
            children: [
                (0, i.jsx)(a.Z.div, {
                    className: l()(p.arrowContainer, p.horizontal),
                    style: this.getStyle(),
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: n(403756),
                        className: p.arrowIcon
                    })
                }),
                (0, i.jsx)('div', {
                    className: l()(p.arrowContainer, p.diag1),
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: n(536404),
                        className: p.arrowIcon
                    })
                }),
                (0, i.jsx)('div', {
                    className: l()(p.arrowContainer, p.diag2),
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: n(569347),
                        className: p.arrowIcon
                    })
                })
            ]
        });
    }
    renderContent() {
        return (0, i.jsxs)('div', {
            className: p.tutorialMessages,
            children: [
                (0, i.jsx)('div', {
                    className: p.searchMessage,
                    children: E.intl.string(E.t.Mp0IGB)
                }),
                (0, i.jsx)('div', {
                    className: p.selectMessage,
                    children: E.intl.string(E.t['3CbpwM'])
                })
            ]
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, i.jsxs)('div', {
            ref: this.rootRef,
            className: l()(p.tutorial, {
                [p.shown]: t,
                [p.hasQuery]: e
            }),
            children: [this.renderContent(), this.renderArrowGroup(p.__invalid_left), this.renderArrowGroup(p.right)]
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
            _(this, 'state', {
                shown: !1,
                translateY: new a.Z.Value(0)
            }),
            _(this, 'rootRef', r.createRef()),
            _(this, 'focusTimeout', new c.V7()),
            _(this, 'handleResultFocus', (e) => {
                let { node: t } = e;
                this.focusTimeout.start(1, () => {
                    if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                        let { top: e } = this.rootRef.current.getBoundingClientRect(),
                            { top: n } = t.getBoundingClientRect(),
                            s = Math.abs(e - n);
                        this.springTo(s - 118 + 9);
                    } else this.springTo(0);
                });
            });
    }
}
_(C, 'contextType', u.AccessibilityPreferencesContext), (t.Z = C);
