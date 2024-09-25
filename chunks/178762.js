n.d(t, {
    J: function () {
        return D;
    },
    YN: function () {
        return j;
    },
    iZ: function () {
        return y;
    }
}),
    n(47120);
var a = n(735250),
    l = n(470079),
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
    v = n(594174),
    _ = n(69259),
    f = n(370370),
    T = n(107062),
    p = n(91140),
    g = n(227172),
    I = n(551228),
    N = n(678869),
    C = n(278399),
    A = n(886217),
    Z = n(555672),
    P = n(644548),
    S = n(335326),
    M = n(268010),
    O = n(797342),
    R = n(206583);
let j = 72;
function y(e) {
    return (null == e ? void 0 : e.type) === E.so.CONTENT_INVENTORY ? j : 0;
}
let L = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.s.PLAYED_GAME:
                return (0, a.jsx)(p.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, a.jsx)(S.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, a.jsx)(Z.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, a.jsx)(C.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LISTENED_SESSION:
                return (0, a.jsx)(I.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, a.jsx)(f.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LEADERBOARD:
                return (0, a.jsx)(x.Z, {
                    ...n,
                    entry: t
                });
            default:
                return null;
        }
    },
    w = (e) => {
        let { requestId: t, closePopout: n, ...l } = e;
        return (0, a.jsx)(D, {
            onReaction: (e, a) => {
                (0, _.L)(e, {
                    entry: l.entry,
                    channelId: l.channel.id,
                    guildId: l.channel.guild_id,
                    requestId: t,
                    destinationChannelId: a.id,
                    destinationGuildId: a.guild_id
                }),
                    n();
            },
            closePopout: n,
            onVoiceChannelPreview: (e, n) => {
                (0, _.L)(R.xP.VOICE_CHANNEL_PREVIEWED, {
                    entry: l.entry,
                    channelId: l.channel.id,
                    guildId: l.channel.guild_id,
                    requestId: t,
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id,
                    richPresenceName: n
                });
            },
            ...l
        });
    },
    D = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.s.PLAYED_GAME:
                return (0, a.jsx)(g.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, a.jsx)(M.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, a.jsx)(P.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, a.jsx)(A.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LISTENED_SESSION:
                return (0, a.jsx)(N.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, a.jsx)(T.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LEADERBOARD:
                return (0, a.jsx)(m.Z, { channel: n.channel });
            default:
                return null;
        }
    };
t.ZP = l.memo((e) => {
    var t;
    let { index: i, ...o } = e,
        [m, x] = l.useState('default'),
        E = (0, s.JA)(''.concat(i)),
        f = null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(),
        { isRich: T, appName: p } = (0, O.n)(o.entry),
        g = {
            entry: o.entry,
            channelId: o.channel.id,
            guildId: o.channel.guild_id,
            requestId: o.requestId,
            richPresenceName: T ? p : void 0
        },
        I = l.useRef(!1),
        [N, C] = l.useState(!1),
        [A, Z] = l.useState(!1),
        P = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled);
    l.useEffect(() => {
        N && P && Z(!0);
    }, [N, P]);
    let S = l.useCallback(
            (e) => {
                if (!!f)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await n.e('153').then(n.bind(n, 330150));
                        return () =>
                            (0, a.jsx)(e, {
                                entry: o.entry,
                                requestId: o.requestId
                            });
                    });
            },
            [o, f]
        ),
        M = l.useCallback(() => {
            x(String(Date.now()));
        }, []),
        j = l.useCallback(
            r().throttle(
                (e) => {
                    (0, _.L)(R.xP.CARD_POPOUT_OPEN, e);
                },
                2000,
                {
                    leading: !0,
                    trailing: !1
                }
            ),
            []
        ),
        y = () => {
            (I.current = !1),
                setTimeout(() => {
                    !I.current && (C(!1), Z(P));
                }, 100);
        };
    return (0, a.jsx)('div', {
        onMouseEnter: () => {
            (I.current = !0),
                setTimeout(() => {
                    I.current && C(!0), j(g);
                }, 100);
        },
        onMouseLeave: y,
        children: (0, a.jsx)(c.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)(w, {
                    closePopout: t,
                    updatePopoutPosition: M,
                    ...o
                });
            },
            position: 'left',
            shouldShow: N,
            positionKey: m,
            onRequestOpen: () => j(g),
            onRequestClose: () => {
                A && y();
            },
            spacing: 8,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, a.jsx)(c.Clickable, {
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
                        !N && C(!0);
                    },
                    onContextMenu: S,
                    children: (0, a.jsx)(L, {
                        ...o,
                        selected: n,
                        hovered: I.current
                    })
                });
            }
        })
    });
});
