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
let v = !1,
    h = !0,
    b = !1;
class _ extends (a = l.ZP.Store) {
    initialize() {
        !(!c.isPlatformEmbedded || __OVERLAY__) &&
            u.ZP.getGPUDriverVersions().then((e) => {
                (v = (0, p.Z)(e)), (h = (0, d.Z)(e)), (b = (0, f.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return v;
    }
    get canUseHardwareAcceleration() {
        return h;
    }
    get problematicGPUDriver() {
        return b;
    }
    getState() {
        return {
            GPUDriversOutdated: v,
            canUseHardwareAcceleration: h,
            problematicGPUDriver: b
        };
    }
}
(o = 'StreamingCapabilitiesStore'),
    (i = 'displayName') in (r = _)
        ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = o),
    (t.Z = new _(s.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (v = t.GPUDriversOutdated), (h = t.canUseHardwareAcceleration);
        }
    }));
