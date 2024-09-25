let r;
var i,
    a = n(47120);
var o = n(442837),
    s = n(433517),
    l = n(570140),
    u = n(902676),
    c = n(626135),
    d = n(358085),
    _ = n(704133),
    E = n(981631);
function f(e, t, n) {
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
let h = 'BlockedDomainStore',
    p = 'BlockedDomainRevision';
function m(e) {
    let { list: t, revision: n } = e;
    (r = null), (I = new Set(t)), _.Z.saveBlockedDomains(t), s.K.set('BlockedDomainRevision', n);
}
let I = null;
class T extends (i = o.ZP.Store) {
    initialize() {
        (r = null), s.K.get(h) && (s.K.remove(p), s.K.remove(h));
    }
    getCurrentRevision() {
        if (!(0, d.isDesktop)()) return null;
        if (null == r) {
            var e;
            r = null !== (e = s.K.get(p)) && void 0 !== e ? e : null;
        }
        return r;
    }
    async getBlockedDomainList() {
        return null == I && (I = new Set(await _.Z.getBlockedDomains())), I;
    }
    isBlockedDomain(e) {
        let t = n(647229);
        if (null == I) return this.getBlockedDomainList(), null;
        let r = (0, u.F)(e),
            i = new t.hash.sha256(),
            a = t.codec.hex.fromBits(i.update(r).finalize()),
            o = '';
        I.has(a) && (o = r);
        let s = r.indexOf('.');
        for (; -1 !== s && '' === o; ) (r = r.substring(s + 1)), i.reset(), (a = t.codec.hex.fromBits(i.update(r).finalize())), I.has(a) && (o = r), (s = r.indexOf('.'));
        return '' !== o ? (c.default.track(E.rMx.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: o }), o) : null;
    }
}
f(T, 'displayName', 'BlockedDomainStore'), (t.Z = new T(l.Z, { BLOCKED_DOMAIN_LIST_FETCHED: m }));
