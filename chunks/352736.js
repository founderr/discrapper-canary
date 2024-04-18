"use strict";
s.r(t);
var a = s("25209"),
  n = s("97797"),
  r = s("35125"),
  _ = s("786761"),
  l = s("739566"),
  u = s("499401"),
  E = s("693912"),
  i = s("23750"),
  S = s("314897"),
  o = s("592125"),
  M = s("430824"),
  d = s("594174"),
  I = s("5192"),
  T = s("709054"),
  O = s("981631"),
  N = s("689938");
let c = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  A = () => [N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
  g = () => [N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013];

function f(e) {
  let t = g(),
    s = T.default.extractTimestamp(e) % t.length;
  return t[s]
}

function C(e) {
  return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: O.NOOP
  }))
}

function R(e, t) {
  let s = o.default.getChannel(t);
  return null == s || null == M.default.getGuild(s.getGuildId()) ? C(e) : (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: O.NOOP
  }))
}
t.default = {
  stringify: function(e, t) {
    var s, T, c, A;
    let g = null === (s = e.mentions) || void 0 === s ? void 0 : s[0],
      m = null != g && "string" != typeof g ? d.default.getUser(g.id) : void 0,
      L = e.channel_id,
      G = I.default.getName(null, L, e.author);
    switch (e.type) {
      case O.MessageTypes.RECIPIENT_ADD:
        if (null == m) return;
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
          username: G,
          usernameOnClick: O.NOOP,
          otherUsername: I.default.getName(null, L, m),
          otherUsernameOnClick: O.NOOP
        }));
      case O.MessageTypes.RECIPIENT_REMOVE:
        if (null == m) return;
        let U = e.author;
        if (null == U || U.id === m.id) return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
          username: G,
          usernameOnClick: O.NOOP
        }));
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
          username: G,
          usernameOnClick: O.NOOP,
          otherUsername: I.default.getName(null, L, m),
          otherUsernameOnClick: O.NOOP
        }));
      case O.MessageTypes.CALL:
        let {
          call: p
        } = e;
        if (null != p && -1 === p.participants.indexOf(S.default.getId())) return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
          username: G,
          usernameOnClick: O.NOOP
        }));
        return;
      case O.MessageTypes.CHANNEL_NAME_CHANGE:
        return (0, a.astToString)((t.isForumPost() ? N.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : N.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
          username: G,
          usernameOnClick: O.NOOP,
          channelName: e.content
        }));
      case O.MessageTypes.CHANNEL_ICON_CHANGE:
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
          username: G,
          usernameOnClick: O.NOOP
        }));
      case O.MessageTypes.CHANNEL_PINNED_MESSAGE:
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
          username: G,
          usernameOnClick: O.NOOP
        }));
      case O.MessageTypes.USER_JOIN:
        return (0, a.astToString)(f(e.id).astFormat({
          username: G,
          usernameOnClick: O.NOOP
        }));
      case O.MessageTypes.GUILD_BOOST:
        return C(G);
      case O.MessageTypes.GUILD_BOOST_TIER_1:
      case O.MessageTypes.GUILD_BOOST_TIER_2:
      case O.MessageTypes.GUILD_BOOST_TIER_3:
        return R(G, L);
      case O.MessageTypes.GUILD_INVITE_REMINDER:
        return N.default.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
      case O.MessageTypes.THREAD_STARTER_MESSAGE:
        return N.default.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
          username: G,
          threadName: t.name
        });
      case O.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof i.default) return null;
        return (0, a.astToString)((0, r.getRoleSubscriptionPurchaseSystemMessageContentMobile)({
          username: G,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case O.MessageTypes.PURCHASE_NOTIFICATION:
        if (e instanceof i.default || (null === (c = e.purchase_notification) || void 0 === c ? void 0 : null === (T = c.guild_product_purchase) || void 0 === T ? void 0 : T.product_name) == null) return null;
        return (0, a.astToString)((0, n.getGuildProductPurchaseSystemMessageContentMobile)({
          username: G,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case O.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof i.default) return null;
        let P = (0, l.getMessageAuthor)((0, _.createMessageRecord)(e));
        return (0, a.astToString)((0, u.getApplicationSubscriptionSystemMessageASTContent)({
          application: e.application,
          username: P.nick
        }));
      case O.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof i.default) return null;
        return (0, a.astToString)((0, E.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
          application: e.application,
          username: (0, l.getMessageAuthor)((0, _.createMessageRecord)(e)).nick
        }));
      case O.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof i.default) return null;
        return (0, a.astToString)((0, E.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
          application: e.application,
          username: (0, l.getMessageAuthor)((0, _.createMessageRecord)(e)).nick
        }));
      case O.MessageTypes.AUTO_MODERATION_ACTION:
        if (null === (A = e.embeds) || void 0 === A ? void 0 : A.some(e => {
            let {
              type: t
            } = e;
            return t === O.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let t = o.default.getChannel(e);
          if (null == t) return null;
          let s = M.default.getGuild(t.getGuildId());
          return null == s ? null : (0, a.astToString)(N.default.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
            guildName: s.name
          }))
        }(L);
        return e.content;
      case O.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, t, s) {
          let n = o.default.getChannel(t);
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
      case O.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, t) {
          let s = o.default.getChannel(t);
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
      s = T.default.extractTimestamp(e) % t.length;
    return t[s]
  },
  getSystemMessageUserJoinMobile: f,
  getSystemMessageBotJoin: function(e) {
    return null == c[e] ? null : N.default.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
      learnOnClick: {
        onClick: () => window.open(c[e])
      }
    })
  }
}