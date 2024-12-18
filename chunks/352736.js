var r,
    i,
    l = n(25209),
    a = n(97797),
    o = n(35125),
    u = n(786761),
    s = n(739566),
    c = n(499401),
    d = n(693912),
    f = n(23750),
    h = n(314897),
    p = n(592125),
    _ = n(430824),
    E = n(594174),
    g = n(5192),
    m = n(709054),
    C = n(981631),
    A = n(388032);
let N = {
    '234395307759108106': 'https://groovy.bot/commands',
    '365975655608745985': 'https://www.pokecord.com/getting-started',
    512412940897484800: 'http://jameslantz.net/smilebot'
};
((r = i || (i = {})).NORMAL = 'NORMAL'), (r.CLAN = 'CLAN');
let I = () => [A.t['0cuj7u'], A.t['MuW+CA'], A.t.osqpHR, A.t['5ToSh4'], A.t.JEB8pq, A.t.pkOV5e, A.t.kRb1Jy, A.t.EmKLY2, A.t.rPtBnZ, A.t['5B/ekZ'], A.t.ESNC3d, A.t['Iw6d8/'], A.t.WecSZ2],
    T = () => [A.t.Jm6e09, A.t.MGRnRU, A.t.EXOEGh, A.t['5uCTFB'], A.t.rl45Qk, A.t.Bh9zpa, A.t.RdEy1N, A.t.qcdp09, A.t.F7w2Rk, A.t.gSyOgI, A.t.uYgqv7, A.t['b/1SBQ'], A.t.LhebZG],
    v = () => [A.t['20E/ys'], A.t['oa8+kp'], A.t.zoKkXl, A.t.FP9aS0, A.t.E5Zj1d, A.t['6Anmws'], A.t.sR78HR, A.t.gA9qPz, A.t.Hkiyp6, A.t.w1HMho],
    O = () => [A.t['8fy3DQ'], A.t.UproUV, A.t['7l3EyM'], A.t.GToyaG, A.t['DUs+Zm'], A.t.yLkbfn, A.t.oWdvws, A.t.tOoKTE, A.t['VM7+Oj'], A.t['hJx/u7']],
    R = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return I();
            case 'CLAN':
                return v();
        }
    },
    S = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return T();
            case 'CLAN':
                return O();
        }
    };
function P(t, e) {
    let n = S(e),
        r = m.default.extractTimestamp(t) % n.length;
    return n[r];
}
function L(t) {
    return (0, l.Rp)(
        A.intl.formatToParts(A.t['ihxM9/'], {
            username: t,
            usernameOnClick: C.dG4
        })
    );
}
function Z(t, e) {
    let n = p.Z.getChannel(e);
    return null == n || null == _.Z.getGuild(n.getGuildId())
        ? L(t)
        : (0, l.Rp)(
              A.intl.formatToParts(A.t['ihxM9/'], {
                  username: t,
                  usernameOnClick: C.dG4
              })
          );
}
function y(t) {
    var e;
    return (null === (e = _.Z.getGuild(t)) || void 0 === e ? void 0 : e.hasFeature(C.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
e.Z = {
    stringify: function (t, e) {
        var n, r, i, m;
        let N = null === (n = t.mentions) || void 0 === n ? void 0 : n[0],
            I = null != N && 'string' != typeof N ? E.default.getUser(N.id) : void 0,
            T = t.channel_id,
            v = g.ZP.getName(null, T, t.author);
        switch (t.type) {
            case C.uaV.RECIPIENT_ADD:
                if (null == I) return;
                return (0, l.Rp)(
                    A.intl.formatToParts(A.t['7/Xl0d'], {
                        username: v,
                        usernameOnClick: C.dG4,
                        otherUsername: g.ZP.getName(null, T, I),
                        otherUsernameOnClick: C.dG4
                    })
                );
            case C.uaV.RECIPIENT_REMOVE:
                if (null == I) return;
                let O = t.author;
                if (null == O || O.id === I.id)
                    return (0, l.Rp)(
                        A.intl.formatToParts(A.t['Qn5+LS'], {
                            username: v,
                            usernameOnClick: C.dG4
                        })
                    );
                return (0, l.Rp)(
                    A.intl.formatToParts(A.t.QtZ0RE, {
                        username: v,
                        usernameOnClick: C.dG4,
                        otherUsername: g.ZP.getName(null, T, I),
                        otherUsernameOnClick: C.dG4
                    })
                );
            case C.uaV.CALL:
                let { call: R } = t;
                if (null != R && -1 === R.participants.indexOf(h.default.getId()))
                    return (0, l.Rp)(
                        A.intl.formatToParts(A.t.DbgSAw, {
                            username: v,
                            usernameOnClick: C.dG4
                        })
                    );
                return;
            case C.uaV.CHANNEL_NAME_CHANGE:
                return (0, l.Rp)(
                    A.intl.formatToParts(e.isForumPost() ? A.t['qa0e/v'] : A.t.XCPMEB, {
                        username: v,
                        usernameOnClick: C.dG4,
                        channelName: t.content
                    })
                );
            case C.uaV.CHANNEL_ICON_CHANGE:
                return (0, l.Rp)(
                    A.intl.formatToParts(A.t.wypJZ2, {
                        username: v,
                        usernameOnClick: C.dG4
                    })
                );
            case C.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, l.Rp)(
                    A.intl.formatToParts(A.t['/M60j4'], {
                        username: v,
                        usernameOnClick: C.dG4
                    })
                );
            case C.uaV.USER_JOIN:
                let S = y(e.guild_id);
                return (0, l.Rp)(
                    A.intl.formatToParts(P(t.id, S), {
                        username: v,
                        usernameOnClick: C.dG4
                    })
                );
            case C.uaV.GUILD_BOOST:
                return L(v);
            case C.uaV.GUILD_BOOST_TIER_1:
            case C.uaV.GUILD_BOOST_TIER_2:
            case C.uaV.GUILD_BOOST_TIER_3:
                return Z(v, T);
            case C.uaV.GUILD_INVITE_REMINDER:
                return A.intl.string(A.t.gxyKvr);
            case C.uaV.THREAD_STARTER_MESSAGE:
                return A.intl.formatToPlainString(A.t['B8H+Cg'], {
                    username: v,
                    threadName: e.name
                });
            case C.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof f.ZP) return null;
                return (0, l.Rp)(
                    (0, o.vp)({
                        username: v,
                        guildId: e.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case C.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof f.ZP || (null === (i = t.purchase_notification) || void 0 === i ? void 0 : null === (r = i.guild_product_purchase) || void 0 === r ? void 0 : r.product_name) == null) return null;
                return (0, l.Rp)(
                    (0, a.i)({
                        username: v,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case C.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof f.ZP) return null;
                let D = (0, s.ZH)((0, u.e5)(t));
                return (0, l.Rp)(
                    (0, c.Y)({
                        application: t.application,
                        username: D.nick
                    })
                );
            case C.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof f.ZP) return null;
                return (0, l.Rp)(
                    (0, d.B2)({
                        application: t.application,
                        username: (0, s.ZH)((0, u.e5)(t)).nick
                    })
                );
            case C.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof f.ZP) return null;
                return (0, l.Rp)(
                    (0, d.hj)({
                        application: t.application,
                        username: (0, s.ZH)((0, u.e5)(t)).nick
                    })
                );
            case C.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (m = t.embeds) || void 0 === m
                        ? void 0
                        : m.some((t) => {
                              let { type: e } = t;
                              return e === C.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (t) {
                        let e = p.Z.getChannel(t);
                        if (null == e) return null;
                        let n = _.Z.getGuild(e.getGuildId());
                        return null == n ? null : (0, l.Rp)(A.intl.formatToParts(A.t['a+lJKi'], { guildName: n.name }));
                    })(T);
                return t.content;
            case C.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (t, e, n) {
                    let r = p.Z.getChannel(e);
                    if (null == r) return null;
                    let i = _.Z.getGuild(r.getGuildId());
                    return null == i
                        ? null
                        : (0, l.Rp)(
                              A.intl.formatToParts(A.t.iOuWPj, {
                                  username: t,
                                  guildName: i.name,
                                  time:
                                      '' !== n
                                          ? new Date(n).toLocaleString(A.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(v, T, t.content);
            case C.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (t, e) {
                    let n = p.Z.getChannel(e);
                    if (null == n) return null;
                    let r = _.Z.getGuild(n.getGuildId());
                    return null == r
                        ? null
                        : (0, l.Rp)(
                              A.intl.formatToParts(A.t.axmbpq, {
                                  username: t,
                                  guildName: r.name
                              })
                          );
                })(v, T);
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t, e) {
        let n = R(e),
            r = m.default.extractTimestamp(t) % n.length;
        return n[r];
    },
    getSystemMessageUserJoinMobile: P,
    getSystemMessageBotJoin: function (t) {
        return null == N[t] ? null : A.intl.format(A.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(N[t]) } });
    },
    getWelcomeMessageKind: y
};
