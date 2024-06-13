"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("442837"),
  r = n("661869"),
  l = n("543882"),
  i = n("199902"),
  o = n("592125"),
  s = n("496675"),
  u = n("158776"),
  d = n("979651"),
  c = n("561308"),
  g = n("231338");

function f(e) {
  let t = (0, a.useStateFromStores)([d.default, o.default], () => {
      if (!(0, c.isEntryActive)(e) || e.author_type !== r.ContentInventoryAuthorType.USER) return null;
      let t = d.default.getVoiceStateForUser(e.author_id);
      return o.default.getChannel(null == t ? void 0 : t.channelId)
    }, [e]),
    n = (0, a.useStateFromStores)([u.default], () => u.default.getPrimaryActivity(e.author_id, null == t ? void 0 : t.guild_id), [t, e]),
    {
      streamPreviewUrl: f,
      stream: m
    } = (0, a.useStateFromStoresObject)([i.default, s.default, l.default], () => {
      let n;
      if (null == t) return {};
      let a = i.default.getAnyStreamForUser(e.author_id);
      return null == a ? {} : (s.default.canBasicChannel(g.BasicPermissions.CONNECT, t) && (null == a ? void 0 : a.channelId) === t.id && (n = l.default.getPreviewURL(a.guildId, a.channelId, a.ownerId)), {
        stream: a,
        streamPreviewUrl: n
      })
    }, [t, e]);
  return {
    channel: t,
    activity: n,
    streamPreviewUrl: f,
    stream: m
  }
}