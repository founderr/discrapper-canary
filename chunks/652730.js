var i, a, s, l, r = n(442837), o = n(570140), c = n(41776);
let d = null, u = null;
function h() {
    let e = c.Z.mostRecentLurkedGuildId();
    null != e ? (d = e, u = null) : (null != d ? u = d : u = null, d = null);
}
class p extends (l = r.ZP.Store) {
    initialize() {
        this.syncWith([c.Z], h);
    }
    shouldShowPopout(e) {
        return u === e;
    }
}
s = 'LurkerModePopoutStore', (a = 'displayName') in (i = p) ? Object.defineProperty(i, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = s, t.Z = new p(o.Z);
