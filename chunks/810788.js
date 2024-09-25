var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(374023),
    l = n(188785);
function u(e, t, n) {
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
let c = new Set(),
    d = {};
function _(e) {
    let { location: t } = e;
    if (c.has(t)) return !1;
    c.add(t);
}
function E(e) {
    let { location: t, enabled: n } = e;
    d[t] = n;
}
function f(e) {
    let { location: t } = e;
    if (null == d[t]) return !1;
    delete d[t];
}
function h(e) {
    let { hiddenHotspots: t } = e;
    c = new Set(t);
}
class p extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (Array.isArray(e.hiddenHotspots) && (c = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (d = e.hotspotOverrides));
    }
    hasHotspot(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t && d[e];
        return !(l.a || s.s.isDisallowPopupsSet()) && (n || !c.has(e));
    }
    hasHiddenHotspot(e) {
        return c.has(e);
    }
    getHotspotOverride(e) {
        return d[e];
    }
    getState() {
        return {
            hiddenHotspots: c,
            hotspotOverrides: d
        };
    }
}
u(p, 'displayName', 'HotspotStore'),
    u(p, 'persistKey', 'hotspots'),
    u(p, 'migrations', [
        (e) => ({
            hiddenHotspots: null != e ? e : [],
            hotspotOverrides: {}
        })
    ]),
    (t.Z = new p(o.Z, {
        OVERLAY_INITIALIZE: h,
        HOTSPOT_HIDE: _,
        HOTSPOT_OVERRIDE_SET: E,
        HOTSPOT_OVERRIDE_CLEAR: f
    }));
