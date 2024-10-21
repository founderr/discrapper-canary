n.d(t, {
    V: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(512722),
    o = n.n(r),
    c = n(995295),
    u = n(374470),
    d = n(442837),
    h = n(481060),
    p = n(260300),
    m = n(997638),
    _ = n(819640),
    f = n(451478),
    E = n(21825),
    g = n(232495),
    C = n(10401),
    I = n(755059);
function T(e, t, n) {
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
class x extends s.PureComponent {
    componentDidMount() {
        this.updateCache();
    }
    componentDidUpdate(e) {
        let {
            tutorialId: t,
            origin: { x: n, y: i },
            targetWidth: s,
            targetHeight: a,
            position: l,
            offset: r
        } = e;
        (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== i || this.props.targetWidth !== s || this.props.targetHeight !== a || this.props.position !== l || this.props.offset.x !== r.x || this.props.offset.y !== r.y) && this.updateCache();
    }
    updateCache() {
        var e, t;
        let n = (0, c.findDOMNode)(this);
        if (null == n || !(0, u.k)(n, HTMLElement)) return;
        let { offsetWidth: i, offsetHeight: s } = n,
            a = {
                offsetX: (this.props.targetWidth - i) / 2,
                offsetY: (this.props.targetHeight - s) / 2
            };
        switch (this.props.position) {
            case 'left':
                a.offsetX = -i;
                break;
            case 'right':
                a.offsetX = this.props.targetWidth;
                break;
            case 'bottom':
                a.offsetY = this.props.targetHeight;
                break;
            default:
                a.offsetY = -s;
        }
        (a.offsetX += null !== (e = this.props.offset.x) && void 0 !== e ? e : 0), (a.offsetY += null !== (t = this.props.offset.y) && void 0 !== t ? t : 0), this.setState(a);
    }
    handleSkipTips() {
        p.Z.suppressAll();
    }
    getTutorialPopoutText() {
        let { tutorialId: e } = this.props;
        return (0, g.k)(e);
    }
    render() {
        let { tutorialId: e, autoInvert: t, focused: n, origin: s } = this.props,
            a = (0, E.S)(e);
        if (null == a) return null;
        let { media: r, textAlign: o, isLongText: c, highPriority: u, spacing: d, arrowAlignment: p = m.cy.TOP, popoutPosition: _ } = a,
            { offsetX: f, offsetY: g } = this.state,
            C = {
                left: null != f ? s.x + f : void 0,
                top: null != g ? s.y + g : void 0
            },
            T = (e) => {
                let t = n && !e;
                return !0 !== u
                    ? null
                    : (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)('div', {
                                  className: l()(I.top, {
                                      [I.animating]: t,
                                      [I.notAnimating]: !t
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: l()(I.bottom, {
                                      [I.animating]: t,
                                      [I.notAnimating]: !t
                                  })
                              })
                          ]
                      });
            },
            x = (e) => {
                let t = n && !e;
                return {
                    [I.animating]: t,
                    [I.notAnimating]: !t,
                    [I.highPriority]: u
                };
            },
            v = this.getTutorialPopoutText();
        return (0, i.jsx)(m.ZP, {
            position: _,
            renderMedia: r,
            textAlign: o,
            spacing: d,
            isLongText: c,
            uniqueId: e,
            autoInvert: t,
            arrowAlignment: p,
            onSkipAll: this.handleSkipTips,
            onComplete: this.handleDismiss,
            ...v,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsx)(h.Clickable, {
                    ...e,
                    className: I.indicator,
                    style: C,
                    children: (0, i.jsxs)('div', {
                        className: l()(I.animationContainer, x(n)),
                        children: [T(n), (0, i.jsx)('div', { className: l()(I.innerCircle, x(n)) }), (0, i.jsx)('div', { className: l()(I.outerCircle, x(n)) })]
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', {
                offsetX: null,
                offsetY: null
            }),
            T(this, 'handleDismiss', () => {
                p.Z.dismiss(this.props.tutorialId);
            });
    }
}
t.Z =
    12633 == n.j
        ? function () {
              let {
                  indicators: e,
                  tutorialData: t,
                  windowFocused: n,
                  shouldShowAny: s
              } = (0, d.cj)([C.Z, f.Z, _.Z], () => ({
                  indicators: C.Z.getIndicators(),
                  tutorialData: C.Z.getData(),
                  shouldShowAny: C.Z.shouldShowAnyIndicators() && !_.Z.hasLayers(),
                  windowFocused: f.Z.isFocused()
              }));
              return s
                  ? (0, i.jsx)(i.Fragment, {
                        children: Object.entries(e).map((e) => {
                            let [s, a] = e,
                                l = t[s];
                            return (
                                o()(null != l, 'Missing tutorial definition for '.concat(s)),
                                (0, i.jsx)(
                                    x,
                                    {
                                        tutorialId: s,
                                        tutorialDefinition: l,
                                        focused: n,
                                        ...a
                                    },
                                    s
                                )
                            );
                        })
                    })
                  : null;
          }
        : null;
