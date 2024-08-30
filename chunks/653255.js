var r,
    i,
    u,
    l,
    o = n(442837),
    c = n(570140),
    a = n(358085),
    s = n(998502),
    d = n(869614),
    f = n(281083),
    E = n(672598);
let v = !1,
    p = !0,
    S = !1;
class P extends (l = o.ZP.Store) {
    initialize() {
        !(!a.isPlatformEmbedded || __OVERLAY__) &&
            s.ZP.getGPUDriverVersions().then((e) => {
                (v = (0, E.Z)(e)), (p = (0, d.Z)(e)), (S = (0, f.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return v;
    }
    get canUseHardwareAcceleration() {
        return p;
    }
    get problematicGPUDriver() {
        return S;
    }
    getState() {
        return {
            GPUDriversOutdated: v,
            canUseHardwareAcceleration: p,
            problematicGPUDriver: S
        };
    }
}
(u = 'StreamingCapabilitiesStore'),
    (i = 'displayName') in (r = P)
        ? Object.defineProperty(r, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = u),
    (t.Z = new P(c.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (v = t.GPUDriversOutdated), (p = t.canUseHardwareAcceleration);
        }
    }));
