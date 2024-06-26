"use strict";
n(47120), n(757143);
var i, r, s, o, a, l = n(442837),
  u = n(433517),
  _ = n(570140),
  c = n(591759),
  d = n(902676),
  E = n(616922);
let I = "MaskedLinkStore",
  T = new Set,
  h = new Set,
  f = null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.replace("//", "");

function S(e) {
  let t = (0, d.F)(e);
  switch (t) {
    case window.GLOBAL_ENV.CDN_HOST:
    case window.GLOBAL_ENV.INVITE_HOST:
    case window.GLOBAL_ENV.GIFT_CODE_HOST:
    case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
    case f:
    case location.hostname:
      return !0;
    default:
      return E.SD.includes(t) || c.Z.isDiscordHostname(t) || T.has(t)
  }
}

function N(e) {
  let t = (0, d.E)(e);
  return h.has(t)
}
class A extends(r = l.ZP.Store) {
  initialize() {
    var e;
    let t = null !== (e = u.K.get(I)) && void 0 !== e ? e : {};
    if (Array.isArray(t)) T = new Set(null != t ? Array.from(t) : null), h = new Set;
    else {
      let {
        trustedDomains: e,
        trustedProtocols: n
      } = t;
      T = new Set(null != e ? Array.from(e) : null), h = new Set(null != n ? Array.from(n) : null)
    }
  }
  isTrustedDomain(e) {
    return S(e)
  }
  isTrustedProtocol(e) {
    return N(e)
  }
}
a = "MaskedLinkStore", (o = "displayName") in(s = A) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new A(_.Z, {
  MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
    let {
      url: t
    } = e;
    if (S(t)) return !1;
    T.add((0, d.F)(t)), u.K.set(I, {
      trustedDomains: T,
      trustedProtocols: h
    })
  },
  MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
    let {
      url: t
    } = e;
    if (N(t)) return !1;
    h.add((0, d.E)(t)), u.K.set(I, {
      trustedDomains: T,
      trustedProtocols: h
    })
  }
})