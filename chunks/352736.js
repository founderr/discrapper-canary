"use strict";
s.r(t);
var a = s("25209"),
  n = s("97797"),
  r = s("35125"),
  u = s("786761"),
  i = s("739566"),
  l = s("499401"),
  E = s("693912"),
  _ = s("23750"),
  o = s("314897"),
  S = s("592125"),
  M = s("430824"),
  d = s("594174"),
  c = s("5192"),
  I = s("709054"),
  T = s("981631"),
  N = s("689938");
let O = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  A = () => [N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
  f = () => [N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013];

function g(e) {
  let t = f(),
    s = I.default.extractTimestamp(e) % t.length;
  return t[s]
}

function m(e) {
  return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: T.NOOP
  }))
}

function R(e, t) {
  let s = S.default.getChannel(t);
  return null == s || null == M.default.getGuild(s.getGuildId()) ? m(e) : (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: T.NOOP
  }))
}
t.default = {
  stringify: function(e, t) {
    var s, I, O, A;
    let f = null === (s = e.mentions) || void 0 === s ? void 0 : s[0],
      C = null != f && "string" != typeof f ? d.default.getUser(f.id) : void 0,
      L = e.channel_id,
      G = c.default.getName(null, L, e.author);
    switch (e.type) {
      case T.MessageTypes.RECIPIENT_ADD:
        if (null == C) return;
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
          username: G,
          usernameOnClick: T.NOOP,
          otherUsername: c.default.getName(null, L, C),
          otherUsernameOnClick: T.NOOP
        }));
      case T.MessageTypes.RECIPIENT_REMOVE:
        if (null == C) return;
        let p = e.author;
        if (null == p || p.id === C.id) return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
          username: G,
          usernameOnClick: T.NOOP
        }));
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
          username: G,
          usernameOnClick: T.NOOP,
          otherUsername: c.default.getName(null, L, C),
          otherUsernameOnClick: T.NOOP
        }));
      case T.MessageTypes.CALL:
        let {
          call: h
        } = e;
        if (null != h && -1 === h.participants.indexOf(o.default.getId())) return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
          username: G,
          usernameOnClick: T.NOOP
        }));
        return;
      case T.MessageTypes.CHANNEL_NAME_CHANGE:
        return (0, a.astToString)((t.isForumPost() ? N.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : N.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
          username: G,
          usernameOnClick: T.NOOP,
          channelName: e.content
        }));
      case T.MessageTypes.CHANNEL_ICON_CHANGE:
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
          username: G,
          usernameOnClick: T.NOOP
        }));
      case T.MessageTypes.CHANNEL_PINNED_MESSAGE:
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
          username: G,
          usernameOnClick: T.NOOP
        }));
      case T.MessageTypes.USER_JOIN:
        return (0, a.astToString)(g(e.id).astFormat({
          username: G,
          usernameOnClick: T.NOOP
        }));
      case T.MessageTypes.GUILD_BOOST:
        return m(G);
      case T.MessageTypes.GUILD_BOOST_TIER_1:
      case T.MessageTypes.GUILD_BOOST_TIER_2:
      case T.MessageTypes.GUILD_BOOST_TIER_3:
        return R(G, L);
      case T.MessageTypes.GUILD_INVITE_REMINDER:
        return N.default.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
      case T.MessageTypes.THREAD_STARTER_MESSAGE:
        return N.default.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
          username: G,
          threadName: t.name
        });
      case T.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof _.default) return null;
        return (0, a.astToString)((0, r.getRoleSubscriptionPurchaseSystemMessageContentMobile)({
          username: G,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case T.MessageTypes.PURCHASE_NOTIFICATION:
        if (e instanceof _.default || (null === (O = e.purchase_notification) || void 0 === O ? void 0 : null === (I = O.guild_product_purchase) || void 0 === I ? void 0 : I.product_name) == null) return null;
        return (0, a.astToString)((0, n.getGuildProductPurchaseSystemMessageContentMobile)({
          username: G,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case T.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof _.default) return null;
        let P = (0, i.getMessageAuthor)((0, u.createMessageRecord)(e));
        return (0, a.astToString)((0, l.getApplicationSubscriptionSystemMessageASTContent)({
          application: e.application,
          username: P.nick
        }));
      case T.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof _.default) return null;
        return (0, a.astToString)((0, E.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
          application: e.application,
          username: (0, i.getMessageAuthor)((0, u.createMessageRecord)(e)).nick
        }));
      case T.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof _.default) return null;
        return (0, a.astToString)((0, E.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
          application: e.application,
          username: (0, i.getMessageAuthor)((0, u.createMessageRecord)(e)).nick
        }));
      case T.MessageTypes.AUTO_MODERATION_ACTION:
        if (null === (A = e.embeds) || void 0 === A ? void 0 : A.some(e => {
            let {
              type: t
            } = e;
            return t === T.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let t = S.default.getChannel(e);
          if (null == t) return null;
          let s = M.default.getGuild(t.getGuildId());
          return null == s ? null : (0, a.astToString)(N.default.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
            guildName: s.name
          }))
        }(L);
        return e.content;
      case T.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, t, s) {
          let n = S.default.getChannel(t);
          if (null == n) return null;
          let r = M.default.getGuild(n.getGuildId());
          return null == r ? null : (0, a.astToString)(N.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: r.name,
            time: "" !== s ? new Date(s).toLocaleString(N.default.getLocale(), {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(G, L, e.content);
      case T.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, t) {
          let s = S.default.getChannel(t);
          if (null == s) return null;
          let n = M.default.getGuild(s.getGuildId());
          return null == n ? null : (0, a.astToString)(N.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: n.name
          }))
        }(G, L);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = A(),
      s = I.default.extractTimestamp(e) % t.length;
    return t[s]
  },
  getSystemMessageUserJoinMobile: g,
  getSystemMessageBotJoin: function(e) {
    return null == O[e] ? null : N.default.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
      learnOnClick: {
        onClick: () => window.open(O[e])
      }
    })
  }
}