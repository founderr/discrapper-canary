var i,
    r,
    l = n(25209),
    u = n(97797),
    a = n(35125),
    o = n(786761),
    c = n(739566),
    s = n(499401),
    d = n(693912),
    f = n(23750),
    m = n(314897),
    _ = n(592125),
    E = n(430824),
    N = n(594174),
    g = n(5192),
    p = n(709054),
    O = n(981631),
    R = n(388032);
let A = {
    '234395307759108106': 'https://groovy.bot/commands',
    '365975655608745985': 'https://www.pokecord.com/getting-started',
    512412940897484800: 'http://jameslantz.net/smilebot'
};
((i = r || (r = {})).NORMAL = 'NORMAL'), (i.CLAN = 'CLAN');
let T = () => [R.t['0cuj7u'], R.t['MuW+CA'], R.t.osqpHR, R.t['5ToSh4'], R.t.JEB8pq, R.t.pkOV5e, R.t.kRb1Jy, R.t.EmKLY2, R.t.rPtBnZ, R.t['5B/ekZ'], R.t.ESNC3d, R.t['Iw6d8/'], R.t.WecSZ2],
    I = () => [R.t.Jm6e09, R.t.MGRnRU, R.t.EXOEGh, R.t['5uCTFB'], R.t.rl45Qk, R.t.Bh9zpa, R.t.RdEy1N, R.t.qcdp09, R.t.F7w2Rk, R.t.gSyOgI, R.t.uYgqv7, R.t['b/1SBQ'], R.t.LhebZG],
    C = () => [R.t['20E/ys'], R.t['oa8+kp'], R.t.zoKkXl, R.t.FP9aS0, R.t.E5Zj1d, R.t['6Anmws'], R.t.sR78HR, R.t.gA9qPz, R.t.Hkiyp6, R.t.w1HMho],
    h = () => [R.t['8fy3DQ'], R.t.UproUV, R.t['7l3EyM'], R.t.GToyaG, R.t['DUs+Zm'], R.t.yLkbfn, R.t.oWdvws, R.t.tOoKTE, R.t['VM7+Oj'], R.t['hJx/u7']],
    L = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return T();
            case 'CLAN':
                return C();
        }
    },
    S = (t) => {
        switch (t) {
            case 'NORMAL':
            default:
                return I();
            case 'CLAN':
                return h();
        }
    };
function P(t, e) {
    let n = S(e),
        i = p.default.extractTimestamp(t) % n.length;
    return n[i];
}
function U(t) {
    return (0, l.Rp)(
        R.intl.formatToParts(R.t['ihxM9/'], {
            username: t,
            usernameOnClick: O.dG4
        })
    );
}
function G(t, e) {
    let n = _.Z.getChannel(e);
    return null == n || null == E.Z.getGuild(n.getGuildId())
        ? U(t)
        : (0, l.Rp)(
              R.intl.formatToParts(R.t['ihxM9/'], {
                  username: t,
                  usernameOnClick: O.dG4
              })
          );
}
function Z(t) {
    var e;
    return (null === (e = E.Z.getGuild(t)) || void 0 === e ? void 0 : e.hasFeature(O.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
e.Z = {
    stringify: function (t, e) {
        var n, i, r, p;
        let A = null === (n = t.mentions) || void 0 === n ? void 0 : n[0],
            T = null != A && 'string' != typeof A ? N.default.getUser(A.id) : void 0,
            I = t.channel_id,
            C = g.ZP.getName(null, I, t.author);
        switch (t.type) {
            case O.uaV.RECIPIENT_ADD:
                if (null == T) return;
                return (0, l.Rp)(
                    R.intl.formatToParts(R.t['7/Xl0d'], {
                        username: C,
                        usernameOnClick: O.dG4,
                        otherUsername: g.ZP.getName(null, I, T),
                        otherUsernameOnClick: O.dG4
                    })
                );
            case O.uaV.RECIPIENT_REMOVE:
                if (null == T) return;
                let h = t.author;
                if (null == h || h.id === T.id)
                    return (0, l.Rp)(
                        R.intl.formatToParts(R.t['Qn5+LS'], {
                            username: C,
                            usernameOnClick: O.dG4
                        })
                    );
                return (0, l.Rp)(
                    R.intl.formatToParts(R.t.QtZ0RE, {
                        username: C,
                        usernameOnClick: O.dG4,
                        otherUsername: g.ZP.getName(null, I, T),
                        otherUsernameOnClick: O.dG4
                    })
                );
            case O.uaV.CALL:
                let { call: L } = t;
                if (null != L && -1 === L.participants.indexOf(m.default.getId()))
                    return (0, l.Rp)(
                        R.intl.formatToParts(R.t.DbgSAw, {
                            username: C,
                            usernameOnClick: O.dG4
                        })
                    );
                return;
            case O.uaV.CHANNEL_NAME_CHANGE:
                return (0, l.Rp)(
                    R.intl.formatToParts(e.isForumPost() ? R.t['qa0e/v'] : R.t.XCPMEB, {
                        username: C,
                        usernameOnClick: O.dG4,
                        channelName: t.content
                    })
                );
            case O.uaV.CHANNEL_ICON_CHANGE:
                return (0, l.Rp)(
                    R.intl.formatToParts(R.t.wypJZ2, {
                        username: C,
                        usernameOnClick: O.dG4
                    })
                );
            case O.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, l.Rp)(
                    R.intl.formatToParts(R.t['/M60j4'], {
                        username: C,
                        usernameOnClick: O.dG4
                    })
                );
            case O.uaV.USER_JOIN:
                let S = Z(e.guild_id);
                return (0, l.Rp)(
                    R.intl.formatToParts(P(t.id, S), {
                        username: C,
                        usernameOnClick: O.dG4
                    })
                );
            case O.uaV.GUILD_BOOST:
                return U(C);
            case O.uaV.GUILD_BOOST_TIER_1:
            case O.uaV.GUILD_BOOST_TIER_2:
            case O.uaV.GUILD_BOOST_TIER_3:
                return G(C, I);
            case O.uaV.GUILD_INVITE_REMINDER:
                return R.intl.string(R.t.gxyKvr);
            case O.uaV.THREAD_STARTER_MESSAGE:
                return R.intl.formatToPlainString(R.t['B8H+Cg'], {
                    username: C,
                    threadName: e.name
                });
            case O.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (t instanceof f.ZP) return null;
                return (0, l.Rp)(
                    (0, a.vp)({
                        username: C,
                        guildId: e.guild_id,
                        roleSubscriptionData: t.role_subscription_data
                    })
                );
            case O.uaV.PURCHASE_NOTIFICATION:
                if (t instanceof f.ZP || (null === (r = t.purchase_notification) || void 0 === r ? void 0 : null === (i = r.guild_product_purchase) || void 0 === i ? void 0 : i.product_name) == null) return null;
                return (0, l.Rp)(
                    (0, u.i)({
                        username: C,
                        productName: t.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case O.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (t instanceof f.ZP) return null;
                let M = (0, c.ZH)((0, o.e5)(t));
                return (0, l.Rp)(
                    (0, s.Y)({
                        application: t.application,
                        username: M.nick
                    })
                );
            case O.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (t instanceof f.ZP) return null;
                return (0, l.Rp)(
                    (0, d.B2)({
                        application: t.application,
                        username: (0, c.ZH)((0, o.e5)(t)).nick
                    })
                );
            case O.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (t instanceof f.ZP) return null;
                return (0, l.Rp)(
                    (0, d.hj)({
                        application: t.application,
                        username: (0, c.ZH)((0, o.e5)(t)).nick
                    })
                );
            case O.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (p = t.embeds) || void 0 === p
                        ? void 0
                        : p.some((t) => {
                              let { type: e } = t;
                              return e === O.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (t) {
                        let e = _.Z.getChannel(t);
                        if (null == e) return null;
                        let n = E.Z.getGuild(e.getGuildId());
                        return null == n ? null : (0, l.Rp)(R.intl.formatToParts(R.t['a+lJKi'], { guildName: n.name }));
                    })(I);
                return t.content;
            case O.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (t, e, n) {
                    let i = _.Z.getChannel(e);
                    if (null == i) return null;
                    let r = E.Z.getGuild(i.getGuildId());
                    return null == r
                        ? null
                        : (0, l.Rp)(
                              R.intl.formatToParts(R.t.iOuWPj, {
                                  username: t,
                                  guildName: r.name,
                                  time:
                                      '' !== n
                                          ? new Date(n).toLocaleString(R.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(C, I, t.content);
            case O.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (t, e) {
                    let n = _.Z.getChannel(e);
                    if (null == n) return null;
                    let i = E.Z.getGuild(n.getGuildId());
                    return null == i
                        ? null
                        : (0, l.Rp)(
                              R.intl.formatToParts(R.t.axmbpq, {
                                  username: t,
                                  guildName: i.name
                              })
                          );
                })(C, I);
            default:
                return t.content;
        }
    },
    getSystemMessageUserJoin: function (t, e) {
        let n = L(e),
            i = p.default.extractTimestamp(t) % n.length;
        return n[i];
    },
    getSystemMessageUserJoinMobile: P,
    getSystemMessageBotJoin: function (t) {
        return null == A[t] ? null : R.intl.format(R.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(A[t]) } });
    },
    getWelcomeMessageKind: Z
};
