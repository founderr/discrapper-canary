var r,
    i,
    a = n(47120);
var o = n(757143);
var s = n(442837),
    l = n(433517),
    u = n(570140),
    c = n(591759),
    d = n(902676),
    _ = n(616922);
function E(e, t, n) {
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
let f = 'MaskedLinkStore',
    h = new Set(),
    p = new Set(),
    m = null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.replace('//', '');
function I(e) {
    let t = (0, d.F)(e);
    switch (t) {
        case window.GLOBAL_ENV.CDN_HOST:
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case m:
        case location.hostname:
            return !0;
        default:
            return _.SD.includes(t) || c.Z.isDiscordHostname(t) || h.has(t);
    }
}
function T(e) {
    let t = (0, d.E)(e);
    return p.has(t);
}
function g(e) {
    let { url: t } = e;
    if (I(t)) return !1;
    h.add((0, d.F)(t)),
        l.K.set(f, {
            trustedDomains: h,
            trustedProtocols: p
        });
}
function S(e) {
    let { url: t } = e;
    if (T(t)) return !1;
    p.add((0, d.E)(t)),
        l.K.set(f, {
            trustedDomains: h,
            trustedProtocols: p
        });
}
class A extends (i = s.ZP.Store) {
    initialize() {
        var e;
        let t = null !== (e = l.K.get(f)) && void 0 !== e ? e : {};
        if (Array.isArray(t)) (h = new Set(null != t ? Array.from(t) : null)), (p = new Set());
        else {
            let { trustedDomains: e, trustedProtocols: n } = t;
            (h = new Set(null != e ? Array.from(e) : null)), (p = new Set(null != n ? Array.from(n) : null));
        }
    }
    isTrustedDomain(e) {
        return I(e);
    }
    isTrustedProtocol(e) {
        return T(e);
    }
}
E(A, 'displayName', 'MaskedLinkStore'),
    (t.Z = new A(u.Z, {
        MASKED_LINK_ADD_TRUSTED_DOMAIN: g,
        MASKED_LINK_ADD_TRUSTED_PROTOCOL: S
    }));
