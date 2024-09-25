var r,
    i = n(25209),
    a = n(97797),
    o = n(35125),
    s = n(786761),
    l = n(739566),
    u = n(499401),
    c = n(693912),
    d = n(23750),
    _ = n(314897),
    E = n(592125),
    f = n(430824),
    h = n(594174),
    p = n(5192),
    m = n(709054),
    I = n(981631),
    T = n(689938);
let g = {
    '234395307759108106': 'https://groovy.bot/commands',
    '365975655608745985': 'https://www.pokecord.com/getting-started',
    512412940897484800: 'http://jameslantz.net/smilebot'
};
!(function (e) {
    (e.NORMAL = 'NORMAL'), (e.CLAN = 'CLAN');
})(r || (r = {}));
let S = () => [T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
    A = () => [T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013],
    v = () => [T.Z.Messages.CLAN_WELCOME_MESSAGE_0_HOOK, T.Z.Messages.CLAN_WELCOME_MESSAGE_1_HOOK, T.Z.Messages.CLAN_WELCOME_MESSAGE_2_HOOK, T.Z.Messages.CLAN_WELCOME_MESSAGE_3_HOOK, T.Z.Messages.CLAN_WELCOME_MESSAGE_4_HOOK, T.Z.Messages.CLAN_WELCOME_MESSAGE_5_HOOK, T.Z.Messages.CLAN_WELCOME_MESSAGE_6_HOOK, T.Z.Messages.CLAN_WELCOME_MESSAGE_7_HOOK, T.Z.Messages.CLAN_WELCOME_MESSAGE_8_HOOK, T.Z.Messages.CLAN_WELCOME_MESSAGE_9_HOOK],
    N = () => [T.Z.Messages.CLAN_WELCOME_MESSAGE_0, T.Z.Messages.CLAN_WELCOME_MESSAGE_1, T.Z.Messages.CLAN_WELCOME_MESSAGE_2, T.Z.Messages.CLAN_WELCOME_MESSAGE_3, T.Z.Messages.CLAN_WELCOME_MESSAGE_4, T.Z.Messages.CLAN_WELCOME_MESSAGE_5, T.Z.Messages.CLAN_WELCOME_MESSAGE_6, T.Z.Messages.CLAN_WELCOME_MESSAGE_7, T.Z.Messages.CLAN_WELCOME_MESSAGE_8, T.Z.Messages.CLAN_WELCOME_MESSAGE_9],
    O = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return S();
            case 'CLAN':
                return v();
        }
    },
    R = (e) => {
        switch (e) {
            case 'NORMAL':
            default:
                return A();
            case 'CLAN':
                return N();
        }
    };
function C(e, t) {
    let n = O(t),
        r = m.default.extractTimestamp(e) % n.length;
    return n[r];
}
function y(e, t) {
    let n = R(t),
        r = m.default.extractTimestamp(e) % n.length;
    return n[r];
}
function b(e) {
    return (0, i.Rp)(
        T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
            username: e,
            usernameOnClick: I.dG4
        })
    );
}
function L(e, t) {
    let n = E.Z.getChannel(t);
    return null == n || null == f.Z.getGuild(n.getGuildId())
        ? b(e)
        : (0, i.Rp)(
              T.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
                  username: e,
                  usernameOnClick: I.dG4
              })
          );
}
function D(e) {
    return null == g[e] ? null : T.Z.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({ learnOnClick: { onClick: () => window.open(g[e]) } });
}
function M(e, t, n) {
    let r = E.Z.getChannel(t);
    if (null == r) return null;
    let a = f.Z.getGuild(r.getGuildId());
    return null == a
        ? null
        : (0, i.Rp)(
              T.Z.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
                  username: e,
                  guildName: a.name,
                  time:
                      '' !== n
                          ? new Date(n).toLocaleString(T.Z.getLocale(), {
                                hour: 'numeric',
                                minute: '2-digit'
                            })
                          : ''
              })
          );
}
function P(e, t) {
    let n = E.Z.getChannel(t);
    if (null == n) return null;
    let r = f.Z.getGuild(n.getGuildId());
    return null == r
        ? null
        : (0, i.Rp)(
              T.Z.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
                  username: e,
                  guildName: r.name
              })
          );
}
function U(e) {
    let t = E.Z.getChannel(e);
    if (null == t) return null;
    let n = f.Z.getGuild(t.getGuildId());
    return null == n ? null : (0, i.Rp)(T.Z.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({ guildName: n.name }));
}
function w(e, t) {
    var n, r, E, f;
    let m = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
        g = null != m && 'string' != typeof m ? h.default.getUser(m.id) : void 0,
        S = e.channel_id,
        A = p.ZP.getName(null, S, e.author);
    switch (e.type) {
        case I.uaV.RECIPIENT_ADD:
            if (null == g) return;
            return (0, i.Rp)(
                T.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
                    username: A,
                    usernameOnClick: I.dG4,
                    otherUsername: p.ZP.getName(null, S, g),
                    otherUsernameOnClick: I.dG4
                })
            );
        case I.uaV.RECIPIENT_REMOVE:
            if (null == g) return;
            let v = e.author;
            if (null == v || v.id === g.id)
                return (0, i.Rp)(
                    T.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
                        username: A,
                        usernameOnClick: I.dG4
                    })
                );
            return (0, i.Rp)(
                T.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
                    username: A,
                    usernameOnClick: I.dG4,
                    otherUsername: p.ZP.getName(null, S, g),
                    otherUsernameOnClick: I.dG4
                })
            );
        case I.uaV.CALL:
            let { call: N } = e;
            if (null != N && -1 === N.participants.indexOf(_.default.getId()))
                return (0, i.Rp)(
                    T.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
                        username: A,
                        usernameOnClick: I.dG4
                    })
                );
            return;
        case I.uaV.CHANNEL_NAME_CHANGE:
            return (0, i.Rp)(
                (t.isForumPost() ? T.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : T.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
                    username: A,
                    usernameOnClick: I.dG4,
                    channelName: e.content
                })
            );
        case I.uaV.CHANNEL_ICON_CHANGE:
            return (0, i.Rp)(
                T.Z.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
                    username: A,
                    usernameOnClick: I.dG4
                })
            );
        case I.uaV.CHANNEL_PINNED_MESSAGE:
            return (0, i.Rp)(
                T.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
                    username: A,
                    usernameOnClick: I.dG4
                })
            );
        case I.uaV.USER_JOIN:
            let O = x(t.guild_id);
            return (0, i.Rp)(
                y(e.id, O).astFormat({
                    username: A,
                    usernameOnClick: I.dG4
                })
            );
        case I.uaV.GUILD_BOOST:
            return b(A);
        case I.uaV.GUILD_BOOST_TIER_1:
        case I.uaV.GUILD_BOOST_TIER_2:
        case I.uaV.GUILD_BOOST_TIER_3:
            return L(A, S);
        case I.uaV.GUILD_INVITE_REMINDER:
            return T.Z.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
        case I.uaV.THREAD_STARTER_MESSAGE:
            return T.Z.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
                username: A,
                threadName: t.name
            });
        case I.uaV.ROLE_SUBSCRIPTION_PURCHASE:
            if (e instanceof d.ZP) return null;
            return (0, i.Rp)(
                (0, o.vp)({
                    username: A,
                    guildId: t.guild_id,
                    roleSubscriptionData: e.role_subscription_data
                })
            );
        case I.uaV.PURCHASE_NOTIFICATION:
            if (e instanceof d.ZP || (null === (E = e.purchase_notification) || void 0 === E ? void 0 : null === (r = E.guild_product_purchase) || void 0 === r ? void 0 : r.product_name) == null) return null;
            return (0, i.Rp)(
                (0, a.i)({
                    username: A,
                    productName: e.purchase_notification.guild_product_purchase.product_name
                })
            );
        case I.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
            if (e instanceof d.ZP) return null;
            let R = (0, l.ZH)((0, s.e5)(e));
            return (0, i.Rp)(
                (0, u.Y)({
                    application: e.application,
                    username: R.nick
                })
            );
        case I.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
            if (e instanceof d.ZP) return null;
            return (0, i.Rp)(
                (0, c.B2)({
                    application: e.application,
                    username: (0, l.ZH)((0, s.e5)(e)).nick
                })
            );
        case I.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
            if (e instanceof d.ZP) return null;
            return (0, i.Rp)(
                (0, c.hj)({
                    application: e.application,
                    username: (0, l.ZH)((0, s.e5)(e)).nick
                })
            );
        case I.uaV.AUTO_MODERATION_ACTION:
            if (
                null === (f = e.embeds) || void 0 === f
                    ? void 0
                    : f.some((e) => {
                          let { type: t } = e;
                          return t === I.hBH.AUTO_MODERATION_NOTIFICATION;
                      })
            )
                return U(S);
            return e.content;
        case I.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
            return M(A, S, e.content);
        case I.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
            return P(A, S);
        default:
            return e.content;
    }
}
function x(e) {
    var t;
    return (null === (t = f.Z.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(I.oNc.CLAN)) ? 'CLAN' : 'NORMAL';
}
t.Z = {
    stringify: w,
    getSystemMessageUserJoin: C,
    getSystemMessageUserJoinMobile: y,
    getSystemMessageBotJoin: D,
    getWelcomeMessageKind: x
};
