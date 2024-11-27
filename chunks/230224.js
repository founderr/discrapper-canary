n.d(t, {
    GB: function () {
        return T;
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
        return C;
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
    m = n(245335),
    f = n(981631),
    p = n(888592),
    x = n(388032),
    _ = n(105401);
let E = 100,
    I = (e) => {
        var t, n;
        let i = {
            onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
            memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
        };
        return 0 === i.memberCount && 0 === i.memberCount ? null : i;
    },
    v = (e) => e.target_type === m.Iq.STREAM && null != e.target_user,
    N = (e) => {
        var t;
        return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === f.d4z.GROUP_DM;
    },
    C = (e) => null == e.channel && null == e.guild && null != e.inviter,
    b = (e) => {
        var t;
        let n = I(e);
        return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > E;
    },
    S = (e) => e.state === f.r2o.ACCEPTED,
    A = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t || !1;
    },
    j = (e) => !A(e) && (!!C(e) || (null != e.inviter && !S(e) && !b(e))),
    T = (e) => {
        let { guild: t, user: n, application: r } = e;
        if (null != r)
            return (0, i.jsx)(u.Z, {
                className: _.appIcon,
                game: r,
                size: _.appIconSize
            });
        if (null != n)
            return (0, i.jsx)(o.qE, {
                src: n.getAvatarURL(void 0, 100),
                size: a.AvatarSizes.DEPRECATED_SIZE_100,
                className: _.avatar
            });
        if (null != t)
            return (0, i.jsx)(o.Vj, {
                guild: t,
                size: o.Vj.Sizes.LARGER,
                className: _.guildIcon,
                animate: !0
            });
        else return null;
    };
function Z(e) {
    var t;
    let { invite: n, textClassName: r, className: s } = e,
        a = I(n);
    return null == a || j(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === p.fQ
        ? null
        : (0, i.jsx)(o.EJ, {
              className: l()(_.activityCount, s),
              online: a.onlineCount,
              total: a.memberCount,
              textClassName: r,
              flat: !0
          });
}
function R(e) {
    let { invite: t, showBigUserIcon: n } = e,
        s = r.useMemo(() => (n ? null : v(t) && null != t.target_user ? h.ZP.getUserAvatarURL(t.target_user) : j(t) && null != t.inviter ? h.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        l = x.intl.string(x.t['3rE1Pz']);
    if (N(t)) {
        var c, u;
        l = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) != null ? x.intl.format(x.t.Lu4h19, { username: t.inviter.username }) : x.intl.string(x.t.OsdY8P);
    } else v(t) && null != t.target_user ? (l = x.intl.formatToPlainString(x.t.x2L32d, { username: t.target_user.username })) : S(t) ? (l = x.intl.string(x.t['FDsl+P'])) : j(t) && null != t.inviter && (l = x.intl.format(x.t.spU2mJ, { username: g.ZP.getFormattedName(t.inviter) }));
    return (0, i.jsxs)('div', {
        className: _.inviteJoinContainer,
        children: [
            null != s &&
                (0, i.jsx)('div', {
                    className: _.inviterIconWrapper,
                    children: (0, i.jsx)(o.qE, {
                        src: s,
                        size: a.AvatarSizes.SIZE_24
                    })
                }),
            (0, i.jsx)(o.DK, {
                className: _.__invalid_inviteJoinSubTitle,
                children: l
            })
        ]
    });
}
function L(e) {
    let t,
        n,
        r,
        { user: s, guild: l, channel: u, application: h, showBigUserIcon: m } = e;
    if (null != l)
        m &&
            null == h &&
            (t = (0, i.jsx)(o.Vj, {
                guild: l,
                size: o.Vj.Sizes.SMALL
            })),
            (n = l.name),
            null != h &&
                ((n = h.name),
                (r = (0, i.jsxs)('div', {
                    className: _.inviteJoinContainer,
                    children: [
                        (0, i.jsx)(o.DK, {
                            className: _.appIn,
                            children: x.intl.string(x.t['3gg9fH'])
                        }),
                        (0, i.jsxs)('div', {
                            className: _.guildContainer,
                            children: [
                                (0, i.jsx)(o.Vj, {
                                    guild: l,
                                    size: o.Vj.Sizes.SMALL
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: _.appGuildName,
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
        (n = x.intl.formatToPlainString(x.t['4aF92d'], { username: e })),
            (r = (0, i.jsx)(o.DK, {
                className: _.directInviteSubTitle,
                children: x.intl.format(x.t.Quj7HR, { username: e })
            }));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.Dx, {
                className: _.title,
                children: [
                    null != l
                        ? (0, i.jsx)(d.Z, {
                              guild: l,
                              className: _.guildBadge,
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
