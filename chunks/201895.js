t.d(n, {
  ZP: function() {
    return c
  }
}), t(653041);
var i = t(131704),
  l = t(699516),
  r = t(594174),
  u = t(933557),
  o = t(981631),
  s = t(689938);

function a(e) {
  let {
    isSubscriptionGated: n,
    needSubscriptionToAccess: t
  } = e;
  if (n) return t ? s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
}

function c(e) {
  let n, {
      channel: t,
      unread: c = !1,
      mentionCount: _ = 0,
      userCount: d,
      embeddedActivitiesCount: E,
      isSubscriptionGated: f,
      needSubscriptionToAccess: A
    } = e,
    I = (0, u.F6)(t, r.default, l.Z);
  switch (t.type) {
    case o.d4z.DM:
      n = c ? s.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : s.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL;
      break;
    case o.d4z.GROUP_DM:
      n = c ? s.Z.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : s.Z.Messages.GROUP_MESSAGE_A11Y_LABEL;
      break;
    case o.d4z.GUILD_STORE:
      n = s.Z.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
      break;
    case o.d4z.GUILD_DIRECTORY:
      n = s.Z.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
      break;
    case o.d4z.GUILD_ANNOUNCEMENT:
      n = _ > 0 ? s.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : c ? s.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : s.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
      break;
    case o.d4z.GUILD_VOICE:
      let L = [s.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
        channelName: t.name
      })];
      if (_ > 0 && L.push(s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
          mentionCount: _
        })), c && L.push(s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != d) {
        let e = t.userLimit;
        null != e && e > 0 ? L.push(s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
          userCount: d,
          limit: e
        })) : L.push(s.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
          userCount: d
        }))
      }
      null != E && E > 0 && L.push(s.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
        activitiesCount: E
      }));
      let v = a({
        isSubscriptionGated: f,
        needSubscriptionToAccess: A
      });
      return null != v && L.push(v), L.join(", ");
    case o.d4z.GUILD_STAGE_VOICE:
      n = s.Z.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
      break;
    default:
      n = i.Ec.has(t.type) ? _ > 0 ? s.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : c ? s.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : s.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : _ > 0 ? s.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : c ? s.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : s.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
  }
  let m = [n.format({
      channelName: I,
      mentionCount: _
    })],
    C = a({
      isSubscriptionGated: f,
      needSubscriptionToAccess: A
    });
  return null != C && m.push(C), m.join(", ")
}