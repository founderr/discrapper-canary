n.d(t, {
    Z: function () {
        return A;
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
    f = n(471445),
    _ = n(592125),
    p = n(271383),
    h = n(526120),
    m = n(734893),
    g = n(655359),
    E = n(931261),
    v = n(216701),
    b = n(388032),
    I = n(699656);
function T(e) {
    let { action: t } = e,
        n = (0, l.e7)([_.Z], () => _.Z.getChannel(t.channelId)),
        i = (0, d.ZP)(n, !0);
    return null == n
        ? (0, r.jsx)(u.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: b.intl.format(b.t.MkzlDA, { channelName: b.intl.string(b.t.J90oLS) })
          })
        : (0, r.jsx)(u.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: b.intl.format(b.t.MkzlDA, { channelName: i })
          });
}
function S(e) {
    var t;
    let { channelId: n, emojiId: i, emojiName: a } = e,
        s = (0, l.e7)([_.Z], () => _.Z.getChannel(n));
    if (null == s) return null;
    let o = null !== (t = (0, f.KS)(s)) && void 0 !== t ? t : u.TextIcon;
    return (0, r.jsx)(v.Z, {
        emojiId: i,
        emojiName: a,
        size: v.R.MEDIUM,
        defaultComponent: (0, r.jsx)(o, { className: I.channelIcon })
    });
}
function y(e) {
    var t, n, a, d;
    let { guildId: f, channel: _, className: p } = e,
        { channelAction: E, completed: v } = (0, g.P3)(f, _),
        y = (0, g.K_)(f, null == E ? void 0 : E.channelId),
        A = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        N = (null == E ? void 0 : E.actionType) === m.oi.VIEW,
        C = (0, u.useToken)(u.tokens.colors.WHITE),
        [R, O] = i.useState(!1),
        [D] = i.useState(new o.Z.Value(0)),
        [L] = i.useState(new o.Z.Value(0));
    i.useEffect(() => {
        v
            ? o.Z.timing(D, {
                  toValue: 0,
                  duration: A ? 1 : 350,
                  easing: o.Z.Easing.quad,
                  delay: N ? 0 : 500
              }).start(() => O(!0))
            : o.Z.timing(D, {
                  toValue: 1,
                  duration: A ? 1 : 350,
                  easing: o.Z.Easing.quad,
                  delay: 400
              }).start();
    }, [v, D, N, A]),
        i.useEffect(() => {
            v &&
                R &&
                o.Z.timing(L, {
                    toValue: 1,
                    duration: A ? 0 : 350,
                    easing: o.Z.Easing.quad,
                    delay: 400
                }).start();
        }, [v, L, R, A]);
    let x = i.useCallback(() => {
        null != y && (0, h.gp)(f, y.channelId);
    }, [f, y]);
    return null == E || (N && !R)
        ? null
        : (0, r.jsx)('div', {
              className: s()(I.container, p),
              children:
                  R && null != y
                      ? (0, r.jsx)(o.Z.div, {
                            style: {
                                marginBottom: L.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-60, 0]
                                })
                            },
                            children: (0, r.jsxs)(u.Clickable, {
                                className: s()(I.banner, I.clickable),
                                onClick: x,
                                children: [
                                    (0, r.jsx)(S, {
                                        channelId: y.channelId,
                                        emojiId: null === (t = y.emoji) || void 0 === t ? void 0 : t.id,
                                        emojiName: null == y ? void 0 : null === (n = y.emoji) || void 0 === n ? void 0 : n.name
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: I.text,
                                        children: [
                                            (0, r.jsx)(u.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: b.intl.format(b.t['/beONz'], { step: y.title })
                                            }),
                                            (0, r.jsx)(T, { action: y })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: I.iconCircle,
                                        children: (0, r.jsx)(u.ArrowSmallRightIcon, {
                                            size: 'xs',
                                            color: C.hex(),
                                            className: I.nextIcon
                                        })
                                    })
                                ]
                            })
                        })
                      : (0, r.jsxs)(o.Z.div, {
                            className: I.banner,
                            style: {
                                marginBottom: D.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-60, 0]
                                })
                            },
                            children: [
                                (0, r.jsx)(S, {
                                    channelId: E.channelId,
                                    emojiId: null === (a = E.emoji) || void 0 === a ? void 0 : a.id,
                                    emojiName: null == E ? void 0 : null === (d = E.emoji) || void 0 === d ? void 0 : d.name
                                }),
                                (0, r.jsxs)('div', {
                                    className: I.text,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: E.title
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-xxs/normal',
                                            color: 'text-muted',
                                            children: b.intl.string(b.t['ElGg8/'])
                                        })
                                    ]
                                }),
                                v
                                    ? (0, r.jsx)(u.CircleCheckIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: I.completed,
                                          secondaryColor: C.hex(),
                                          width: 20,
                                          height: 20
                                      })
                                    : null
                            ]
                        })
          });
}
function A(e) {
    let { guildId: t, channel: n, className: i } = e,
        a = (0, E.g)(t),
        s = (0, l.e7)([p.ZP], () => {
            var e;
            return (null === (e = p.ZP.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0;
        });
    return (0, g.PE)(t) || s || !a
        ? null
        : (0, r.jsx)(y, {
              guildId: t,
              channel: n,
              className: i
          });
}
