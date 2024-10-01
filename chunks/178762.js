n.d(t, {
    J: function () {
        return b;
    },
    YN: function () {
        return O;
    },
    iZ: function () {
        return j;
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
    v = n(439170),
    E = n(594174),
    _ = n(69259),
    f = n(370370),
    p = n(107062),
    T = n(91140),
    g = n(227172),
    I = n(551228),
    C = n(678869),
    N = n(278399),
    P = n(886217),
    Z = n(555672),
    S = n(644548),
    A = n(335326),
    R = n(268010),
    M = n(797342),
    y = n(206583);
let O = 72;
function j(e) {
    return (null == e ? void 0 : e.type) === v.so.CONTENT_INVENTORY ? O : 0;
}
let w = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.s.PLAYED_GAME:
                return (0, a.jsx)(T.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, a.jsx)(A.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, a.jsx)(Z.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, a.jsx)(N.ZP, {
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
    L = (e) => {
        let { requestId: t, closePopout: n, ...l } = e;
        return (0, a.jsx)(b, {
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
                (0, _.L)(y.xP.VOICE_CHANNEL_PREVIEWED, {
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
    b = (e) => {
        let { entry: t, ...n } = e;
        switch (t.content_type) {
            case o.s.PLAYED_GAME:
                return (0, a.jsx)(g.Z, {
                    ...n,
                    entry: t
                });
            case o.s.WATCHED_MEDIA:
                return (0, a.jsx)(R.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_GAME:
                return (0, a.jsx)(S.Z, {
                    ...n,
                    entry: t
                });
            case o.s.TOP_ARTIST:
                return (0, a.jsx)(P.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LISTENED_SESSION:
                return (0, a.jsx)(C.Z, {
                    ...n,
                    entry: t
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, a.jsx)(p.ZP, {
                    ...n,
                    entry: t
                });
            case o.s.LEADERBOARD:
                var l;
                return (0, a.jsx)(m.Z, { guildId: null === (l = n.channel) || void 0 === l ? void 0 : l.guild_id });
            default:
                return null;
        }
    };
t.ZP = l.memo((e) => {
    var t;
    let { index: i, ...o } = e,
        [m, x] = l.useState('default'),
        v = (0, s.JA)(''.concat(i)),
        f = null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff(),
        { isRich: p, appName: T } = (0, M.n)(o.entry),
        g = {
            entry: o.entry,
            channelId: o.channel.id,
            guildId: o.channel.guild_id,
            requestId: o.requestId,
            richPresenceName: p ? T : void 0
        },
        I = l.useRef(!1),
        [C, N] = l.useState(!1),
        [P, Z] = l.useState(!1),
        S = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled);
    l.useEffect(() => {
        C && S && Z(!0);
    }, [C, S]);
    let A = l.useCallback(
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
        R = l.useCallback(() => {
            x(String(Date.now()));
        }, []),
        O = l.useCallback(
            r().throttle(
                (e) => {
                    (0, _.L)(y.xP.CARD_POPOUT_OPEN, e);
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
                    !I.current && (N(!1), Z(S));
                }, 100);
        };
    return (0, a.jsx)('div', {
        onMouseEnter: () => {
            (I.current = !0),
                setTimeout(() => {
                    I.current && N(!0), O(g);
                }, 100);
        },
        onMouseLeave: j,
        children: (0, a.jsx)(c.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)(L, {
                    closePopout: t,
                    updatePopoutPosition: R,
                    ...o
                });
            },
            position: 'left',
            shouldShow: C,
            positionKey: m,
            onRequestOpen: () => O(g),
            onRequestClose: () => {
                P && j();
            },
            spacing: 8,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, a.jsx)(c.Clickable, {
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
                        !C && N(!0);
                    },
                    onContextMenu: A,
                    children: (0, a.jsx)(w, {
                        ...o,
                        selected: n,
                        hovered: I.current
                    })
                });
            }
        })
    });
});
