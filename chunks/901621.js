n.d(t, {
  Z: function() {
    return p
  }
}), n(47120);
var l = n(106351),
  i = n(442837),
  s = n(835473),
  r = n(592125),
  a = n(430824),
  o = n(496675),
  u = n(158776),
  c = n(979651),
  d = n(823379),
  h = n(981631);

function p(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getGuild(e)),
    n = null == t ? void 0 : t.afkChannelId,
    p = (0, i.Wu)([c.Z, u.Z, r.Z, o.Z], () => {
      let t = new Set,
        i = c.Z.getVoiceStates(e);
      for (let s in i) {
        let a = r.Z.getBasicChannel(i[s].channelId);
        if (null != a && a.type !== l.d.GUILD_STAGE_VOICE && n !== a.id && !!o.Z.canBasicChannel(h.S7T.VIEW_CHANNEL, a)) u.Z.getActivities(s, e).forEach(e => {
          let n = e.application_id;
          if (e.type !== h.IIU.PLAYING || null == n) return [];
          t.add(n)
        })
      }
      return [...t]
    }, [n, e]);
  return (0, s.Z)([...p]).filter(d.lm).length > 0
}