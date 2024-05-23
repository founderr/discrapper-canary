"use strict";
let i;
n.r(t), n("47120");
var r, s, a, o, l = n("442837"),
  u = n("433517"),
  d = n("570140"),
  _ = n("902676"),
  c = n("626135"),
  E = n("358085"),
  I = n("704133"),
  T = n("981631");
let f = "BlockedDomainStore",
  S = "BlockedDomainRevision",
  h = null;
class A extends(r = l.default.Store) {
  initialize() {
    i = null, u.Storage.get(f) && (u.Storage.remove(S), u.Storage.remove(f))
  }
  getCurrentRevision() {
    if (!(0, E.isDesktop)()) return null;
    if (null == i) {
      var e;
      i = null !== (e = u.Storage.get(S)) && void 0 !== e ? e : null
    }
    return i
  }
  async getBlockedDomainList() {
    return null == h && (h = new Set(await I.default.getBlockedDomains())), h
  }
  isBlockedDomain(e) {
    let t = n("647229");
    if (null == h) return this.getBlockedDomainList(), null;
    let i = (0, _.getHostname)(e),
      r = new t.hash.sha256,
      s = t.codec.hex.fromBits(r.update(i).finalize()),
      a = "";
    h.has(s) && (a = i);
    let o = i.indexOf(".");
    for (; - 1 !== o && "" === a;) i = i.substring(o + 1), r.reset(), s = t.codec.hex.fromBits(r.update(i).finalize()), h.has(s) && (a = i), o = i.indexOf(".");
    return "" !== a ? (c.default.track(T.AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, {
      blocked_domain: a
    }), a) : null
  }
}
o = "BlockedDomainStore", (a = "displayName") in(s = A) ? Object.defineProperty(s, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = o, t.default = new A(d.default, {
  BLOCKED_DOMAIN_LIST_FETCHED: function(e) {
    let {
      list: t,
      revision: n
    } = e;
    i = null, h = new Set(t), I.default.saveBlockedDomains(t), u.Storage.set("BlockedDomainRevision", n)
  }
})