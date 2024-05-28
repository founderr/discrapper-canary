"use strict";
i.r(s), i.d(s, {
  default: function() {
    return l
  }
}), i("653041");
var t = i("131704"),
  n = i("699516"),
  E = i("594174"),
  r = i("933557"),
  S = i("981631"),
  o = i("689938");

function _(e) {
  let {
    isSubscriptionGated: s,
    needSubscriptionToAccess: i
  } = e;
  if (s) return i ? o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
}

function l(e) {
  let s, {
      channel: i,
      unread: l = !1,
      mentionCount: a = 0,
      userCount: I,
      embeddedActivitiesCount: u,
      isSubscriptionGated: N,
      needSubscriptionToAccess: A
    } = e,
    R = (0, r.computeChannelName)(i, E.default, n.default);
  switch (i.type) {
    case S.ChannelTypes.DM:
      s = l ? o.default.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : o.default.Messages.DIRECT_MESSAGE_A11Y_LABEL;
      break;
    case S.ChannelTypes.GROUP_DM:
      s = l ? o.default.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : o.default.Messages.GROUP_MESSAGE_A11Y_LABEL;
      break;
    case S.ChannelTypes.GUILD_STORE:
      s = o.default.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
      break;
    case S.ChannelTypes.GUILD_DIRECTORY:
      s = o.default.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
      break;
    case S.ChannelTypes.GUILD_ANNOUNCEMENT:
      s = a > 0 ? o.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : l ? o.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : o.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
      break;
    case S.ChannelTypes.GUILD_VOICE:
      let O = [o.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
        channelName: i.name
      })];
      if (a > 0 && O.push(o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
          mentionCount: a
        })), l && O.push(o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != I) {
        let e = i.userLimit;
        null != e && e > 0 ? O.push(o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
          userCount: I,
          limit: e
        })) : O.push(o.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
          userCount: I
        }))
      }
      null != u && u > 0 && O.push(o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
        activitiesCount: u
      }));
      let T = _({
        isSubscriptionGated: N,
        needSubscriptionToAccess: A
      });
      return null != T && O.push(T), O.join(", ");
    case S.ChannelTypes.GUILD_STAGE_VOICE:
      s = o.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
      break;
    default:
      s = t.THREAD_CHANNEL_TYPES.has(i.type) ? a > 0 ? o.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : l ? o.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : o.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : a > 0 ? o.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : l ? o.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : o.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
  }
  let d = [s.format({
      channelName: R,
      mentionCount: a
    })],
    M = _({
      isSubscriptionGated: N,
      needSubscriptionToAccess: A
    });
  return null != M && d.push(M), d.join(", ")
}