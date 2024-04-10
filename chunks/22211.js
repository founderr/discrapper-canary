"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("442837"),
  l = n("661869"),
  s = n("592125"),
  i = n("158776"),
  r = n("979651"),
  o = n("561308");
let u = {};

function d(e) {
  let t = (0, a.useStateFromStores)([r.default], () => r.default.getVoiceStateForUser(e.author_id)),
    n = null == t ? void 0 : t.channelId,
    d = (0, o.isEntryActive)(e);
  return (0, a.useStateFromStoresObject)([s.default, i.default], () => {
    if (!d || null == n || e.author_type !== l.ContentInventoryAuthorType.USER) return u;
    let t = s.default.getChannel(n),
      a = i.default.getPrimaryActivity(e.author_id, null == t ? void 0 : t.guild_id);
    return null != t && null != a ? {
      channel: t,
      activity: a
    } : u
  }, [n, e.author_id, e.author_type, d])
}