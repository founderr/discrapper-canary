n.d(t, {
    J: function () {
        return O;
    },
    YN: function () {
        return A;
    },
    iZ: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    o = n(91192),
    s = n(876215),
    u = n(442837),
    c = n(481060),
    d = n(239091),
    h = n(607070),
    m = n(704041),
    x = n(475676),
    v = n(439170),
    f = n(594174),
    p = n(69259),
    g = n(370370),
    C = n(107062),
    I = n(91140),
    P = n(227172),
    Z = n(551228),
    y = n(678869),
    j = n(278399),
    w = n(886217),
    T = n(555672),
    L = n(644548),
    S = n(335326),
    N = n(268010),
    E = n(797342),
    _ = n(206583);
let A = 72;
function R(e) {
    return (null == e ? void 0 : e.type) === v.so.CONTENT_INVENTORY ? A : 0;
}
let b = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case s.s.PLAYED_GAME:
                return (0, i.jsx)(I.Z, {
                    ...n,
                    entry: t
                });
            case s.s.WATCHED_MEDIA:
                return (0, i.jsx)(S.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_GAME:
                return (0, i.jsx)(T.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_ARTIST:
                return (0, i.jsx)(j.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LISTENED_SESSION:
                return (0, i.jsx)(Z.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LAUNCHED_ACTIVITY:
                return (0, i.jsx)(g.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LEADERBOARD:
                return (0, i.jsx)(x.Z, {
                    ...n,
                    entry: t
                });
            default:
                return null;
        }
    },
    M = (e) => {
        let { closePopout: t, ...n } = e;
        return (0, i.jsx)(O, {
            onReaction: (e, i) => {
                n.trackRankingItemInteraction(e, {
                    destinationChannelId: i.id,
                    destinationGuildId: i.guild_id
                }),
                    t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e) => {
                n.trackRankingItemInteraction(_.xP.VOICE_CHANNEL_PREVIEWED, {
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id
                });
            },
            ...n
        });
    },
    O = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case s.s.PLAYED_GAME:
                return (0, i.jsx)(P.Z, {
                    ...n,
                    entry: t
                });
            case s.s.WATCHED_MEDIA:
                return (0, i.jsx)(N.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_GAME:
                return (0, i.jsx)(L.Z, {
                    ...n,
                    entry: t
                });
            case s.s.TOP_ARTIST:
                return (0, i.jsx)(w.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LISTENED_SESSION:
                return (0, i.jsx)(y.Z, {
                    ...n,
                    entry: t
                });
            case s.s.LAUNCHED_ACTIVITY:
                return (0, i.jsx)(C.ZP, {
                    ...n,
                    entry: t
                });
            case s.s.LEADERBOARD:
                var l;
                return (null === (l = n.channel) || void 0 === l ? void 0 : l.guild_id) != null ? (0, i.jsx)(m.Z, { guildId: n.channel.guild_id }) : null;
            default:
                return null;
        }
    };
t.ZP = l.memo((e) => {
    var t;
    let { index: a, ...s } = e,
        [m, x] = l.useState('default'),
        v = (0, o.JA)(''.concat(a)),
        g = null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(),
        { isRich: C, appName: I } = (0, E.n)(s.entry),
        P = l.useMemo(
            () => ({
                entry: s.entry,
                channelId: s.channel.id,
                guildId: s.channel.guild_id,
                requestId: s.requestId,
                richPresenceName: C ? I : void 0
            }),
            [I, s.channel.guild_id, s.channel.id, s.entry, s.requestId, C]
        ),
        Z = l.useRef(!1),
        [y, j] = l.useState(!1),
        [w, T] = l.useState(!1),
        L = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled);
    l.useEffect(() => {
        y && L && T(!0);
    }, [y, L]);
    let S = l.useCallback(
            (e) => {
                if (!!g)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await n.e('153').then(n.bind(n, 330150));
                        return () =>
                            (0, i.jsx)(e, {
                                entry: s.entry,
                                requestId: s.requestId
                            });
                    });
            },
            [s, g]
        ),
        N = l.useCallback(() => {
            x(String(Date.now()));
        }, []),
        A = l.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0, p.L)(e, {
                    ...P,
                    ...t
                });
            },
            [P]
        ),
        R = l.useCallback(
            r().throttle(
                (e) => {
                    (0, p.L)(_.xP.CARD_POPOUT_OPEN, e);
                },
                2000,
                {
                    leading: !0,
                    trailing: !1
                }
            ),
            []
        ),
        O = () => {
            (Z.current = !1),
                setTimeout(() => {
                    !Z.current && (j(!1), T(L));
                }, 100);
        };
    return (0, i.jsx)('div', {
        onMouseEnter: () => {
            (Z.current = !0),
                setTimeout(() => {
                    Z.current && j(!0), R(P);
                }, 100);
        },
        onMouseLeave: O,
        children: (0, i.jsx)(c.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(M, {
                    closePopout: t,
                    updatePopoutPosition: N,
                    trackRankingItemInteraction: A,
                    ...s
                });
            },
            position: 'left',
            shouldShow: y,
            positionKey: m,
            onRequestOpen: () => R(P),
            onRequestClose: () => {
                w && O();
            },
            spacing: 8,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsx)(c.Clickable, {
                    ...e,
                    ...v,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: 4,
                            right: 4
                        }
                    },
                    onClick: () => {
                        !y && j(!0);
                    },
                    onContextMenu: S,
                    children: (0, i.jsx)(b, {
                        ...s,
                        selected: n,
                        hovered: Z.current
                    })
                });
            }
        })
    });
});
