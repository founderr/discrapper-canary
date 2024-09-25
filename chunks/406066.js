var r,
    i = n(653041);
var a = n(47120);
var o = n(348327),
    s = n.n(o),
    l = n(442837),
    u = n(570140);
function c(e, t, n) {
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
let d = [n(742738).Z],
    _ = [];
function E() {
    let e = [];
    for (let t of d) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !s()(e, _) && ((_ = e), !0);
}
class f extends (r = l.ZP.Store) {
    initialize() {
        this.syncWith(d, E);
    }
    getActivities() {
        return _;
    }
}
c(f, 'displayName', 'FirstPartyRichPresenceStore'), (t.Z = new f(u.Z));
