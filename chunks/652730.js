var i,
    s,
    a,
    l,
    r = n(442837),
    o = n(570140),
    c = n(41776);
let u = null,
    d = null;
function h() {
    let e = c.Z.mostRecentLurkedGuildId();
    null != e ? ((u = e), (d = null)) : (null != u ? (d = u) : (d = null), (u = null));
}
class p extends (l = r.ZP.Store) {
    initialize() {
        this.syncWith([c.Z], h);
    }
    shouldShowPopout(e) {
        return d === e;
    }
}
(a = 'LurkerModePopoutStore'),
    (s = 'displayName') in (i = p)
        ? Object.defineProperty(i, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[s] = a),
    (t.Z = new p(o.Z));
