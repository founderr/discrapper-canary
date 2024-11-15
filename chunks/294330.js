n.d(t, {
    Eo: function () {
        return P;
    },
    VD: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(668781),
    u = n(239091),
    h = n(881052),
    m = n(410030),
    p = n(686546),
    g = n(556017),
    f = n(206887),
    _ = n(66637),
    E = n(782738),
    I = n(371260),
    C = n(372769),
    v = n(134432),
    S = n(695346),
    N = n(768581),
    T = n(356164),
    A = n(981631),
    b = n(388032),
    x = n(439069),
    Z = n(129512),
    L = n(330065),
    y = n(755386);
function O(e) {
    let { guild: t, onClick: l, onView: s } = e,
        [E, I] = r.useState(!1),
        [T, O] = r.useState(!1),
        [R, P] = r.useState(!1),
        j = r.useCallback(async () => {
            O(!0);
            try {
                await l(t.id);
            } catch (n) {
                var e;
                let t = new h.Hx(n);
                d.Z.show({
                    title: b.intl.string(b.t.R0RpRU),
                    body: null !== (e = t.getAnyErrorMessage()) && void 0 !== e ? e : b.intl.string(b.t.eAn6z8)
                });
            } finally {
                O(!1);
            }
        }, [t.id, l]),
        D = r.useCallback(
            (e) => {
                e && !E && (I(!0), null == s || s(t.id));
            },
            [t.id, E, s]
        ),
        M = r.useCallback(
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
        w = (0, m.ZP)(),
        k = t.features.has(A.oNc.HUB),
        U = r.useMemo(() => {
            let e = N.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, v.x_)()
            });
            if (null != e) return e;
            if (k) return y;
            switch (w) {
                case A.BRd.DARK:
                    return Z;
                case A.BRd.LIGHT:
                    return L;
            }
        }, [t.discoverySplash, t.id, k, w]),
        G = r.useMemo(
            () =>
                N.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 40
                }),
            [t.icon, t.id]
        ),
        { canSeeInAppReportingButtons: B } = g.N.getCurrentConfig({ location: 'de1ef6_3' }, { autoTrackExposure: !1 });
    g.N.trackExposure({ location: 'GlobalDiscoveryServersCard' });
    let V = S.Sb.getSetting();
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            T &&
                (0, i.jsx)('div', {
                    className: x.spinnerContainer,
                    children: (0, i.jsx)(c.Spinner, {
                        type: c.Spinner.Type.PULSING_ELLIPSIS,
                        className: x.spinner
                    })
                }),
            (0, i.jsx)(o.$, {
                onChange: D,
                active: !E,
                threshold: 0.55,
                children: (0, i.jsxs)(_.Z, {
                    className: x.card,
                    onClick: j,
                    disabled: T,
                    onContextMenu: M,
                    children: [
                        (0, i.jsxs)('div', {
                            className: x.header,
                            children: [
                                (0, i.jsx)('div', {
                                    className: a()(x.banner, { [x.loaded]: R }),
                                    children: (0, i.jsx)('img', {
                                        src: U,
                                        alt: '',
                                        className: x.bannerImage,
                                        onLoad: () => P(!0)
                                    })
                                }),
                                (V || B) &&
                                    (0, i.jsx)(f.Z, {
                                        guild: t,
                                        className: x.contextMenu
                                    }),
                                (0, i.jsx)('div', {
                                    className: x.icon,
                                    children: (0, i.jsx)(p.ZP, {
                                        mask: p.ZP.Masks.SQUIRCLE,
                                        width: 48,
                                        height: 48,
                                        children: (0, i.jsx)('div', {
                                            className: x.iconMask,
                                            children: (0, i.jsx)(p.ZP, {
                                                mask: p.ZP.Masks.SQUIRCLE,
                                                width: 40,
                                                height: 40,
                                                children: (0, i.jsx)('img', {
                                                    src: G,
                                                    alt: '',
                                                    className: x.avatar
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: x.guildDetails,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: x.title,
                                    children: [
                                        (0, i.jsx)(C.Z, {
                                            className: x.guildBadge,
                                            guild: t,
                                            tooltipColor: c.Tooltip.Colors.PRIMARY
                                        }),
                                        (0, i.jsx)(c.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: x.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, i.jsx)(c.Text, {
                                    className: x.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, i.jsxs)('div', {
                                    className: x.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, i.jsxs)('div', {
                                                className: x.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: x.presenceCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: x.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: b.intl.format(b.t['LC+S+v'], { membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, i.jsxs)('div', {
                                                className: x.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: x.memberCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: x.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: b.intl.format(b.t.zRl6XV, { count: t.memberCount })
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
function R(e) {
    let { guildId: t, onClick: n, onView: r } = e,
        l = (0, s.e7)([T.Z], () => T.Z.getGuild(t));
    return null == l
        ? null
        : (0, i.jsx)(O, {
              guild: l,
              onClick: n,
              onView: r
          });
}
function P(e) {
    let { guildId: t, index: n, onClick: l, onView: a } = e,
        s = r.useRef(null == t),
        o = r.useCallback(
            (e, t, n, r) =>
                null == t.guildId
                    ? (0, i.jsx)(
                          I.Z,
                          {
                              state: n,
                              cleanUp: r,
                              children: (0, i.jsx)(E.Z, { className: x.placeholder })
                          },
                          e
                      )
                    : (0, i.jsx)(
                          I.Z,
                          {
                              state: n,
                              cleanUp: r,
                              animate: s.current,
                              children: (0, i.jsx)(R, {
                                  guildId: t.guildId,
                                  onClick: l,
                                  onView: a
                              })
                          },
                          e
                      ),
            [l, a]
        ),
        d = r.useCallback((e) => {
            var t;
            return null !== (t = e.guildId) && void 0 !== t ? t : ''.concat(e.index);
        }, []),
        u = r.useMemo(
            () => [
                {
                    guildId: t,
                    index: n
                }
            ],
            [t, n]
        );
    return (0, i.jsx)('div', {
        className: x.transitionGroup,
        children: (0, i.jsx)(c.TransitionGroup, {
            items: u,
            renderItem: o,
            getItemKey: d
        })
    });
}
t.ZP = r.memo(R);
