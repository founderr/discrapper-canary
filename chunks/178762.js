t.d(n, {
    J: function () {
        return w;
    },
    YN: function () {
        return O;
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
    _ = t(607070),
    m = t(439170),
    E = t(594174),
    T = t(69259),
    h = t(370370),
    x = t(107062),
    I = t(91140),
    N = t(227172),
    C = t(551228),
    p = t(678869),
    g = t(278399),
    v = t(886217),
    f = t(555672),
    M = t(644548),
    P = t(335326),
    Z = t(268010),
    A = t(797342),
    S = t(206583);
let O = 72;
function R(e) {
    return (null == e ? void 0 : e.type) === m.so.CONTENT_INVENTORY ? O : 0;
}
let j = r().throttle(
        (e) => {
            (0, T.L)(S.xP.CARD_HOVER, e);
        },
        5000,
        {
            leading: !0,
            trailing: !1
        }
    ),
    y = (e) => {
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
                return (0, a.jsx)(C.ZP, {
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
    L = (e) => {
        let { requestId: n, closePopout: t, ...l } = e;
        return (0, a.jsx)(w, {
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
    w = (e) => {
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
                return (0, a.jsx)(p.Z, {
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
    let { index: i, ...r } = e,
        [o, m] = l.useState('default'),
        h = (0, s.JA)(''.concat(i)),
        x = null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff(),
        { isRich: I, appName: N } = (0, A.n)(r.entry),
        C = {
            entry: r.entry,
            channelId: r.channel.id,
            guildId: r.channel.guild_id,
            requestId: r.requestId,
            richPresenceName: I ? N : void 0
        },
        p = l.useRef(!1),
        [g, v] = l.useState(!1),
        [f, M] = l.useState(!1),
        P = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled);
    l.useEffect(() => {
        g && P && M(!0);
    }, [g, P]);
    let Z = l.useCallback(
            (e) => {
                if (!!x)
                    (0, d.jW)(e, async () => {
                        let { default: e } = await t.e('153').then(t.bind(t, 330150));
                        return () =>
                            (0, a.jsx)(e, {
                                entry: r.entry,
                                requestId: r.requestId
                            });
                    });
            },
            [r, x]
        ),
        O = l.useCallback(() => {
            m(String(Date.now()));
        }, []),
        R = () => {
            (p.current = !1),
                setTimeout(() => {
                    !p.current && (v(!1), M(P));
                }, 100);
        };
    return (0, a.jsx)('div', {
        onMouseEnter: () => {
            (p.current = !0),
                setTimeout(() => {
                    p.current && v(!0), (0, T.L)(S.xP.CARD_CLICK, C);
                }, 100);
        },
        onMouseLeave: R,
        children: (0, a.jsx)(c.Popout, {
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, a.jsx)(L, {
                    closePopout: n,
                    updatePopoutPosition: O,
                    ...r
                });
            },
            position: 'left',
            shouldShow: g,
            positionKey: o,
            onRequestOpen: () => (0, T.L)(S.xP.CARD_CLICK, C),
            onRequestClose: () => {
                f && R();
            },
            spacing: 8,
            children: (e, n) => {
                let { isShown: t } = n;
                return (0, a.jsx)(c.Clickable, {
                    ...e,
                    ...h,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: 4,
                            right: 4
                        }
                    },
                    onClick: () => {
                        !g && v(!0);
                    },
                    onMouseEnter: () => {
                        j(C);
                    },
                    onContextMenu: Z,
                    children: (0, a.jsx)(y, {
                        ...r,
                        selected: t,
                        hovered: p.current
                    })
                });
            }
        })
    });
});
