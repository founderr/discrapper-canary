"use strict";
n.d(t, {
  KS: function() {
    return I
  },
  Th: function() {
    return T
  },
  bT: function() {
    return E
  }
});
var i = n(481060),
  r = n(281956),
  s = n(271383),
  o = n(430824),
  a = n(607744),
  l = n(594174),
  u = n(447003),
  _ = n(176505),
  c = n(981631),
  d = n(689938);

function E(e, t, n, i) {
  if (null == e) return null;
  if (e.id === (null == t ? void 0 : t.rulesChannelId)) return d.Z.Messages.CHANNEL_TOOLTIP_RULES;
  switch (e.type) {
    case c.d4z.GUILD_TEXT:
      if (i) return d.Z.Messages.CHANNEL_TOOLTIP_TEXT_ACTIVE_THREADS;
      if (e.isNSFW()) return d.Z.Messages.CHANNEL_TOOLTIP_TEXT_NSFW;
      if ((0, u.Z)(e)) return d.Z.Messages.CHANNEL_TOOLTIP_TEXT_LIMITED;
      return d.Z.Messages.CHANNEL_TOOLTIP_TEXT;
    case c.d4z.GUILD_FORUM:
      let r = e.isMediaChannel();
      if (e.isNSFW()) return r ? d.Z.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW : d.Z.Messages.CHANNEL_TOOLTIP_FORUM_NSFW;
      if ((0, u.Z)(e)) return r ? d.Z.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED : d.Z.Messages.CHANNEL_TOOLTIP_FORUM_LIMITED;
      return r ? d.Z.Messages.MEDIA_CHANNEL : d.Z.Messages.FORUM;
    case c.d4z.GUILD_MEDIA:
      if (e.isNSFW()) return d.Z.Messages.CHANNEL_TOOLTIP_MEDIA_NSFW;
      if ((0, u.Z)(e)) return d.Z.Messages.CHANNEL_TOOLTIP_MEDIA_LIMITED;
      return d.Z.Messages.MEDIA_CHANNEL;
    case c.d4z.GUILD_STAGE_VOICE:
      if (n) return d.Z.Messages.CHANNEL_TOOLTIP_STAGE_LOCKED;
      if ((0, u.Z)(e)) return d.Z.Messages.CHANNEL_TOOLTIP_STAGE_LIMITED;
      return d.Z.Messages.CHANNEL_TOOLTIP_STAGE;
    case c.d4z.GUILD_VOICE:
      if (n) return d.Z.Messages.CHANNEL_TOOLTIP_VOICE_LOCKED;
      if ((0, u.Z)(e)) return d.Z.Messages.CHANNEL_TOOLTIP_VOICE_LIMITED;
      return d.Z.Messages.CHANNEL_TOOLTIP_VOICE;
    case c.d4z.GUILD_ANNOUNCEMENT:
      if (e.isNSFW()) return d.Z.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_NSFW;
      if ((0, u.Z)(e)) return d.Z.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS_LIMITED;
      return d.Z.Messages.CHANNEL_TOOLTIP_ANNOUNCEMENTS;
    case c.d4z.GUILD_STORE:
      return d.Z.Messages.CHANNEL_TOOLTIP_STORE;
    case c.d4z.DM:
      return d.Z.Messages.DM;
    case c.d4z.GROUP_DM:
      return d.Z.Messages.GROUP_DM;
    case c.d4z.GUILD_DIRECTORY:
      return d.Z.Messages.CHANNEL_TOOLTIP_DIRECTORY;
    case c.d4z.PUBLIC_THREAD:
      return d.Z.Messages.THREAD;
    case c.d4z.PRIVATE_THREAD:
      return d.Z.Messages.PRIVATE_THREAD;
    default:
      return null
  }
}

function I(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    {
      locked: d = !1,
      video: E = !1,
      stream: I = !1,
      hasActiveThreads: T = !1,
      textFocused: h = !1
    } = n;
  if (null == e) return null;
  null == t && (t = o.Z.getGuild(e.getGuildId()));
  let f = (0, r.n)(null == t ? void 0 : t.id, [o.Z, a.Z, l.default, s.ZP]);
  if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return i.BookCheckIcon;
  switch (e.type) {
    case c.d4z.GUILD_ANNOUNCEMENT:
      if (T) {
        if (e.isNSFW()) return i.AnnouncementsWarningIcon;
        if ((0, u.Z)(e)) return i.AnnouncementsLockIcon;
        else return i.AnnouncementsIcon
      }
      if (e.isNSFW()) return i.AnnouncementsWarningIcon;
      if ((0, u.Z)(e)) return i.AnnouncementsLockIcon;
      return i.AnnouncementsIcon;
    case c.d4z.GUILD_STORE:
      return i.TagIcon;
    case c.d4z.DM:
    case c.d4z.GROUP_DM:
      return i.AtIcon;
    case c.d4z.PRIVATE_THREAD:
      return i.ThreadLockIcon;
    case c.d4z.ANNOUNCEMENT_THREAD:
    case c.d4z.PUBLIC_THREAD:
      if (e.isNSFW()) return i.ThreadWarningIcon;
      if (e.isForumPost()) return i.ChatIcon;
      else return i.ThreadIcon;
    case c.d4z.GUILD_TEXT:
      if (T) {
        if (e.isNSFW()) return i.TextWarningIcon;
        if ((0, u.Z)(e)) return i.TextLockIcon;
        else return i.TextIcon
      }
      if (e.isNSFW()) return i.TextWarningIcon;
      if ((0, u.Z)(e)) return i.TextLockIcon;
      return i.TextIcon;
    case c.d4z.GUILD_FORUM:
      let S = e.isMediaChannel();
      if (e.isNSFW()) return S ? i.ImageWarningIcon : i.ForumWarningIcon;
      if ((0, u.Z)(e)) return S ? i.ImageLockIcon : i.ForumLockIcon;
      else return S ? i.ImageIcon : i.ForumIcon;
    case c.d4z.GUILD_MEDIA:
      if (e.isNSFW()) return i.ImageWarningIcon;
      if ((0, u.Z)(e)) return i.ImageLockIcon;
      else return i.ImageIcon;
    case c.d4z.GUILD_STAGE_VOICE:
      if (f) return (0, u.Z)(e) ? i.LockIcon : i.StageLockIcon;
      if (d) return i.LockIcon;
      if ((0, u.Z)(e)) return i.StageLockIcon;
      else return i.StageIcon;
    case c.d4z.GUILD_VOICE:
      if (h) return i.ChatIcon;
      if (e.isNSFW()) return i.VoiceWarningIcon;
      if (I) return i.ScreenArrowIcon;
      if (f) {
        if ((0, u.Z)(e)) return i.LockIcon;
        return E ? i.VideoLockIcon : i.VoiceLockIcon
      }
      if (d) return i.LockIcon;
      if ((0, u.Z)(e)) return E ? i.VideoLockIcon : i.VoiceLockIcon;
      else return E ? i.VideoIcon : i.VoiceNormalIcon;
    case c.d4z.GUILD_DIRECTORY:
      return i.HubIcon;
    case c.d4z.GUILD_CATEGORY:
      return i.FolderIcon;
    default:
      if (_.EC.has(e.id)) {
        if (e.id === _.HY.GUILD_HOME || e.id === _.HY.SERVER_GUIDE) return i.SignPostIcon;
        if (e.id === _.HY.CHANNEL_BROWSER || e.id === _.HY.CUSTOMIZE_COMMUNITY) return i.ChannelListMagnifyingGlassIcon
      }
      return null
  }
}

function T(e) {
  switch (e) {
    case c.d4z.GUILD_ANNOUNCEMENT:
      return i.AnnouncementsIcon;
    case c.d4z.GUILD_STORE:
      return i.TagIcon;
    case c.d4z.DM:
    case c.d4z.GROUP_DM:
      return i.AtIcon;
    case c.d4z.PRIVATE_THREAD:
      return i.ThreadLockIcon;
    case c.d4z.ANNOUNCEMENT_THREAD:
    case c.d4z.PUBLIC_THREAD:
      return i.ThreadIcon;
    case c.d4z.GUILD_TEXT:
    case c.d4z.GUILD_FORUM:
    case c.d4z.GUILD_MEDIA:
      return i.TextIcon;
    case c.d4z.GUILD_STAGE_VOICE:
      return i.StageIcon;
    case c.d4z.GUILD_VOICE:
      return i.VoiceNormalIcon;
    case c.d4z.GUILD_CATEGORY:
      return i.FolderIcon;
    default:
      return null
  }
}