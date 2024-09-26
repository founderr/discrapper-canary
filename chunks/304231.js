n(47120);
var i = n(735250),
    a = n(470079),
    s = n(526629),
    r = n(143927),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(950279),
    u = n(741595),
    _ = n(754961),
    h = n(363915),
    E = n(359380),
    m = n(207796),
    I = n(689938),
    g = n(908310);
let p = {
    mass: 1,
    tension: 600,
    friction: 60
};
function T() {
    let e = (0, m.GN)((e) => e.selectedGames, r.Z),
        t = a.useMemo(() => new Set(e), [e]),
        n = a.useCallback((e) => m.GN.getState().setSelectedGames(Array.from(e)), []);
    return (0, i.jsx)(d.Z, {
        title: I.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
        description: I.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
        onUpdateGames: n,
        gameApplicationIds: t,
        minGames: 0
    });
}
function S() {
    let e = (0, m.GN)((e) => e.selectedPlaystyle, r.Z),
        t = a.useCallback((e) => m.GN.getState().setSelectedPlaystyle(e), []);
    return (0, i.jsx)(u.Z, {
        title: I.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
        description: I.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
        onUpdatePlaystyle: t,
        playstyle: e
    });
}
function f() {
    let e = (0, m.GN)((e) => e.selectedTraits, r.Z),
        t = a.useMemo(() => new Set(e), [e]),
        n = a.useCallback((e) => m.GN.getState().setSelectedTraits([...e]), []);
    return (0, i.jsx)(E.Z, {
        title: I.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
        description: I.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
        onUpdateTraits: n,
        traits: t,
        hidePreview: !0
    });
}
function C(e) {
    return e.toString();
}
t.Z = a.memo(function (e) {
    let { onDismiss: t } = e,
        n = a.useRef(null),
        d = a.useRef(null),
        u = a.useRef(null),
        E = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        [N, A] = a.useState(0),
        [v, Z] = a.useState(0),
        L = (0, m.GN)((e) => e.selectedPlaystyle, r.Z),
        R = a.useCallback(
            (e) => {
                A(e), v < e && Z(e);
            },
            [v]
        ),
        O = a.useCallback(() => {
            0 === N ? t() : R(N - 1);
        }, [N, R, t]),
        x = a.useCallback(() => {
            2 === N ? t() : R(N + 1);
        }, [N, R, t]),
        b = a.useMemo(() => 1 === N && null == L, [L, N]),
        P = a.useMemo(
            () => [
                {
                    index: 0,
                    name: I.Z.Messages.CLAN_SETUP_GAMES_STEP
                },
                {
                    index: 1,
                    name: I.Z.Messages.CLAN_SETUP_PLAYSTYLE_STEP
                },
                {
                    index: 2,
                    name: I.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
                }
            ],
            []
        ),
        M = (0, o.useSpring)(
            {
                ref: n,
                from: { opacity: 0 },
                to: { opacity: 1 },
                config: p
            },
            'animate-always'
        ),
        D = (0, o.useSpring)(
            {
                ref: d,
                from: {
                    opacity: 0,
                    transform: E ? 'translateY(0px)' : 'translateY(40px)'
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: p
            },
            'animate-always'
        ),
        y = (0, o.useSpring)(
            {
                ref: u,
                from: {
                    opacity: 0,
                    transform: E ? 'translateY(0px)' : 'translateY(40px)'
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: p
            },
            'animate-always'
        );
    (0, s.useChain)([n, d, u], [0, 0.2, 0.5]);
    let j = a.useMemo(() => [N], [N]),
        U = a.useCallback((e) => {
            switch (e) {
                case 0:
                    return (0, i.jsx)(T, {});
                case 1:
                    return (0, i.jsx)(S, {});
                case 2:
                    return (0, i.jsx)(f, {});
            }
        }, []);
    return (0, i.jsxs)(s.animated.div, {
        className: g.container,
        style: M,
        children: [
            (0, i.jsx)(s.animated.div, {
                className: g.sequencer,
                style: D,
                children: (0, i.jsx)(h.Z, {
                    currentStep: N,
                    items: j,
                    renderItem: U,
                    getItemKey: C
                })
            }),
            (0, i.jsxs)(s.animated.div, {
                className: g.footer,
                style: y,
                children: [
                    (0, i.jsx)(_.T, {
                        currentStepIndex: N,
                        steps: P,
                        furthestStepIndex: v,
                        onStepClick: R
                    }),
                    (0, i.jsx)(_.i, {
                        className: g.footerButtons,
                        isBackDisabled: !1,
                        isNextDisabled: b,
                        onNextClick: x,
                        onBackClick: O
                    })
                ]
            })
        ]
    });
});
