var E, _, s = t(25209),
  a = t(97797),
  u = t(35125),
  r = t(786761),
  i = t(739566),
  M = t(499401),
  l = t(693912),
  S = t(23750),
  N = t(314897),
  A = t(592125),
  O = t(430824),
  I = t(594174),
  o = t(5192),
  T = t(709054),
  c = t(981631),
  d = t(689938);
let R = {
  "234395307759108106": "https://groovy.bot/commands",
  "365975655608745985": "https://www.pokecord.com/getting-started",
  "512412940897484800": "http://jameslantz.net/smilebot"
};
(E = _ || (_ = {})).NORMAL = "NORMAL", E.CLAN = "CLAN";
let L = () => [d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012_HOOK, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013_HOOK],
  C = () => [d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_001, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_002, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_003, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_004, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_005, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_006, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_007, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_008, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_009, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_010, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_011, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_012, d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_JOIN_013],
  G = () => [d.Z.Messages.CLAN_WELCOME_MESSAGE_0_HOOK, d.Z.Messages.CLAN_WELCOME_MESSAGE_1_HOOK, d.Z.Messages.CLAN_WELCOME_MESSAGE_2_HOOK, d.Z.Messages.CLAN_WELCOME_MESSAGE_3_HOOK, d.Z.Messages.CLAN_WELCOME_MESSAGE_4_HOOK, d.Z.Messages.CLAN_WELCOME_MESSAGE_5_HOOK, d.Z.Messages.CLAN_WELCOME_MESSAGE_6_HOOK, d.Z.Messages.CLAN_WELCOME_MESSAGE_7_HOOK, d.Z.Messages.CLAN_WELCOME_MESSAGE_8_HOOK, d.Z.Messages.CLAN_WELCOME_MESSAGE_9_HOOK],
  g = () => [d.Z.Messages.CLAN_WELCOME_MESSAGE_0, d.Z.Messages.CLAN_WELCOME_MESSAGE_1, d.Z.Messages.CLAN_WELCOME_MESSAGE_2, d.Z.Messages.CLAN_WELCOME_MESSAGE_3, d.Z.Messages.CLAN_WELCOME_MESSAGE_4, d.Z.Messages.CLAN_WELCOME_MESSAGE_5, d.Z.Messages.CLAN_WELCOME_MESSAGE_6, d.Z.Messages.CLAN_WELCOME_MESSAGE_7, d.Z.Messages.CLAN_WELCOME_MESSAGE_8, d.Z.Messages.CLAN_WELCOME_MESSAGE_9],
  Z = e => {
    switch (e) {
      case "NORMAL":
      default:
        return L();
      case "CLAN":
        return G()
    }
  },
  f = e => {
    switch (e) {
      case "NORMAL":
      default:
        return C();
      case "CLAN":
        return g()
    }
  };

function D(e, n) {
  let t = f(n),
    E = T.default.extractTimestamp(e) % t.length;
  return t[E]
}

function U(e) {
  return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: c.dG4
  }))
}

function m(e, n) {
  let t = A.Z.getChannel(n);
  return null == t || null == O.Z.getGuild(t.getGuildId()) ? U(e) : (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED.astFormat({
    username: e,
    usernameOnClick: c.dG4
  }))
}

function p(e) {
  var n;
  return (null === (n = O.Z.getGuild(e)) || void 0 === n ? void 0 : n.hasFeature(c.oNc.CLAN)) ? "CLAN" : "NORMAL"
}
n.Z = {
  stringify: function(e, n) {
    var t, E, _, T;
    let R = null === (t = e.mentions) || void 0 === t ? void 0 : t[0],
      L = null != R && "string" != typeof R ? I.default.getUser(R.id) : void 0,
      C = e.channel_id,
      G = o.ZP.getName(null, C, e.author);
    switch (e.type) {
      case c.uaV.RECIPIENT_ADD:
        if (null == L) return;
        return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD.astFormat({
          username: G,
          usernameOnClick: c.dG4,
          otherUsername: o.ZP.getName(null, C, L),
          otherUsernameOnClick: c.dG4
        }));
      case c.uaV.RECIPIENT_REMOVE:
        if (null == L) return;
        let g = e.author;
        if (null == g || g.id === L.id) return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF.astFormat({
          username: G,
          usernameOnClick: c.dG4
        }));
        return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE.astFormat({
          username: G,
          usernameOnClick: c.dG4,
          otherUsername: o.ZP.getName(null, C, L),
          otherUsernameOnClick: c.dG4
        }));
      case c.uaV.CALL:
        let {
          call: Z
        } = e;
        if (null != Z && -1 === Z.participants.indexOf(N.default.getId())) return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED.astFormat({
          username: G,
          usernameOnClick: c.dG4
        }));
        return;
      case c.uaV.CHANNEL_NAME_CHANGE:
        return (0, s.Rp)((n.isForumPost() ? d.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE : d.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE).astFormat({
          username: G,
          usernameOnClick: c.dG4,
          channelName: e.content
        }));
      case c.uaV.CHANNEL_ICON_CHANGE:
        return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE.astFormat({
          username: G,
          usernameOnClick: c.dG4
        }));
      case c.uaV.CHANNEL_PINNED_MESSAGE:
        return (0, s.Rp)(d.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA.astFormat({
          username: G,
          usernameOnClick: c.dG4
        }));
      case c.uaV.USER_JOIN:
        let f = p(n.guild_id);
        return (0, s.Rp)(D(e.id, f).astFormat({
          username: G,
          usernameOnClick: c.dG4
        }));
      case c.uaV.GUILD_BOOST:
        return U(G);
      case c.uaV.GUILD_BOOST_TIER_1:
      case c.uaV.GUILD_BOOST_TIER_2:
      case c.uaV.GUILD_BOOST_TIER_3:
        return m(G, C);
      case c.uaV.GUILD_INVITE_REMINDER:
        return d.Z.Messages.SYSTEM_MESSAGE_INVITE_NOTIFICATION;
      case c.uaV.THREAD_STARTER_MESSAGE:
        return d.Z.Messages.THREAD_STARTER_MESSAGE_NOTIFICATION.format({
          username: G,
          threadName: n.name
        });
      case c.uaV.ROLE_SUBSCRIPTION_PURCHASE:
        if (e instanceof S.ZP) return null;
        return (0, s.Rp)((0, u.vp)({
          username: G,
          guildId: n.guild_id,
          roleSubscriptionData: e.role_subscription_data
        }));
      case c.uaV.PURCHASE_NOTIFICATION:
        if (e instanceof S.ZP || (null === (_ = e.purchase_notification) || void 0 === _ ? void 0 : null === (E = _.guild_product_purchase) || void 0 === E ? void 0 : E.product_name) == null) return null;
        return (0, s.Rp)((0, a.i)({
          username: G,
          productName: e.purchase_notification.guild_product_purchase.product_name
        }));
      case c.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
        if (e instanceof S.ZP) return null;
        let h = (0, i.ZH)((0, r.e5)(e));
        return (0, s.Rp)((0, M.Y)({
          application: e.application,
          username: h.nick
        }));
      case c.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
        if (e instanceof S.ZP) return null;
        return (0, s.Rp)((0, l.B2)({
          application: e.application,
          username: (0, i.ZH)((0, r.e5)(e)).nick
        }));
      case c.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
        if (e instanceof S.ZP) return null;
        return (0, s.Rp)((0, l.hj)({
          application: e.application,
          username: (0, i.ZH)((0, r.e5)(e)).nick
        }));
      case c.uaV.AUTO_MODERATION_ACTION:
        if (null === (T = e.embeds) || void 0 === T ? void 0 : T.some(e => {
            let {
              type: n
            } = e;
            return n === c.hBH.AUTO_MODERATION_NOTIFICATION
          })) return function(e) {
          let n = A.Z.getChannel(e);
          if (null == n) return null;
          let t = O.Z.getGuild(n.getGuildId());
          return null == t ? null : (0, s.Rp)(d.Z.Messages.GUILD_SERVER_RAID_ALERT_NOTIFICATION.astFormat({
            guildName: t.name
          }))
        }(C);
        return e.content;
      case c.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
        return function(e, n, t) {
          let E = A.Z.getChannel(n);
          if (null == E) return null;
          let _ = O.Z.getGuild(E.getGuildId());
          return null == _ ? null : (0, s.Rp)(d.Z.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: _.name,
            time: "" !== t ? new Date(t).toLocaleString(d.Z.getLocale(), {
              hour: "numeric",
              minute: "2-digit"
            }) : ""
          }))
        }(G, C, e.content);
      case c.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
        return function(e, n) {
          let t = A.Z.getChannel(n);
          if (null == t) return null;
          let E = O.Z.getGuild(t.getGuildId());
          return null == E ? null : (0, s.Rp)(d.Z.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_NOTIFICATION.astFormat({
            username: e,
            guildName: E.name
          }))
        }(G, C);
      default:
        return e.content
    }
  },
  getSystemMessageUserJoin: function(e, n) {
    let t = Z(n),
      E = T.default.extractTimestamp(e) % t.length;
    return t[E]
  },
  getSystemMessageUserJoinMobile: D,
  getSystemMessageBotJoin: function(e) {
    return null == R[e] ? null : d.Z.Messages.SYSTEM_MESSAGE_GUILD_BOT_JOIN.format({
      learnOnClick: {
        onClick: () => window.open(R[e])
      }
    })
  },
  getWelcomeMessageKind: p
}