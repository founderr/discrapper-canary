"use strict";
a.r(t), a("47120");
var n = a("846519"),
  s = a("570140"),
  l = a("287734"),
  i = a("317770"),
  r = a("199902"),
  o = a("592125"),
  u = a("430824"),
  d = a("517100"),
  c = a("19780"),
  f = a("70956"),
  E = a("358085"),
  h = a("981631");
let _ = new n.Timeout,
  C = new n.Timeout;
class m extends i.default {
  _initialize() {
    s.default.subscribe("IDLE", this.handleIdleUpdate)
  }
  _terminate() {
    _.stop(), C.stop(), s.default.unsubscribe("IDLE", this.handleIdleUpdate)
  }
  handleIdleUpdate() {
    let e = d.default.getIdleSince();
    if (!E.isPlatformEmbedded) return;
    for (let e of (_.stop(), C.stop(), r.default.getAllActiveStreams()))
      if (e.state !== h.ApplicationStreamStates.ENDED) return;
    if (null == e) return;
    let t = c.default.getChannelId();
    if (null == t) return;
    C.start(18e6, () => {
      l.default.selectVoiceChannel(null)
    });
    let a = u.default.getGuild(c.default.getGuildId());
    if (null == a || null == a.afkChannelId || a.afkChannelId === t || null == a.afkTimeout) return;
    let n = o.default.getChannel(t);
    if (null != n) !n.isGuildStageVoice() && _.start(e + a.afkTimeout * f.default.Millis.SECOND - Date.now(), () => {
      null != (a = u.default.getGuild(c.default.getGuildId())) && null != a.afkChannelId && l.default.selectVoiceChannel(a.afkChannelId)
    })
  }
}
t.default = new m