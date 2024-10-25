n.d(t, {
    J: function () {
        return b;
    },
    YN: function () {
        return y;
    },
    iZ: function () {
        return O;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(392711),
    r = n.n(i),
    s = n(91192),
    o = n(876215),
    u = n(442837),
    c = n(481060),
    d = n(239091),
    h = n(607070),
    m = n(704041),
    x = n(475676),
    E = n(439170),
    _ = n(594174),
    v = n(69259),
    C = n(370370),
    p = n(107062),
    f = n(91140),
    T = n(227172),
    g = n(551228),
    I = n(678869),
    N = n(278399),
    Z = n(886217),
    P = n(555672),
    M = n(644548),
    L = n(335326),
    S = n(268010),
    A = n(797342),
    R = n(206583);
let y = 72;
function O(e) {
    return (null == e ? void 0 : e.type) === E.so.CONTENT_INVENTORY ? y : 0;
}
let j = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.s.PLAYED_GAME:
                return (0, l.jsx)(f.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, l.jsx)(L.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, l.jsx)(P.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, l.jsx)(N.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LISTENED_SESSION:
                return (0, l.jsx)(g.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(C.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LEADERBOARD:
                return (0, l.jsx)(x.Z, {
                    ...n,
                    entry: t
                });
            default:
                return null;
        }
    },
    w = (e) => {
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
                n.trackRankingItemInteraction(R.xP.VOICE_CHANNEL_PREVIEWED, {
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
            case o.s.PLAYED_GAME:
                return (0, l.jsx)(T.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, l.jsx)(S.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, l.jsx)(M.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, l.jsx)(Z.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LISTENED_SESSION:
                return (0, l.jsx)(I.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(p.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LEADERBOARD:
                var a;
                return (0, l.jsx)(m.Z, { guildId: null === (a = n.channel) || void 0 === a ? void 0 : a.guild_id });
            default:
                return null;
        }
    };
t.ZP = a.memo((e) => {
    var t;
    let { index: i, ...o } = e,
        [m, x] = a.useState('default'),
        E = (0, s.JA)(''.concat(i)),
        C = null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(),
        { isRich: p, appName: f } = (0, A.n)(o.entry),
        T = a.useMemo(
            () => ({
                entry: o.entry,
                channelId: o.channel.id,
                guildId: o.channel.guild_id,
                requestId: o.requestId,
                richPresenceName: p ? f : void 0
            }),
            [f, o.channel.guild_id, o.channel.id, o.entry, o.requestId, p]
        ),
        g = a.useRef(!1),
        [I, N] = a.useState(!1),
        [Z, P] = a.useState(!1),
        M = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled);
    a.useEffect(() => {
        I && M && P(!0);
    }, [I, M]);
    let L = a.useCallback(
            (e) => {
                if (!!C)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await n.e('153').then(n.bind(n, 330150));
                        return () =>
                            (0, l.jsx)(e, {
                                entry: o.entry,
                                requestId: o.requestId
                            });
                    });
            },
            [o, C]
        ),
        S = a.useCallback(() => {
            x(String(Date.now()));
        }, []),
        y = a.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0, v.L)(e, {
                    ...T,
                    ...t
                });
            },
            [T]
        ),
        O = a.useCallback(
            r().throttle(
                (e) => {
                    (0, v.L)(R.xP.CARD_POPOUT_OPEN, e);
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
            (g.current = !1),
                setTimeout(() => {
                    !g.current && (N(!1), P(M));
                }, 100);
        };
    return (0, l.jsx)('div', {
        onMouseEnter: () => {
            (g.current = !0),
                setTimeout(() => {
                    g.current && N(!0), O(T);
                }, 100);
        },
        onMouseLeave: b,
        children: (0, l.jsx)(c.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(w, {
                    closePopout: t,
                    updatePopoutPosition: S,
                    trackRankingItemInteraction: y,
                    ...o
                });
            },
            position: 'left',
            shouldShow: I,
            positionKey: m,
            onRequestOpen: () => O(T),
            onRequestClose: () => {
                Z && b();
            },
            spacing: 8,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, l.jsx)(c.Clickable, {
                    ...e,
                    ...E,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: 4,
                            right: 4
                        }
                    },
                    onClick: () => {
                        !I && N(!0);
                    },
                    onContextMenu: L,
                    children: (0, l.jsx)(j, {
                        ...o,
                        selected: n,
                        hovered: g.current
                    })
                });
            }
        })
    });
});
