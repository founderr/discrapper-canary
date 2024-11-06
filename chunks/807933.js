n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(348327),
    o = n.n(s),
    c = n(100621),
    d = n(782690),
    u = n(481060),
    h = n(410030),
    m = n(950279),
    p = n(741595),
    g = n(359380),
    f = n(766219),
    _ = n(480222),
    E = n(207796),
    I = n(558831),
    C = n(304231),
    v = n(981631),
    S = n(388032),
    N = n(454042);
let T = {
        mass: 1,
        tension: 280,
        friction: 20,
        clamp: !0
    },
    x = {
        [E.v0.PLAYSTYLE]: function () {
            let e = (0, E.GN)((e) => e.selectedPlaystyle, d.Z),
                [t, n] = r.useState(E.GN.getState().selectedPlaystyle),
                l = r.useCallback(() => {
                    E.GN.getState().setSelectedPlaystyle(t);
                }, [t]),
                a = r.useCallback(() => {
                    n(e);
                }, [e]),
                s = r.useMemo(() => !o()(t, e), [t, e]);
            return (0, i.jsx)(_.Z, {
                hasChanges: s,
                onSave: l,
                onReset: a,
                children: (0, i.jsx)(p.Z, {
                    title: S.intl.string(S.t.nSOnKS),
                    description: S.intl.string(S.t.Kfz1aW),
                    onUpdatePlaystyle: n,
                    playstyle: t
                })
            });
        },
        [E.v0.TRAITS]: function () {
            let e = (0, E.GN)((e) => e.selectedTraits, d.Z),
                [t, n] = r.useState(new Set(e)),
                l = r.useCallback(() => {
                    E.GN.getState().setSelectedTraits(Array.from(t));
                }, [t]),
                a = r.useCallback(() => {
                    n(new Set(e));
                }, [e]),
                s = r.useMemo(() => !o()(t, e), [t, e]);
            return (0, i.jsx)(_.Z, {
                hasChanges: s,
                onSave: l,
                onReset: a,
                children: (0, i.jsx)(g.Z, {
                    title: S.intl.string(S.t['hLYj+v']),
                    description: S.intl.string(S.t.DBtgV1),
                    onUpdateTraits: n,
                    traits: t,
                    hidePreview: !0
                })
            });
        },
        [E.v0.GAMES]: function () {
            let e = (0, E.GN)((e) => e.selectedGames, d.Z),
                [t, n] = r.useState(new Set(e)),
                l = r.useCallback(() => {
                    E.GN.getState().setSelectedGames(Array.from(t));
                }, [t]),
                a = r.useCallback(() => {
                    n(new Set(e));
                }, [e]),
                s = r.useMemo(() => !o()(t, e), [t, e]);
            return (0, i.jsx)(_.Z, {
                hasChanges: s,
                onSave: l,
                onReset: a,
                children: (0, i.jsx)(m.Z, {
                    title: S.intl.string(S.t.CsPdQE),
                    description: S.intl.string(S.t.VF1Fbm),
                    onUpdateGames: n,
                    gameApplicationIds: t
                })
            });
        },
        [E.v0.PREFERENCES]: function () {
            let e = (0, E.GN)((e) => e.selectedGames, d.Z),
                t = (0, E.GN)((e) => e.selectedPlaystyle, d.Z),
                n = (0, E.GN)((e) => e.selectedTraits, d.Z),
                [l, a] = r.useState(new Set(e)),
                [s, c] = r.useState(t),
                [u, h] = r.useState(new Set(n)),
                m = r.useMemo(
                    () => ({
                        games: Array.from(l),
                        playstyle: s,
                        traits: Array.from(u)
                    }),
                    [l, s, u]
                ),
                p = r.useMemo(
                    () => ({
                        games: e,
                        playstyle: t,
                        traits: n
                    }),
                    [e, t, n]
                ),
                g = r.useMemo(() => !o()(m, p), [p, m]),
                C = r.useCallback(() => {
                    var e;
                    E.GN.getState().setSelectedGames(m.games), E.GN.getState().setSelectedPlaystyle(null !== (e = m.playstyle) && void 0 !== e ? e : null), E.GN.getState().setSelectedTraits(m.traits), (0, f.Og)();
                }, [m.games, m.playstyle, m.traits]),
                v = r.useCallback(() => {
                    a(new Set(p.games)), c(p.playstyle), h(new Set(p.traits));
                }, [p.games, p.playstyle, p.traits]);
            return (0, i.jsx)(_.Z, {
                hasChanges: g,
                onSave: C,
                onReset: v,
                children: (0, i.jsx)(I.Z, {
                    traits: u,
                    gameApplicationIds: l,
                    playstyle: s,
                    onUpdateGames: a,
                    onUpdateTraits: h,
                    onUpdatePlaystyle: c
                })
            });
        },
        [E.v0.GET_STARTED]: function () {
            let e = (0, h.ZP)(),
                t = r.useCallback(() => {
                    (0, E.fH)(E.v0.DISCOVERY);
                }, []),
                n = r.useMemo(() => (e === v.BRd.DARK ? N.genericOnboardingBackgroundImageDark : N.genericOnboardingBackgroundImageLight), [e]);
            return (0, i.jsx)('div', {
                className: N.container,
                children: (0, i.jsx)('div', {
                    className: N.innerContainer,
                    children: (0, i.jsxs)('div', {
                        className: a()(n, N.userOnboarding),
                        children: [
                            (0, i.jsx)('div', { className: N.backgroundImageBlur }),
                            (0, i.jsx)('div', {
                                className: N.backgroundImageContent,
                                children: (0, i.jsx)(C.Z, { onDismiss: t })
                            })
                        ]
                    })
                })
            });
        }
    };
function A(e) {
    let { item: t, state: n, cleanUp: l } = e,
        a = r.useMemo(() => {
            let e = x[t];
            return null == e ? null : (0, i.jsx)(e, {});
        }, [t]),
        s = (0, u.useSpring)({
            from: { opacity: 0 },
            to: { opacity: n === u.TransitionStates.YEETED ? 0 : 1 },
            config: T,
            onRest: () => {
                n === u.TransitionStates.YEETED && l();
            }
        });
    return (0, i.jsx)(c.animated.div, {
        style: s,
        children: a
    });
}
function b(e) {
    return e;
}
function Z(e, t, n, r) {
    return (0, i.jsx)(
        A,
        {
            item: t,
            state: n,
            cleanUp: r
        },
        e
    );
}
t.Z = r.memo(function (e) {
    let { mode: t } = e,
        n = r.useMemo(() => (null != x[t] ? [t] : []), [t]);
    return (0, i.jsx)(u.TransitionGroup, {
        items: n,
        renderItem: Z,
        getItemKey: b
    });
});
