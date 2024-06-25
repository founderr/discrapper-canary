t.d(n, {
  Z: function() {
    return o
  }
});
var a = t(481060),
  s = t(762914),
  r = t(436088),
  l = t(447003),
  i = t(981631);

function o(e, n) {
  switch (e.type) {
    case i.d4z.DM:
      return a.AtIcon;
    case i.d4z.GROUP_DM:
      return (0, s.V1)(e.id) ? (0, a.makeIconCompat)(r.Z) : a.GroupIcon;
    case i.d4z.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return a.AnnouncementsWarningIcon;
      if ((0, l.Z)(e)) return a.AnnouncementsLockIcon;
      else return a.AnnouncementsIcon;
    case i.d4z.GUILD_TEXT:
      if (e.id === (null == n ? void 0 : n.rulesChannelId)) return a.BookCheckIcon;
      if (e.isNSFW()) return a.TextWarningIcon;
      else if ((0, l.Z)(e)) return a.TextLockIcon;
      else return a.TextIcon;
    case i.d4z.GUILD_FORUM:
      let t = e.isMediaChannel();
      if (e.isNSFW()) return t ? a.ImageWarningIcon : a.ForumWarningIcon;
      if ((0, l.Z)(e)) return t ? a.ImageLockIcon : a.ForumLockIcon;
      else return t ? a.ImageIcon : a.ForumIcon;
    case i.d4z.GUILD_MEDIA:
      if (e.isNSFW()) return a.ImageWarningIcon;
      if ((0, l.Z)(e)) return a.ImageLockIcon;
      else return a.ImageIcon;
    case i.d4z.GUILD_STAGE_VOICE:
      return a.StageIcon;
    case i.d4z.GUILD_VOICE:
      if ((0, l.Z)(e)) return a.VoiceLockIcon;
      return a.VoiceNormalIcon;
    case i.d4z.ANNOUNCEMENT_THREAD:
    case i.d4z.PUBLIC_THREAD:
      if (e.isNSFW()) return a.ThreadIcon;
      if (e.isForumPost()) return a.ChatIcon;
      else return a.ThreadIcon;
    case i.d4z.PRIVATE_THREAD:
      if (e.isNSFW()) return a.ThreadIcon;
      return a.ThreadLockIcon;
    case i.d4z.GUILD_DIRECTORY:
      return a.HubIcon;
    default:
      return null
  }
}