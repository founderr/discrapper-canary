n(47120);
var i = n(200651),
    r = n(192379),
    a = n(100621),
    l = n(782690),
    s = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(950279),
    u = n(741595),
    h = n(754961),
    m = n(363915),
    p = n(359380),
    g = n(207796),
    f = n(388032),
    _ = n(908310);
let E = {
    mass: 1,
    tension: 600,
    friction: 60
};
function I() {
    let e = (0, g.GN)((e) => e.selectedGames, l.Z),
        t = r.useMemo(() => new Set(e), [e]),
        n = r.useCallback((e) => g.GN.getState().setSelectedGames(Array.from(e)), []);
    return (0, i.jsx)(d.Z, {
        title: f.intl.string(f.t.CsPdQE),
        description: f.intl.string(f.t.VF1Fbm),
        onUpdateGames: n,
        gameApplicationIds: t,
        minGames: 0
    });
}
function C() {
    let e = (0, g.GN)((e) => e.selectedPlaystyle, l.Z),
        t = r.useCallback((e) => g.GN.getState().setSelectedPlaystyle(e), []);
    return (0, i.jsx)(u.Z, {
        title: f.intl.string(f.t.nSOnKS),
        description: f.intl.string(f.t.Kfz1aW),
        onUpdatePlaystyle: t,
        playstyle: e
    });
}
function v() {
    let e = (0, g.GN)((e) => e.selectedTraits, l.Z),
        t = r.useMemo(() => new Set(e), [e]),
        n = r.useCallback((e) => g.GN.getState().setSelectedTraits([...e]), []);
    return (0, i.jsx)(p.Z, {
        title: f.intl.string(f.t['hLYj+v']),
        description: f.intl.string(f.t.DBtgV1),
        onUpdateTraits: n,
        traits: t,
        hidePreview: !0
    });
}
function S(e) {
    return e.toString();
}
t.Z = r.memo(function (e) {
    let { onDismiss: t } = e,
        n = r.useRef(null),
        d = r.useRef(null),
        u = r.useRef(null),
        p = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        [N, T] = r.useState(0),
        [x, b] = r.useState(0),
        A = (0, g.GN)((e) => e.selectedPlaystyle, l.Z),
        Z = r.useCallback(
            (e) => {
                T(e), x < e && b(e);
            },
            [x]
        ),
        y = r.useCallback(() => {
            0 === N ? t() : Z(N - 1);
        }, [N, Z, t]),
        L = r.useCallback(() => {
            2 === N ? t() : Z(N + 1);
        }, [N, Z, t]),
        R = r.useMemo(() => 1 === N && null == A, [A, N]),
        P = r.useMemo(
            () => [
                {
                    index: 0,
                    name: f.intl.string(f.t.OeK1VF)
                },
                {
                    index: 1,
                    name: f.intl.string(f.t['5bXlz8'])
                },
                {
                    index: 2,
                    name: f.intl.string(f.t.Ftxkr6)
                }
            ],
            []
        ),
        O = (0, o.useSpring)(
            {
                ref: n,
                from: { opacity: 0 },
                to: { opacity: 1 },
                config: E
            },
            'animate-always'
        ),
        j = (0, o.useSpring)(
            {
                ref: d,
                from: {
                    opacity: 0,
                    transform: p ? 'translateY(0px)' : 'translateY(40px)'
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: E
            },
            'animate-always'
        ),
        D = (0, o.useSpring)(
            {
                ref: u,
                from: {
                    opacity: 0,
                    transform: p ? 'translateY(0px)' : 'translateY(40px)'
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: E
            },
            'animate-always'
        );
    (0, a.useChain)([n, d, u], [0, 0.2, 0.5]);
    let M = r.useMemo(() => [N], [N]),
        w = r.useCallback((e) => {
            switch (e) {
                case 0:
                    return (0, i.jsx)(I, {});
                case 1:
                    return (0, i.jsx)(C, {});
                case 2:
                    return (0, i.jsx)(v, {});
            }
        }, []);
    return (0, i.jsxs)(a.animated.div, {
        className: _.container,
        style: O,
        children: [
            (0, i.jsx)(a.animated.div, {
                className: _.sequencer,
                style: j,
                children: (0, i.jsx)(m.Z, {
                    currentStep: N,
                    items: M,
                    renderItem: w,
                    getItemKey: S
                })
            }),
            (0, i.jsxs)(a.animated.div, {
                className: _.footer,
                style: D,
                children: [
                    (0, i.jsx)(h.T, {
                        currentStepIndex: N,
                        steps: P,
                        furthestStepIndex: x,
                        onStepClick: Z
                    }),
                    (0, i.jsx)(h.i, {
                        className: _.footerButtons,
                        isBackDisabled: !1,
                        isNextDisabled: R,
                        onNextClick: L,
                        onBackClick: y
                    })
                ]
            })
        ]
    });
});
