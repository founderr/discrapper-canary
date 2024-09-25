n.d(t, {
    q: function () {
        return I;
    }
});
var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(353926),
    l = n(626135),
    u = n(358085),
    c = n(998502);
function d(e, t, n) {
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
let _ = { hashes: {} };
async function E() {
    if (!u.isPlatformEmbedded || !(0, u.isWindows)()) return [];
    await c.ZP.ensureModule('discord_media');
    let e = c.ZP.requireModule('discord_media');
    return (await e.getSystemAnalyticsBlob()) || [];
}
async function f() {
    try {
        let t = (await E()).filter((e) => _.hashes[e.name] !== e.hash);
        for (let { name: n, hash: r, data: i } of t) {
            var e;
            let t = {
                ...i,
                gpus: null === (e = i.gpus) || void 0 === e ? void 0 : e.map((e) => JSON.stringify(e))
            };
            l.default.track(n, t), ((_ = { hashes: { ..._.hashes } }).hashes[n] = r);
        }
        t.length > 0 && m.emitChange();
    } catch (e) {}
}
function h() {
    return f(), !1;
}
class p extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        (_ = null != e && 'object' == typeof e.hashes ? e : { hashes: {} }), this.waitFor(s.Z);
    }
    getState() {
        return _;
    }
    async info() {
        try {
            let e = (await E()).find((e) => 'hardware_detected' === e.name);
            if (null == e) return null;
            return e.data;
        } catch (e) {}
    }
}
d(p, 'displayName', 'SystemAnalyticsStore'), d(p, 'persistKey', 'SystemAnalyticsStore');
let m = new p(o.Z, { START_SESSION: h });
function I() {
    return m.info();
}
