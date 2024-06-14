"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("442837"),
  r = a("661869"),
  l = a("543882"),
  i = a("199902"),
  o = a("592125"),
  s = a("496675"),
  u = a("158776"),
  d = a("979651"),
  c = a("561308"),
  g = a("231338");

function f(e) {
  let t = (0, n.useStateFromStores)([d.default, o.default], () => {
      if (!(0, c.isEntryActive)(e) || e.author_type !== r.ContentInventoryAuthorType.USER) return null;
      let t = d.default.getVoiceStateForUser(e.author_id);
      return o.default.getChannel(null == t ? void 0 : t.channelId)
    }, [e]),
    a = (0, n.useStateFromStores)([u.default], () => u.default.getPrimaryActivity(e.author_id, null == t ? void 0 : t.guild_id), [t, e]),
    {
      streamPreviewUrl: f,
      stream: E
    } = (0, n.useStateFromStoresObject)([i.default, s.default, l.default], () => {
      let a;
      if (null == t) return {};
      let n = i.default.getAnyStreamForUser(e.author_id);
      return null == n ? {} : (s.default.canBasicChannel(g.BasicPermissions.CONNECT, t) && (null == n ? void 0 : n.channelId) === t.id && (a = l.default.getPreviewURL(n.guildId, n.channelId, n.ownerId)), {
        stream: n,
        streamPreviewUrl: a
      })
    }, [t, e]);
  return {
    channel: t,
    activity: a,
    streamPreviewUrl: f,
    stream: E
  }
}