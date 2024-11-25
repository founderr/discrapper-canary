n.d(t, {
    Ox: function () {
        return y;
    },
    QP: function () {
        return I;
    },
    ob: function () {
        return N;
    },
    q4: function () {
        return A;
    }
}),
    n(47120);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(97613),
    l = n.n(o),
    u = n(858863),
    c = n(5188),
    d = n(15729),
    f = n(731965),
    _ = n(477690),
    p = n(481060),
    h = n(714338),
    m = n(624138),
    g = n(314910),
    E = n(819312);
let v = (0, m.Mg)(_.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
((i = r || (r = {}))[(i.ENTERING = 1)] = 'ENTERING'), (i[(i.ENTERED = 2)] = 'ENTERED'), (i[(i.EXITING = 3)] = 'EXITING'), (i[(i.EXITED = 4)] = 'EXITED');
let I = (0, d.U)((e) => ({
    fullScreenLayers: [],
    addLayer: (t) =>
        (0, f.j)(() => {
            e((e) => {
                let { fullScreenLayers: n } = e;
                return {
                    fullScreenLayers: [...n, t]
                };
            });
        })
}));
function b(e) {
    let { item: t } = e,
        n = s.useRef(null);
    return (
        (0, p.useFocusLock)(n),
        s.useEffect(
            () => (
                h.Z.disable(),
                h.Z.enableTemp(
                    (function (e) {
                        return {
                            POP_LAYER: {
                                binds: ['esc'],
                                comboKeysBindGlobal: !0,
                                action() {
                                    N(e);
                                }
                            }
                        };
                    })(t.key)
                ),
                () => {
                    h.Z.disableTemp();
                }
            ),
            [t.key]
        ),
        (0, a.jsx)(t.LayerComponent, {
            children: (0, a.jsxs)('div', {
                className: E.root,
                ref: n,
                children: [
                    (0, a.jsx)('div', { className: E.drag }),
                    t.render({
                        transitionState: null != t ? t.transitionState : 3,
                        closeLayer: () => N(t.key)
                    })
                ]
            })
        })
    );
}
let T = {
        enter: E.enter,
        enterActive: E.enterActive,
        enterDone: E.enterDone,
        exit: E.exit,
        exitActive: E.exitActive,
        exitDone: E.exitDone
    },
    S = {
        enter: E.enterReducedMotion,
        enterActive: E.enterActiveReducedMotion,
        enterDone: E.enterDoneReducedMotion,
        exit: E.exitReducedMotion,
        exitActive: E.exitActiveReducedMotion,
        exitDone: E.exitDoneReducedMotion
    };
function y() {
    let { reducedMotion: e } = s.useContext(p.AccessibilityPreferencesContext),
        t = e.enabled ? S : T,
        n = I((e) => e.fullScreenLayers);
    return (0, a.jsx)(u.Z, {
        children: n.map((e) =>
            (0, a.jsx)(
                c.Z,
                {
                    classNames: t,
                    timeout: v,
                    onEntered: () => {
                        (0, f.j)(() => {
                            I.setState({
                                fullScreenLayers: n.map((t) =>
                                    t.key === e.key
                                        ? {
                                              ...t,
                                              transitionState: 2
                                          }
                                        : t
                                )
                            });
                        });
                    },
                    unmountOnExit: !0,
                    children: (0, a.jsx)(b, { item: e })
                },
                e.key
            )
        )
    });
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: r } = t,
        i = null != n ? n : l()();
    return (
        (0, f.j)(() => {
            I.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: i,
                        transitionState: 1,
                        LayerComponent: null != r ? r : g.ZP,
                        render: e
                    }
                ]
            }));
        }),
        i
    );
}
function N(e) {
    (0, f.j)(() => {
        I.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
