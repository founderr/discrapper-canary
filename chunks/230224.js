n.d(t, {
    GB: function () {
        return S;
    },
    JI: function () {
        return Z;
    },
    UM: function () {
        return D;
    },
    V6: function () {
        return O;
    },
    WT: function () {
        return x;
    },
    X7: function () {
        return A;
    },
    jq: function () {
        return b;
    },
    mx: function () {
        return I;
    }
}),
    n(411104);
var s = n(735250),
    r = n(470079),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    l = n(388905),
    c = n(112831),
    u = n(925329),
    d = n(372769),
    _ = n(768581),
    h = n(51144),
    E = n(245335),
    g = n(981631),
    p = n(888592),
    m = n(689938),
    f = n(788170);
let I = 100,
    N = (e) => {
        var t, n;
        let s = {
            onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
            memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
        };
        return 0 === s.memberCount && 0 === s.memberCount ? null : s;
    },
    T = (e) => e.target_type === E.Iq.STREAM && null != e.target_user,
    x = (e) => {
        var t;
        return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === g.d4z.GROUP_DM;
    },
    A = (e) => null == e.channel && null == e.guild && null != e.inviter,
    C = (e) => {
        var t;
        let n = N(e);
        return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > I;
    },
    v = (e) => e.state === g.r2o.ACCEPTED,
    Z = (e) => {
        let { guild_scheduled_event: t } = e;
        return null != t || !1;
    },
    R = (e) => !Z(e) && (!!A(e) || (null != e.inviter && !v(e) && !C(e))),
    S = (e) => {
        let { guild: t, user: n, application: r } = e;
        if (null != r)
            return (0, s.jsx)(u.Z, {
                className: f.appIcon,
                game: r,
                size: f.appIconSize
            });
        if (null != n)
            return (0, s.jsx)(l.qE, {
                src: n.getAvatarURL(void 0, 100),
                size: o.AvatarSizes.DEPRECATED_SIZE_100,
                className: f.avatar
            });
        if (null != t)
            return (0, s.jsx)(l.Vj, {
                guild: t,
                size: l.Vj.Sizes.LARGER,
                className: f.guildIcon,
                animate: !0
            });
        else return null;
    };
function O(e) {
    var t;
    let { invite: n, textClassName: r, className: i } = e,
        o = N(n);
    return null == o || R(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === p.fQ
        ? null
        : (0, s.jsx)(l.EJ, {
              className: a()(f.activityCount, i),
              online: o.onlineCount,
              total: o.memberCount,
              textClassName: r,
              flat: !0
          });
}
function b(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = r.useMemo(() => (n ? null : T(t) && null != t.target_user ? _.ZP.getUserAvatarURL(t.target_user) : R(t) && null != t.inviter ? _.ZP.getUserAvatarURL(t.inviter) : null), [t, n]),
        a = m.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
    if (x(t)) {
        var c, u;
        a = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) != null ? m.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format({ username: t.inviter.username }) : m.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM;
    } else T(t) && null != t.target_user ? (a = m.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({ username: t.target_user.username })) : v(t) ? (a = m.Z.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF) : R(t) && null != t.inviter && (a = m.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format({ username: h.ZP.getFormattedName(t.inviter) }));
    return (0, s.jsxs)('div', {
        className: f.inviteJoinContainer,
        children: [
            null != i &&
                (0, s.jsx)('div', {
                    className: f.inviterIconWrapper,
                    children: (0, s.jsx)(l.qE, {
                        src: i,
                        size: o.AvatarSizes.SIZE_24
                    })
                }),
            (0, s.jsx)(l.DK, {
                className: f.__invalid_inviteJoinSubTitle,
                children: a
            })
        ]
    });
}
function D(e) {
    let t,
        n,
        r,
        { user: i, guild: a, channel: u, application: _, showBigUserIcon: E } = e;
    if (null != a)
        E &&
            null == _ &&
            (t = (0, s.jsx)(l.Vj, {
                guild: a,
                size: l.Vj.Sizes.SMALL
            })),
            (n = a.name),
            null != _ &&
                ((n = _.name),
                (r = (0, s.jsxs)('div', {
                    className: f.inviteJoinContainer,
                    children: [
                        (0, s.jsx)(l.DK, {
                            className: f.appIn,
                            children: m.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                        }),
                        (0, s.jsxs)('div', {
                            className: f.guildContainer,
                            children: [
                                (0, s.jsx)(l.Vj, {
                                    guild: a,
                                    size: l.Vj.Sizes.SMALL
                                }),
                                (0, s.jsx)(c.Z, {
                                    className: f.appGuildName,
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
        if (null == i) throw Error('no inviter in group DM invite');
        let e = h.ZP.getFormattedName(i);
        null != u.name && '' !== u.name
            ? ((n = u.name),
              null != u.icon &&
                  (t = (0, s.jsx)(l.MC, {
                      channel: u,
                      size: o.AvatarSizes.SIZE_32
                  })))
            : (n = e);
    } else if (null != i) {
        let e = h.ZP.getFormattedName(i);
        (n = m.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({ username: e })),
            (r = (0, s.jsx)(l.DK, {
                className: f.directInviteSubTitle,
                children: m.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({ username: e })
            }));
    }
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(l.Dx, {
                className: f.title,
                children: [
                    null != a
                        ? (0, s.jsx)(d.Z, {
                              guild: a,
                              className: f.guildBadge,
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
