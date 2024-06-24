s.d(n, {
  Z: function() {
    return i
  }
});
var r = s(981631),
  t = s(689938);

function i(e) {
  if (null == e) return null;
  switch (e.type) {
    case r.d4z.GUILD_ANNOUNCEMENT:
      return t.Z.Messages.NEWS_CHANNEL;
    case r.d4z.GUILD_STORE:
      return t.Z.Messages.STORE_CHANNEL;
    case r.d4z.DM:
    case r.d4z.GROUP_DM:
      return t.Z.Messages.DM;
    case r.d4z.PRIVATE_THREAD:
      return t.Z.Messages.PRIVATE_THREAD;
    case r.d4z.ANNOUNCEMENT_THREAD:
    case r.d4z.PUBLIC_THREAD:
      return t.Z.Messages.THREAD;
    case r.d4z.GUILD_TEXT:
      return t.Z.Messages.TEXT_CHANNEL;
    case r.d4z.GUILD_FORUM:
      return e.isMediaChannel() ? t.Z.Messages.MEDIA_CHANNEL : t.Z.Messages.FORUM_CHANNEL;
    case r.d4z.GUILD_MEDIA:
      return t.Z.Messages.MEDIA_CHANNEL;
    case r.d4z.GUILD_STAGE_VOICE:
      return t.Z.Messages.STAGE_CHANNEL;
    case r.d4z.GUILD_VOICE:
      return t.Z.Messages.VOICE_CHANNEL;
    case r.d4z.GUILD_CATEGORY:
    default:
      return null
  }
}