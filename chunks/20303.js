n(47120), n(757143);
var r,
    i,
    a,
    s,
    o,
    l = n(442837),
    u = n(433517),
    c = n(570140),
    d = n(591759),
    f = n(902676),
    _ = n(616922);
let p = 'MaskedLinkStore',
    h = new Set(),
    m = new Set(),
    g = null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.replace('//', '');
function E(e) {
    let t = (0, f.F)(e);
    switch (t) {
        case window.GLOBAL_ENV.CDN_HOST:
        case window.GLOBAL_ENV.INVITE_HOST:
        case window.GLOBAL_ENV.GIFT_CODE_HOST:
        case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
        case g:
        case location.hostname:
            return !0;
        default:
            return _.SD.includes(t) || d.Z.isDiscordHostname(t) || h.has(t);
    }
}
function v(e) {
    let t = (0, f.E)(e);
    return m.has(t);
}
class I extends (i = l.ZP.Store) {
    initialize() {
        var e;
        let t = null !== (e = u.K.get(p)) && void 0 !== e ? e : {};
        if (Array.isArray(t)) (h = new Set(null != t ? Array.from(t) : null)), (m = new Set());
        else {
            let { trustedDomains: e, trustedProtocols: n } = t;
            (h = new Set(null != e ? Array.from(e) : null)), (m = new Set(null != n ? Array.from(n) : null));
        }
    }
    isTrustedDomain(e) {
        return E(e);
    }
    isTrustedProtocol(e) {
        return v(e);
    }
}
(o = 'MaskedLinkStore'),
    (s = 'displayName') in (a = I)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new I(c.Z, {
        MASKED_LINK_ADD_TRUSTED_DOMAIN: function (e) {
            let { url: t } = e;
            if (E(t)) return !1;
            h.add((0, f.F)(t)),
                u.K.set(p, {
                    trustedDomains: h,
                    trustedProtocols: m
                });
        },
        MASKED_LINK_ADD_TRUSTED_PROTOCOL: function (e) {
            let { url: t } = e;
            if (v(t)) return !1;
            m.add((0, f.E)(t)),
                u.K.set(p, {
                    trustedDomains: h,
                    trustedProtocols: m
                });
        }
    }));
