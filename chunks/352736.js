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
  S = a("314897"),
  i = a("592125"),
  T = a("430824"),
  d = a("594174"),
  N = a("5192"),
  I = a("709054"),
  o = a("981631"),
  O = a("689938");
let A = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  g = () => [O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
  f = () => [O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013];

function c(e) {
  let t = f(),
    a = I.default.extractTimestamp(e) % t.length;
  return t[a]
}

function R(e) {
  return (0, s.astToString)(O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: o.NOOP
  }))
}

function C(e, t) {
  let a = i.default.getChannel(t);
  return null == a || null == T.default.getGuild(a.getGuildId()) ? R(e) : (0, s.astToString)(O.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: o.NOOP
  }))
}
t.default = {
  stringify: function(e, t) {
    var a, I, A, g;
    let f = null === (a = e.mentions) || void 0 === a ? void 0 : a[0],
      G = null != f && "string" != typeof f ? d.default.getUser(f.id) : void 0,
      L = e.channel_id,
      m = N.default.getName(null, L, e.author);
    switch (e.type) {
      case o.MessageTypes.RECIPIENT_ADD:
        if (null == G) return;
        return (0, s.astToString)(O.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
          username: m,
          usernameOnClick: o.NOOP,
          otherUsername: N.default.getName(null, L, G),
          otherUsernameOnClick: o.NOOP
        }));
      case o.MessageTypes.RECIPIENT_REMOVE:
        if (null == G) return;
        let U = e.author;
        if (null == U || U.id === G.id) return (0, s.astToString)(O.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
          username: m,
          usernameOnClick: o.NOOP
        }));
        return (0, s.astToString)(O.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
          username: m,
          usernameOnClick: o.NOOP,
          otherUsername: N.default.getName(null, L, G),
          otherUsernameOnClick: o.NOOP
        }));
      case o.MessageTypes.CALL:
        let {
          call: D
        } = e;
        if (null != D && -1 === D.participants.indexOf(S.default.getId())) return (0, s.astToString)(O.default.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
          username: m,
          usernameOnClick: o.NOOP
        }));
        return;
      case o.MessageTypes.CHANNEL_NAME_CHANGE:
        return (0, s.astToString)((t.isForumPost() ? O.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : O.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
          username: m,
          usernameOnClick: o.NOOP,
          channelName: e.content
        }));
      case o.MessageTypes.CHANNEL_ICON_CHANGE:
        return (0, s.astToString)(O.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
          username: m,
          usernameOnClick: o.NOOP
        }));
      case o.MessageTypes.CHANNEL_PINNED_MESSAGE:
        return (0, s.astToString)(O.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
          username: m,
          usernameOnClick: o.NOOP
        }));
      case o.MessageTypes.USER_JOIN:
        return (0, s.astToString)(c(e.id).astFormat({
          username: m,
          usernameOnClick: o.NOOP
        }));
      case o.MessageTypes.GUILD_BOOST:
        return R(m);
      case o.MessageTypes.GUILD_BOOST_TIER_1:
      case o.MessageTypes.GUILD_BOOST_TIER_2:
      case o.MessageTypes.GUILD_BOOST_TIER_3:
        return C(m, L);
      case o.MessageTypes.GUILD_INVITE_REMINDER:
        return O.default.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
      case o.MessageTypes.THREAD_STARTER_MESSAGE:
        return O.default.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
          username: m,
          threadName: t.name
        });
      case o.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof M.default) return null;
        return (0, s.astToString)((0, E.getRoleSubscriptionPurchaseSystemMessageContentMobile)({
          username: m,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case o.MessageTypes.PURCHASE_NOTIFICATION:
        if (e instanceof M.default || (null === (A = e.purchase_notification) || void 0 === A ? void 0 : null === (I = A.guild_product_purchase) || void 0 === I ? void 0 : I.product_name) == null) return null;
        return (0, s.astToString)((0, n.getGuildProductPurchaseSystemMessageContentMobile)({
          username: m,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case o.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof M.default) return null;
        let p = (0, _.getMessageAuthor)((0, l.createMessageRecord)(e));
        return (0, s.astToString)((0, r.getApplicationSubscriptionSystemMessageASTContent)({
          application: e.application,
          username: p.nick
        }));
      case o.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof M.default) return null;
        return (0, s.astToString)((0, u.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
          application: e.application,
          username: (0, _.getMessageAuthor)((0, l.createMessageRecord)(e)).nick
        }));
      case o.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof M.default) return null;
        return (0, s.astToString)((0, u.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
          application: e.application,
          username: (0, _.getMessageAuthor)((0, l.createMessageRecord)(e)).nick
        }));
      case o.MessageTypes.AUTO_MODERATION_ACTION:
        if (null === (g = e.embeds) || void 0 === g ? void 0 : g.some(e => {
            let {
              type: t
            } = e;
            return t === o.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let t = i.default.getChannel(e);
          if (null == t) return null;
          let a = T.default.getGuild(t.getGuildId());
          return null == a ? null : (0, s.astToString)(O.default.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
            guildName: a.name
          }))
        }(L);
        return e.content;
      case o.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, t, a) {
          let n = i.default.getChannel(t);
          if (null == n) return null;
          let E = T.default.getGuild(n.getGuildId());
          return null == E ? null : (0, s.astToString)(O.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: E.name,
            time: "" !== a ? new Date(a).toLocaleString(O.default.getLocale(), {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(m, L, e.content);
      case o.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, t) {
          let a = i.default.getChannel(t);
          if (null == a) return null;
          let n = T.default.getGuild(a.getGuildId());
          return null == n ? null : (0, s.astToString)(O.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: n.name
          }))
        }(m, L);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = g(),
      a = I.default.extractTimestamp(e) % t.length;
    return t[a]
  },
  getSystemMessageUserJoinMobile: c,
  getSystemMessageBotJoin: function(e) {
    return null == A[e] ? null : O.default.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
      learnOnClick: {
        onClick: () => window.open(A[e])
      }
    })
  }
}