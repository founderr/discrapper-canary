t.d(n, {
  ZP: function() {
return c;
  }
}), t(653041);
var r = t(131704),
  i = t(699516),
  o = t(594174),
  l = t(933557),
  u = t(981631),
  a = t(689938);

function s(e) {
  let {
isSubscriptionGated: n,
needSubscriptionToAccess: t
  } = e;
  if (n)
return t ? a.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : a.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED;
}

function c(e) {
  let n, {
  channel: t,
  unread: c = !1,
  mentionCount: d = 0,
  userCount: _,
  embeddedActivitiesCount: E,
  isSubscriptionGated: f,
  needSubscriptionToAccess: I
} = e,
T = (0, l.F6)(t, o.default, i.Z);
  switch (t.type) {
case u.d4z.DM:
  n = c ? a.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : a.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL;
  break;
case u.d4z.GROUP_DM:
  n = c ? a.Z.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : a.Z.Messages.GROUP_MESSAGE_A11Y_LABEL;
  break;
case u.d4z.GUILD_STORE:
  n = a.Z.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
  break;
case u.d4z.GUILD_DIRECTORY:
  n = a.Z.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
  break;
case u.d4z.GUILD_ANNOUNCEMENT:
  n = d > 0 ? a.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : c ? a.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : a.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
  break;
case u.d4z.GUILD_VOICE:
  let S = [a.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
    channelName: t.name
  })];
  if (d > 0 && S.push(a.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
      mentionCount: d
    })), c && S.push(a.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != _) {
    let e = t.userLimit;
    null != e && e > 0 ? S.push(a.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
      userCount: _,
      limit: e
    })) : S.push(a.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
      userCount: _
    }));
  }
  null != E && E > 0 && S.push(a.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
    activitiesCount: E
  }));
  let A = s({
    isSubscriptionGated: f,
    needSubscriptionToAccess: I
  });
  return null != A && S.push(A), S.join(', ');
case u.d4z.GUILD_STAGE_VOICE:
  n = a.Z.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
  break;
default:
  n = r.Ec.has(t.type) ? d > 0 ? a.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : c ? a.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : a.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : d > 0 ? a.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : c ? a.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : a.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL;
  }
  let N = [n.format({
  channelName: T,
  mentionCount: d
})],
g = s({
  isSubscriptionGated: f,
  needSubscriptionToAccess: I
});
  return null != g && N.push(g), N.join(', ');
}