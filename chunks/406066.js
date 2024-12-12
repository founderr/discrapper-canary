var i,
    a = r(653041);
var s = r(47120);
var o = r(348327),
    l = r.n(o),
    u = r(442837),
    c = r(570140);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = [r(742738).Z],
    _ = [];
function h() {
    let e = [];
    for (let n of f) {
        let r = n.getActivity();
        null != r && e.push(r);
    }
    return !l()(e, _) && ((_ = e), !0);
}
class p extends (i = u.ZP.Store) {
    initialize() {
        this.syncWith(f, h);
    }
    getActivities() {
        return _;
    }
}
d(p, 'displayName', 'FirstPartyRichPresenceStore'), (n.Z = new p(c.Z));
