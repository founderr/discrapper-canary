n(47120);
var s = n(846519),
  i = n(570140),
  l = n(287734),
  a = n(317770),
  r = n(199902),
  o = n(592125),
  c = n(430824),
  u = n(517100),
  d = n(19780),
  E = n(70956),
  h = n(358085),
  _ = n(981631);
let I = new s.V7,
  m = new s.V7;
class T extends a.Z {
  _initialize() {
    i.Z.subscribe("IDLE", this.handleIdleUpdate)
  }
  _terminate() {
    I.stop(), m.stop(), i.Z.unsubscribe("IDLE", this.handleIdleUpdate)
  }
  handleIdleUpdate() {
    let e = u.Z.getIdleSince();
    if (!h.isPlatformEmbedded) return;
    for (let e of (I.stop(), m.stop(), r.Z.getAllActiveStreams()))
      if (e.state !== _.jm8.ENDED) return;
    if (null == e) return;
    let t = d.Z.getChannelId();
    if (null == t) return;
    m.start(18e6, () => {
      l.default.selectVoiceChannel(null)
    });
    let n = c.Z.getGuild(d.Z.getGuildId());
    if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
    let s = o.Z.getChannel(t);
    if (null != s) !s.isGuildStageVoice() && I.start(e + n.afkTimeout * E.Z.Millis.SECOND - Date.now(), () => {
      null != (n = c.Z.getGuild(d.Z.getGuildId())) && null != n.afkChannelId && l.default.selectVoiceChannel(n.afkChannelId)
    })
  }
}
t.Z = new T