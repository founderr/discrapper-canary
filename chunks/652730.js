var i,
    l,
    r,
    a,
    s = n(442837),
    o = n(570140),
    c = n(41776);
let d = null,
    u = null;
function h() {
    let e = c.Z.mostRecentLurkedGuildId();
    null != e ? ((d = e), (u = null)) : (null != d ? (u = d) : (u = null), (d = null));
}
class p extends (a = s.ZP.Store) {
    initialize() {
        this.syncWith([c.Z], h);
    }
    shouldShowPopout(e) {
        return u === e;
    }
}
(r = 'LurkerModePopoutStore'),
    (l = 'displayName') in (i = p)
        ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = r),
    (t.Z = new p(o.Z));
