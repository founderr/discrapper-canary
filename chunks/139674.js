let r;
n(47120);
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(433517),
    c = n(570140),
    d = n(902676),
    f = n(626135),
    _ = n(358085),
    p = n(704133),
    h = n(981631);
let m = 'BlockedDomainStore',
    g = 'BlockedDomainRevision',
    E = null;
class v extends (i = l.ZP.Store) {
    initialize() {
        (r = null), u.K.get(m) && (u.K.remove(g), u.K.remove(m));
    }
    getCurrentRevision() {
        if (!(0, _.isDesktop)()) return null;
        if (null == r) {
            var e;
            r = null !== (e = u.K.get(g)) && void 0 !== e ? e : null;
        }
        return r;
    }
    async getBlockedDomainList() {
        return null == E && (E = new Set(await p.Z.getBlockedDomains())), E;
    }
    isBlockedDomain(e) {
        let t = n(647229);
        if (null == E) return this.getBlockedDomainList(), null;
        let r = (0, d.F)(e),
            i = new t.hash.sha256(),
            a = t.codec.hex.fromBits(i.update(r).finalize()),
            s = '';
        E.has(a) && (s = r);
        let o = r.indexOf('.');
        for (; -1 !== o && '' === s; ) (r = r.substring(o + 1)), i.reset(), (a = t.codec.hex.fromBits(i.update(r).finalize())), E.has(a) && (s = r), (o = r.indexOf('.'));
        return '' !== s ? (f.default.track(h.rMx.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: s }), s) : null;
    }
}
(o = 'BlockedDomainStore'),
    (s = 'displayName') in (a = v)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new v(c.Z, {
        BLOCKED_DOMAIN_LIST_FETCHED: function (e) {
            let { list: t, revision: n } = e;
            (r = null), (E = new Set(t)), p.Z.saveBlockedDomains(t), u.K.set('BlockedDomainRevision', n);
        }
    }));
