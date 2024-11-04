n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(653041);
var i,
    r = n(200651),
    a = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(748780),
    c = n(442837),
    d = n(215569),
    u = n(481060),
    h = n(37234),
    m = n(134616),
    p = n(714338),
    g = n(663993),
    f = n(84615),
    _ = n(210887),
    E = n(819640),
    I = n(585483),
    C = n(981631),
    v = n(736366);
function S(e, t, n) {
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
let N = (0, g.Un)({
        createPromise: () => Promise.all([n.e('23217'), n.e('33053'), n.e('8016'), n.e('76540'), n.e('15669'), n.e('17938'), n.e('22646'), n.e('25183'), n.e('30419'), n.e('48923'), n.e('18824'), n.e('8821'), n.e('76447'), n.e('68692')]).then(n.bind(n, 989804)),
        webpackId: 989804,
        name: 'UserSettings'
    }),
    T = (0, g.Un)({
        createPromise: () => Promise.all([n.e('33053'), n.e('7654'), n.e('44294'), n.e('75116')]).then(n.bind(n, 869779)),
        webpackId: 869779,
        name: 'ChannelSettings'
    }),
    x = (0, g.Un)({
        createPromise: () => n.e('18249').then(n.bind(n, 838819)),
        webpackId: 838819,
        name: 'CollectiblesShop'
    }),
    b = (0, g.Un)({
        createPromise: () => Promise.all([n.e('33053'), n.e('15669'), n.e('7654'), n.e('44156'), n.e('44294'), n.e('85552'), n.e('58227'), n.e('28377')]).then(n.bind(n, 994763)),
        webpackId: 994763,
        name: 'GuildSettings'
    }),
    A = {
        [C.S9g.USER_SETTINGS]: () => (0, r.jsx)(N, {}),
        [C.S9g.CHANNEL_SETTINGS]: () => (0, r.jsx)(T, {}),
        [C.S9g.GUILD_SETTINGS]: () => (0, r.jsx)(b, {}),
        [C.S9g.COLLECTIBLES_SHOP]: () => (0, r.jsx)(x, {})
    },
    Z = 'SHOWN',
    y = 'HIDDEN',
    L = {
        friction: 10,
        tension: 100
    };
function R() {
    return a.useEffect(() => (p.Z.enable(), p.Z.enableTemp(m.u), () => p.Z.disableTemp()), []), null;
}
class P extends (i = a.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.mode
            ? {
                  animating: !0,
                  mode: e.mode
              }
            : null;
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        return t === n ? void 0 : t === Z && n === y ? this.animateIn() : t === y && n === Z ? this.animateUnder() : void 0;
    }
    componentWillEnter(e) {
        let { opacity: t, scale: n } = this.state;
        n.setValue(1.1), t.setValue(0), e(), this.setState({ animating: !0 }, () => this.animateIn());
    }
    componentWillLeave(e) {
        this.setState({ animating: !0 }, () => this.animateOut(e));
    }
    animateIn(e) {
        c.ZP.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        o.Z.parallel([
            o.Z.spring(t, {
                toValue: 1,
                ...L
            }),
            o.Z.spring(n, {
                toValue: 1,
                ...L
            })
        ]).start(() => this.animateComplete(e));
    }
    animateOut(e) {
        c.ZP.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        I.S.dispatch(C.CkL.LAYER_POP_START),
            o.Z.parallel([
                o.Z.spring(t, {
                    toValue: 0,
                    ...L
                }),
                o.Z.spring(n, {
                    toValue: 1.1,
                    ...L
                })
            ]).start(() => {
                e(), I.S.dispatch(C.CkL.LAYER_POP_COMPLETE);
            });
    }
    animateUnder() {
        c.ZP.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        o.Z.parallel([
            o.Z.spring(e, {
                toValue: 0,
                ...L
            }),
            o.Z.spring(t, {
                toValue: 0.93,
                ...L
            })
        ]).start(() => this.animateComplete());
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            { mode: t, children: n, baseLayer: i, ...a } = this.props,
            l = e || t === y ? this.getAnimatedStyle() : null,
            c = (0, r.jsx)(o.Z.div, {
                ref: (e) => (this.containerRef.current = null != e ? e.refs.node : void 0),
                'aria-hidden': t === y,
                className: s()(v.layer, {
                    [v.baseLayer]: i,
                    [v.animating]: e,
                    'stop-animations': t === y
                }),
                style: l,
                ...a,
                children: n
            });
        return i
            ? c
            : (0, r.jsx)(u.FocusLock, {
                  containerRef: this.containerRef,
                  children: c
              });
    }
    getAnimatedStyle() {
        let { opacity: e, scale: t } = this.state,
            { reducedMotion: n } = this.context;
        return {
            opacity: e,
            transform: n.enabled ? void 0 : [{ scale: t }, { translateZ: 0 }]
        };
    }
    constructor(e) {
        super(e), S(this, 'containerRef', a.createRef());
        let t = 1,
            n = 1;
        e.mode === y && ((t = 0.93), (n = 0)),
            (this.state = {
                animating: !1,
                scale: new o.Z.Value(t),
                opacity: new o.Z.Value(n),
                mode: e.mode
            });
    }
}
S(P, 'defaultProps', { baseLayer: !1 }), S(P, 'contextType', u.AccessibilityPreferencesContext);
class O extends a.PureComponent {
    componentDidMount() {
        I.S.subscribe(C.CkL.LAYER_POP_ESCAPE_KEY, h.xf);
    }
    componentWillUnmount() {
        I.S.unsubscribe(C.CkL.LAYER_POP_ESCAPE_KEY, h.xf);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: i } = t,
            a = [];
        return (
            a.push(
                (0, r.jsx)(
                    P,
                    {
                        mode: 0 !== i || n ? y : Z,
                        baseLayer: !0,
                        children: e
                    },
                    'layer-base'
                )
            ),
            t.forEach((e, t) => a.push(this.renderComponent(e, t, i))),
            a
        );
    }
    renderComponent(e, t, n) {
        let i;
        return (
            (i = 'string' == typeof e ? A[e]() : (0, r.jsx)(e, {})),
            (0, r.jsxs)(
                P,
                {
                    mode: t === n - 1 ? Z : y,
                    children: [(0, r.jsx)(R, {}), i]
                },
                'layer-'.concat(t)
            )
        );
    }
    renderArtisanalHack() {
        return (0, r.jsx)(u.ThemeProvider, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, r.jsx)('div', { className: s()(v.bg, e) })
        });
    }
    render() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, r.jsx)(d.W, {
                    component: 'div',
                    className: s()(v.layers, this.props.className),
                    children: this.renderLayers()
                })
            ]
        });
    }
}
function j(e) {
    let t = (0, c.e7)([_.Z], () => _.Z.darkSidebar) ? C.BRd.DARK : void 0,
        n = (0, c.e7)([E.Z], () => E.Z.getLayers()),
        i = (0, f.QP)((e) => e.fullScreenLayers.length > 0);
    return (0, r.jsx)(O, {
        ...e,
        sidebarTheme: t,
        layers: n,
        hasFullScreenLayer: i
    });
}
