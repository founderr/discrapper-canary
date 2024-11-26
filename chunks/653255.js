var r,
    i,
    o,
    a,
    l = n(442837),
    s = n(570140),
    u = n(358085),
    c = n(998502),
    d = n(869614),
    f = n(281083),
    _ = n(672598);
let p = !1,
    m = !0,
    h = !1;
class v extends (a = l.ZP.Store) {
    initialize() {
        !(!u.isPlatformEmbedded || __OVERLAY__) &&
            c.ZP.getGPUDriverVersions().then((e) => {
                (p = (0, _.Z)(e)), (m = (0, d.Z)(e)), (h = (0, f.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return p;
    }
    get canUseHardwareAcceleration() {
        return m;
    }
    get problematicGPUDriver() {
        return h;
    }
    getState() {
        return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: m,
            problematicGPUDriver: h
        };
    }
}
(o = 'StreamingCapabilitiesStore'),
    (i = 'displayName') in (r = v)
        ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = o),
    (t.Z = new v(s.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (p = t.GPUDriversOutdated), (m = t.canUseHardwareAcceleration);
        }
    }));
