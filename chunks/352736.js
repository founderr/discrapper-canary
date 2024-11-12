var i,
    r,
    u = e(25209),
    l = e(97797),
    a = e(35125),
    o = e(786761),
    d = e(739566),
    c = e(499401),
    s = e(693912),
    f = e(23750),
    E = e(314897),
    _ = e(592125),
    p = e(430824),
    m = e(594174),
    N = e(5192),
    A = e(709054),
    h = e(981631),
    C = e(388032);
let T = {
    '234395307759108106': 'https://groovy.bot/commands',
    '365975655608745985': 'https://www.pokecord.com/getting-started',
    512412940897484800: 'http://jameslantz.net/smilebot'
};
((i = r || (r = {})).NORMAL = 'NORMAL'), (i.CLAN = 'CLAN');
let I = () => [C.t['0cuj7u'], C.t['MuW+CA'], C.t.osqpHR, C.t['5ToSh4'], C.t.JEB8pq, C.t.pkOV5e, C.t.kRb1Jy, C.t.EmKLY2, C.t.rPtBnZ, C.t['5B/ekZ'], C.t.ESNC3d, C.t['Iw6d8/'], C.t.WecSZ2],
    g = () => [C.t.Jm6e09, C.t.MGRnRU, C.t.EXOEGh, C.t['5uCTFB'], C.t.rl45Qk, C.t.Bh9zpa, C.t.RdEy1N, C.t.qcdp09, C.t.F7w2Rk, C.t.gSyOgI, C.t.uYgqv7, C.t['b/1SBQ'], C.t.LhebZG],
    v = () => [C.t['20E/ys'], C.t['oa8+kp'], C.t.zoKkXl, C.t.FP9aS0, C.t.E5Zj1d, C.t['6Anmws'], C.t.sR78HR, C.t.gA9qPz, C.t.Hkiyp6, C.t.w1HMho],
    O = () => [C.t['8fy3DQ'], C.t.UproUV, C.t['7l3EyM'], C.t.GToyaG, C.t['DUs+Zm'], C.t.yLkbfn, C.t.oWdvws, C.t.tOoKTE, C.t['VM7+Oj'], C.t['hJx/u7']],
    R = (n) => {
        switch (n) {
            case 'NORMAL':
            default:
                return I();
            case 'CLAN':
                return v();
        }
    },
    S = (n) => {
        switch (n) {
            case 'NORMAL':
            default:
                return g();
            case 'CLAN':
                return O();
        }
    };
function P(n, t) {
    let e = S(t),
        i = A.default.extractTimestamp(n) % e.length;
    return e[i];
}
function Z(n) {
    return (0, u.Rp)(
        C.intl.formatToParts(C.t['ihxM9/'], {
            username: n,
            usernameOnClick: h.dG4
        })
    );
}
function M(n, t) {
    let e = _.Z.getChannel(t);
    return null == e || null == p.Z.getGuild(e.getGuildId())
        ? Z(n)
        : (0, u.Rp)(
              C.intl.formatToParts(C.t['ihxM9/'], {
                  username: n,
                  usernameOnClick: h.dG4
              })
          );
}
function b(n) {
    var t;
    return (null === (t = p.Z.getGuild(n)) || void 0 === t ? void 0 : t.hasFeature(h.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
t.Z = {
    stringify: function (n, t) {
        var e, i, r, A;
        let T = null === (e = n.mentions) || void 0 === e ? void 0 : e[0],
            I = null != T && 'string' != typeof T ? m.default.getUser(T.id) : void 0,
            g = n.channel_id,
            v = N.ZP.getName(null, g, n.author);
        switch (n.type) {
            case h.uaV.RECIPIENT_ADD:
                if (null == I) return;
                return (0, u.Rp)(
                    C.intl.formatToParts(C.t['7/Xl0d'], {
                        username: v,
                        usernameOnClick: h.dG4,
                        otherUsername: N.ZP.getName(null, g, I),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.RECIPIENT_REMOVE:
                if (null == I) return;
                let O = n.author;
                if (null == O || O.id === I.id)
                    return (0, u.Rp)(
                        C.intl.formatToParts(C.t['Qn5+LS'], {
                            username: v,
                            usernameOnClick: h.dG4
                        })
                    );
                return (0, u.Rp)(
                    C.intl.formatToParts(C.t.QtZ0RE, {
                        username: v,
                        usernameOnClick: h.dG4,
                        otherUsername: N.ZP.getName(null, g, I),
                        otherUsernameOnClick: h.dG4
                    })
                );
            case h.uaV.CALL:
                let { call: R } = n;
                if (null != R && -1 === R.participants.indexOf(E.default.getId()))
                    return (0, u.Rp)(
                        C.intl.formatToParts(C.t.DbgSAw, {
                            username: v,
                            usernameOnClick: h.dG4
                        })
                    );
                return;
            case h.uaV.CHANNEL_NAME_CHANGE:
                return (0, u.Rp)(
                    C.intl.formatToParts(t.isForumPost() ? C.t['qa0e/v'] : C.t.XCPMEB, {
                        username: v,
                        usernameOnClick: h.dG4,
                        channelName: n.content
                    })
                );
            case h.uaV.CHANNEL_ICON_CHANGE:
                return (0, u.Rp)(
                    C.intl.formatToParts(C.t.wypJZ2, {
                        username: v,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, u.Rp)(
                    C.intl.formatToParts(C.t['/M60j4'], {
                        username: v,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.USER_JOIN:
                let S = b(t.guild_id);
                return (0, u.Rp)(
                    C.intl.formatToParts(P(n.id, S), {
                        username: v,
                        usernameOnClick: h.dG4
                    })
                );
            case h.uaV.GUILD_BOOST:
                return Z(v);
            case h.uaV.GUILD_BOOST_TIER_1:
            case h.uaV.GUILD_BOOST_TIER_2:
            case h.uaV.GUILD_BOOST_TIER_3:
                return M(v, g);
            case h.uaV.GUILD_INVITE_REMINDER:
                return C.intl.string(C.t.gxyKvr);
            case h.uaV.THREAD_STARTER_MESSAGE:
                return C.intl.formatToPlainString(C.t['B8H+Cg'], {
                    username: v,
                    threadName: t.name
                });
            case h.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (n instanceof f.ZP) return null;
                return (0, u.Rp)(
                    (0, a.vp)({
                        username: v,
                        guildId: t.guild_id,
                        roleSubscriptionData: n.role_subscription_data
                    })
                );
            case h.uaV.PURCHASE_NOTIFICATION:
                if (n instanceof f.ZP || (null === (r = n.purchase_notification) || void 0 === r ? void 0 : null === (i = r.guild_product_purchase) || void 0 === i ? void 0 : i.product_name) == null) return null;
                return (0, u.Rp)(
                    (0, l.i)({
                        username: v,
                        productName: n.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case h.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (n instanceof f.ZP) return null;
                let y = (0, d.ZH)((0, o.e5)(n));
                return (0, u.Rp)(
                    (0, c.Y)({
                        application: n.application,
                        username: y.nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (n instanceof f.ZP) return null;
                return (0, u.Rp)(
                    (0, s.B2)({
                        application: n.application,
                        username: (0, d.ZH)((0, o.e5)(n)).nick
                    })
                );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (n instanceof f.ZP) return null;
                return (0, u.Rp)(
                    (0, s.hj)({
                        application: n.application,
                        username: (0, d.ZH)((0, o.e5)(n)).nick
                    })
                );
            case h.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (A = n.embeds) || void 0 === A
                        ? void 0
                        : A.some((n) => {
                              let { type: t } = n;
                              return t === h.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (n) {
                        let t = _.Z.getChannel(n);
                        if (null == t) return null;
                        let e = p.Z.getGuild(t.getGuildId());
                        return null == e ? null : (0, u.Rp)(C.intl.formatToParts(C.t['a+lJKi'], { guildName: e.name }));
                    })(g);
                return n.content;
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (n, t, e) {
                    let i = _.Z.getChannel(t);
                    if (null == i) return null;
                    let r = p.Z.getGuild(i.getGuildId());
                    return null == r
                        ? null
                        : (0, u.Rp)(
                              C.intl.formatToParts(C.t.iOuWPj, {
                                  username: n,
                                  guildName: r.name,
                                  time:
                                      '' !== e
                                          ? new Date(e).toLocaleString(C.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(v, g, n.content);
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (n, t) {
                    let e = _.Z.getChannel(t);
                    if (null == e) return null;
                    let i = p.Z.getGuild(e.getGuildId());
                    return null == i
                        ? null
                        : (0, u.Rp)(
                              C.intl.formatToParts(C.t.axmbpq, {
                                  username: n,
                                  guildName: i.name
                              })
                          );
                })(v, g);
            default:
                return n.content;
        }
    },
    getSystemMessageUserJoin: function (n, t) {
        let e = R(t),
            i = A.default.extractTimestamp(n) % e.length;
        return e[i];
    },
    getSystemMessageUserJoinMobile: P,
    getSystemMessageBotJoin: function (n) {
        return null == T[n] ? null : C.intl.format(C.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(T[n]) } });
    },
    getWelcomeMessageKind: b
};
