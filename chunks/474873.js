var r,
    i = n(442837),
    a = n(570140),
    o = n(871465);
function s(e, t, n) {
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
let l = { soundpack: o.YC.CLASSIC };
function u(e) {
    let { soundpack: t } = e;
    l = { soundpack: t };
}
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (l = e);
    }
    getState() {
        return l;
    }
    getSoundpack() {
        return o.YC.CLASSIC;
    }
}
s(c, 'displayName', 'SoundpackStore'), s(c, 'persistKey', 'SoundpackStore'), (t.Z = new c(a.Z, { SET_SOUNDPACK: u }));
