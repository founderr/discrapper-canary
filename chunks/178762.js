t.d(n, {
    J: function () {
        return b;
    },
    YN: function () {
        return j;
    },
    iZ: function () {
        return R;
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
    m = t(607070),
    _ = t(439170),
    E = t(594174),
    T = t(687694),
    h = t(69259),
    x = t(370370),
    N = t(107062),
    I = t(91140),
    C = t(227172),
    p = t(551228),
    g = t(678869),
    f = t(278399),
    v = t(886217),
    M = t(555672),
    P = t(644548),
    Z = t(335326),
    S = t(268010),
    A = t(797342),
    O = t(206583);
let j = 72;
function R(e) {
    return (null == e ? void 0 : e.type) === _.so.CONTENT_INVENTORY ? j : 0;
}
let y = r().throttle(
        (e) => {
            (0, h.L)(O.xP.CARD_HOVER, e);
        },
        5000,
        {
            leading: !0,
            trailing: !1
        }
    ),
    L = (e) => {
        let { entry: n, ...t } = e;
        switch (n.content_type) {
            case o.s.PLAYED_GAME:
                return (0, a.jsx)(I.Z, {
                    ...t,
                    entry: n
                });
            case o.s.WATCHED_MEDIA:
                return (0, a.jsx)(Z.ZP, {
                    ...t,
                    entry: n
                });
            case o.s.TOP_GAME:
                return (0, a.jsx)(M.ZP, {
                    ...t,
                    entry: n
                });
            case o.s.TOP_ARTIST:
                return (0, a.jsx)(f.ZP, {
                    ...t,
                    entry: n
                });
            case o.s.LISTENED_SESSION:
                return (0, a.jsx)(p.ZP, {
                    ...t,
                    entry: n
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, a.jsx)(x.Z, {
                    ...t,
                    entry: n
                });
            default:
                return null;
        }
    },
    w = (e) => {
        let { requestId: n, closePopout: t, ...l } = e;
        return (0, a.jsx)(b, {
            onReaction: (e, a) => {
                (0, h.L)(e, {
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
                (0, h.L)(O.xP.VOICE_CHANNEL_PREVIEWED, {
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
    b = (e) => {
        let { entry: n, ...t } = e;
        switch (n.content_type) {
            case o.s.PLAYED_GAME:
                return (0, a.jsx)(C.Z, {
                    ...t,
                    entry: n
                });
            case o.s.WATCHED_MEDIA:
                return (0, a.jsx)(S.Z, {
                    ...t,
                    entry: n
                });
            case o.s.TOP_GAME:
                return (0, a.jsx)(P.Z, {
                    ...t,
                    entry: n
                });
            case o.s.TOP_ARTIST:
                return (0, a.jsx)(v.Z, {
                    ...t,
                    entry: n
                });
            case o.s.LISTENED_SESSION:
                return (0, a.jsx)(g.Z, {
                    ...t,
                    entry: n
                });
            case o.s.LAUNCHED_ACTIVITY:
                return (0, a.jsx)(N.ZP, {
                    ...t,
                    entry: n
                });
            default:
                return null;
        }
    };
n.ZP = l.memo((e) => {
    var n;
    let { index: i, ...r } = e,
        [o, _] = l.useState('default'),
        x = (0, s.JA)(''.concat(i)),
        N = null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff(),
        { isRich: I, appName: C } = (0, A.n)(r.entry),
        p = {
            entry: r.entry,
            channelId: r.channel.id,
            guildId: r.channel.guild_id,
            requestId: r.requestId,
            richPresenceName: I ? C : void 0
        },
        { openOnHover: g } = (0, T.C)({ location: 'MemberListContentRow' }),
        f = l.useRef(!1),
        [v, M] = l.useState(!1),
        [P, Z] = l.useState(!1),
        [S, j] = l.useState(!1),
        R = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled);
    l.useEffect(() => {
        v && R && j(!0);
    }, [v, R]);
    let b = l.useCallback(
            (e) => {
                if (!!N)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await t.e('153').then(t.bind(t, 330150));
                        return () =>
                            (0, a.jsx)(e, {
                                entry: r.entry,
                                requestId: r.requestId
                            });
                    });
            },
            [r, N]
        ),
        B = l.useCallback(() => {
            _(String(Date.now()));
        }, []),
        k = () => {
            (f.current = !1),
                setTimeout(() => {
                    !f.current && (M(!1), j(R));
                }, 100);
        };
    return (0, a.jsx)('div', {
        onMouseEnter: () => {
            (f.current = !0),
                setTimeout(() => {
                    f.current && M(!0), g && (0, h.L)(O.xP.CARD_CLICK, p);
                }, 100);
        },
        onMouseLeave: k,
        children: (0, a.jsx)(c.Popout, {
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, a.jsx)(w, {
                    closePopout: n,
                    updatePopoutPosition: B,
                    ...r
                });
            },
            position: 'left',
            shouldShow: g ? v : P,
            positionKey: o,
            onRequestOpen: () => (0, h.L)(O.xP.CARD_CLICK, p),
            onRequestClose: () => {
                S && k(), !g && (M(!1), Z(!1));
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
                        g && !v && M(!0), !g && Z((e) => !e);
                    },
                    onMouseEnter: () => {
                        y(p);
                    },
                    onContextMenu: b,
                    children: (0, a.jsx)(L, {
                        ...r,
                        selected: t,
                        hovered: f.current
                    })
                });
            }
        })
    });
});
