var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140),
    c = n(358085),
    d = n(998502),
    u = n(869614),
    _ = n(281083),
    E = n(672598);
let h = !1,
    m = !0,
    I = !1;
class p extends (r = l.ZP.Store) {
    initialize() {
        !(!c.isPlatformEmbedded || __OVERLAY__) &&
            d.ZP.getGPUDriverVersions().then((e) => {
                (h = (0, E.Z)(e)), (m = (0, u.Z)(e)), (I = (0, _.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return h;
    }
    get canUseHardwareAcceleration() {
        return m;
    }
    get problematicGPUDriver() {
        return I;
    }
    getState() {
        return {
            GPUDriversOutdated: h,
            canUseHardwareAcceleration: m,
            problematicGPUDriver: I
        };
    }
}
(s = 'StreamingCapabilitiesStore'),
    (a = 'displayName') in (i = p)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new p(o.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (h = t.GPUDriversOutdated), (m = t.canUseHardwareAcceleration);
        }
    }));
