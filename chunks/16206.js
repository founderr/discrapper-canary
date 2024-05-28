"use strict";
n.r(s), n.d(s, {
  default: function() {
    return r
  }
});
var t = n("981631"),
  a = n("689938");

function r(e) {
  if (null == e) return null;
  switch (e.type) {
    case t.ChannelTypes.GUILD_ANNOUNCEMENT:
      return a.default.Messages.NEWS_CHANNEL;
    case t.ChannelTypes.GUILD_STORE:
      return a.default.Messages.STORE_CHANNEL;
    case t.ChannelTypes.DM:
    case t.ChannelTypes.GROUP_DM:
      return a.default.Messages.DM;
    case t.ChannelTypes.PRIVATE_THREAD:
      return a.default.Messages.PRIVATE_THREAD;
    case t.ChannelTypes.ANNOUNCEMENT_THREAD:
    case t.ChannelTypes.PUBLIC_THREAD:
      return a.default.Messages.THREAD;
    case t.ChannelTypes.GUILD_TEXT:
      return a.default.Messages.TEXT_CHANNEL;
    case t.ChannelTypes.GUILD_FORUM:
      return e.isMediaChannel() ? a.default.Messages.MEDIA_CHANNEL : a.default.Messages.FORUM_CHANNEL;
    case t.ChannelTypes.GUILD_MEDIA:
      return a.default.Messages.MEDIA_CHANNEL;
    case t.ChannelTypes.GUILD_STAGE_VOICE:
      return a.default.Messages.STAGE_CHANNEL;
    case t.ChannelTypes.GUILD_VOICE:
      return a.default.Messages.VOICE_CHANNEL;
    case t.ChannelTypes.GUILD_CATEGORY:
    default:
      return null
  }
}