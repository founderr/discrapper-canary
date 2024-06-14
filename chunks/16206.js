"use strict";
s.r(n), s.d(n, {
  default: function() {
    return a
  }
});
var t = s("981631"),
  r = s("689938");

function a(e) {
  if (null == e) return null;
  switch (e.type) {
    case t.ChannelTypes.GUILD_ANNOUNCEMENT:
      return r.default.Messages.NEWS_CHANNEL;
    case t.ChannelTypes.GUILD_STORE:
      return r.default.Messages.STORE_CHANNEL;
    case t.ChannelTypes.DM:
    case t.ChannelTypes.GROUP_DM:
      return r.default.Messages.DM;
    case t.ChannelTypes.PRIVATE_THREAD:
      return r.default.Messages.PRIVATE_THREAD;
    case t.ChannelTypes.ANNOUNCEMENT_THREAD:
    case t.ChannelTypes.PUBLIC_THREAD:
      return r.default.Messages.THREAD;
    case t.ChannelTypes.GUILD_TEXT:
      return r.default.Messages.TEXT_CHANNEL;
    case t.ChannelTypes.GUILD_FORUM:
      return e.isMediaChannel() ? r.default.Messages.MEDIA_CHANNEL : r.default.Messages.FORUM_CHANNEL;
    case t.ChannelTypes.GUILD_MEDIA:
      return r.default.Messages.MEDIA_CHANNEL;
    case t.ChannelTypes.GUILD_STAGE_VOICE:
      return r.default.Messages.STAGE_CHANNEL;
    case t.ChannelTypes.GUILD_VOICE:
      return r.default.Messages.VOICE_CHANNEL;
    case t.ChannelTypes.GUILD_CATEGORY:
    default:
      return null
  }
}