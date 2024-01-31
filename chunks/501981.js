"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var l = n("298386"),
  a = n("446674"),
  s = n("442939"),
  i = n("42203"),
  r = n("546463"),
  o = n("305961"),
  u = n("957255"),
  d = n("824563"),
  c = n("800762"),
  f = n("449008"),
  h = n("49111");

function C(e) {
  let t = (0, a.useStateFromStores)([o.default], () => o.default.getGuild(e)),
    n = null == t ? void 0 : t.afkChannelId,
    C = (0, a.useStateFromStoresArray)([c.default, d.default, i.default, u.default], () => {
      let t = new Set,
        a = c.default.getVoiceStates(e);
      for (let s in a) {
        let r = i.default.getBasicChannel(a[s].channelId);
        if (null == r || r.type === l.ChannelTypes.GUILD_STAGE_VOICE || n === r.id || !u.default.canBasicChannel(h.BasicPermissions.VIEW_CHANNEL, r)) return [];
        let o = d.default.getActivities(s, e);
        o.forEach(e => {
          let n = e.application_id;
          if (e.type !== h.ActivityTypes.PLAYING || null == n) return [];
          t.add(n)
        })
      }
      return [...t]
    }, [n, e]),
    p = (0, s.default)([...C]).filter(f.isNotNullish).map(e => null == e ? void 0 : e.id);
  return (0, a.useStateFromStores)([r.default], () => p.some(e => null != r.default.getDetectableGame(e)), [p])
}