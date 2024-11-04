n.d(t, {
    m: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(772848),
    o = n(442837),
    c = n(481060),
    d = n(2052),
    u = n(40851),
    h = n(607070),
    p = n(100527),
    m = n(906732),
    f = n(895924),
    g = n(390322),
    C = n(626135),
    x = n(566620),
    v = n(127255),
    _ = n(5200),
    I = n(558317),
    E = n(403404),
    b = n(981631),
    N = n(388032),
    Z = n(735338);
let T = 'vc-activities-'.concat((0, s.Z)()),
    S = l.forwardRef(function (e, t) {
        let { channel: n, isHovered: a, closePopout: s, onMouseEnter: S, onMouseLeave: j, onClick: A, className: y } = e,
            P = (0, o.e7)([h.Z], () => h.Z.useReducedMotion),
            { id: M, guild_id: R } = n;
        l.useEffect(() => {
            C.default.track(b.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
                channel_id: M,
                guild_id: R
            });
        }, [M, R]),
            l.useEffect(() => {
                !a && s();
            }, [s, a]);
        let L = (0, u.bp)(),
            { analyticsLocations: k } = (0, m.ZP)(p.Z.ACTIVITIES_MINI_SHELF),
            { analyticsLocations: O } = (0, m.ZP)([...k, p.Z.ACTIVITIES_MINI_SHELF_BANNER]),
            D = L === b.IlC.POPOUT,
            w = (0, d.O)(),
            B = (function (e) {
                return (0, v.Z)({ guildId: e }).slice(0, 5);
            })(n.getGuildId());
        l.useEffect(() => {
            let e = setTimeout(() => x.ux(), 1000);
            return () => clearTimeout(e);
        }, []);
        let U = l.useCallback(() => {
                var e;
                (0, E.Z)({
                    channel: n,
                    guildId: null !== (e = n.getGuildId()) && void 0 !== e ? e : void 0,
                    locationObject: w.location,
                    openInPopout: D,
                    analyticsLocations: k,
                    opensAppLauncherModal: !0
                }),
                    j(),
                    A();
            }, [w, k, n, A, j, D]),
            H = l.useCallback(
                (e) => {
                    S(),
                        C.default.track(b.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
                            channel_id: n.id,
                            guild_id: n.getGuildId()
                        });
                },
                [S, n]
            );
        return (0, i.jsx)(m.Gt, {
            value: k,
            children: (0, i.jsx)(g.Z, {
                children: (0, i.jsxs)(c.Dialog, {
                    ref: t,
                    'aria-labelledby': T,
                    className: y,
                    children: [
                        (0, i.jsx)(c.HeadingLevel, {
                            forceLevel: 2,
                            children: (0, i.jsx)(c.HiddenVisually, {
                                children: (0, i.jsx)(c.H, {
                                    id: T,
                                    children: N.intl.string(N.t['2lnYtL'])
                                })
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.container,
                            onMouseEnter: H,
                            onMouseLeave: j,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: Z.titleContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: Z.titleLeft,
                                            children: [
                                                (0, i.jsx)(c.ActivitiesIcon, {
                                                    size: 'md',
                                                    className: Z.titleLeftIcon,
                                                    color: 'var(--interactive-active)'
                                                }),
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'eyebrow',
                                                    children: N.intl.string(N.t.f3Cz29)
                                                })
                                            ]
                                        }),
                                        (0, i.jsxs)(c.Clickable, {
                                            className: Z.titleRight,
                                            onClick: U,
                                            children: [
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'eyebrow',
                                                    children: N.intl.string(N.t['K8+z4e'])
                                                }),
                                                (0, i.jsx)(c.ChevronSmallRightIcon, {
                                                    size: 'custom',
                                                    width: 12,
                                                    height: 12,
                                                    color: 'var(--interactive-active)',
                                                    className: Z.titleRightIcon
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(m.Gt, {
                                    value: O,
                                    children: null
                                }),
                                (0, i.jsxs)('div', {
                                    className: Z.activityContainer,
                                    children: [
                                        B.map((e) =>
                                            (0, i.jsx)(
                                                _.Y,
                                                {
                                                    channel: n,
                                                    activityItem: e,
                                                    onClick: () => {
                                                        s(), A();
                                                    },
                                                    aspectRatio: _.Y.AspectRatio.THIRTEEN_BY_ELEVEN,
                                                    animatedDivClass: Z.activitySuggestion,
                                                    commandOrigin: f.bB.MINI_SHELF
                                                },
                                                e.application.id
                                            )
                                        ),
                                        (0, i.jsx)('div', {
                                            className: r()(Z.wumpusRocketOuterContainer, { [Z.wumpusReducedMotion]: P }),
                                            children: (0, i.jsx)('div', {
                                                className: Z.wumpusRocketInnerContainer,
                                                children: (0, i.jsx)(I.Z, { className: Z.wumpusRocket })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    });
