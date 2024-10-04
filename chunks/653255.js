var r,
    i,
    u,
    l,
    o = n(442837),
    a = n(570140),
    s = n(358085),
    c = n(998502),
    d = n(869614),
    f = n(281083),
    v = n(672598);
let p = !1,
    h = !0,
    g = !1;
class m extends (l = o.ZP.Store) {
    initialize() {
        !(!s.isPlatformEmbedded || __OVERLAY__) &&
            c.ZP.getGPUDriverVersions().then((e) => {
                (p = (0, v.Z)(e)), (h = (0, d.Z)(e)), (g = (0, f.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return p;
    }
    get canUseHardwareAcceleration() {
        return h;
    }
    get problematicGPUDriver() {
        return g;
    }
    getState() {
        return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: h,
            problematicGPUDriver: g
        };
    }
}
(u = 'StreamingCapabilitiesStore'),
    (i = 'displayName') in (r = m)
        ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = u),
    (t.Z = new m(a.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (p = t.GPUDriversOutdated), (h = t.canUseHardwareAcceleration);
        }
    }));
