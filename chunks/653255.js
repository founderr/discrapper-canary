var r,
    i,
    o,
    a,
    s = n(442837),
    l = n(570140),
    c = n(358085),
    u = n(998502),
    d = n(869614),
    f = n(281083),
    p = n(672598);
let v = !1,
    _ = !0,
    h = !1;
class b extends (a = s.ZP.Store) {
    initialize() {
        !(!c.isPlatformEmbedded || __OVERLAY__) &&
            u.ZP.getGPUDriverVersions().then((e) => {
                (v = (0, p.Z)(e)), (_ = (0, d.Z)(e)), (h = (0, f.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return v;
    }
    get canUseHardwareAcceleration() {
        return _;
    }
    get problematicGPUDriver() {
        return h;
    }
    getState() {
        return {
            GPUDriversOutdated: v,
            canUseHardwareAcceleration: _,
            problematicGPUDriver: h
        };
    }
}
(o = 'StreamingCapabilitiesStore'),
    (i = 'displayName') in (r = b)
        ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = o),
    (t.Z = new b(l.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (v = t.GPUDriversOutdated), (_ = t.canUseHardwareAcceleration);
        }
    }));
