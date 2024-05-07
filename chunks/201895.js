"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("653041");
var a = s("131704"),
  n = s("699516"),
  i = s("594174"),
  E = s("933557"),
  l = s("981631"),
  _ = s("689938");

function r(e) {
  let {
    isSubscriptionGated: t,
    needSubscriptionToAccess: s
  } = e;
  if (t) return s ? _.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : _.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
}

function u(e) {
  let t, {
      channel: s,
      unread: u = !1,
      mentionCount: o = 0,
      userCount: T,
      embeddedActivitiesCount: d,
      isSubscriptionGated: A,
      needSubscriptionToAccess: I
    } = e,
    L = (0, E.computeChannelName)(s, i.default, n.default);
  switch (s.type) {
    case l.ChannelTypes.DM:
      t = u ? _.default.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : _.default.Messages.DIRECT_MESSAGE_A11Y_LABEL;
      break;
    case l.ChannelTypes.GROUP_DM:
      t = u ? _.default.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : _.default.Messages.GROUP_MESSAGE_A11Y_LABEL;
      break;
    case l.ChannelTypes.GUILD_STORE:
      t = _.default.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
      break;
    case l.ChannelTypes.GUILD_DIRECTORY:
      t = _.default.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
      break;
    case l.ChannelTypes.GUILD_ANNOUNCEMENT:
      t = o > 0 ? _.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : u ? _.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : _.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
      break;
    case l.ChannelTypes.GUILD_VOICE:
      let c = [_.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
        channelName: s.name
      })];
      if (o > 0 && c.push(_.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
          mentionCount: o
        })), u && c.push(_.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != T) {
        let e = s.userLimit;
        null != e && e > 0 ? c.push(_.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
          userCount: T,
          limit: e
        })) : c.push(_.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
          userCount: T
        }))
      }
      null != d && d > 0 && c.push(_.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
        activitiesCount: d
      }));
      let N = r({
        isSubscriptionGated: A,
        needSubscriptionToAccess: I
      });
      return null != N && c.push(N), c.join(", ");
    case l.ChannelTypes.GUILD_STAGE_VOICE:
      t = _.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
      break;
    default:
      t = a.THREAD_CHANNEL_TYPES.has(s.type) ? o > 0 ? _.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : u ? _.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : _.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : o > 0 ? _.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : u ? _.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : _.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
  }
  let S = [t.format({
      channelName: L,
      mentionCount: o
    })],
    g = r({
      isSubscriptionGated: A,
      needSubscriptionToAccess: I
    });
  return null != g && S.push(g), S.join(", ")
}