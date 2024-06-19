S.d(e, {
  ZP: function() {
    return s
  }
}), S(653041);
var _ = S(131704),
  t = S(699516),
  n = S(594174),
  i = S(933557),
  l = S(981631),
  I = S(689938);

function r(E) {
  let {
    isSubscriptionGated: e,
    needSubscriptionToAccess: S
  } = E;
  if (e) return S ? I.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : I.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
}

function s(E) {
  let e, {
      channel: S,
      unread: s = !1,
      mentionCount: N = 0,
      userCount: o,
      embeddedActivitiesCount: A,
      isSubscriptionGated: R,
      needSubscriptionToAccess: O
    } = E,
    u = (0, i.F6)(S, n.default, t.Z);
  switch (S.type) {
    case l.d4z.DM:
      e = s ? I.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : I.Z.Messages.DIRECT_MESSAGE_A11Y_LABEL;
      break;
    case l.d4z.GROUP_DM:
      e = s ? I.Z.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : I.Z.Messages.GROUP_MESSAGE_A11Y_LABEL;
      break;
    case l.d4z.GUILD_STORE:
      e = I.Z.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
      break;
    case l.d4z.GUILD_DIRECTORY:
      e = I.Z.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
      break;
    case l.d4z.GUILD_ANNOUNCEMENT:
      e = N > 0 ? I.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : s ? I.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : I.Z.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
      break;
    case l.d4z.GUILD_VOICE:
      let a = [I.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
        channelName: S.name
      })];
      if (N > 0 && a.push(I.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
          mentionCount: N
        })), s && a.push(I.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != o) {
        let E = S.userLimit;
        null != E && E > 0 ? a.push(I.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
          userCount: o,
          limit: E
        })) : a.push(I.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
          userCount: o
        }))
      }
      null != A && A > 0 && a.push(I.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
        activitiesCount: A
      }));
      let P = r({
        isSubscriptionGated: R,
        needSubscriptionToAccess: O
      });
      return null != P && a.push(P), a.join(", ");
    case l.d4z.GUILD_STAGE_VOICE:
      e = I.Z.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
      break;
    default:
      e = _.Ec.has(S.type) ? N > 0 ? I.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : s ? I.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : I.Z.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : N > 0 ? I.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : s ? I.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : I.Z.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
  }
  let M = [e.format({
      channelName: u,
      mentionCount: N
    })],
    T = r({
      isSubscriptionGated: R,
      needSubscriptionToAccess: O
    });
  return null != T && M.push(T), M.join(", ")
}