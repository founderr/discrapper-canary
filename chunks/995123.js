"use strict";
t.d(n, {
  Z: function() {
    return c
  }
});
var r = t(481060),
  o = t(762914),
  i = t(436088),
  s = t(447003),
  l = t(981631);

function c(e, n) {
  switch (e.type) {
    case l.d4z.DM:
      return r.AtIcon;
    case l.d4z.GROUP_DM:
      return (0, o.V1)(e.id) ? (0, r.makeIconCompat)(i.Z) : r.GroupIcon;
    case l.d4z.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return r.AnnouncementsWarningIcon;
      if ((0, s.Z)(e)) return r.AnnouncementsLockIcon;
      else return r.AnnouncementsIcon;
    case l.d4z.GUILD_TEXT:
      if (e.id === (null == n ? void 0 : n.rulesChannelId)) return r.BookCheckIcon;
      if (e.isNSFW()) return r.TextWarningIcon;
      else if ((0, s.Z)(e)) return r.TextLockIcon;
      else return r.TextIcon;
    case l.d4z.GUILD_FORUM:
      let t = e.isMediaChannel();
      if (e.isNSFW()) return t ? r.ImageWarningIcon : r.ForumWarningIcon;
      if ((0, s.Z)(e)) return t ? r.ImageLockIcon : r.ForumLockIcon;
      else return t ? r.ImageIcon : r.ForumIcon;
    case l.d4z.GUILD_MEDIA:
      if (e.isNSFW()) return r.ImageWarningIcon;
      if ((0, s.Z)(e)) return r.ImageLockIcon;
      else return r.ImageIcon;
    case l.d4z.GUILD_STAGE_VOICE:
      return r.StageIcon;
    case l.d4z.GUILD_VOICE:
      if ((0, s.Z)(e)) return r.VoiceLockIcon;
      return r.VoiceNormalIcon;
    case l.d4z.ANNOUNCEMENT_THREAD:
    case l.d4z.PUBLIC_THREAD:
      if (e.isNSFW()) return r.ThreadIcon;
      if (e.isForumPost()) return r.ChatIcon;
      else return r.ThreadIcon;
    case l.d4z.PRIVATE_THREAD:
      if (e.isNSFW()) return r.ThreadIcon;
      return r.ThreadLockIcon;
    case l.d4z.GUILD_DIRECTORY:
      return r.HubIcon;
    default:
      return null
  }
}