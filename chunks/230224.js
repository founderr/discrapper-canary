n.d(t, {
    GB: function () {
        return Z;
    },
    JI: function () {
        return T;
    },
    UM: function () {
        return O;
    },
    V6: function () {
        return j;
    },
    WT: function () {
        return b;
    },
    X7: function () {
        return N;
    },
    jq: function () {
        return R;
    },
    mx: function () {
        return E;
    }
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(388905),
    c = n(118012),
    u = n(925329),
    d = n(372769),
    h = n(768581),
    g = n(51144),
    m = n(245335),
    p = n(981631),
    f = n(888592),
    _ = n(388032),
    x = n(788170);
let E = 100,
    v = (e) => {
        var t, n;
        let i = {
            onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
            memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
        };
        return 0 === i.memberCount && 0 === i.memberCount ? null : i;
    },
    I = (e) => e.target_type === m.Iq.STREAM && null != e.target_user,
    b = (e) => {
        var t;
        return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === p.d4z.GROUP_DM;
    },
    N = (e) => null == e.channel && null == e.guild && null != e.inviter,
    C = (e) => {
        var t;
        let n = v(e);
        return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > E;
    },
    S = (e) => e.state === p.r2o.ACCEPTED,
    T = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t || !1;
    },
    A = (e) => !T(e) && (!!N(e) || (null != e.inviter && !S(e) && !C(e))),
    Z = (e) => {
        let { guild: t, user: n, application: r } = e;
        if (null != r)
            return (0, i.jsx)(u.Z, {
                className: x.appIcon,
                game: r,
                size: x.appIconSize
            });
        if (null != n)
            return (0, i.jsx)(o.qE, {
                src: n.getAvatarURL(void 0, 100),
                size: l.AvatarSizes.DEPRECATED_SIZE_100,
                className: x.avatar
            });
        if (null != t)
            return (0, i.jsx)(o.Vj, {
                guild: t,
                size: o.Vj.Sizes.LARGER,
                className: x.guildIcon,
                animate: !0
            });
        else return null;
    };
function j(e) {
    var t;
    let { invite: n, textClassName: r, className: s } = e,
        l = v(n);
    return null == l || A(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === f.fQ
        ? null
        : (0, i.jsx)(o.EJ, {
              className: a()(x.activityCount, s),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: r,
              flat: !0
          });
}
function R(e) {
    let { invite: t, showBigUserIcon: n } = e,
        s = r.useMemo(() => (n ? null : I(t) && null != t.target_user ? h.ZP.getUserAvatarURL(t.target_user) : A(t) && null != t.inviter ? h.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        a = _.intl.string(_.t['3rE1Pz']);
    if (b(t)) {
        var c, u;
        a = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) != null ? _.intl.format(_.t.Lu4h19, { username: t.inviter.username }) : _.intl.string(_.t.OsdY8P);
    } else I(t) && null != t.target_user ? (a = _.intl.formatToPlainString(_.t.x2L32d, { username: t.target_user.username })) : S(t) ? (a = _.intl.string(_.t['FDsl+P'])) : A(t) && null != t.inviter && (a = _.intl.format(_.t.spU2mJ, { username: g.ZP.getFormattedName(t.inviter) }));
    return (0, i.jsxs)('div', {
        className: x.inviteJoinContainer,
        children: [
            null != s &&
                (0, i.jsx)('div', {
                    className: x.inviterIconWrapper,
                    children: (0, i.jsx)(o.qE, {
                        src: s,
                        size: l.AvatarSizes.SIZE_24
                    })
                }),
            (0, i.jsx)(o.DK, {
                className: x.__invalid_inviteJoinSubTitle,
                children: a
            })
        ]
    });
}
function O(e) {
    let t,
        n,
        r,
        { user: s, guild: a, channel: u, application: h, showBigUserIcon: m } = e;
    if (null != a)
        m &&
            null == h &&
            (t = (0, i.jsx)(o.Vj, {
                guild: a,
                size: o.Vj.Sizes.SMALL
            })),
            (n = a.name),
            null != h &&
                ((n = h.name),
                (r = (0, i.jsxs)('div', {
                    className: x.inviteJoinContainer,
                    children: [
                        (0, i.jsx)(o.DK, {
                            className: x.appIn,
                            children: _.intl.string(_.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: x.guildContainer,
                            children: [
                                (0, i.jsx)(o.Vj, {
                                    guild: a,
                                    size: o.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: x.appGuildName,
                                    color: c.Z.Colors.CUSTOM,
                                    tag: 'span',
                                    size: c.Z.Sizes.SIZE_24,
                                    children: a.name
                                })
                            ]
                        })
                    ]
                })));
    else if (null != u) {
        if (null == s) throw Error('no inviter in group DM invite');
        let e = g.ZP.getFormattedName(s);
        null != u.name && '' !== u.name
            ? ((n = u.name),
              null != u.icon &&
                  (t = (0, i.jsx)(o.MC, {
                      channel: u,
                      size: l.AvatarSizes.SIZE_32
                  })))
            : (n = e);
    } else if (null != s) {
        let e = g.ZP.getFormattedName(s);
        (n = _.intl.formatToPlainString(_.t['4aF92d'], { username: e })),
            (r = (0, i.jsx)(o.DK, {
                className: x.directInviteSubTitle,
                children: _.intl.format(_.t.Quj7HR, { username: e })
            }));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.Dx, {
                className: x.title,
                children: [
                    null != a
                        ? (0, i.jsx)(d.Z, {
                              guild: a,
                              className: x.guildBadge,
                              tooltipPosition: 'left'
                          })
                        : null,
                    t,
                    n
                ]
            }),
            r
        ]
    });
}
