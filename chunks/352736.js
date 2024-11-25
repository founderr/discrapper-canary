var i,
    r,
    u = n(25209),
    l = n(97797),
    a = n(35125),
    o = n(786761),
    c = n(739566),
    s = n(499401),
    d = n(693912),
    f = n(23750),
    N = n(314897),
    E = n(592125),
    m = n(430824),
    _ = n(594174),
    g = n(5192),
    O = n(709054),
    A = n(981631),
    p = n(388032);
let R = {
    '234395307759108106': 'https://groovy.bot/commands',
    '365975655608745985': 'https://www.pokecord.com/getting-started',
    512412940897484800: 'http://jameslantz.net/smilebot'
};
((i = r || (r = {})).NORMAL = 'NORMAL'), (i.CLAN = 'CLAN');
let S = () => [p.t['0cuj7u'], p.t['MuW+CA'], p.t.osqpHR, p.t['5ToSh4'], p.t.JEB8pq, p.t.pkOV5e, p.t.kRb1Jy, p.t.EmKLY2, p.t.rPtBnZ, p.t['5B/ekZ'], p.t.ESNC3d, p.t['Iw6d8/'], p.t.WecSZ2],
    T = () => [p.t.Jm6e09, p.t.MGRnRU, p.t.EXOEGh, p.t['5uCTFB'], p.t.rl45Qk, p.t.Bh9zpa, p.t.RdEy1N, p.t.qcdp09, p.t.F7w2Rk, p.t.gSyOgI, p.t.uYgqv7, p.t['b/1SBQ'], p.t.LhebZG],
    I = () => [p.t['20E/ys'], p.t['oa8+kp'], p.t.zoKkXl, p.t.FP9aS0, p.t.E5Zj1d, p.t['6Anmws'], p.t.sR78HR, p.t.gA9qPz, p.t.Hkiyp6, p.t.w1HMho],
    C = () => [p.t['8fy3DQ'], p.t.UproUV, p.t['7l3EyM'], p.t.GToyaG, p.t['DUs+Zm'], p.t.yLkbfn, p.t.oWdvws, p.t.tOoKTE, p.t['VM7+Oj'], p.t['hJx/u7']],
    L = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return S();
            case 'CLAN':
                return I();
        }
    },
    h = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return T();
            case 'CLAN':
                return C();
        }
    };
function G(t, e) {
    let n = h(e),
        i = O.default.extractTimestamp(t) % n.length;
    return n[i];
}
function M(t) {
    return (0, u.Rp)(
        p.intl.formatToParts(p.t['ihxM9/'], {
            username: t,
            usernameOnClick: A.dG4
        })
    );
}
function P(t, e) {
    let n = E.Z.getChannel(e);
    return null == n || null == m.Z.getGuild(n.getGuildId())
        ? M(t)
        : (0, u.Rp)(
              p.intl.formatToParts(p.t['ihxM9/'], {
                  username: t,
                  usernameOnClick: A.dG4
              })
          );
}
function Z(t) {
    var e;
    return (null === (e = m.Z.getGuild(t)) || void 0 === e ? void 0 : e.hasFeature(A.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
e.Z = {
    stringify: function (t, e) {
        var n, i, r, O;
        let R = null === (n = t.mentions) || void 0 === n ? void 0 : n[0],
            S = null != R && 'string' != typeof R ? _.default.getUser(R.id) : void 0,
            T = t.channel_id,
            I = g.ZP.getName(null, T, t.author);
        switch (t.type) {
            case A.uaV.RECIPIENT_ADD:
                if (null == S) return;
                return (0, u.Rp)(
                    p.intl.formatToParts(p.t['7/Xl0d'], {
                        username: I,
                        usernameOnClick: A.dG4,
                        otherUsername: g.ZP.getName(null, T, S),
                        otherUsernameOnClick: A.dG4
                    })
                );
            case A.uaV.RECIPIENT_REMOVE:
                if (null == S) return;
                let C = t.author;
                if (null == C || C.id === S.id)
                    return (0, u.Rp)(
                        p.intl.formatToParts(p.t['Qn5+LS'], {
                            username: I,
                            usernameOnClick: A.dG4
                        })
                    );
                return (0, u.Rp)(
                    p.intl.formatToParts(p.t.QtZ0RE, {
                        username: I,
                        usernameOnClick: A.dG4,
                        otherUsername: g.ZP.getName(null, T, S),
                        otherUsernameOnClick: A.dG4
                    })
                );
            case A.uaV.CALL:
                let { call: L } = t;
                if (null != L && -1 === L.participants.indexOf(N.default.getId()))
                    return (0, u.Rp)(
                        p.intl.formatToParts(p.t.DbgSAw, {
                            username: I,
                            usernameOnClick: A.dG4
                        })
                    );
                return;
            case A.uaV.CHANNEL_NAME_CHANGE:
                return (0, u.Rp)(
                    p.intl.formatToParts(e.isForumPost() ? p.t['qa0e/v'] : p.t.XCPMEB, {
                        username: I,
                        usernameOnClick: A.dG4,
                        channelName: t.content
                    })
                );
            case A.uaV.CHANNEL_ICON_CHANGE:
                return (0, u.Rp)(
                    p.intl.formatToParts(p.t.wypJZ2, {
                        username: I,
                        usernameOnClick: A.dG4
                    })
                );
            case A.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, u.Rp)(
                    p.intl.formatToParts(p.t['/M60j4'], {
                        username: I,
                        usernameOnClick: A.dG4
                    })
                );
            case A.uaV.USER_JOIN:
                let h = Z(e.guild_id);
                return (0, u.Rp)(
                    p.intl.formatToParts(G(t.id, h), {
                        username: I,
                        usernameOnClick: A.dG4
                    })
                );
            case A.uaV.GUILD_BOOST:
                return M(I);
            case A.uaV.GUILD_BOOST_TIER_1:
            case A.uaV.GUILD_BOOST_TIER_2:
            case A.uaV.GUILD_BOOST_TIER_3:
                return P(I, T);
            case A.uaV.GUILD_INVITE_REMINDER:
                return p.intl.string(p.t.gxyKvr);
            case A.uaV.THREAD_STARTER_MESSAGE:
                return p.intl.formatToPlainString(p.t['B8H+Cg'], {
                    username: I,
                    threadName: e.name
                });
            case A.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof f.ZP) return null;
                return (0, u.Rp)(
                    (0, a.vp)({
                        username: I,
                        guildId: e.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case A.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof f.ZP || (null === (r = t.purchase_notification) || void 0 === r ? void 0 : null === (i = r.guild_product_purchase) || void 0 === i ? void 0 : i.product_name) == null) return null;
                return (0, u.Rp)(
                    (0, l.i)({
                        username: I,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case A.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof f.ZP) return null;
                let U = (0, c.ZH)((0, o.e5)(t));
                return (0, u.Rp)(
                    (0, s.Y)({
                        application: t.application,
                        username: U.nick
                    })
                );
            case A.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof f.ZP) return null;
                return (0, u.Rp)(
                    (0, d.B2)({
                        application: t.application,
                        username: (0, c.ZH)((0, o.e5)(t)).nick
                    })
                );
            case A.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof f.ZP) return null;
                return (0, u.Rp)(
                    (0, d.hj)({
                        application: t.application,
                        username: (0, c.ZH)((0, o.e5)(t)).nick
                    })
                );
            case A.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (O = t.embeds) || void 0 === O
                        ? void 0
                        : O.some((t) => {
                              let { type: e } = t;
                              return e === A.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (t) {
                        let e = E.Z.getChannel(t);
                        if (null == e) return null;
                        let n = m.Z.getGuild(e.getGuildId());
                        return null == n ? null : (0, u.Rp)(p.intl.formatToParts(p.t['a+lJKi'], { guildName: n.name }));
                    })(T);
                return t.content;
            case A.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (t, e, n) {
                    let i = E.Z.getChannel(e);
                    if (null == i) return null;
                    let r = m.Z.getGuild(i.getGuildId());
                    return null == r
                        ? null
                        : (0, u.Rp)(
                              p.intl.formatToParts(p.t.iOuWPj, {
                                  username: t,
                                  guildName: r.name,
                                  time:
                                      '' !== n
                                          ? new Date(n).toLocaleString(p.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(I, T, t.content);
            case A.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (t, e) {
                    let n = E.Z.getChannel(e);
                    if (null == n) return null;
                    let i = m.Z.getGuild(n.getGuildId());
                    return null == i
                        ? null
                        : (0, u.Rp)(
                              p.intl.formatToParts(p.t.axmbpq, {
                                  username: t,
                                  guildName: i.name
                              })
                          );
                })(I, T);
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t, e) {
        let n = L(e),
            i = O.default.extractTimestamp(t) % n.length;
        return n[i];
    },
    getSystemMessageUserJoinMobile: G,
    getSystemMessageBotJoin: function (t) {
        return null == R[t] ? null : p.intl.format(p.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(R[t]) } });
    },
    getWelcomeMessageKind: Z
};
