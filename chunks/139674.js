let i;
var a,
    s = r(47120);
var o = r(442837),
    l = r(433517),
    u = r(570140),
    c = r(902676),
    d = r(626135),
    f = r(358085),
    _ = r(704133),
    h = r(981631);
function p(e, n, r) {
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
let m = 'BlockedDomainStore',
    g = 'BlockedDomainRevision';
function E(e) {
    let { list: n, revision: r } = e;
    (i = null), (v = new Set(n)), _.Z.saveBlockedDomains(n), l.K.set('BlockedDomainRevision', r);
}
let v = null;
class I extends (a = o.ZP.Store) {
    initialize() {
        (i = null), l.K.get(m) && (l.K.remove(g), l.K.remove(m));
    }
    getCurrentRevision() {
        if (!(0, f.isDesktop)()) return null;
        if (null == i) {
            var e;
            i = null !== (e = l.K.get(g)) && void 0 !== e ? e : null;
        }
        return i;
    }
    async getBlockedDomainList() {
        return null == v && (v = new Set(await _.Z.getBlockedDomains())), v;
    }
    isBlockedDomain(e) {
        let n = r(647229);
        if (null == v) return this.getBlockedDomainList(), null;
        let i = (0, c.F)(e),
            a = new n.hash.sha256(),
            s = n.codec.hex.fromBits(a.update(i).finalize()),
            o = '';
        v.has(s) && (o = i);
        let l = i.indexOf('.');
        for (; -1 !== l && '' === o; ) (i = i.substring(l + 1)), a.reset(), (s = n.codec.hex.fromBits(a.update(i).finalize())), v.has(s) && (o = i), (l = i.indexOf('.'));
        return '' !== o ? (d.default.track(h.rMx.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: o }), o) : null;
    }
}
p(I, 'displayName', 'BlockedDomainStore'), (n.Z = new I(u.Z, { BLOCKED_DOMAIN_LIST_FETCHED: E }));
