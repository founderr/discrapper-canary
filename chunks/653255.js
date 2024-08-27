var r,
    i,
    o,
    c,
    a = n(442837),
    l = n(570140),
    u = n(358085),
    s = n(998502),
    d = n(869614),
    f = n(281083),
    _ = n(672598);
let p = !1,
    m = !0,
    g = !1;
class h extends (c = a.ZP.Store) {
    initialize() {
        !(!u.isPlatformEmbedded || __OVERLAY__) &&
            s.ZP.getGPUDriverVersions().then((e) => {
                (p = (0, _.Z)(e)), (m = (0, d.Z)(e)), (g = (0, f.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return p;
    }
    get canUseHardwareAcceleration() {
        return m;
    }
    get problematicGPUDriver() {
        return g;
    }
    getState() {
        return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: m,
            problematicGPUDriver: g
        };
    }
}
(o = 'StreamingCapabilitiesStore'),
    (i = 'displayName') in (r = h)
        ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = o),
    (t.Z = new h(l.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (p = t.GPUDriversOutdated), (m = t.canUseHardwareAcceleration);
        }
    }));
