var r,
    u,
    i = e(25209),
    a = e(97797),
    l = e(35125),
    o = e(786761),
    c = e(739566),
    s = e(499401),
    N = e(693912),
    E = e(23750),
    d = e(314897),
    f = e(592125),
    A = e(430824),
    m = e(594174),
    _ = e(5192),
    T = e(709054),
    p = e(981631),
    O = e(388032);
let R = {
    '234395307759108106': 'https://groovy.bot/commands',
    '365975655608745985': 'https://www.pokecord.com/getting-started',
    512412940897484800: 'http://jameslantz.net/smilebot'
};
((r = u || (u = {})).NORMAL = 'NORMAL'), (r.CLAN = 'CLAN');
let I = () => [O.t['0cuj7u'], O.t['MuW+CA'], O.t.osqpHR, O.t['5ToSh4'], O.t.JEB8pq, O.t.pkOV5e, O.t.kRb1Jy, O.t.EmKLY2, O.t.rPtBnZ, O.t['5B/ekZ'], O.t.ESNC3d, O.t['Iw6d8/'], O.t.WecSZ2],
    L = () => [O.t.Jm6e09, O.t.MGRnRU, O.t.EXOEGh, O.t['5uCTFB'], O.t.rl45Qk, O.t.Bh9zpa, O.t.RdEy1N, O.t.qcdp09, O.t.F7w2Rk, O.t.gSyOgI, O.t.uYgqv7, O.t['b/1SBQ'], O.t.LhebZG],
    C = () => [O.t['20E/ys'], O.t['oa8+kp'], O.t.zoKkXl, O.t.FP9aS0, O.t.E5Zj1d, O.t['6Anmws'], O.t.sR78HR, O.t.gA9qPz, O.t.Hkiyp6, O.t.w1HMho],
    h = () => [O.t['8fy3DQ'], O.t.UproUV, O.t['7l3EyM'], O.t.GToyaG, O.t['DUs+Zm'], O.t.yLkbfn, O.t.oWdvws, O.t.tOoKTE, O.t['VM7+Oj'], O.t['hJx/u7']],
    S = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return I();
            case 'CLAN':
                return C();
        }
    },
    G = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return L();
            case 'CLAN':
                return h();
        }
    };
function P(t, n) {
    let e = G(n),
        r = T.default.extractTimestamp(t) % e.length;
    return e[r];
}
function g(t) {
    return (0, i.Rp)(
        O.intl.formatToParts(O.t['ihxM9/'], {
            username: t,
            usernameOnClick: p.dG4
        })
    );
}
function Z(t, n) {
    let e = f.Z.getChannel(n);
    return null == e || null == A.Z.getGuild(e.getGuildId())
        ? g(t)
        : (0, i.Rp)(
              O.intl.formatToParts(O.t['ihxM9/'], {
                  username: t,
                  usernameOnClick: p.dG4
              })
          );
}
function k(t) {
    var n;
    return (null === (n = A.Z.getGuild(t)) || void 0 === n ? void 0 : n.hasFeature(p.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
n.Z = {
    stringify: function (t, n) {
        var e, r, u, T;
        let R = null === (e = t.mentions) || void 0 === e ? void 0 : e[0],
            I = null != R && 'string' != typeof R ? m.default.getUser(R.id) : void 0,
            L = t.channel_id,
            C = _.ZP.getName(null, L, t.author);
        switch (t.type) {
            case p.uaV.RECIPIENT_ADD:
                if (null == I) return;
                return (0, i.Rp)(
                    O.intl.formatToParts(O.t['7/Xl0d'], {
                        username: C,
                        usernameOnClick: p.dG4,
                        otherUsername: _.ZP.getName(null, L, I),
                        otherUsernameOnClick: p.dG4
                    })
                );
            case p.uaV.RECIPIENT_REMOVE:
                if (null == I) return;
                let h = t.author;
                if (null == h || h.id === I.id)
                    return (0, i.Rp)(
                        O.intl.formatToParts(O.t['Qn5+LS'], {
                            username: C,
                            usernameOnClick: p.dG4
                        })
                    );
                return (0, i.Rp)(
                    O.intl.formatToParts(O.t.QtZ0RE, {
                        username: C,
                        usernameOnClick: p.dG4,
                        otherUsername: _.ZP.getName(null, L, I),
                        otherUsernameOnClick: p.dG4
                    })
                );
            case p.uaV.CALL:
                let { call: S } = t;
                if (null != S && -1 === S.participants.indexOf(d.default.getId()))
                    return (0, i.Rp)(
                        O.intl.formatToParts(O.t.DbgSAw, {
                            username: C,
                            usernameOnClick: p.dG4
                        })
                    );
                return;
            case p.uaV.CHANNEL_NAME_CHANGE:
                return (0, i.Rp)(
                    O.intl.formatToParts(n.isForumPost() ? O.t['qa0e/v'] : O.t.XCPMEB, {
                        username: C,
                        usernameOnClick: p.dG4,
                        channelName: t.content
                    })
                );
            case p.uaV.CHANNEL_ICON_CHANGE:
                return (0, i.Rp)(
                    O.intl.formatToParts(O.t.wypJZ2, {
                        username: C,
                        usernameOnClick: p.dG4
                    })
                );
            case p.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, i.Rp)(
                    O.intl.formatToParts(O.t['/M60j4'], {
                        username: C,
                        usernameOnClick: p.dG4
                    })
                );
            case p.uaV.USER_JOIN:
                let G = k(n.guild_id);
                return (0, i.Rp)(
                    O.intl.formatToParts(P(t.id, G), {
                        username: C,
                        usernameOnClick: p.dG4
                    })
                );
            case p.uaV.GUILD_BOOST:
                return g(C);
            case p.uaV.GUILD_BOOST_TIER_1:
            case p.uaV.GUILD_BOOST_TIER_2:
            case p.uaV.GUILD_BOOST_TIER_3:
                return Z(C, L);
            case p.uaV.GUILD_INVITE_REMINDER:
                return O.intl.string(O.t.gxyKvr);
            case p.uaV.THREAD_STARTER_MESSAGE:
                return O.intl.formatToPlainString(O.t['B8H+Cg'], {
                    username: C,
                    threadName: n.name
                });
            case p.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof E.ZP) return null;
                return (0, i.Rp)(
                    (0, l.vp)({
                        username: C,
                        guildId: n.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case p.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof E.ZP || (null === (u = t.purchase_notification) || void 0 === u ? void 0 : null === (r = u.guild_product_purchase) || void 0 === r ? void 0 : r.product_name) == null) return null;
                return (0, i.Rp)(
                    (0, a.i)({
                        username: C,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case p.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof E.ZP) return null;
                let M = (0, c.ZH)((0, o.e5)(t));
                return (0, i.Rp)(
                    (0, s.Y)({
                        application: t.application,
                        username: M.nick
                    })
                );
            case p.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof E.ZP) return null;
                return (0, i.Rp)(
                    (0, N.B2)({
                        application: t.application,
                        username: (0, c.ZH)((0, o.e5)(t)).nick
                    })
                );
            case p.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof E.ZP) return null;
                return (0, i.Rp)(
                    (0, N.hj)({
                        application: t.application,
                        username: (0, c.ZH)((0, o.e5)(t)).nick
                    })
                );
            case p.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (T = t.embeds) || void 0 === T
                        ? void 0
                        : T.some((t) => {
                              let { type: n } = t;
                              return n === p.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (t) {
                        let n = f.Z.getChannel(t);
                        if (null == n) return null;
                        let e = A.Z.getGuild(n.getGuildId());
                        return null == e ? null : (0, i.Rp)(O.intl.formatToParts(O.t['a+lJKi'], { guildName: e.name }));
                    })(L);
                return t.content;
            case p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (t, n, e) {
                    let r = f.Z.getChannel(n);
                    if (null == r) return null;
                    let u = A.Z.getGuild(r.getGuildId());
                    return null == u
                        ? null
                        : (0, i.Rp)(
                              O.intl.formatToParts(O.t.iOuWPj, {
                                  username: t,
                                  guildName: u.name,
                                  time:
                                      '' !== e
                                          ? new Date(e).toLocaleString(O.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(C, L, t.content);
            case p.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (t, n) {
                    let e = f.Z.getChannel(n);
                    if (null == e) return null;
                    let r = A.Z.getGuild(e.getGuildId());
                    return null == r
                        ? null
                        : (0, i.Rp)(
                              O.intl.formatToParts(O.t.axmbpq, {
                                  username: t,
                                  guildName: r.name
                              })
                          );
                })(C, L);
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t, n) {
        let e = S(n),
            r = T.default.extractTimestamp(t) % e.length;
        return e[r];
    },
    getSystemMessageUserJoinMobile: P,
    getSystemMessageBotJoin: function (t) {
        return null == R[t] ? null : O.intl.format(O.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(R[t]) } });
    },
    getWelcomeMessageKind: k
};
