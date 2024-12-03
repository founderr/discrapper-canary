var r,
    l,
    i = n(25209),
    a = n(97797),
    o = n(35125),
    u = n(786761),
    c = n(739566),
    s = n(499401),
    d = n(693912),
    f = n(23750),
    _ = n(314897),
    h = n(592125),
    p = n(430824),
    E = n(594174),
    m = n(5192),
    C = n(709054),
    g = n(981631),
    N = n(388032);
let A = {
    '234395307759108106': 'https://groovy.bot/commands',
    '365975655608745985': 'https://www.pokecord.com/getting-started',
    512412940897484800: 'http://jameslantz.net/smilebot'
};
((r = l || (l = {})).NORMAL = 'NORMAL'), (r.CLAN = 'CLAN');
let T = () => [N.t['0cuj7u'], N.t['MuW+CA'], N.t.osqpHR, N.t['5ToSh4'], N.t.JEB8pq, N.t.pkOV5e, N.t.kRb1Jy, N.t.EmKLY2, N.t.rPtBnZ, N.t['5B/ekZ'], N.t.ESNC3d, N.t['Iw6d8/'], N.t.WecSZ2],
    I = () => [N.t.Jm6e09, N.t.MGRnRU, N.t.EXOEGh, N.t['5uCTFB'], N.t.rl45Qk, N.t.Bh9zpa, N.t.RdEy1N, N.t.qcdp09, N.t.F7w2Rk, N.t.gSyOgI, N.t.uYgqv7, N.t['b/1SBQ'], N.t.LhebZG],
    v = () => [N.t['20E/ys'], N.t['oa8+kp'], N.t.zoKkXl, N.t.FP9aS0, N.t.E5Zj1d, N.t['6Anmws'], N.t.sR78HR, N.t.gA9qPz, N.t.Hkiyp6, N.t.w1HMho],
    S = () => [N.t['8fy3DQ'], N.t.UproUV, N.t['7l3EyM'], N.t.GToyaG, N.t['DUs+Zm'], N.t.yLkbfn, N.t.oWdvws, N.t.tOoKTE, N.t['VM7+Oj'], N.t['hJx/u7']],
    O = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return T();
            case 'CLAN':
                return v();
        }
    },
    P = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return I();
            case 'CLAN':
                return S();
        }
    };
function R(e, t) {
    let n = P(t),
        r = C.default.extractTimestamp(e) % n.length;
    return n[r];
}
function L(e) {
    return (0, i.Rp)(
        N.intl.formatToParts(N.t['ihxM9/'], {
            username: e,
            usernameOnClick: g.dG4
        })
    );
}
function Z(e, t) {
    let n = h.Z.getChannel(t);
    return null == n || null == p.Z.getGuild(n.getGuildId())
        ? L(e)
        : (0, i.Rp)(
              N.intl.formatToParts(N.t['ihxM9/'], {
                  username: e,
                  usernameOnClick: g.dG4
              })
          );
}
function y(e) {
    var t;
    return (null === (t = p.Z.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(g.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
t.Z = {
    stringify: function (e, t) {
        var n, r, l, C;
        let A = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
            T = null != A && 'string' != typeof A ? E.default.getUser(A.id) : void 0,
            I = e.channel_id,
            v = m.ZP.getName(null, I, e.author);
        switch (e.type) {
            case g.uaV.RECIPIENT_ADD:
                if (null == T) return;
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t['7/Xl0d'], {
                        username: v,
                        usernameOnClick: g.dG4,
                        otherUsername: m.ZP.getName(null, I, T),
                        otherUsernameOnClick: g.dG4
                    })
                );
            case g.uaV.RECIPIENT_REMOVE:
                if (null == T) return;
                let S = e.author;
                if (null == S || S.id === T.id)
                    return (0, i.Rp)(
                        N.intl.formatToParts(N.t['Qn5+LS'], {
                            username: v,
                            usernameOnClick: g.dG4
                        })
                    );
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t.QtZ0RE, {
                        username: v,
                        usernameOnClick: g.dG4,
                        otherUsername: m.ZP.getName(null, I, T),
                        otherUsernameOnClick: g.dG4
                    })
                );
            case g.uaV.CALL:
                let { call: O } = e;
                if (null != O && -1 === O.participants.indexOf(_.default.getId()))
                    return (0, i.Rp)(
                        N.intl.formatToParts(N.t.DbgSAw, {
                            username: v,
                            usernameOnClick: g.dG4
                        })
                    );
                return;
            case g.uaV.CHANNEL_NAME_CHANGE:
                return (0, i.Rp)(
                    N.intl.formatToParts(t.isForumPost() ? N.t['qa0e/v'] : N.t.XCPMEB, {
                        username: v,
                        usernameOnClick: g.dG4,
                        channelName: e.content
                    })
                );
            case g.uaV.CHANNEL_ICON_CHANGE:
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t.wypJZ2, {
                        username: v,
                        usernameOnClick: g.dG4
                    })
                );
            case g.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, i.Rp)(
                    N.intl.formatToParts(N.t['/M60j4'], {
                        username: v,
                        usernameOnClick: g.dG4
                    })
                );
            case g.uaV.USER_JOIN:
                let P = y(t.guild_id);
                return (0, i.Rp)(
                    N.intl.formatToParts(R(e.id, P), {
                        username: v,
                        usernameOnClick: g.dG4
                    })
                );
            case g.uaV.GUILD_BOOST:
                return L(v);
            case g.uaV.GUILD_BOOST_TIER_1:
            case g.uaV.GUILD_BOOST_TIER_2:
            case g.uaV.GUILD_BOOST_TIER_3:
                return Z(v, I);
            case g.uaV.GUILD_INVITE_REMINDER:
                return N.intl.string(N.t.gxyKvr);
            case g.uaV.THREAD_STARTER_MESSAGE:
                return N.intl.formatToPlainString(N.t['B8H+Cg'], {
                    username: v,
                    threadName: t.name
                });
            case g.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof f.ZP) return null;
                return (0, i.Rp)(
                    (0, o.vp)({
                        username: v,
                        guildId: t.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case g.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof f.ZP || (null === (l = e.purchase_notification) || void 0 === l ? void 0 : null === (r = l.guild_product_purchase) || void 0 === r ? void 0 : r.product_name) == null) return null;
                return (0, i.Rp)(
                    (0, a.i)({
                        username: v,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case g.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof f.ZP) return null;
                let b = (0, c.ZH)((0, u.e5)(e));
                return (0, i.Rp)(
                    (0, s.Y)({
                        application: e.application,
                        username: b.nick
                    })
                );
            case g.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof f.ZP) return null;
                return (0, i.Rp)(
                    (0, d.B2)({
                        application: e.application,
                        username: (0, c.ZH)((0, u.e5)(e)).nick
                    })
                );
            case g.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof f.ZP) return null;
                return (0, i.Rp)(
                    (0, d.hj)({
                        application: e.application,
                        username: (0, c.ZH)((0, u.e5)(e)).nick
                    })
                );
            case g.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (C = e.embeds) || void 0 === C
                        ? void 0
                        : C.some((e) => {
                              let { type: t } = e;
                              return t === g.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (e) {
                        let t = h.Z.getChannel(e);
                        if (null == t) return null;
                        let n = p.Z.getGuild(t.getGuildId());
                        return null == n ? null : (0, i.Rp)(N.intl.formatToParts(N.t['a+lJKi'], { guildName: n.name }));
                    })(I);
                return e.content;
            case g.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (e, t, n) {
                    let r = h.Z.getChannel(t);
                    if (null == r) return null;
                    let l = p.Z.getGuild(r.getGuildId());
                    return null == l
                        ? null
                        : (0, i.Rp)(
                              N.intl.formatToParts(N.t.iOuWPj, {
                                  username: e,
                                  guildName: l.name,
                                  time:
                                      '' !== n
                                          ? new Date(n).toLocaleString(N.intl.currentLocale, {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(v, I, e.content);
            case g.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (e, t) {
                    let n = h.Z.getChannel(t);
                    if (null == n) return null;
                    let r = p.Z.getGuild(n.getGuildId());
                    return null == r
                        ? null
                        : (0, i.Rp)(
                              N.intl.formatToParts(N.t.axmbpq, {
                                  username: e,
                                  guildName: r.name
                              })
                          );
                })(v, I);
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e, t) {
        let n = O(t),
            r = C.default.extractTimestamp(e) % n.length;
        return n[r];
    },
    getSystemMessageUserJoinMobile: R,
    getSystemMessageBotJoin: function (e) {
        return null == A[e] ? null : N.intl.format(N.t.xw1Ij4, { learnOnClick: { onClick: () => window.open(A[e]) } });
    },
    getWelcomeMessageKind: y
};
