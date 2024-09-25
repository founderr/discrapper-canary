n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(748780),
    o = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(933557),
    h = n(471445),
    m = n(592125),
    p = n(271383),
    _ = n(526120),
    f = n(734893),
    E = n(655359),
    g = n(931261),
    C = n(305762),
    I = n(689938),
    T = n(80909);
function x(e) {
    let { action: t } = e,
        n = (0, o.e7)([m.Z], () => m.Z.getChannel(t.channelId)),
        s = (0, d.ZP)(n, !0);
    return null == n
        ? (0, i.jsx)(c.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: I.Z.Messages.IN_CHANNEL.format({ channelName: I.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER })
          })
        : (0, i.jsx)(c.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: I.Z.Messages.IN_CHANNEL.format({ channelName: s })
          });
}
function v(e) {
    var t;
    let { channelId: n, emojiId: s, emojiName: a } = e,
        l = (0, o.e7)([m.Z], () => m.Z.getChannel(n));
    if (null == l) return null;
    let r = null !== (t = (0, h.KS)(l)) && void 0 !== t ? t : c.TextIcon;
    return (0, i.jsx)(C.Z, {
        emojiId: s,
        emojiName: a,
        size: C.R.MEDIUM,
        defaultComponent: (0, i.jsx)(r, { className: T.channelIcon })
    });
}
function S(e) {
    var t, n, a, d;
    let { guildId: h, channel: m, className: p } = e,
        { channelAction: g, completed: C } = (0, E.P3)(h, m),
        S = (0, E.K_)(h, null == g ? void 0 : g.channelId),
        N = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        A = (null == g ? void 0 : g.actionType) === f.oi.VIEW,
        Z = (0, c.useToken)(c.tokens.colors.WHITE),
        [M, b] = s.useState(!1),
        [R] = s.useState(new r.Z.Value(0)),
        [L] = s.useState(new r.Z.Value(0));
    s.useEffect(() => {
        C
            ? r.Z.timing(R, {
                  toValue: 0,
                  duration: N ? 1 : 350,
                  easing: r.Z.Easing.quad,
                  delay: A ? 0 : 500
              }).start(() => b(!0))
            : r.Z.timing(R, {
                  toValue: 1,
                  duration: N ? 1 : 350,
                  easing: r.Z.Easing.quad,
                  delay: 400
              }).start();
    }, [C, R, A, N]),
        s.useEffect(() => {
            C &&
                M &&
                r.Z.timing(L, {
                    toValue: 1,
                    duration: N ? 0 : 350,
                    easing: r.Z.Easing.quad,
                    delay: 400
                }).start();
        }, [C, L, M, N]);
    let j = s.useCallback(() => {
        null != S && (0, _.gp)(h, S.channelId);
    }, [h, S]);
    return null == g || (A && !M)
        ? null
        : (0, i.jsx)('div', {
              className: l()(T.container, p),
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
                                className: l()(T.banner, T.clickable),
                                onClick: j,
                                children: [
                                    (0, i.jsx)(v, {
                                        channelId: S.channelId,
                                        emojiId: null === (t = S.emoji) || void 0 === t ? void 0 : t.id,
                                        emojiName: null == S ? void 0 : null === (n = S.emoji) || void 0 === n ? void 0 : n.name
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: T.text,
                                        children: [
                                            (0, i.jsx)(c.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: I.Z.Messages.MEMBER_ACTIONS_NEXT_STEP.format({ step: S.title })
                                            }),
                                            (0, i.jsx)(x, { action: S })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: T.iconCircle,
                                        children: (0, i.jsx)(c.ArrowSmallRightIcon, {
                                            size: 'xs',
                                            color: Z.hex(),
                                            className: T.nextIcon
                                        })
                                    })
                                ]
                            })
                        })
                      : (0, i.jsxs)(r.Z.div, {
                            className: T.banner,
                            style: {
                                marginBottom: R.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-60, 0]
                                })
                            },
                            children: [
                                (0, i.jsx)(v, {
                                    channelId: g.channelId,
                                    emojiId: null === (a = g.emoji) || void 0 === a ? void 0 : a.id,
                                    emojiName: null == g ? void 0 : null === (d = g.emoji) || void 0 === d ? void 0 : d.name
                                }),
                                (0, i.jsxs)('div', {
                                    className: T.text,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: g.title
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-xxs/normal',
                                            color: 'text-muted',
                                            children: I.Z.Messages.MEMBER_ACTION_CHAT
                                        })
                                    ]
                                }),
                                C
                                    ? (0, i.jsx)(c.CircleCheckIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: T.completed,
                                          secondaryColor: Z.hex(),
                                          width: 20,
                                          height: 20
                                      })
                                    : null
                            ]
                        })
          });
}
function N(e) {
    let { guildId: t, channel: n, className: s } = e,
        a = (0, g.g)(t),
        l = (0, o.e7)([p.ZP], () => {
            var e;
            return (null === (e = p.ZP.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0;
        });
    return (0, E.PE)(t) || l || !a
        ? null
        : (0, i.jsx)(S, {
              guildId: t,
              channel: n,
              className: s
          });
}
