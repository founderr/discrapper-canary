n.d(t, {
    V: function () {
        return O;
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
    E = n(410030),
    h = n(686546),
    m = n(556017),
    I = n(206887),
    g = n(986074),
    p = n(372769),
    T = n(134432),
    S = n(695346),
    f = n(768581),
    C = n(356164),
    N = n(981631),
    A = n(689938),
    v = n(534238),
    L = n(129512),
    Z = n(330065),
    R = n(755386);
function O(e) {
    let { guild: t, onClick: s, onView: l } = e,
        [C, O] = a.useState(!1),
        [x, b] = a.useState(!1),
        [P, M] = a.useState(!1),
        [D, y] = a.useState(!1),
        j = a.useCallback(async () => {
            b(!0);
            try {
                await s(t.id);
            } catch (n) {
                var e;
                let t = new _.Hx(n);
                d.Z.show({
                    title: A.Z.Messages.ERROR_GENERIC_TITLE,
                    body: null !== (e = t.getAnyErrorMessage()) && void 0 !== e ? e : A.Z.Messages.GENERIC_ERROR_BODY
                });
            } finally {
                b(!1);
            }
        }, [t.id, s]),
        U = a.useCallback(
            (e) => {
                e && !C && (O(!0), null == l || l(t.id));
            },
            [t.id, C, l]
        ),
        G = a.useCallback(
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
        w = (0, E.ZP)(),
        k = t.features.has(N.oNc.HUB),
        B = a.useMemo(() => {
            let e = f.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, T.x_)()
            });
            if (null != e) return e;
            if (k) return R;
            switch (w) {
                case N.BRd.DARK:
                    return L;
                case N.BRd.LIGHT:
                    return Z;
            }
        }, [t.discoverySplash, t.id, k, w]),
        H = a.useMemo(
            () =>
                f.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 40
                }),
            [t.icon, t.id]
        ),
        { canSeeInAppReportingButtons: V } = m.N.getCurrentConfig({ location: 'de1ef6_3' }, { autoTrackExposure: !1 });
    m.N.trackExposure({ location: 'GlobalDiscoveryServersCard' });
    let F = S.Sb.getSetting();
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            x &&
                (0, i.jsx)('div', {
                    className: v.spinnerContainer,
                    children: (0, i.jsx)(c.Spinner, {
                        type: c.Spinner.Type.PULSING_ELLIPSIS,
                        className: v.spinner
                    })
                }),
            (0, i.jsx)(o.$, {
                onChange: U,
                active: !C,
                threshold: 0.55,
                children: (0, i.jsxs)(g.Z, {
                    className: v.card,
                    onClick: j,
                    disabled: x,
                    onContextMenu: G,
                    children: [
                        (0, i.jsxs)('div', {
                            className: v.header,
                            children: [
                                (0, i.jsx)('div', {
                                    className: r()(v.banner, { [v.loaded]: P }),
                                    children: (0, i.jsx)('img', {
                                        src: B,
                                        alt: '',
                                        className: v.bannerImage,
                                        onLoad: () => M(!0)
                                    })
                                }),
                                (F || V) &&
                                    (0, i.jsx)(I.Z, {
                                        guild: t,
                                        className: v.contextMenu
                                    }),
                                (0, i.jsx)('div', {
                                    className: r()(v.icon, { [v.loaded]: D }),
                                    children: (0, i.jsx)(h.ZP, {
                                        mask: h.ZP.Masks.SQUIRCLE,
                                        width: 48,
                                        height: 48,
                                        children: (0, i.jsx)('div', {
                                            className: v.iconMask,
                                            children: (0, i.jsx)(h.ZP, {
                                                mask: h.ZP.Masks.SQUIRCLE,
                                                width: 40,
                                                height: 40,
                                                children: (0, i.jsx)('img', {
                                                    src: H,
                                                    alt: '',
                                                    className: v.avatar,
                                                    onLoad: () => y(!0)
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: v.guildDetails,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: v.title,
                                    children: [
                                        (0, i.jsx)(p.Z, {
                                            className: v.guildBadge,
                                            guild: t,
                                            tooltipColor: c.Tooltip.Colors.PRIMARY
                                        }),
                                        (0, i.jsx)(c.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: v.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, i.jsx)(c.Text, {
                                    className: v.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, i.jsxs)('div', {
                                    className: v.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, i.jsxs)('div', {
                                                className: v.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: v.presenceCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: v.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, i.jsxs)('div', {
                                                className: v.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: v.memberCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: v.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: A.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: t.memberCount })
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
t.Z = a.memo(function (e) {
    let { guildId: t, ...n } = e,
        a = (0, l.e7)([C.Z], () => C.Z.getGuild(t));
    return null == a
        ? null
        : (0, i.jsx)(O, {
              guild: a,
              ...n
          });
});
