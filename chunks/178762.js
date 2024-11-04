n.d(t, {
    J: function () {
        return b;
    },
    YN: function () {
        return M;
    },
    iZ: function () {
        return k;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(392711),
    r = n.n(i),
    o = n(91192),
    s = n(876215),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    m = n(607070),
    x = n(704041),
    h = n(475676),
    p = n(439170),
    C = n(594174),
    v = n(69259),
    g = n(370370),
    f = n(107062),
    j = n(91140),
    I = n(227172),
    Z = n(551228),
    P = n(678869),
    y = n(278399),
    L = n(886217),
    T = n(555672),
    N = n(644548),
    _ = n(335326),
    S = n(268010),
    E = n(797342),
    A = n(206583);
let M = 72;
function k(e) {
    return (null == e ? void 0 : e.type) === p.so.CONTENT_INVENTORY ? M : 0;
}
let w = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case s.s.PLAYED_GAME:
                return (0, l.jsx)(j.Z, {
                    ...n,
                    entry: t
                });
            case s.s.WATCHED_MEDIA:
                return (0, l.jsx)(_.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_GAME:
                return (0, l.jsx)(T.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_ARTIST:
                return (0, l.jsx)(y.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LISTENED_SESSION:
                return (0, l.jsx)(Z.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(g.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LEADERBOARD:
                return (0, l.jsx)(h.Z, {
                    ...n,
                    entry: t
                });
            default:
                return null;
        }
    },
    R = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, l.jsx)(b, {
            onReaction: (e, l) => {
                n.trackRankingItemInteraction(e, {
                    destinationChannelId: l.id,
                    destinationGuildId: l.guild_id
                }),
                    t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
                n.trackRankingItemInteraction(A.xP.VOICE_CHANNEL_PREVIEWED, {
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id
                });
            },
            ...n
        });
    },
    b = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case s.s.PLAYED_GAME:
                return (0, l.jsx)(I.Z, {
                    ...n,
                    entry: t
                });
            case s.s.WATCHED_MEDIA:
                return (0, l.jsx)(S.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_GAME:
                return (0, l.jsx)(N.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_ARTIST:
                return (0, l.jsx)(L.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LISTENED_SESSION:
                return (0, l.jsx)(P.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(f.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LEADERBOARD:
                var a;
                return (null === (a = n.channel) || void 0 === a ? void 0 : a.guild_id) != null ? (0, l.jsx)(x.Z, { guildId: n.channel.guild_id }) : null;
            default:
                return null;
        }
    };
t.ZP = a.memo((e) => {
    var t;
    let { index: i, ...s } = e,
        [x, h] = a.useState('default'),
        p = (0, o.JA)(''.concat(i)),
        g = null === (t = C.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(),
        { isRich: f, appName: j } = (0, E.n)(s.entry),
        I = a.useMemo(
            () => ({
                entry: s.entry,
                channelId: s.channel.id,
                guildId: s.channel.guild_id,
                requestId: s.requestId,
                richPresenceName: f ? j : void 0
            }),
            [j, s.channel.guild_id, s.channel.id, s.entry, s.requestId, f]
        ),
        Z = a.useRef(!1),
        [P, y] = a.useState(!1),
        [L, T] = a.useState(!1),
        N = (0, c.e7)([m.Z], () => m.Z.keyboardModeEnabled);
    a.useEffect(() => {
        P && N && T(!0);
    }, [P, N]);
    let _ = a.useCallback(
            (e) => {
                if (!!g)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await n.e('153').then(n.bind(n, 330150));
                        return () =>
                            (0, l.jsx)(e, {
                                entry: s.entry,
                                requestId: s.requestId
                            });
                    });
            },
            [s, g]
        ),
        S = a.useCallback(() => {
            h(String(Date.now()));
        }, []),
        M = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0, v.L)(e, {
                    ...I,
                    ...t
                });
            },
            [I]
        ),
        k = a.useCallback(
            r().throttle(
                (e) => {
                    (0, v.L)(A.xP.CARD_POPOUT_OPEN, e);
                },
                2000,
                {
                    leading: !0,
                    trailing: !1
                }
            ),
            []
        ),
        b = () => {
            (Z.current = !1),
                setTimeout(() => {
                    !Z.current && (y(!1), T(N));
                }, 100);
        };
    return (0, l.jsx)('div', {
        onMouseEnter: () => {
            (Z.current = !0),
                setTimeout(() => {
                    Z.current && y(!0), k(I);
                }, 100);
        },
        onMouseLeave: b,
        children: (0, l.jsx)(u.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(R, {
                    closePopout: t,
                    updatePopoutPosition: S,
                    trackRankingItemInteraction: M,
                    ...s
                });
            },
            position: 'left',
            shouldShow: P,
            positionKey: x,
            onRequestOpen: () => k(I),
            onRequestClose: () => {
                L && b();
            },
            spacing: 8,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, l.jsx)(u.Clickable, {
                    ...e,
                    ...p,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: 4,
                            right: 4
                        }
                    },
                    onClick: () => {
                        !P && y(!0);
                    },
                    onContextMenu: _,
                    children: (0, l.jsx)(w, {
                        ...s,
                        selected: n,
                        hovered: Z.current
                    })
                });
            }
        })
    });
});
