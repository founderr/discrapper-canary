"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("689988"),
  a = n("870696"),
  l = n("950104"),
  s = n("385649"),
  r = n("102985"),
  o = n("800762"),
  u = n("316133"),
  d = n("709681");
let c = (0, d.createSoundForPack)("call_calling", a.default.getSoundpack());
class f extends i.default {
  handleSoundpackUpdate() {
    c.stop(), c = (0, d.createSoundForPack)("call_calling", a.default.getSoundpack())
  }
  handleRingUpdate() {
    let e = l.default.getCalls().filter(e => e.ringing.length > 0 && o.default.getCurrentClientVoiceChannelId(null) === e.channelId),
      t = o.default.getCurrentClientVoiceChannelId(null),
      n = null != t && u.default.countVoiceStatesForChannel(t) >= 2;
    n || !(e.length > 0) || s.default.isSoundDisabled("call_calling") || r.default.disableSounds ? c.stop() : c.loop()
  }
  constructor(...e) {
    super(...e), this.stores = new Map().set(l.default, this.handleRingUpdate).set(s.default, this.handleRingUpdate).set(r.default, this.handleRingUpdate).set(o.default, this.handleRingUpdate).set(a.default, this.handleSoundpackUpdate)
  }
}
var E = new f