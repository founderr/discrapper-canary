n.d(t, {
    J: function () {
        return b;
    },
    YN: function () {
        return R;
    },
    iZ: function () {
        return j;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
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
    T = n(370370),
    p = n(107062),
    f = n(91140),
    g = n(227172),
    I = n(551228),
    C = n(678869),
    N = n(278399),
    P = n(886217),
    Z = n(555672),
    A = n(644548),
    S = n(335326),
    M = n(268010),
    O = n(797342),
    y = n(206583);
let R = 72;
function j(e) {
    return (null == e ? void 0 : e.type) === E.so.CONTENT_INVENTORY ? R : 0;
}
let L = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.s.PLAYED_GAME:
                return (0, l.jsx)(f.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, l.jsx)(S.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, l.jsx)(Z.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, l.jsx)(N.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LISTENED_SESSION:
                return (0, l.jsx)(I.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(T.Z, {
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
        let { requestId: t, closePopout: n, ...a } = e;
        return (0, l.jsx)(b, {
            onReaction: (e, l) => {
                (0, v.L)(e, {
                    entry: a.entry,
                    channelId: a.channel.id,
                    guildId: a.channel.guild_id,
                    requestId: t,
                    destinationChannelId: l.id,
                    destinationGuildId: l.guild_id
                }),
                    n();
            },
            closePopout: n,
            onVoiceChannelPreview: (e, n) => {
                (0, v.L)(y.xP.VOICE_CHANNEL_PREVIEWED, {
                    entry: a.entry,
                    channelId: a.channel.id,
                    guildId: a.channel.guild_id,
                    requestId: t,
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id,
                    richPresenceName: n
                });
            },
            ...a
        });
    },
    b = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.s.PLAYED_GAME:
                return (0, l.jsx)(g.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, l.jsx)(M.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, l.jsx)(A.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, l.jsx)(P.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LISTENED_SESSION:
                return (0, l.jsx)(C.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, l.jsx)(p.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LEADERBOARD:
                return (0, l.jsx)(m.Z, { channel: n.channel });
            default:
                return null;
        }
    };
t.ZP = a.memo((e) => {
    var t;
    let { index: i, ...o } = e,
        [m, x] = a.useState('default'),
        E = (0, s.JA)(''.concat(i)),
        T = null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(),
        { isRich: p, appName: f } = (0, O.n)(o.entry),
        g = {
            entry: o.entry,
            channelId: o.channel.id,
            guildId: o.channel.guild_id,
            requestId: o.requestId,
            richPresenceName: p ? f : void 0
        },
        I = a.useRef(!1),
        [C, N] = a.useState(!1),
        [P, Z] = a.useState(!1),
        A = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled);
    a.useEffect(() => {
        C && A && Z(!0);
    }, [C, A]);
    let S = a.useCallback(
            (e) => {
                if (!!T)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await n.e('153').then(n.bind(n, 330150));
                        return () =>
                            (0, l.jsx)(e, {
                                entry: o.entry,
                                requestId: o.requestId
                            });
                    });
            },
            [o, T]
        ),
        M = a.useCallback(() => {
            x(String(Date.now()));
        }, []),
        R = a.useCallback(
            r().throttle(
                (e) => {
                    (0, v.L)(y.xP.CARD_POPOUT_OPEN, e);
                },
                2000,
                {
                    leading: !0,
                    trailing: !1
                }
            ),
            []
        ),
        j = () => {
            (I.current = !1),
                setTimeout(() => {
                    !I.current && (N(!1), Z(A));
                }, 100);
        };
    return (0, l.jsx)('div', {
        onMouseEnter: () => {
            (I.current = !0),
                setTimeout(() => {
                    I.current && N(!0), R(g);
                }, 100);
        },
        onMouseLeave: j,
        children: (0, l.jsx)(c.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(w, {
                    closePopout: t,
                    updatePopoutPosition: M,
                    ...o
                });
            },
            position: 'left',
            shouldShow: C,
            positionKey: m,
            onRequestOpen: () => R(g),
            onRequestClose: () => {
                P && j();
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
                        !C && N(!0);
                    },
                    onContextMenu: S,
                    children: (0, l.jsx)(L, {
                        ...o,
                        selected: n,
                        hovered: I.current
                    })
                });
            }
        })
    });
});
