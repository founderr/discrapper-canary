let r;
var i,
    a = n(442837),
    o = n(570140),
    s = n(353368);
function l(e, t, n) {
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
let u = () => {
    r = r === s.q.BASIC ? s.q.PREMIUM : s.q.BASIC;
};
class c extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        r = null !== (t = null == e ? void 0 : e.animationType) && void 0 !== t ? t : s.q.PREMIUM;
    }
    getState() {
        return { animationType: r };
    }
}
l(c, 'displayName', 'VoiceChannelEffectsPersistedStore'), l(c, 'persistKey', 'VoiceChannelEffectsPersistedStore'), (t.Z = new c(o.Z, { VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: u }));
