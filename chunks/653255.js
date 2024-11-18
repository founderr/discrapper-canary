var i,
    r,
    l,
    a,
    s = n(442837),
    o = n(570140),
    c = n(358085),
    d = n(998502),
    u = n(869614),
    h = n(281083),
    m = n(672598);
let p = !1,
    g = !0,
    f = !1;
class _ extends (a = s.ZP.Store) {
    initialize() {
        !(!c.isPlatformEmbedded || __OVERLAY__) &&
            d.ZP.getGPUDriverVersions().then((e) => {
                (p = (0, m.Z)(e)), (g = (0, u.Z)(e)), (f = (0, h.Z)(e)), this.emitChange();
            });
    }
    get GPUDriversOutdated() {
        return p;
    }
    get canUseHardwareAcceleration() {
        return g;
    }
    get problematicGPUDriver() {
        return f;
    }
    getState() {
        return {
            GPUDriversOutdated: p,
            canUseHardwareAcceleration: g,
            problematicGPUDriver: f
        };
    }
}
(l = 'StreamingCapabilitiesStore'),
    (r = 'displayName') in (i = _)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new _(o.Z, {
        OVERLAY_INITIALIZE: function (e) {
            let { streamingCapabilitiesStoreState: t } = e;
            (p = t.GPUDriversOutdated), (g = t.canUseHardwareAcceleration);
        }
    }));
