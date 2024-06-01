"use strict";
n.r(t);
var a = n("25209"),
  s = n("97797"),
  r = n("35125"),
  i = n("786761"),
  u = n("739566"),
  l = n("499401"),
  E = n("693912"),
  o = n("23750"),
  _ = n("314897"),
  d = n("592125"),
  S = n("430824"),
  T = n("594174"),
  I = n("5192"),
  N = n("709054"),
  c = n("981631"),
  f = n("689938");
let M = {
    "234395307759108106": "https://groovy.bot/commands",
    "365975655608745985": "https://www.pokecord.com/getting-started",
    "512412940897484800": "http://jameslantz.net/smilebot"
  },
  A = () => [f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
  O = () => [f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013];

function g(e) {
  let t = O(),
    n = N.default.extractTimestamp(e) % t.length;
  return t[n]
}

function C(e) {
  return (0, a.astToString)(f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: c.NOOP
  }))
}

function p(e, t) {
  let n = d.default.getChannel(t);
  return null == n || null == S.default.getGuild(n.getGuildId()) ? C(e) : (0, a.astToString)(f.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: c.NOOP
  }))
}
t.default = {
  stringify: function(e, t) {
    var n, N, M, A;
    let O = null === (n = e.mentions) || void 0 === n ? void 0 : n[0],
      R = null != O && "string" != typeof O ? T.default.getUser(O.id) : void 0,
      m = e.channel_id,
      G = I.default.getName(null, m, e.author);
    switch (e.type) {
      case c.MessageTypes.RECIPIENT_ADD:
        if (null == R) return;
        return (0, a.astToString)(f.default.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
          username: G,
          usernameOnClick: c.NOOP,
          otherUsername: I.default.getName(null, m, R),
          otherUsernameOnClick: c.NOOP
        }));
      case c.MessageTypes.RECIPIENT_REMOVE:
        if (null == R) return;
        let h = e.author;
        if (null == h || h.id === R.id) return (0, a.astToString)(f.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
          username: G,
          usernameOnClick: c.NOOP
        }));
        return (0, a.astToString)(f.default.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
          username: G,
          usernameOnClick: c.NOOP,
          otherUsername: I.default.getName(null, m, R),
          otherUsernameOnClick: c.NOOP
        }));
      case c.MessageTypes.CALL:
        let {
          call: U
        } = e;
        if (null != U && -1 === U.participants.indexOf(_.default.getId())) return (0, a.astToString)(f.default.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
          username: G,
          usernameOnClick: c.NOOP
        }));
        return;
      case c.MessageTypes.CHANNEL_NAME_CHANGE:
        return (0, a.astToString)((t.isForumPost() ? f.default.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : f.default.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
          username: G,
          usernameOnClick: c.NOOP,
          channelName: e.content
        }));
      case c.MessageTypes.CHANNEL_ICON_CHANGE:
        return (0, a.astToString)(f.default.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
          username: G,
          usernameOnClick: c.NOOP
        }));
      case c.MessageTypes.CHANNEL_PINNED_MESSAGE:
        return (0, a.astToString)(f.default.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
          username: G,
          usernameOnClick: c.NOOP
        }));
      case c.MessageTypes.USER_JOIN:
        return (0, a.astToString)(g(e.id).astFormat({
          username: G,
          usernameOnClick: c.NOOP
        }));
      case c.MessageTypes.GUILD_BOOST:
        return C(G);
      case c.MessageTypes.GUILD_BOOST_TIER_1:
      case c.MessageTypes.GUILD_BOOST_TIER_2:
      case c.MessageTypes.GUILD_BOOST_TIER_3:
        return p(G, m);
      case c.MessageTypes.GUILD_INVITE_REMINDER:
        return f.default.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
      case c.MessageTypes.THREAD_STARTER_MESSAGE:
        return f.default.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
          username: G,
          threadName: t.name
        });
      case c.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof o.default) return null;
        return (0, a.astToString)((0, r.getRoleSubscriptionPurchaseSystemMessageContentMobile)({
          username: G,
          guildId: t.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case c.MessageTypes.PURCHASE_NOTIFICATION:
        if (e instanceof o.default || (null === (M = e.purchase_notification) || void 0 === M ? void 0 : null === (N = M.guild_product_purchase) || void 0 === N ? void 0 : N.product_name) == null) return null;
        return (0, a.astToString)((0, s.getGuildProductPurchaseSystemMessageContentMobile)({
          username: G,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case c.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof o.default) return null;
        let P = (0, u.getMessageAuthor)((0, i.createMessageRecord)(e));
        return (0, a.astToString)((0, l.getApplicationSubscriptionSystemMessageASTContent)({
          application: e.application,
          username: P.nick
        }));
      case c.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof o.default) return null;
        return (0, a.astToString)((0, E.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
          application: e.application,
          username: (0, u.getMessageAuthor)((0, i.createMessageRecord)(e)).nick
        }));
      case c.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof o.default) return null;
        return (0, a.astToString)((0, E.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
          application: e.application,
          username: (0, u.getMessageAuthor)((0, i.createMessageRecord)(e)).nick
        }));
      case c.MessageTypes.AUTO_MODERATION_ACTION:
        if (null === (A = e.embeds) || void 0 === A ? void 0 : A.some(e => {
            let {
              type: t
            } = e;
            return t === c.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let t = d.default.getChannel(e);
          if (null == t) return null;
          let n = S.default.getGuild(t.getGuildId());
          return null == n ? null : (0, a.astToString)(f.default.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
            guildName: n.name
          }))
        }(m);
        return e.content;
      case c.MessageTypes.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, t, n) {
          let s = d.default.getChannel(t);
          if (null == s) return null;
          let r = S.default.getGuild(s.getGuildId());
          return null == r ? null : (0, a.astToString)(f.default.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: r.name,
            time: "" !== n ? new Date(n).toLocaleString(f.default.getLocale(), {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(G, m, e.content);
      case c.MessageTypes.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, t) {
          let n = d.default.getChannel(t);
          if (null == n) return null;
          let s = S.default.getGuild(n.getGuildId());
          return null == s ? null : (0, a.astToString)(f.default.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: s.name
          }))
        }(G, m);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e) {
    let t = A(),
      n = N.default.extractTimestamp(e) % t.length;
    return t[n]
  },
  getSystemMessageUserJoinMobile: g,
  getSystemMessageBotJoin: function(e) {
    return null == M[e] ? null : f.default.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
      learnOnClick: {
        onClick: () => window.open(M[e])
      }
    })
  }
}