"use strict";
s.r(t);
var a, E, n = s("25209"),
  _ = s("97797"),
  l = s("35125"),
  u = s("786761"),
  M = s("739566"),
  r = s("499401"),
  S = s("693912"),
  i = s("23750"),
  d = s("314897"),
  A = s("592125"),
  N = s("430824"),
  O = s("594174"),
  T = s("5192"),
  g = s("709054"),
  I = s("981631"),
  o = s("689938");
let f = {
  "234395307759108106": "https://groovy.bot/commands",
  "365975655608745985": "https://www.pokecord.com/getting-started",
  "512412940897484800": "http://jameslantz.net/smilebot"
};
(a = E || (E = {})).NORMAL = "NORMAL", a.CLAN = "CLAN";
let c = () => [o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
  C = () => [o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013],
  L = () => [o.default.Messages.CLAN_WELCOME_MESSAGE_0_HOOK, o.default.Messages.CLAN_WELCOME_MESSAGE_1_HOOK, o.default.Messages.CLAN_WELCOME_MESSAGE_2_HOOK, o.default.Messages.CLAN_WELCOME_MESSAGE_3_HOOK, o.default.Messages.CLAN_WELCOME_MESSAGE_4_HOOK, o.default.Messages.CLAN_WELCOME_MESSAGE_5_HOOK, o.default.Messages.CLAN_WELCOME_MESSAGE_6_HOOK, o.default.Messages.CLAN_WELCOME_MESSAGE_7_HOOK, o.default.Messages.CLAN_WELCOME_MESSAGE_8_HOOK, o.default.Messages.CLAN_WELCOME_MESSAGE_9_HOOK],
  G = () => [o.default.Messages.CLAN_WELCOME_MESSAGE_0, o.default.Messages.CLAN_WELCOME_MESSAGE_1, o.default.Messages.CLAN_WELCOME_MESSAGE_2, o.default.Messages.CLAN_WELCOME_MESSAGE_3, o.default.Messages.CLAN_WELCOME_MESSAGE_4, o.default.Messages.CLAN_WELCOME_MESSAGE_5, o.default.Messages.CLAN_WELCOME_MESSAGE_6, o.default.Messages.CLAN_WELCOME_MESSAGE_7, o.default.Messages.CLAN_WELCOME_MESSAGE_8, o.default.Messages.CLAN_WELCOME_MESSAGE_9],
  R = e => {
    switch (e) {
      case "NORMAL":
      default:
        return c();
      case "CLAN":
        return L()
    }
  },
  m = e => {
    switch (e) {
      case "NORMAL":
      default:
        return C();
      case "CLAN":
        return G()
    }
  };

function U(e, t) {
  let s = m(t),
    a = g.default.extractTimestamp(e) % s.length;
  return s[a]
}

function D(e) {
  return (0, n.astToString)(o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: I.NOOP
  }))
}

function p(e, t) {
  let s = A.default.getChannel(t);
  return null == s || null == N.default.getGuild(s.getGuildId()) ? D(e) : (0, n.astToString)(o.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: I.NOOP
  }))
}

function h(e) {
  var t;
  return (null === (t = N.default.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(I.GuildFeatures.CLAN)) ? "CLAN" : "NORMAL"
}
t.default = {
  stringify: function(e, t) {
    var s, a, E, g;
    let f = null === (s = e.mentions) || void 0 === s ? void 0 : s[0],
      c = null != f && "string" != typeof f ? O.default.getUser(f.id) : void 0,
      C = e.channel_id,
      L = T.default.getName(null, C, e.author);
    switch (e.type) {
      case I.MessageTypes.RECIPIENT_ADD:
        if (null == c) return;
        return (0, n.astToString)(o.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
          username: L,
          usernameOnClick: I.NOOP,
          otherUsername: T.default.getName(null, C, c),
          otherUsernameOnClick: I.NOOP
        }));
      case I.MessageTypes.RECIPIENT_REMOVE:
        if (null == c) return;
        let G = e.author;
        if (null == G || G.id === c.id) return (0, n.astToString)(o.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
          username: L,
          usernameOnClick: I.NOOP
        }));
        return (0, n.astToString)(o.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
          username: L,
          usernameOnClick: I.NOOP,
          otherUsername: T.default.getName(null, C, c),
          otherUsernameOnClick: I.NOOP
        }));
      case I.MessageTypes.CALL:
        let {
          call: R
        } = e;
        if (null != R && -1 === R.participants.indexOf(d.default.getId())) return (0, n.astToString)(o.default.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
          username: L,
          usernameOnClick: I.NOOP
        }));
        return;
      case I.MessageTypes.CHANNEL_NAME_CHANGE:
        return (0, n.astToString)((t.isForumPost() ? o.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : o.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
          username: L,
          usernameOnClick: I.NOOP,
          channelName: e.content
        }));
      case I.MessageTypes.CHANNEL_ICON_CHANGE:
        return (0, n.astToString)(o.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
          username: L,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.CHANNEL_PINNED_MESSAGE:
        return (0, n.astToString)(o.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
          username: L,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.USER_JOIN:
        let m = h(t.guild_id);
        return (0, n.astToString)(U(e.id, m).astFormat({
          username: L,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.GUILD_BOOST:
        return D(L);
      case I.MessageTypes.GUILD_BOOST_TIER_1:
      case I.MessageTypes.GUILD_BOOST_TIER_2:
      case I.MessageTypes.GUILD_BOOST_TIER_3:
        return p(L, C);
      case I.MessageTypes.GUILD_INVITE_REMINDER:
        return o.default.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
      case I.MessageTypes.THREAD_STARTER_MESSAGE:
        return o.default.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
          username: L,
          threadName: t.name
        });
      case I.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof i.default) return null;
        return (0, n.astToString)((0, l.getRoleSubscriptionPurchaseSystemMessageContentMobile)({
          username: L,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case I.MessageTypes.PURCHASE_NOTIFICATION:
        if (e instanceof i.default || (null === (E = e.purchase_notification) || void 0 === E ? void 0 : null === (a = E.guild_product_purchase) || void 0 === a ? void 0 : a.product_name) == null) return null;
        return (0, n.astToString)((0, _.getGuildProductPurchaseSystemMessageContentMobile)({
          username: L,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case I.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof i.default) return null;
        let H = (0, M.getMessageAuthor)((0, u.createMessageRecord)(e));
        return (0, n.astToString)((0, r.getApplicationSubscriptionSystemMessageASTContent)({
          application: e.application,
          username: H.nick
        }));
      case I.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof i.default) return null;
        return (0, n.astToString)((0, S.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
          application: e.application,
          username: (0, M.getMessageAuthor)((0, u.createMessageRecord)(e)).nick
        }));
      case I.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof i.default) return null;
        return (0, n.astToString)((0, S.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
          application: e.application,
          username: (0, M.getMessageAuthor)((0, u.createMessageRecord)(e)).nick
        }));
      case I.MessageTypes.AUTO_MODERATION_ACTION:
        if (null === (g = e.embeds) || void 0 === g ? void 0 : g.some(e => {
            let {
              type: t
            } = e;
            return t === I.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let t = A.default.getChannel(e);
          if (null == t) return null;
          let s = N.default.getGuild(t.getGuildId());
          return null == s ? null : (0, n.astToString)(o.default.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
            guildName: s.name
          }))
        }(C);
        return e.content;
      case I.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, t, s) {
          let a = A.default.getChannel(t);
          if (null == a) return null;
          let E = N.default.getGuild(a.getGuildId());
          return null == E ? null : (0, n.astToString)(o.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: E.name,
            time: "" !== s ? new Date(s).toLocaleString(o.default.getLocale(), {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(L, C, e.content);
      case I.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, t) {
          let s = A.default.getChannel(t);
          if (null == s) return null;
          let a = N.default.getGuild(s.getGuildId());
          return null == a ? null : (0, n.astToString)(o.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: a.name
          }))
        }(L, C);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e, t) {
    let s = R(t),
      a = g.default.extractTimestamp(e) % s.length;
    return s[a]
  },
  getSystemMessageUserJoinMobile: U,
  getSystemMessageBotJoin: function(e) {
    return null == f[e] ? null : o.default.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
      learnOnClick: {
        onClick: () => window.open(f[e])
      }
    })
  },
  getWelcomeMessageKind: h
}