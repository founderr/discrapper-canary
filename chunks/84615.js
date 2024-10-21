n.d(t, {
    Ox: function () {
        return R;
    },
    QP: function () {
        return S;
    },
    ob: function () {
        return v;
    },
    q4: function () {
        return O;
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
    d = n(903797),
    _ = n(731965),
    E = n(477690),
    f = n(481060),
    h = n(714338),
    p = n(624138),
    I = n(314910),
    m = n(81448);
let T = (0, p.Mg)(E.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
((i = r || (r = {}))[(i.ENTERING = 1)] = 'ENTERING'), (i[(i.ENTERED = 2)] = 'ENTERED'), (i[(i.EXITING = 3)] = 'EXITING'), (i[(i.EXITED = 4)] = 'EXITED');
let S = (0, d.Z)((e) => ({
    fullScreenLayers: [],
    addLayer: (t) =>
        (0, _.j)(() => {
            e((e) => {
                let { fullScreenLayers: n } = e;
                return {
                    fullScreenLayers: [...n, t]
                };
            });
        })
}));
function g(e) {
    let { item: t } = e,
        n = s.useRef(null);
    return (
        (0, f.useFocusLock)(n),
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
                                    v(e);
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
                className: m.root,
                ref: n,
                children: [
                    (0, a.jsx)('div', { className: m.drag }),
                    t.render({
                        transitionState: null != t ? t.transitionState : 3,
                        closeLayer: () => v(t.key)
                    })
                ]
            })
        })
    );
}
let A = {
        enter: m.enter,
        enterActive: m.enterActive,
        enterDone: m.enterDone,
        exit: m.exit,
        exitActive: m.exitActive,
        exitDone: m.exitDone
    },
    N = {
        enter: m.enterReducedMotion,
        enterActive: m.enterActiveReducedMotion,
        enterDone: m.enterDoneReducedMotion,
        exit: m.exitReducedMotion,
        exitActive: m.exitActiveReducedMotion,
        exitDone: m.exitDoneReducedMotion
    };
function R() {
    let { reducedMotion: e } = s.useContext(f.AccessibilityPreferencesContext),
        t = e.enabled ? N : A,
        n = S((e) => e.fullScreenLayers);
    return (0, a.jsx)(u.Z, {
        children: n.map((e) =>
            (0, a.jsx)(
                c.Z,
                {
                    classNames: t,
                    timeout: T,
                    onEntered: () => {
                        (0, _.j)(() => {
                            S.setState({
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
                    children: (0, a.jsx)(g, { item: e })
                },
                e.key
            )
        )
    });
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
        { layerKey: n, Layer: r } = t,
        i = null != n ? n : l()();
    return (
        (0, _.j)(() => {
            S.setState((t) => ({
                fullScreenLayers: [
                    ...t.fullScreenLayers,
                    {
                        key: i,
                        transitionState: 1,
                        LayerComponent: null != r ? r : I.ZP,
                        render: e
                    }
                ]
            }));
        }),
        i
    );
}
function v(e) {
    (0, _.j)(() => {
        S.setState((t) => ({ fullScreenLayers: t.fullScreenLayers.filter((t) => t.key !== e) }));
    });
}
