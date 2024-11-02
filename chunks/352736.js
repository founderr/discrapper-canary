var r,
    i,
    u = e(25209),
    l = e(97797),
    a = e(35125),
    o = e(786761),
    c = e(739566),
    s = e(499401),
    d = e(693912),
    N = e(23750),
    E = e(314897),
    f = e(592125),
    _ = e(430824),
    m = e(594174),
    A = e(5192),
    O = e(709054),
    p = e(981631),
    T = e(388032);
let R = {
    '234395307759108106': 'https://groovy.bot/commands',
    '365975655608745985': 'https://www.pokecord.com/getting-started',
    512412940897484800: 'http://jameslantz.net/smilebot'
};
((r = i || (i = {})).NORMAL = 'NORMAL'), (r.CLAN = 'CLAN');
let C = () => [T.t['0cuj7u'], T.t['MuW+CA'], T.t.osqpHR, T.t['5ToSh4'], T.t.JEB8pq, T.t.pkOV5e, T.t.kRb1Jy, T.t.EmKLY2, T.t.rPtBnZ, T.t['5B/ekZ'], T.t.ESNC3d, T.t['Iw6d8/'], T.t.WecSZ2],
    I = () => [T.t.Jm6e09, T.t.MGRnRU, T.t.EXOEGh, T.t['5uCTFB'], T.t.rl45Qk, T.t.Bh9zpa, T.t.RdEy1N, T.t.qcdp09, T.t.F7w2Rk, T.t.gSyOgI, T.t.uYgqv7, T.t['b/1SBQ'], T.t.LhebZG],
    g = () => [T.t['20E/ys'], T.t['oa8+kp'], T.t.zoKkXl, T.t.FP9aS0, T.t.E5Zj1d, T.t['6Anmws'], T.t.sR78HR, T.t.gA9qPz, T.t.Hkiyp6, T.t.w1HMho],
    L = () => [T.t['8fy3DQ'], T.t.UproUV, T.t['7l3EyM'], T.t.GToyaG, T.t['DUs+Zm'], T.t.yLkbfn, T.t.oWdvws, T.t.tOoKTE, T.t['VM7+Oj'], T.t['hJx/u7']],
    h = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return C();
            case 'CLAN':
                return g();
        }
    },
    S = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return I();
            case 'CLAN':
                return L();
        }
    };
function G(t, n) {
    let e = S(n),
        r = O.default.extractTimestamp(t) % e.length;
    return e[r];
}
function P(t) {
    return (0, u.Rp)(
        T.intl.formatToParts(T.t['ihxM9/'], {
            username: t,
            usernameOnClick: p.dG4
        })
    );
}
function M(t, n) {
    let e = f.Z.getChannel(n);
    return null == e || null == _.Z.getGuild(e.getGuildId())
        ? P(t)
        : (0, u.Rp)(
              T.intl.formatToParts(T.t['ihxM9/'], {
                  username: t,
                  usernameOnClick: p.dG4
              })
          );
}
function Z(t) {
    var n;
    return (null === (n = _.Z.getGuild(t)) || void 0 === n ? void 0 : n.hasFeature(p.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
n.Z = {
    stringify: function (t, n) {
        var e, r, i, O;
        let R = null === (e = t.mentions) || void 0 === e ? void 0 : e[0],
            C = null != R && 'string' != typeof R ? m.default.getUser(R.id) : void 0,
            I = t.channel_id,
            g = A.ZP.getName(null, I, t.author);
        switch (t.type) {
            case p.uaV.RECIPIENT_ADD:
                if (null == C) return;
                return (0, u.Rp)(
                    T.intl.formatToParts(T.t['7/Xl0d'], {
                        username: g,
                        usernameOnClick: p.dG4,
                        otherUsername: A.ZP.getName(null, I, C),
                        otherUsernameOnClick: p.dG4
                    })
                );
            case p.uaV.RECIPIENT_REMOVE:
                if (null == C) return;
                let L = t.author;
                if (null == L || L.id === C.id)
                    return (0, u.Rp)(
                        T.intl.formatToParts(T.t['Qn5+LS'], {
                            username: g,
                            usernameOnClick: p.dG4
                        })
                    );
                return (0, u.Rp)(
                    T.intl.formatToParts(T.t.QtZ0RE, {
                        username: g,
                        usernameOnClick: p.dG4,
                        otherUsername: A.ZP.getName(null, I, C),
                        otherUsernameOnClick: p.dG4
                    })
                );
            case p.uaV.CALL:
                let { call: h } = t;
                if (null != h && -1 === h.participants.indexOf(E.default.getId()))
                    return (0, u.Rp)(
                        T.intl.formatToParts(T.t.DbgSAw, {
                            username: g,
                            usernameOnClick: p.dG4
                        })
                    );
                return;
            case p.uaV.CHANNEL_NAME_CHANGE:
                return (0, u.Rp)(
                    T.intl.formatToParts(n.isForumPost() ? T.t['qa0e/v'] : T.t.XCPMEB, {
                        username: g,
                        usernameOnClick: p.dG4,
                        channelName: t.content
                    })
                );
            case p.uaV.CHANNEL_ICON_CHANGE:
                return (0, u.Rp)(
                    T.intl.formatToParts(T.t.wypJZ2, {
                        username: g,
                        usernameOnClick: p.dG4
                    })
                );
            case p.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, u.Rp)(
                    T.intl.formatToParts(T.t['/M60j4'], {
                        username: g,
                        usernameOnClick: p.dG4
                    })
                );
            case p.uaV.USER_JOIN:
                let S = Z(n.guild_id);
                return (0, u.Rp)(
                    T.intl.formatToParts(G(t.id, S), {
                        username: g,
                        usernameOnClick: p.dG4
                    })
                );
            case p.uaV.GUILD_BOOST:
                return P(g);
            case p.uaV.GUILD_BOOST_TIER_1:
            case p.uaV.GUILD_BOOST_TIER_2:
            case p.uaV.GUILD_BOOST_TIER_3:
                return M(g, I);
            case p.uaV.GUILD_INVITE_REMINDER:
                return T.intl.string(T.t.gxyKvr);
            case p.uaV.THREAD_STARTER_MESSAGE:
                return T.intl.formatToPlainString(T.t['B8H+Cg'], {
                    username: g,
                    threadName: n.name
                });
            case p.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof N.ZP) return null;
                return (0, u.Rp)(
                    (0, a.vp)({
                        username: g,
                        guildId: n.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case p.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof N.ZP || (null === (i = t.purchase_notification) || void 0 === i ? void 0 : null === (r = i.guild_product_purchase) || void 0 === r ? void 0 : r.product_name) == null) return null;
                return (0, u.Rp)(
                    (0, l.i)({
                        username: g,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case p.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof N.ZP) return null;
                let U = (0, c.ZH)((0, o.e5)(t));
                return (0, u.Rp)(
                    (0, s.Y)({
                        application: t.application,
                        username: U.nick
                    })
                );
            case p.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof N.ZP) return null;
                return (0, u.Rp)(
                    (0, d.B2)({
                        application: t.application,
                        username: (0, c.ZH)((0, o.e5)(t)).nick
                    })
                );
            case p.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof N.ZP) return null;
                return (0, u.Rp)(
                    (0, d.hj)({
                        application: t.application,
                        username: (0, c.ZH)((0, o.e5)(t)).nick
                    })
                );
            case p.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (O = t.embeds) || void 0 === O
                        ? void 0
                        : O.some((t) => {
                              let { type: n } = t;
                              return n === p.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (t) {
                        let n = f.Z.getChannel(t);
                        if (null == n) return null;
                        let e = _.Z.getGuild(n.getGuildId());
                        return null == e ? null : (0, u.Rp)(T.intl.formatToParts(T.t['a+lJKi'], { guildName: e.name }));
                    })(I);
                return t.content;
            case p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (t, n, e) {
                    let r = f.Z.getChannel(n);
                    if (null == r) return null;
                    let i = _.Z.getGuild(r.getGuildId());
                    return null == i
                        ? null
                        : (0, u.Rp)(
                              T.intl.formatToParts(T.t.iOuWPj, {
                                  username: t,
                                  guildName: i.name,
                                  time:
                                      '' !== e
                                          ? new Date(e).toLocaleString(T.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(g, I, t.content);
            case p.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (t, n) {
                    let e = f.Z.getChannel(n);
                    if (null == e) return null;
                    let r = _.Z.getGuild(e.getGuildId());
                    return null == r
                        ? null
                        : (0, u.Rp)(
                              T.intl.formatToParts(T.t.axmbpq, {
                                  username: t,
                                  guildName: r.name
                              })
                          );
                })(g, I);
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t, n) {
        let e = h(n),
            r = O.default.extractTimestamp(t) % e.length;
        return e[r];
    },
    getSystemMessageUserJoinMobile: G,
    getSystemMessageBotJoin: function (t) {
        return null == R[t] ? null : T.intl.format(T.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(R[t]) } });
    },
    getWelcomeMessageKind: Z
};
