n.d(t, {
    Eo: function () {
        return P;
    },
    VD: function () {
        return y;
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
    g = n(66637),
    f = n(782738),
    _ = n(371260),
    E = n(372769),
    I = n(134432),
    C = n(695346),
    v = n(768581),
    N = n(356164),
    T = n(890064),
    S = n(981631),
    A = n(388032),
    x = n(534238),
    b = n(129512),
    Z = n(330065),
    L = n(755386);
function y(e) {
    let { guild: t, onClick: l, onView: s } = e,
        [f, _] = r.useState(!1),
        [N, y] = r.useState(!1),
        [O, P] = r.useState(!1),
        R = r.useCallback(async () => {
            y(!0);
            try {
                await l(t.id);
            } catch (n) {
                var e;
                let t = new h.Hx(n);
                d.Z.show({
                    title: A.intl.string(A.t.R0RpRU),
                    body: null !== (e = t.getAnyErrorMessage()) && void 0 !== e ? e : A.intl.string(A.t.eAn6z8)
                });
            } finally {
                y(!1);
            }
        }, [t.id, l]),
        j = r.useCallback(
            (e) => {
                e && !f && (_(!0), null == s || s(t.id));
            },
            [t.id, f, s]
        ),
        D = r.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 858523));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t
                        });
                });
            },
            [t]
        ),
        M = (0, m.ZP)(),
        w = t.features.has(S.oNc.HUB),
        k = r.useMemo(() => {
            let e = v.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, I.x_)()
            });
            if (null != e) return e;
            if (w) return L;
            switch (M) {
                case S.BRd.DARK:
                    return b;
                case S.BRd.LIGHT:
                    return Z;
            }
        }, [t.discoverySplash, t.id, w, M]),
        U = r.useMemo(
            () =>
                v.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 40
                }),
            [t.icon, t.id]
        ),
        G = C.Sb.useSetting();
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            N &&
                (0, i.jsx)('div', {
                    className: x.spinnerContainer,
                    children: (0, i.jsx)(c.Spinner, {
                        type: c.Spinner.Type.PULSING_ELLIPSIS,
                        className: x.spinner
                    })
                }),
            (0, i.jsx)(o.$, {
                onChange: j,
                active: !f,
                threshold: 0.55,
                children: (0, i.jsxs)(g.Z, {
                    className: x.card,
                    onClick: R,
                    disabled: N,
                    onContextMenu: D,
                    children: [
                        (0, i.jsxs)('div', {
                            className: x.header,
                            children: [
                                (0, i.jsx)('div', {
                                    className: a()(x.banner, { [x.loaded]: O }),
                                    children: (0, i.jsx)('img', {
                                        src: k,
                                        alt: '',
                                        className: x.bannerImage,
                                        onLoad: () => P(!0)
                                    })
                                }),
                                G &&
                                    (0, i.jsx)(T.Z, {
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
                                                    src: U,
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
                                        (0, i.jsx)(E.Z, {
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
                                                        children: A.intl.format(A.t['LC+S+v'], { membersOnline: t.presenceCount })
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
                                                        children: A.intl.format(A.t.zRl6XV, { count: t.memberCount })
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
function O(e) {
    let { guildId: t, onClick: n, onView: r } = e,
        l = (0, s.e7)([N.Z], () => N.Z.getGuild(t));
    return null == l
        ? null
        : (0, i.jsx)(y, {
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
                          _.Z,
                          {
                              state: n,
                              cleanUp: r,
                              children: (0, i.jsx)(f.Z, { className: x.placeholder })
                          },
                          e
                      )
                    : (0, i.jsx)(
                          _.Z,
                          {
                              state: n,
                              cleanUp: r,
                              animate: s.current,
                              children: (0, i.jsx)(O, {
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
t.ZP = r.memo(O);
