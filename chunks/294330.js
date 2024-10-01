n.d(t, {
    Eo: function () {
        return M;
    },
    VD: function () {
        return b;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(668781),
    u = n(239091),
    _ = n(881052),
    h = n(410030),
    E = n(686546),
    m = n(556017),
    I = n(206887),
    g = n(66637),
    p = n(782738),
    T = n(371260),
    f = n(372769),
    S = n(134432),
    C = n(695346),
    N = n(768581),
    A = n(356164),
    v = n(981631),
    L = n(689938),
    Z = n(534238),
    R = n(129512),
    O = n(330065),
    x = n(755386);
function b(e) {
    let { guild: t, onClick: s, onView: l } = e,
        [p, T] = a.useState(!1),
        [A, b] = a.useState(!1),
        [P, M] = a.useState(!1),
        D = a.useCallback(
            async (e) => {
                let { className: n } = e.target;
                if (!n.includes('Menu')) {
                    e.stopPropagation(), b(!0);
                    try {
                        await s(t.id);
                    } catch (t) {
                        var i;
                        let e = new _.Hx(t);
                        d.Z.show({
                            title: L.Z.Messages.ERROR_GENERIC_TITLE,
                            body: null !== (i = e.getAnyErrorMessage()) && void 0 !== i ? i : L.Z.Messages.GENERIC_ERROR_BODY
                        });
                    } finally {
                        b(!1);
                    }
                }
            },
            [t.id, s]
        ),
        y = a.useCallback(
            (e) => {
                e && !p && (T(!0), null == l || l(t.id));
            },
            [t.id, p, l]
        ),
        j = a.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 455839));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t
                        });
                });
            },
            [t]
        ),
        U = (0, h.ZP)(),
        G = t.features.has(v.oNc.HUB),
        w = a.useMemo(() => {
            let e = N.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, S.x_)()
            });
            if (null != e) return e;
            if (G) return x;
            switch (U) {
                case v.BRd.DARK:
                    return R;
                case v.BRd.LIGHT:
                    return O;
            }
        }, [t.discoverySplash, t.id, G, U]),
        k = a.useMemo(
            () =>
                N.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 40
                }),
            [t.icon, t.id]
        ),
        { canSeeInAppReportingButtons: B } = m.N.getCurrentConfig({ location: 'de1ef6_3' }, { autoTrackExposure: !1 });
    m.N.trackExposure({ location: 'GlobalDiscoveryServersCard' });
    let H = C.Sb.getSetting();
    return (0, i.jsxs)('div', {
        className: Z.container,
        children: [
            A &&
                (0, i.jsx)('div', {
                    className: Z.spinnerContainer,
                    children: (0, i.jsx)(c.Spinner, {
                        type: c.Spinner.Type.PULSING_ELLIPSIS,
                        className: Z.spinner
                    })
                }),
            (0, i.jsx)(o.$, {
                onChange: y,
                active: !p,
                threshold: 0.55,
                children: (0, i.jsxs)(g.Z, {
                    className: Z.card,
                    onClick: D,
                    disabled: A,
                    onContextMenu: j,
                    children: [
                        (0, i.jsxs)('div', {
                            className: Z.header,
                            children: [
                                (0, i.jsx)('div', {
                                    className: r()(Z.banner, { [Z.loaded]: P }),
                                    children: (0, i.jsx)('img', {
                                        src: w,
                                        alt: '',
                                        className: Z.bannerImage,
                                        onLoad: () => M(!0)
                                    })
                                }),
                                (H || B) &&
                                    (0, i.jsx)(I.Z, {
                                        guild: t,
                                        className: Z.contextMenu
                                    }),
                                (0, i.jsx)('div', {
                                    className: Z.icon,
                                    children: (0, i.jsx)(E.ZP, {
                                        mask: E.ZP.Masks.SQUIRCLE,
                                        width: 48,
                                        height: 48,
                                        children: (0, i.jsx)('div', {
                                            className: Z.iconMask,
                                            children: (0, i.jsx)(E.ZP, {
                                                mask: E.ZP.Masks.SQUIRCLE,
                                                width: 40,
                                                height: 40,
                                                children: (0, i.jsx)('img', {
                                                    src: k,
                                                    alt: '',
                                                    className: Z.avatar
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: Z.guildDetails,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: Z.title,
                                    children: [
                                        (0, i.jsx)(f.Z, {
                                            className: Z.guildBadge,
                                            guild: t,
                                            tooltipColor: c.Tooltip.Colors.PRIMARY
                                        }),
                                        (0, i.jsx)(c.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: Z.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, i.jsx)(c.Text, {
                                    className: Z.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, i.jsxs)('div', {
                                    className: Z.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, i.jsxs)('div', {
                                                className: Z.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: Z.presenceCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: Z.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: L.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, i.jsxs)('div', {
                                                className: Z.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: Z.memberCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: Z.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: L.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: t.memberCount })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function P(e) {
    let { guildId: t, onClick: n, onView: a } = e,
        s = (0, l.e7)([A.Z], () => A.Z.getGuild(t));
    return null == s
        ? null
        : (0, i.jsx)(b, {
              guild: s,
              onClick: n,
              onView: a
          });
}
function M(e) {
    let { guildId: t, index: n, onClick: s, onView: r } = e,
        l = a.useRef(null == t),
        o = a.useCallback(
            (e, t, n, a) =>
                null == t.guildId
                    ? (0, i.jsx)(
                          T.Z,
                          {
                              state: n,
                              cleanUp: a,
                              children: (0, i.jsx)(p.Z, { className: Z.placeholder })
                          },
                          e
                      )
                    : (0, i.jsx)(
                          T.Z,
                          {
                              state: n,
                              cleanUp: a,
                              animate: l.current,
                              children: (0, i.jsx)(P, {
                                  guildId: t.guildId,
                                  onClick: s,
                                  onView: r
                              })
                          },
                          e
                      ),
            [s, r]
        ),
        d = a.useCallback((e) => {
            var t;
            return null !== (t = e.guildId) && void 0 !== t ? t : ''.concat(e.index);
        }, []),
        u = a.useMemo(
            () => [
                {
                    guildId: t,
                    index: n
                }
            ],
            [t, n]
        );
    return (0, i.jsx)('div', {
        className: Z.transitionGroup,
        children: (0, i.jsx)(c.TransitionGroup, {
            items: u,
            renderItem: o,
            getItemKey: d
        })
    });
}
t.ZP = a.memo(P);
