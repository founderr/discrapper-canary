n.d(t, {
    GB: function () {
        return j;
    },
    JI: function () {
        return A;
    },
    UM: function () {
        return L;
    },
    V6: function () {
        return Z;
    },
    WT: function () {
        return N;
    },
    X7: function () {
        return b;
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
    l = n.n(s),
    a = n(481060),
    o = n(388905),
    c = n(118012),
    u = n(925329),
    d = n(372769),
    h = n(768581),
    g = n(51144),
    p = n(245335),
    m = n(981631),
    f = n(888592),
    _ = n(388032),
    x = n(105401);
let E = 100,
    I = (e) => {
        var t, n;
        let i = {
            onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
            memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
        };
        return 0 === i.memberCount && 0 === i.memberCount ? null : i;
    },
    v = (e) => e.target_type === p.Iq.STREAM && null != e.target_user,
    N = (e) => {
        var t;
        return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === m.d4z.GROUP_DM;
    },
    b = (e) => null == e.channel && null == e.guild && null != e.inviter,
    C = (e) => {
        var t;
        let n = I(e);
        return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > E;
    },
    S = (e) => e.state === m.r2o.ACCEPTED,
    A = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t || !1;
    },
    T = (e) => !A(e) && (!!b(e) || (null != e.inviter && !S(e) && !C(e))),
    j = (e) => {
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
                size: a.AvatarSizes.DEPRECATED_SIZE_100,
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
function Z(e) {
    var t;
    let { invite: n, textClassName: r, className: s } = e,
        a = I(n);
    return null == a || T(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === f.fQ
        ? null
        : (0, i.jsx)(o.EJ, {
              className: l()(x.activityCount, s),
              online: a.onlineCount,
              total: a.memberCount,
              textClassName: r,
              flat: !0
          });
}
function R(e) {
    let { invite: t, showBigUserIcon: n } = e,
        s = r.useMemo(() => (n ? null : v(t) && null != t.target_user ? h.ZP.getUserAvatarURL(t.target_user) : T(t) && null != t.inviter ? h.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        l = _.intl.string(_.t['3rE1Pz']);
    if (N(t)) {
        var c, u;
        l = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) != null ? _.intl.format(_.t.Lu4h19, { username: t.inviter.username }) : _.intl.string(_.t.OsdY8P);
    } else v(t) && null != t.target_user ? (l = _.intl.formatToPlainString(_.t.x2L32d, { username: t.target_user.username })) : S(t) ? (l = _.intl.string(_.t['FDsl+P'])) : T(t) && null != t.inviter && (l = _.intl.format(_.t.spU2mJ, { username: g.ZP.getFormattedName(t.inviter) }));
    return (0, i.jsxs)('div', {
        className: x.inviteJoinContainer,
        children: [
            null != s &&
                (0, i.jsx)('div', {
                    className: x.inviterIconWrapper,
                    children: (0, i.jsx)(o.qE, {
                        src: s,
                        size: a.AvatarSizes.SIZE_24
                    })
                }),
            (0, i.jsx)(o.DK, {
                className: x.__invalid_inviteJoinSubTitle,
                children: l
            })
        ]
    });
}
function L(e) {
    let t,
        n,
        r,
        { user: s, guild: l, channel: u, application: h, showBigUserIcon: p } = e;
    if (null != l)
        p &&
            null == h &&
            (t = (0, i.jsx)(o.Vj, {
                guild: l,
                size: o.Vj.Sizes.SMALL
            })),
            (n = l.name),
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
                                    guild: l,
                                    size: o.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: x.appGuildName,
                                    color: c.Z.Colors.CUSTOM,
                                    tag: 'span',
                                    size: c.Z.Sizes.SIZE_24,
                                    children: l.name
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
                      size: a.AvatarSizes.SIZE_32
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
                    null != l
                        ? (0, i.jsx)(d.Z, {
                              guild: l,
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
