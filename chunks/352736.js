"use strict";
s.r(t);
var a = s("25209"),
  n = s("97797"),
  E = s("35125"),
  _ = s("786761"),
  r = s("739566"),
  l = s("499401"),
  u = s("693912"),
  M = s("23750"),
  S = s("314897"),
  i = s("592125"),
  T = s("430824"),
  I = s("594174"),
  N = s("5192"),
  o = s("709054"),
  A = s("981631"),
  O = s("689938");
let g = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  d = () => [O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
  f = () => [O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013];

function c(e) {
  let t = f(),
    s = o.default.extractTimestamp(e) % t.length;
  return t[s]
}

function R(e) {
  return (0, a.astToString)(O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: A.NOOP
  }))
}

function G(e, t) {
  let s = i.default.getChannel(t);
  return null == s || null == T.default.getGuild(s.getGuildId()) ? R(e) : (0, a.astToString)(O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: A.NOOP
  }))
}
t.default = {
  stringify: function(e, t) {
    var s, o, g, d;
    let f = null === (s = e.mentions) || void 0 === s ? void 0 : s[0],
      L = null != f && "string" != typeof f ? I.default.getUser(f.id) : void 0,
      m = e.channel_id,
      C = N.default.getName(null, m, e.author);
    switch (e.type) {
      case A.MessageTypes.RECIPIENT_ADD:
        if (null == L) return;
        return (0, a.astToString)(O.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
          username: C,
          usernameOnClick: A.NOOP,
          otherUsername: N.default.getName(null, m, L),
          otherUsernameOnClick: A.NOOP
        }));
      case A.MessageTypes.RECIPIENT_REMOVE:
        if (null == L) return;
        let D = e.author;
        if (null == D || D.id === L.id) return (0, a.astToString)(O.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
          username: C,
          usernameOnClick: A.NOOP
        }));
        return (0, a.astToString)(O.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
          username: C,
          usernameOnClick: A.NOOP,
          otherUsername: N.default.getName(null, m, L),
          otherUsernameOnClick: A.NOOP
        }));
      case A.MessageTypes.CALL:
        let {
          call: p
        } = e;
        if (null != p && -1 === p.participants.indexOf(S.default.getId())) return (0, a.astToString)(O.default.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
          username: C,
          usernameOnClick: A.NOOP
        }));
        return;
      case A.MessageTypes.CHANNEL_NAME_CHANGE:
        return (0, a.astToString)((t.isForumPost() ? O.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : O.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
          username: C,
          usernameOnClick: A.NOOP,
          channelName: e.content
        }));
      case A.MessageTypes.CHANNEL_ICON_CHANGE:
        return (0, a.astToString)(O.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
          username: C,
          usernameOnClick: A.NOOP
        }));
      case A.MessageTypes.CHANNEL_PINNED_MESSAGE:
        return (0, a.astToString)(O.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
          username: C,
          usernameOnClick: A.NOOP
        }));
      case A.MessageTypes.USER_JOIN:
        return (0, a.astToString)(c(e.id).astFormat({
          username: C,
          usernameOnClick: A.NOOP
        }));
      case A.MessageTypes.GUILD_BOOST:
        return R(C);
      case A.MessageTypes.GUILD_BOOST_TIER_1:
      case A.MessageTypes.GUILD_BOOST_TIER_2:
      case A.MessageTypes.GUILD_BOOST_TIER_3:
        return G(C, m);
      case A.MessageTypes.GUILD_INVITE_REMINDER:
        return O.default.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
      case A.MessageTypes.THREAD_STARTER_MESSAGE:
        return O.default.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
          username: C,
          threadName: t.name
        });
      case A.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof M.default) return null;
        return (0, a.astToString)((0, E.getRoleSubscriptionPurchaseSystemMessageContentMobile)({
          username: C,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case A.MessageTypes.PURCHASE_NOTIFICATION:
        if (e instanceof M.default || (null === (g = e.purchase_notification) || void 0 === g ? void 0 : null === (o = g.guild_product_purchase) || void 0 === o ? void 0 : o.product_name) == null) return null;
        return (0, a.astToString)((0, n.getGuildProductPurchaseSystemMessageContentMobile)({
          username: C,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case A.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof M.default) return null;
        let U = (0, r.getMessageAuthor)((0, _.createMessageRecord)(e));
        return (0, a.astToString)((0, l.getApplicationSubscriptionSystemMessageASTContent)({
          application: e.application,
          username: U.nick
        }));
      case A.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof M.default) return null;
        return (0, a.astToString)((0, u.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
          application: e.application,
          username: (0, r.getMessageAuthor)((0, _.createMessageRecord)(e)).nick
        }));
      case A.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof M.default) return null;
        return (0, a.astToString)((0, u.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
          application: e.application,
          username: (0, r.getMessageAuthor)((0, _.createMessageRecord)(e)).nick
        }));
      case A.MessageTypes.AUTO_MODERATION_ACTION:
        if (null === (d = e.embeds) || void 0 === d ? void 0 : d.some(e => {
            let {
              type: t
            } = e;
            return t === A.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let t = i.default.getChannel(e);
          if (null == t) return null;
          let s = T.default.getGuild(t.getGuildId());
          return null == s ? null : (0, a.astToString)(O.default.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
            guildName: s.name
          }))
        }(m);
        return e.content;
      case A.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, t, s) {
          let n = i.default.getChannel(t);
          if (null == n) return null;
          let E = T.default.getGuild(n.getGuildId());
          return null == E ? null : (0, a.astToString)(O.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: E.name,
            time: "" !== s ? new Date(s).toLocaleString(O.default.getLocale(), {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(C, m, e.content);
      case A.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, t) {
          let s = i.default.getChannel(t);
          if (null == s) return null;
          let n = T.default.getGuild(s.getGuildId());
          return null == n ? null : (0, a.astToString)(O.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: n.name
          }))
        }(C, m);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = d(),
      s = o.default.extractTimestamp(e) % t.length;
    return t[s]
  },
  getSystemMessageUserJoinMobile: c,
  getSystemMessageBotJoin: function(e) {
    return null == g[e] ? null : O.default.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
      learnOnClick: {
        onClick: () => window.open(g[e])
      }
    })
  }
}