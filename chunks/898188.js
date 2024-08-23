n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(748780),
    o = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(933557),
    h = n(471445),
    p = n(592125),
    m = n(271383),
    _ = n(526120),
    f = n(734893),
    E = n(655359),
    C = n(931261),
    g = n(305762),
    I = n(689938),
    x = n(396056);
function T(e) {
    let { action: t } = e,
        n = (0, o.e7)([p.Z], () => p.Z.getChannel(t.channelId)),
        a = (0, d.ZP)(n, !0);
    return null == n
        ? (0, i.jsx)(c.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: I.Z.Messages.IN_CHANNEL.format({ channelName: I.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER })
          })
        : (0, i.jsx)(c.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: I.Z.Messages.IN_CHANNEL.format({ channelName: a })
          });
}
function N(e) {
    var t;
    let { channelId: n, emojiId: a, emojiName: s } = e,
        l = (0, o.e7)([p.Z], () => p.Z.getChannel(n));
    if (null == l) return null;
    let r = null !== (t = (0, h.KS)(l)) && void 0 !== t ? t : c.TextIcon;
    return (0, i.jsx)(g.Z, {
        emojiId: a,
        emojiName: s,
        size: g.R.MEDIUM,
        defaultComponent: (0, i.jsx)(r, { className: x.channelIcon })
    });
}
function S(e) {
    var t, n, s, d;
    let { guildId: h, channel: p, className: m } = e,
        { channelAction: C, completed: g } = (0, E.P3)(h, p),
        S = (0, E.K_)(h, null == C ? void 0 : C.channelId),
        v = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        Z = (null == C ? void 0 : C.actionType) === f.oi.VIEW,
        A = (0, c.useToken)(c.tokens.colors.WHITE),
        [M, b] = a.useState(!1),
        [R] = a.useState(new r.Z.Value(0)),
        [L] = a.useState(new r.Z.Value(0));
    a.useEffect(() => {
        g
            ? r.Z.timing(R, {
                  toValue: 0,
                  duration: v ? 1 : 350,
                  easing: r.Z.Easing.quad,
                  delay: Z ? 0 : 500
              }).start(() => b(!0))
            : r.Z.timing(R, {
                  toValue: 1,
                  duration: v ? 1 : 350,
                  easing: r.Z.Easing.quad,
                  delay: 400
              }).start();
    }, [g, R, Z, v]),
        a.useEffect(() => {
            g &&
                M &&
                r.Z.timing(L, {
                    toValue: 1,
                    duration: v ? 0 : 350,
                    easing: r.Z.Easing.quad,
                    delay: 400
                }).start();
        }, [g, L, M, v]);
    let j = a.useCallback(() => {
        null != S && (0, _.gp)(h, S.channelId);
    }, [h, S]);
    return null == C || (Z && !M)
        ? null
        : (0, i.jsx)('div', {
              className: l()(x.container, m),
              children:
                  M && null != S
                      ? (0, i.jsx)(r.Z.div, {
                            style: {
                                marginBottom: L.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-60, 0]
                                })
                            },
                            children: (0, i.jsxs)(c.Clickable, {
                                className: l()(x.banner, x.clickable),
                                onClick: j,
                                children: [
                                    (0, i.jsx)(N, {
                                        channelId: S.channelId,
                                        emojiId: null === (t = S.emoji) || void 0 === t ? void 0 : t.id,
                                        emojiName: null == S ? void 0 : null === (n = S.emoji) || void 0 === n ? void 0 : n.name
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: x.text,
                                        children: [
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: I.Z.Messages.MEMBER_ACTIONS_NEXT_STEP.format({ step: S.title })
                                            }),
                                            (0, i.jsx)(T, { action: S })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: x.iconCircle,
                                        children: (0, i.jsx)(c.ArrowSmallRightIcon, {
                                            size: 'xs',
                                            color: A.hex(),
                                            className: x.nextIcon
                                        })
                                    })
                                ]
                            })
                        })
                      : (0, i.jsxs)(r.Z.div, {
                            className: x.banner,
                            style: {
                                marginBottom: R.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-60, 0]
                                })
                            },
                            children: [
                                (0, i.jsx)(N, {
                                    channelId: C.channelId,
                                    emojiId: null === (s = C.emoji) || void 0 === s ? void 0 : s.id,
                                    emojiName: null == C ? void 0 : null === (d = C.emoji) || void 0 === d ? void 0 : d.name
                                }),
                                (0, i.jsxs)('div', {
                                    className: x.text,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: C.title
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-xxs/normal',
                                            color: 'text-muted',
                                            children: I.Z.Messages.MEMBER_ACTION_CHAT
                                        })
                                    ]
                                }),
                                g
                                    ? (0, i.jsx)(c.CircleCheckIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: x.completed,
                                          secondaryColor: A.hex(),
                                          width: 20,
                                          height: 20
                                      })
                                    : null
                            ]
                        })
          });
}
function v(e) {
    let { guildId: t, channel: n, className: a } = e,
        s = (0, C.g)(t),
        l = (0, o.e7)([m.ZP], () => {
            var e;
            return (null === (e = m.ZP.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0;
        });
    return (0, E.PE)(t) || l || !s
        ? null
        : (0, i.jsx)(S, {
              guildId: t,
              channel: n,
              className: a
          });
}
