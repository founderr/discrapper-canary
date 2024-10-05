var n,
    t,
    s = _(25209),
    a = _(97797),
    M = _(35125),
    r = _(786761),
    S = _(739566),
    u = _(499401),
    N = _(693912),
    A = _(23750),
    i = _(314897),
    l = _(592125),
    O = _(430824),
    I = _(594174),
    T = _(5192),
    L = _(709054),
    c = _(981631),
    o = _(689938);
let C = {
    '234395307759108106': 'https://groovy.bot/commands',
    '365975655608745985': 'https://www.pokecord.com/getting-started',
    512412940897484800: 'http://jameslantz.net/smilebot'
};
((n = t || (t = {})).NORMAL = 'NORMAL'), (n.CLAN = 'CLAN');
let G = () => [o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
    R = () => [o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013],
    g = () => [o.Z.Messages.CLAN_WELCOME_MESSAGE_0_HOOK, o.Z.Messages.CLAN_WELCOME_MESSAGE_1_HOOK, o.Z.Messages.CLAN_WELCOME_MESSAGE_2_HOOK, o.Z.Messages.CLAN_WELCOME_MESSAGE_3_HOOK, o.Z.Messages.CLAN_WELCOME_MESSAGE_4_HOOK, o.Z.Messages.CLAN_WELCOME_MESSAGE_5_HOOK, o.Z.Messages.CLAN_WELCOME_MESSAGE_6_HOOK, o.Z.Messages.CLAN_WELCOME_MESSAGE_7_HOOK, o.Z.Messages.CLAN_WELCOME_MESSAGE_8_HOOK, o.Z.Messages.CLAN_WELCOME_MESSAGE_9_HOOK],
    d = () => [o.Z.Messages.CLAN_WELCOME_MESSAGE_0, o.Z.Messages.CLAN_WELCOME_MESSAGE_1, o.Z.Messages.CLAN_WELCOME_MESSAGE_2, o.Z.Messages.CLAN_WELCOME_MESSAGE_3, o.Z.Messages.CLAN_WELCOME_MESSAGE_4, o.Z.Messages.CLAN_WELCOME_MESSAGE_5, o.Z.Messages.CLAN_WELCOME_MESSAGE_6, o.Z.Messages.CLAN_WELCOME_MESSAGE_7, o.Z.Messages.CLAN_WELCOME_MESSAGE_8, o.Z.Messages.CLAN_WELCOME_MESSAGE_9],
    Z = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return G();
            case 'CLAN':
                return g();
        }
    },
    U = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return R();
            case 'CLAN':
                return d();
        }
    };
function D(e, E) {
    let _ = U(E),
        n = L.default.extractTimestamp(e) % _.length;
    return _[n];
}
function m(e) {
    return (0, s.Rp)(
        o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
            username: e,
            usernameOnClick: c.dG4
        })
    );
}
function f(e, E) {
    let _ = l.Z.getChannel(E);
    return null == _ || null == O.Z.getGuild(_.getGuildId())
        ? m(e)
        : (0, s.Rp)(
              o.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
                  username: e,
                  usernameOnClick: c.dG4
              })
          );
}
function p(e) {
    var E;
    return (null === (E = O.Z.getGuild(e)) || void 0 === E ? void 0 : E.hasFeature(c.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
E.Z = {
    stringify: function (e, E) {
        var _, n, t, L;
        let C = null === (_ = e.mentions) || void 0 === _ ? void 0 : _[0],
            G = null != C && 'string' != typeof C ? I.default.getUser(C.id) : void 0,
            R = e.channel_id,
            g = T.ZP.getName(null, R, e.author);
        switch (e.type) {
            case c.uaV.RECIPIENT_ADD:
                if (null == G) return;
                return (0, s.Rp)(
                    o.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
                        username: g,
                        usernameOnClick: c.dG4,
                        otherUsername: T.ZP.getName(null, R, G),
                        otherUsernameOnClick: c.dG4
                    })
                );
            case c.uaV.RECIPIENT_REMOVE:
                if (null == G) return;
                let d = e.author;
                if (null == d || d.id === G.id)
                    return (0, s.Rp)(
                        o.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
                            username: g,
                            usernameOnClick: c.dG4
                        })
                    );
                return (0, s.Rp)(
                    o.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
                        username: g,
                        usernameOnClick: c.dG4,
                        otherUsername: T.ZP.getName(null, R, G),
                        otherUsernameOnClick: c.dG4
                    })
                );
            case c.uaV.CALL:
                let { call: Z } = e;
                if (null != Z && -1 === Z.participants.indexOf(i.default.getId()))
                    return (0, s.Rp)(
                        o.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
                            username: g,
                            usernameOnClick: c.dG4
                        })
                    );
                return;
            case c.uaV.CHANNEL_NAME_CHANGE:
                return (0, s.Rp)(
                    (E.isForumPost() ? o.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : o.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
                        username: g,
                        usernameOnClick: c.dG4,
                        channelName: e.content
                    })
                );
            case c.uaV.CHANNEL_ICON_CHANGE:
                return (0, s.Rp)(
                    o.Z.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
                        username: g,
                        usernameOnClick: c.dG4
                    })
                );
            case c.uaV.CHANNEL_PINNED_MESSAGE:
                return (0, s.Rp)(
                    o.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
                        username: g,
                        usernameOnClick: c.dG4
                    })
                );
            case c.uaV.USER_JOIN:
                let U = p(E.guild_id);
                return (0, s.Rp)(
                    D(e.id, U).astFormat({
                        username: g,
                        usernameOnClick: c.dG4
                    })
                );
            case c.uaV.GUILD_BOOST:
                return m(g);
            case c.uaV.GUILD_BOOST_TIER_1:
            case c.uaV.GUILD_BOOST_TIER_2:
            case c.uaV.GUILD_BOOST_TIER_3:
                return f(g, R);
            case c.uaV.GUILD_INVITE_REMINDER:
                return o.Z.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
            case c.uaV.THREAD_STARTER_MESSAGE:
                return o.Z.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
                    username: g,
                    threadName: E.name
                });
            case c.uaV.ROLE_SUBSCRIPTION_PURCHASE:
                if (e instanceof A.ZP) return null;
                return (0, s.Rp)(
                    (0, M.vp)({
                        username: g,
                        guildId: E.guild_id,
                        roleSubscriptionData: e.role_subscription_data
                    })
                );
            case c.uaV.PURCHASE_NOTIFICATION:
                if (e instanceof A.ZP || (null === (t = e.purchase_notification) || void 0 === t ? void 0 : null === (n = t.guild_product_purchase) || void 0 === n ? void 0 : n.product_name) == null) return null;
                return (0, s.Rp)(
                    (0, a.i)({
                        username: g,
                        productName: e.purchase_notification.guild_product_purchase.product_name
                    })
                );
            case c.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
                if (e instanceof A.ZP) return null;
                let H = (0, S.ZH)((0, r.e5)(e));
                return (0, s.Rp)(
                    (0, u.Y)({
                        application: e.application,
                        username: H.nick
                    })
                );
            case c.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
                if (e instanceof A.ZP) return null;
                return (0, s.Rp)(
                    (0, N.B2)({
                        application: e.application,
                        username: (0, S.ZH)((0, r.e5)(e)).nick
                    })
                );
            case c.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
                if (e instanceof A.ZP) return null;
                return (0, s.Rp)(
                    (0, N.hj)({
                        application: e.application,
                        username: (0, S.ZH)((0, r.e5)(e)).nick
                    })
                );
            case c.uaV.AUTO_MODERATION_ACTION:
                if (
                    null === (L = e.embeds) || void 0 === L
                        ? void 0
                        : L.some((e) => {
                              let { type: E } = e;
                              return E === c.hBH.AUTO_MODERATION_NOTIFICATION;
                          })
                )
                    return (function (e) {
                        let E = l.Z.getChannel(e);
                        if (null == E) return null;
                        let _ = O.Z.getGuild(E.getGuildId());
                        return null == _ ? null : (0, s.Rp)(o.Z.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({ guildName: _.name }));
                    })(R);
                return e.content;
            case c.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
                return (function (e, E, _) {
                    let n = l.Z.getChannel(E);
                    if (null == n) return null;
                    let t = O.Z.getGuild(n.getGuildId());
                    return null == t
                        ? null
                        : (0, s.Rp)(
                              o.Z.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
                                  username: e,
                                  guildName: t.name,
                                  time:
                                      '' !== _
                                          ? new Date(_).toLocaleString(o.Z.getLocale(), {
                                                hour: 'numeric',
                                                minute: '2-digit'
                                            })
                                          : ''
                              })
                          );
                })(g, R, e.content);
            case c.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
                return (function (e, E) {
                    let _ = l.Z.getChannel(E);
                    if (null == _) return null;
                    let n = O.Z.getGuild(_.getGuildId());
                    return null == n
                        ? null
                        : (0, s.Rp)(
                              o.Z.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
                                  username: e,
                                  guildName: n.name
                              })
                          );
                })(g, R);
            default:
                return e.content;
        }
    },
    getSystemMessageUserJoin: function (e, E) {
        let _ = Z(E),
            n = L.default.extractTimestamp(e) % _.length;
        return _[n];
    },
    getSystemMessageUserJoinMobile: D,
    getSystemMessageBotJoin: function (e) {
        return null == C[e] ? null : o.Z.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({ learnOnClick: { onClick: () => window.open(C[e]) } });
    },
    getWelcomeMessageKind: p
};
