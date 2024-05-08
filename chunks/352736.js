"use strict";
a.r(t);
var s = a("25209"),
  n = a("97797"),
  E = a("35125"),
  l = a("786761"),
  _ = a("739566"),
  r = a("499401"),
  u = a("693912"),
  M = a("23750"),
  i = a("314897"),
  S = a("592125"),
  d = a("430824"),
  T = a("594174"),
  o = a("5192"),
  N = a("709054"),
  I = a("981631"),
  A = a("689938");
let O = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  g = () => [A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
  f = () => [A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013];

function c(e) {
  let t = f(),
    a = N.default.extractTimestamp(e) % t.length;
  return t[a]
}

function R(e) {
  return (0, s.astToString)(A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: I.NOOP
  }))
}

function C(e, t) {
  let a = S.default.getChannel(t);
  return null == a || null == d.default.getGuild(a.getGuildId()) ? R(e) : (0, s.astToString)(A.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: I.NOOP
  }))
}
t.default = {
  stringify: function(e, t) {
    var a, N, O, g;
    let f = null === (a = e.mentions) || void 0 === a ? void 0 : a[0],
      L = null != f && "string" != typeof f ? T.default.getUser(f.id) : void 0,
      G = e.channel_id,
      m = o.default.getName(null, G, e.author);
    switch (e.type) {
      case I.MessageTypes.RECIPIENT_ADD:
        if (null == L) return;
        return (0, s.astToString)(A.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
          username: m,
          usernameOnClick: I.NOOP,
          otherUsername: o.default.getName(null, G, L),
          otherUsernameOnClick: I.NOOP
        }));
      case I.MessageTypes.RECIPIENT_REMOVE:
        if (null == L) return;
        let U = e.author;
        if (null == U || U.id === L.id) return (0, s.astToString)(A.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
          username: m,
          usernameOnClick: I.NOOP
        }));
        return (0, s.astToString)(A.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
          username: m,
          usernameOnClick: I.NOOP,
          otherUsername: o.default.getName(null, G, L),
          otherUsernameOnClick: I.NOOP
        }));
      case I.MessageTypes.CALL:
        let {
          call: p
        } = e;
        if (null != p && -1 === p.participants.indexOf(i.default.getId())) return (0, s.astToString)(A.default.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
          username: m,
          usernameOnClick: I.NOOP
        }));
        return;
      case I.MessageTypes.CHANNEL_NAME_CHANGE:
        return (0, s.astToString)((t.isForumPost() ? A.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : A.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
          username: m,
          usernameOnClick: I.NOOP,
          channelName: e.content
        }));
      case I.MessageTypes.CHANNEL_ICON_CHANGE:
        return (0, s.astToString)(A.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
          username: m,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.CHANNEL_PINNED_MESSAGE:
        return (0, s.astToString)(A.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
          username: m,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.USER_JOIN:
        return (0, s.astToString)(c(e.id).astFormat({
          username: m,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.GUILD_BOOST:
        return R(m);
      case I.MessageTypes.GUILD_BOOST_TIER_1:
      case I.MessageTypes.GUILD_BOOST_TIER_2:
      case I.MessageTypes.GUILD_BOOST_TIER_3:
        return C(m, G);
      case I.MessageTypes.GUILD_INVITE_REMINDER:
        return A.default.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
      case I.MessageTypes.THREAD_STARTER_MESSAGE:
        return A.default.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
          username: m,
          threadName: t.name
        });
      case I.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof M.default) return null;
        return (0, s.astToString)((0, E.getRoleSubscriptionPurchaseSystemMessageContentMobile)({
          username: m,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case I.MessageTypes.PURCHASE_NOTIFICATION:
        if (e instanceof M.default || (null === (O = e.purchase_notification) || void 0 === O ? void 0 : null === (N = O.guild_product_purchase) || void 0 === N ? void 0 : N.product_name) == null) return null;
        return (0, s.astToString)((0, n.getGuildProductPurchaseSystemMessageContentMobile)({
          username: m,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case I.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof M.default) return null;
        let D = (0, _.getMessageAuthor)((0, l.createMessageRecord)(e));
        return (0, s.astToString)((0, r.getApplicationSubscriptionSystemMessageASTContent)({
          application: e.application,
          username: D.nick
        }));
      case I.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof M.default) return null;
        return (0, s.astToString)((0, u.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
          application: e.application,
          username: (0, _.getMessageAuthor)((0, l.createMessageRecord)(e)).nick
        }));
      case I.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof M.default) return null;
        return (0, s.astToString)((0, u.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
          application: e.application,
          username: (0, _.getMessageAuthor)((0, l.createMessageRecord)(e)).nick
        }));
      case I.MessageTypes.AUTO_MODERATION_ACTION:
        if (null === (g = e.embeds) || void 0 === g ? void 0 : g.some(e => {
            let {
              type: t
            } = e;
            return t === I.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let t = S.default.getChannel(e);
          if (null == t) return null;
          let a = d.default.getGuild(t.getGuildId());
          return null == a ? null : (0, s.astToString)(A.default.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
            guildName: a.name
          }))
        }(G);
        return e.content;
      case I.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, t, a) {
          let n = S.default.getChannel(t);
          if (null == n) return null;
          let E = d.default.getGuild(n.getGuildId());
          return null == E ? null : (0, s.astToString)(A.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: E.name,
            time: "" !== a ? new Date(a).toLocaleString(A.default.getLocale(), {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(m, G, e.content);
      case I.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, t) {
          let a = S.default.getChannel(t);
          if (null == a) return null;
          let n = d.default.getGuild(a.getGuildId());
          return null == n ? null : (0, s.astToString)(A.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: n.name
          }))
        }(m, G);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = g(),
      a = N.default.extractTimestamp(e) % t.length;
    return t[a]
  },
  getSystemMessageUserJoinMobile: c,
  getSystemMessageBotJoin: function(e) {
    return null == O[e] ? null : A.default.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
      learnOnClick: {
        onClick: () => window.open(O[e])
      }
    })
  }
}