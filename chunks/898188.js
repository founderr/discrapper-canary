n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(748780),
    l = n(399606),
    u = n(481060),
    c = n(607070),
    d = n(933557),
    _ = n(471445),
    E = n(592125),
    f = n(271383),
    h = n(526120),
    p = n(734893),
    I = n(655359),
    m = n(931261),
    T = n(305762),
    S = n(689938),
    g = n(80909);
function A(e) {
    let { action: t } = e,
        n = (0, l.e7)([E.Z], () => E.Z.getChannel(t.channelId)),
        i = (0, d.ZP)(n, !0);
    return null == n
        ? (0, r.jsx)(u.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: S.Z.Messages.IN_CHANNEL.format({ channelName: S.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER })
          })
        : (0, r.jsx)(u.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: S.Z.Messages.IN_CHANNEL.format({ channelName: i })
          });
}
function N(e) {
    var t;
    let { channelId: n, emojiId: i, emojiName: a } = e,
        s = (0, l.e7)([E.Z], () => E.Z.getChannel(n));
    if (null == s) return null;
    let o = null !== (t = (0, _.KS)(s)) && void 0 !== t ? t : u.TextIcon;
    return (0, r.jsx)(T.Z, {
        emojiId: i,
        emojiName: a,
        size: T.R.MEDIUM,
        defaultComponent: (0, r.jsx)(o, { className: g.channelIcon })
    });
}
function R(e) {
    var t, n, a, d;
    let { guildId: _, channel: E, className: f } = e,
        { channelAction: m, completed: T } = (0, I.P3)(_, E),
        R = (0, I.K_)(_, null == m ? void 0 : m.channelId),
        O = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        v = (null == m ? void 0 : m.actionType) === p.oi.VIEW,
        C = (0, u.useToken)(u.tokens.colors.WHITE),
        [L, D] = i.useState(!1),
        [y] = i.useState(new o.Z.Value(0)),
        [b] = i.useState(new o.Z.Value(0));
    i.useEffect(() => {
        T
            ? o.Z.timing(y, {
                  toValue: 0,
                  duration: O ? 1 : 350,
                  easing: o.Z.Easing.quad,
                  delay: v ? 0 : 500
              }).start(() => D(!0))
            : o.Z.timing(y, {
                  toValue: 1,
                  duration: O ? 1 : 350,
                  easing: o.Z.Easing.quad,
                  delay: 400
              }).start();
    }, [T, y, v, O]),
        i.useEffect(() => {
            T &&
                L &&
                o.Z.timing(b, {
                    toValue: 1,
                    duration: O ? 0 : 350,
                    easing: o.Z.Easing.quad,
                    delay: 400
                }).start();
        }, [T, b, L, O]);
    let M = i.useCallback(() => {
        null != R && (0, h.gp)(_, R.channelId);
    }, [_, R]);
    return null == m || (v && !L)
        ? null
        : (0, r.jsx)('div', {
              className: s()(g.container, f),
              children:
                  L && null != R
                      ? (0, r.jsx)(o.Z.div, {
                            style: {
                                marginBottom: b.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-60, 0]
                                })
                            },
                            children: (0, r.jsxs)(u.Clickable, {
                                className: s()(g.banner, g.clickable),
                                onClick: M,
                                children: [
                                    (0, r.jsx)(N, {
                                        channelId: R.channelId,
                                        emojiId: null === (t = R.emoji) || void 0 === t ? void 0 : t.id,
                                        emojiName: null == R ? void 0 : null === (n = R.emoji) || void 0 === n ? void 0 : n.name
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: g.text,
                                        children: [
                                            (0, r.jsx)(u.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: S.Z.Messages.MEMBER_ACTIONS_NEXT_STEP.format({ step: R.title })
                                            }),
                                            (0, r.jsx)(A, { action: R })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: g.iconCircle,
                                        children: (0, r.jsx)(u.ArrowSmallRightIcon, {
                                            size: 'xs',
                                            color: C.hex(),
                                            className: g.nextIcon
                                        })
                                    })
                                ]
                            })
                        })
                      : (0, r.jsxs)(o.Z.div, {
                            className: g.banner,
                            style: {
                                marginBottom: y.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-60, 0]
                                })
                            },
                            children: [
                                (0, r.jsx)(N, {
                                    channelId: m.channelId,
                                    emojiId: null === (a = m.emoji) || void 0 === a ? void 0 : a.id,
                                    emojiName: null == m ? void 0 : null === (d = m.emoji) || void 0 === d ? void 0 : d.name
                                }),
                                (0, r.jsxs)('div', {
                                    className: g.text,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: m.title
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-xxs/normal',
                                            color: 'text-muted',
                                            children: S.Z.Messages.MEMBER_ACTION_CHAT
                                        })
                                    ]
                                }),
                                T
                                    ? (0, r.jsx)(u.CircleCheckIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: g.completed,
                                          secondaryColor: C.hex(),
                                          width: 20,
                                          height: 20
                                      })
                                    : null
                            ]
                        })
          });
}
function O(e) {
    let { guildId: t, channel: n, className: i } = e,
        a = (0, m.g)(t),
        s = (0, l.e7)([f.ZP], () => {
            var e;
            return (null === (e = f.ZP.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0;
        });
    return (0, I.PE)(t) || s || !a
        ? null
        : (0, r.jsx)(R, {
              guildId: t,
              channel: n,
              className: i
          });
}
