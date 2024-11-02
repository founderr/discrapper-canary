n(653041), n(47120);
var r,
    i,
    a,
    s,
    o = n(348327),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(742738);
let f = [d.Z],
    _ = [];
function h() {
    let e = [];
    for (let t of f) {
        let n = t.getActivity();
        null != n && e.push(n);
    }
    return !l()(e, _) && ((_ = e), !0);
}
class p extends (r = u.ZP.Store) {
    initialize() {
        this.syncWith(f, h);
    }
    getActivities() {
        return _;
    }
}
(s = 'FirstPartyRichPresenceStore'),
    (a = 'displayName') in (i = p)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new p(c.Z));
