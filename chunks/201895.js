"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
}), s("653041");
var E = s("131704"),
  _ = s("699516"),
  a = s("594174"),
  n = s("933557"),
  T = s("981631"),
  u = s("689938");

function i(e) {
  let {
    isSubscriptionGated: t,
    needSubscriptionToAccess: s
  } = e;
  if (t) return s ? u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
}

function A(e) {
  let t, {
      channel: s,
      unread: A = !1,
      mentionCount: l = 0,
      userCount: I,
      embeddedActivitiesCount: L,
      isSubscriptionGated: o,
      needSubscriptionToAccess: r
    } = e,
    d = (0, n.computeChannelName)(s, a.default, _.default);
  switch (s.type) {
    case T.ChannelTypes.DM:
      t = A ? u.default.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : u.default.Messages.DIRECT_MESSAGE_A11Y_LABEL;
      break;
    case T.ChannelTypes.GROUP_DM:
      t = A ? u.default.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GROUP_MESSAGE_A11Y_LABEL;
      break;
    case T.ChannelTypes.GUILD_STORE:
      t = u.default.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
      break;
    case T.ChannelTypes.GUILD_DIRECTORY:
      t = u.default.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
      break;
    case T.ChannelTypes.GUILD_ANNOUNCEMENT:
      t = l > 0 ? u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : A ? u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
      break;
    case T.ChannelTypes.GUILD_VOICE:
      let S = [u.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
        channelName: s.name
      })];
      if (l > 0 && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
          mentionCount: l
        })), A && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != I) {
        let e = s.userLimit;
        null != e && e > 0 ? S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
          userCount: I,
          limit: e
        })) : S.push(u.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
          userCount: I
        }))
      }
      null != L && L > 0 && S.push(u.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
        activitiesCount: L
      }));
      let N = i({
        isSubscriptionGated: o,
        needSubscriptionToAccess: r
      });
      return null != N && S.push(N), S.join(", ");
    case T.ChannelTypes.GUILD_STAGE_VOICE:
      t = u.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
      break;
    default:
      t = E.THREAD_CHANNEL_TYPES.has(s.type) ? l > 0 ? u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : A ? u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : l > 0 ? u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : A ? u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : u.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
  }
  let g = [t.format({
      channelName: d,
      mentionCount: l
    })],
    D = i({
      isSubscriptionGated: o,
      needSubscriptionToAccess: r
    });
  return null != D && g.push(D), g.join(", ")
}