var r,
    i,
    o,
    a,
    l = n(442837),
    s = n(570140),
    c = n(358085),
    u = n(998502),
    d = n(869614),
    f = n(281083),
    p = n(672598);
let h = !1,
    v = !0,
    _ = !1;
class m extends (a = l.ZP.Store) {
    initialize() {
        !(!c.isPlatformEmbedded || __OVERLAY__) &&
            u.ZP.getGPUDriverVersions().then((e) => {
                (h = (0, p.Z)(e)), (v = (0, d.Z)(e)), (_ = (0, f.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return h;
    }
    get canUseHardwareAcceleration() {
        return v;
    }
    get problematicGPUDriver() {
        return _;
    }
    getState() {
        return {
            GPUDriversOutdated: h,
            canUseHardwareAcceleration: v,
            problematicGPUDriver: _
        };
    }
}
(o = 'StreamingCapabilitiesStore'),
    (i = 'displayName') in (r = m)
        ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = o),
    (t.Z = new m(s.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (h = t.GPUDriversOutdated), (v = t.canUseHardwareAcceleration);
        }
    }));
