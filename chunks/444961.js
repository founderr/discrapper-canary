"use strict";
n.r(t), n("47120");
var a = n("846519"),
  s = n("570140"),
  l = n("287734"),
  i = n("317770"),
  r = n("199902"),
  o = n("592125"),
  u = n("430824"),
  d = n("517100"),
  c = n("19780"),
  f = n("70956"),
  E = n("358085"),
  _ = n("981631");
let h = new a.Timeout,
  C = new a.Timeout;
class m extends i.default {
  _initialize() {
    s.default.subscribe("IDLE", this.handleIdleUpdate)
  }
  _terminate() {
    h.stop(), C.stop(), s.default.unsubscribe("IDLE", this.handleIdleUpdate)
  }
  handleIdleUpdate() {
    let e = d.default.getIdleSince();
    if (!E.isPlatformEmbedded) return;
    for (let e of (h.stop(), C.stop(), r.default.getAllActiveStreams()))
      if (e.state !== _.ApplicationStreamStates.ENDED) return;
    if (null == e) return;
    let t = c.default.getChannelId();
    if (null == t) return;
    C.start(18e6, () => {
      l.default.selectVoiceChannel(null)
    });
    let n = u.default.getGuild(c.default.getGuildId());
    if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
    let a = o.default.getChannel(t);
    if (null != a) !a.isGuildStageVoice() && h.start(e + n.afkTimeout * f.default.Millis.SECOND - Date.now(), () => {
      null != (n = u.default.getGuild(c.default.getGuildId())) && null != n.afkChannelId && l.default.selectVoiceChannel(n.afkChannelId)
    })
  }
}
t.default = new m