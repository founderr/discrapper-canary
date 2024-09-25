var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(433517),
    l = n(570140),
    u = n(65154);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = 'CertifiedDeviceStore',
    _ = {},
    E = {},
    f = 0;
function h(e, t, n) {
    let r = E[e];
    return null != r ? n(r) : t;
}
function p(e, t) {
    let n = _[e];
    null != n && n.forEach((e) => delete E[e.id]), (_[e] = t), t.forEach((e) => (E[e.id] = e));
}
function m(e) {
    let { applicationId: t, devices: n } = e;
    p(t, n), s.K.set(d, _), f++;
}
class I extends (r = o.ZP.Store) {
    initialize() {
        let e = s.K.get(d);
        null != e &&
            a().forEach(e, (e, t) => {
                e.forEach((e) => {
                    'audioinput' === e.type && e.hardwareMute && (e.hardwareMute = !1);
                }),
                    p(t, e);
            });
    }
    isCertified(e) {
        return null != E[e];
    }
    getCertifiedDevice(e) {
        return E[e];
    }
    getCertifiedDeviceName(e, t) {
        let n = this.getCertifiedDevice(e);
        return null != n ? ''.concat(n.vendor.name, ' ').concat(n.model.name) : t;
    }
    getCertifiedDeviceByType(e) {
        return a().find(E, (t) => t.type === e);
    }
    isHardwareMute(e) {
        return h(e, !1, (e) => e.type === u.h7.AUDIO_INPUT && e.hardwareMute);
    }
    hasEchoCancellation(e) {
        return h(e, !1, (e) => e.type === u.h7.AUDIO_INPUT && e.echoCancellation);
    }
    hasNoiseSuppression(e) {
        return h(e, !1, (e) => e.type === u.h7.AUDIO_INPUT && e.noiseSuppression);
    }
    hasAutomaticGainControl(e) {
        return h(e, !1, (e) => e.type === u.h7.AUDIO_INPUT && e.automaticGainControl);
    }
    getVendor(e) {
        return h(e, null, (e) => e.vendor);
    }
    getModel(e) {
        return h(e, null, (e) => e.model);
    }
    getRevision() {
        return f;
    }
}
c(I, 'displayName', 'CertifiedDeviceStore'), (t.Z = new I(l.Z, { CERTIFIED_DEVICES_SET: m }));
