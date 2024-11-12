var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(433517),
    d = n(570140),
    f = n(65154);
let _ = 'CertifiedDeviceStore',
    p = {},
    h = {},
    m = 0;
function g(e, t, n) {
    let r = h[e];
    return null != r ? n(r) : t;
}
function E(e, t) {
    let n = p[e];
    null != n && n.forEach((e) => delete h[e.id]), (p[e] = t), t.forEach((e) => (h[e.id] = e));
}
class v extends (s = u.ZP.Store) {
    initialize() {
        let e = c.K.get(_);
        null != e &&
            l().forEach(e, (e, t) => {
                e.forEach((e) => {
                    'audioinput' === e.type && e.hardwareMute && (e.hardwareMute = !1);
                }),
                    E(t, e);
            });
    }
    isCertified(e) {
        return null != h[e];
    }
    getCertifiedDevice(e) {
        return h[e];
    }
    getCertifiedDeviceName(e, t) {
        let n = this.getCertifiedDevice(e);
        return null != n ? ''.concat(n.vendor.name, ' ').concat(n.model.name) : t;
    }
    getCertifiedDeviceByType(e) {
        return l().find(h, (t) => t.type === e);
    }
    isHardwareMute(e) {
        return g(e, !1, (e) => e.type === f.h7.AUDIO_INPUT && e.hardwareMute);
    }
    hasEchoCancellation(e) {
        return g(e, !1, (e) => e.type === f.h7.AUDIO_INPUT && e.echoCancellation);
    }
    hasNoiseSuppression(e) {
        return g(e, !1, (e) => e.type === f.h7.AUDIO_INPUT && e.noiseSuppression);
    }
    hasAutomaticGainControl(e) {
        return g(e, !1, (e) => e.type === f.h7.AUDIO_INPUT && e.automaticGainControl);
    }
    getVendor(e) {
        return g(e, null, (e) => e.vendor);
    }
    getModel(e) {
        return g(e, null, (e) => e.model);
    }
    getRevision() {
        return m;
    }
}
(a = 'CertifiedDeviceStore'),
    (i = 'displayName') in (r = v)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new v(d.Z, {
        CERTIFIED_DEVICES_SET: function (e) {
            let { applicationId: t, devices: n } = e;
            E(t, n), c.K.set(_, p), m++;
        }
    }));
