"use strict";
n.r(t), n.d(t, {
  getSystemAnalyticsInfo: function() {
    return f
  }
}), n("47120");
var i, r = n("442837"),
  s = n("570140"),
  a = n("353926"),
  o = n("626135"),
  l = n("358085"),
  u = n("998502");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
  hashes: {}
};
async function c() {
  if (!l.isPlatformEmbedded || !(0, l.isWindows)()) return [];
  await u.default.ensureModule("discord_media");
  let e = u.default.requireModule("discord_media");
  return await e.getSystemAnalyticsBlob() || []
}
async function E() {
  try {
    let e = (await c()).filter(e => _.hashes[e.name] !== e.hash);
    for (let {
        name: t,
        hash: n,
        data: i
      }
      of e) o.default.track(t, i), (_ = {
      hashes: {
        ..._.hashes
      }
    }).hashes[t] = n;
    e.length > 0 && T.emitChange()
  } catch (e) {}
}
class I extends(i = r.default.PersistedStore) {
  initialize(e) {
    _ = null != e && "object" == typeof e.hashes ? e : {
      hashes: {}
    }, this.waitFor(a.default)
  }
  getState() {
    return _
  }
  async info() {
    try {
      let e = (await c()).find(e => "hardware_detected" === e.name);
      if (null == e) return null;
      return e.data
    } catch (e) {}
  }
}
d(I, "displayName", "SystemAnalyticsStore"), d(I, "persistKey", "SystemAnalyticsStore");
let T = new I(s.default, {
  START_SESSION: function() {
    return E(), !1
  }
});

function f() {
  return T.info()
}