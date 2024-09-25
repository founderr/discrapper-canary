var r = n(47120);
var i = n(147913),
    a = n(474873),
    o = n(523746),
    s = n(292959),
    l = n(246946),
    u = n(979651),
    c = n(938475),
    d = n(557177);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = (0, d.uk)('call_calling', a.Z.getSoundpack());
class f extends i.Z {
    handleSoundpackUpdate() {
        E.stop(), (E = (0, d.uk)('call_calling', a.Z.getSoundpack()));
    }
    handleRingUpdate() {
        let e = o.Z.getCalls().filter((e) => e.ringing.length > 0 && u.Z.getCurrentClientVoiceChannelId(null) === e.channelId),
            t = u.Z.getCurrentClientVoiceChannelId(null);
        (null != t && c.ZP.countVoiceStatesForChannel(t) >= 2) || !(e.length > 0) || s.Z.isSoundDisabled('call_calling') || l.Z.disableSounds ? E.stop() : E.loop();
    }
    constructor(...e) {
        super(...e), _(this, 'stores', new Map().set(o.Z, this.handleRingUpdate).set(s.Z, this.handleRingUpdate).set(l.Z, this.handleRingUpdate).set(u.Z, this.handleRingUpdate).set(a.Z, this.handleSoundpackUpdate));
    }
}
t.Z = new f();
