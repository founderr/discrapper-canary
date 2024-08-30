t.d(n, {
    J: function () {
        return L;
    },
    YN: function () {
        return O;
    },
    iZ: function () {
        return j;
    }
}),
    t(47120);
var a = t(735250),
    l = t(470079),
    i = t(392711),
    r = t.n(i),
    s = t(91192),
    o = t(876215),
    u = t(442837),
    c = t(481060),
    d = t(239091),
    _ = t(607070),
    m = t(439170),
    E = t(594174),
    T = t(69259),
    h = t(370370),
    x = t(107062),
    I = t(91140),
    N = t(227172),
    p = t(551228),
    C = t(678869),
    g = t(278399),
    v = t(886217),
    f = t(555672),
    M = t(644548),
    P = t(335326),
    Z = t(268010),
    A = t(797342),
    S = t(206583);
let O = 72;
function j(e) {
    return (null == e ? void 0 : e.type) === m.so.CONTENT_INVENTORY ? O : 0;
}
let R = (e) => {
        let { entry: n, ...t } = e;
        switch (n.content_type) {
            case o.s.PLAYED_GAME:
                return (0, a.jsx)(I.Z, {
                    ...t,
                    entry: n
                });
            case o.s.WATCHED_MEDIA:
                return (0, a.jsx)(P.Z, {
                    ...t,
                    entry: n
                });
            case o.s.TOP_GAME:
                return (0, a.jsx)(f.ZP, {
                    ...t,
                    entry: n
                });
            case o.s.TOP_ARTIST:
                return (0, a.jsx)(g.ZP, {
                    ...t,
                    entry: n
                });
            case o.s.LISTENED_SESSION:
                return (0, a.jsx)(p.ZP, {
                    ...t,
                    entry: n
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, a.jsx)(h.Z, {
                    ...t,
                    entry: n
                });
            default:
                return null;
        }
    },
    y = (e) => {
        let { requestId: n, closePopout: t, ...l } = e;
        return (0, a.jsx)(L, {
            onReaction: (e, a) => {
                (0, T.L)(e, {
                    entry: l.entry,
                    channelId: l.channel.id,
                    guildId: l.channel.guild_id,
                    requestId: n,
                    destinationChannelId: a.id,
                    destinationGuildId: a.guild_id
                }),
                    t();
            },
            closePopout: t,
            onVoiceChannelPreview: (e, t) => {
                (0, T.L)(S.xP.VOICE_CHANNEL_PREVIEWED, {
                    entry: l.entry,
                    channelId: l.channel.id,
                    guildId: l.channel.guild_id,
                    requestId: n,
                    destinationChannelId: e.id,
                    destinationGuildId: e.guild_id,
                    richPresenceName: t
                });
            },
            ...l
        });
    },
    L = (e) => {
        let { entry: n, ...t } = e;
        switch (n.content_type) {
            case o.s.PLAYED_GAME:
                return (0, a.jsx)(N.Z, {
                    ...t,
                    entry: n
                });
            case o.s.WATCHED_MEDIA:
                return (0, a.jsx)(Z.Z, {
                    ...t,
                    entry: n
                });
            case o.s.TOP_GAME:
                return (0, a.jsx)(M.Z, {
                    ...t,
                    entry: n
                });
            case o.s.TOP_ARTIST:
                return (0, a.jsx)(v.Z, {
                    ...t,
                    entry: n
                });
            case o.s.LISTENED_SESSION:
                return (0, a.jsx)(C.Z, {
                    ...t,
                    entry: n
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, a.jsx)(x.ZP, {
                    ...t,
                    entry: n
                });
            default:
                return null;
        }
    };
n.ZP = l.memo((e) => {
    var n;
    let { index: i, ...o } = e,
        [m, h] = l.useState('default'),
        x = (0, s.JA)(''.concat(i)),
        I = null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff(),
        { isRich: N, appName: p } = (0, A.n)(o.entry),
        C = {
            entry: o.entry,
            channelId: o.channel.id,
            guildId: o.channel.guild_id,
            requestId: o.requestId,
            richPresenceName: N ? p : void 0
        },
        g = l.useRef(!1),
        [v, f] = l.useState(!1),
        [M, P] = l.useState(!1),
        Z = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled);
    l.useEffect(() => {
        v && Z && P(!0);
    }, [v, Z]);
    let O = l.useCallback(
            (e) => {
                if (!!I)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await t.e('153').then(t.bind(t, 330150));
                        return () =>
                            (0, a.jsx)(e, {
                                entry: o.entry,
                                requestId: o.requestId
                            });
                    });
            },
            [o, I]
        ),
        j = l.useCallback(() => {
            h(String(Date.now()));
        }, []),
        L = l.useCallback(
            r().throttle(
                (e) => {
                    (0, T.L)(S.xP.CARD_POPOUT_OPEN, e);
                },
                2000,
                {
                    leading: !0,
                    trailing: !1
                }
            ),
            []
        ),
        w = () => {
            (g.current = !1),
                setTimeout(() => {
                    !g.current && (f(!1), P(Z));
                }, 100);
        };
    return (0, a.jsx)('div', {
        onMouseEnter: () => {
            (g.current = !0),
                setTimeout(() => {
                    g.current && f(!0), L(C);
                }, 100);
        },
        onMouseLeave: w,
        children: (0, a.jsx)(c.Popout, {
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, a.jsx)(y, {
                    closePopout: n,
                    updatePopoutPosition: j,
                    ...o
                });
            },
            position: 'left',
            shouldShow: v,
            positionKey: m,
            onRequestOpen: () => L(C),
            onRequestClose: () => {
                M && w();
            },
            spacing: 8,
            children: (e, n) => {
                let { isShown: t } = n;
                return (0, a.jsx)(c.Clickable, {
                    ...e,
                    ...x,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: 4,
                            right: 4
                        }
                    },
                    onClick: () => {
                        !v && f(!0);
                    },
                    onContextMenu: O,
                    children: (0, a.jsx)(R, {
                        ...o,
                        selected: t,
                        hovered: g.current
                    })
                });
            }
        })
    });
});
