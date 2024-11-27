var r,
    i,
    l,
    u,
    o = t(442837),
    a = t(570140),
    s = t(358085),
    c = t(998502),
    d = t(869614),
    f = t(281083),
    m = t(672598);
let v = !1,
    p = !0,
    h = !1;
class g extends (u = o.ZP.Store) {
    initialize() {
        !(!s.isPlatformEmbedded || __OVERLAY__) &&
            c.ZP.getGPUDriverVersions().then((e) => {
                (v = (0, m.Z)(e)), (p = (0, d.Z)(e)), (h = (0, f.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return v;
    }
    get canUseHardwareAcceleration() {
        return p;
    }
    get problematicGPUDriver() {
        return h;
    }
    getState() {
        return {
            GPUDriversOutdated: v,
            canUseHardwareAcceleration: p,
            problematicGPUDriver: h
        };
    }
}
(l = 'StreamingCapabilitiesStore'),
    (i = 'displayName') in (r = g)
        ? Object.defineProperty(r, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = l),
    (n.Z = new g(a.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: n } = e;
            (v = n.GPUDriversOutdated), (p = n.canUseHardwareAcceleration);
        }
    }));
