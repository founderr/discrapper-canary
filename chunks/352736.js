"use strict";
n.r(t);
var a = n("25209"),
  s = n("97797"),
  r = n("35125"),
  i = n("786761"),
  u = n("739566"),
  l = n("499401"),
  o = n("693912"),
  d = n("23750"),
  E = n("314897"),
  _ = n("592125"),
  S = n("430824"),
  T = n("594174"),
  c = n("5192"),
  f = n("709054"),
  I = n("981631"),
  N = n("689938");
let A = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  M = () => [N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
  O = () => [N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013];

function g(e) {
  let t = O(),
    n = f.default.extractTimestamp(e) % t.length;
  return t[n]
}

function p(e) {
  return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: I.NOOP
  }))
}

function C(e, t) {
  let n = _.default.getChannel(t);
  return null == n || null == S.default.getGuild(n.getGuildId()) ? p(e) : (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: I.NOOP
  }))
}
t.default = {
  stringify: function(e, t) {
    var n, f, A, M;
    let O = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
      R = null != O && "string" != typeof O ? T.default.getUser(O.id) : void 0,
      m = e.channel_id,
      h = c.default.getName(null, m, e.author);
    switch (e.type) {
      case I.MessageTypes.RECIPIENT_ADD:
        if (null == R) return;
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
          username: h,
          usernameOnClick: I.NOOP,
          otherUsername: c.default.getName(null, m, R),
          otherUsernameOnClick: I.NOOP
        }));
      case I.MessageTypes.RECIPIENT_REMOVE:
        if (null == R) return;
        let G = e.author;
        if (null == G || G.id === R.id) return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
          username: h,
          usernameOnClick: I.NOOP
        }));
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
          username: h,
          usernameOnClick: I.NOOP,
          otherUsername: c.default.getName(null, m, R),
          otherUsernameOnClick: I.NOOP
        }));
      case I.MessageTypes.CALL:
        let {
          call: P
        } = e;
        if (null != P && -1 === P.participants.indexOf(E.default.getId())) return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
          username: h,
          usernameOnClick: I.NOOP
        }));
        return;
      case I.MessageTypes.CHANNEL_NAME_CHANGE:
        return (0, a.astToString)((t.isForumPost() ? N.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : N.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
          username: h,
          usernameOnClick: I.NOOP,
          channelName: e.content
        }));
      case I.MessageTypes.CHANNEL_ICON_CHANGE:
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
          username: h,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.CHANNEL_PINNED_MESSAGE:
        return (0, a.astToString)(N.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
          username: h,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.USER_JOIN:
        return (0, a.astToString)(g(e.id).astFormat({
          username: h,
          usernameOnClick: I.NOOP
        }));
      case I.MessageTypes.GUILD_BOOST:
        return p(h);
      case I.MessageTypes.GUILD_BOOST_TIER_1:
      case I.MessageTypes.GUILD_BOOST_TIER_2:
      case I.MessageTypes.GUILD_BOOST_TIER_3:
        return C(h, m);
      case I.MessageTypes.GUILD_INVITE_REMINDER:
        return N.default.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
      case I.MessageTypes.THREAD_STARTER_MESSAGE:
        return N.default.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
          username: h,
          threadName: t.name
        });
      case I.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof d.default) return null;
        return (0, a.astToString)((0, r.getRoleSubscriptionPurchaseSystemMessageContentMobile)({
          username: h,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case I.MessageTypes.PURCHASE_NOTIFICATION:
        if (e instanceof d.default || (null === (A = e.purchase_notification) || void 0 === A ? void 0 : null === (f = A.guild_product_purchase) || void 0 === f ? void 0 : f.product_name) == null) return null;
        return (0, a.astToString)((0, s.getGuildProductPurchaseSystemMessageContentMobile)({
          username: h,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case I.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof d.default) return null;
        let v = (0, u.getMessageAuthor)((0, i.createMessageRecord)(e));
        return (0, a.astToString)((0, l.getApplicationSubscriptionSystemMessageASTContent)({
          application: e.application,
          username: v.nick
        }));
      case I.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof d.default) return null;
        return (0, a.astToString)((0, o.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
          application: e.application,
          username: (0, u.getMessageAuthor)((0, i.createMessageRecord)(e)).nick
        }));
      case I.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof d.default) return null;
        return (0, a.astToString)((0, o.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
          application: e.application,
          username: (0, u.getMessageAuthor)((0, i.createMessageRecord)(e)).nick
        }));
      case I.MessageTypes.AUTO_MODERATION_ACTION:
        if (null === (M = e.embeds) || void 0 === M ? void 0 : M.some(e => {
            let {
              type: t
            } = e;
            return t === I.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let t = _.default.getChannel(e);
          if (null == t) return null;
          let n = S.default.getGuild(t.getGuildId());
          return null == n ? null : (0, a.astToString)(N.default.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
            guildName: n.name
          }))
        }(m);
        return e.content;
      case I.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, t, n) {
          let s = _.default.getChannel(t);
          if (null == s) return null;
          let r = S.default.getGuild(s.getGuildId());
          return null == r ? null : (0, a.astToString)(N.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: r.name,
            time: "" !== n ? new Date(n).toLocaleString(N.default.getLocale(), {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(h, m, e.content);
      case I.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, t) {
          let n = _.default.getChannel(t);
          if (null == n) return null;
          let s = S.default.getGuild(n.getGuildId());
          return null == s ? null : (0, a.astToString)(N.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: s.name
          }))
        }(h, m);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = M(),
      n = f.default.extractTimestamp(e) % t.length;
    return t[n]
  },
  getSystemMessageUserJoinMobile: g,
  getSystemMessageBotJoin: function(e) {
    return null == A[e] ? null : N.default.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
      learnOnClick: {
        onClick: () => window.open(A[e])
      }
    })
  }
}