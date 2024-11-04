var i,
    r = n(442837),
    a = n(570140),
    l = n(288219);
function s(e, t, n) {
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
let o = {};
class c extends (i = r.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: o };
    }
    initialize(e) {
        for (var t in l.Z) {
            var n, i;
            o[t] = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
        }
    }
    get(e) {
        var t;
        return null !== (t = o[e]) && void 0 !== t && t;
    }
    set(e, t) {
        return (o[e] = t), t;
    }
}
s(c, 'displayName', 'LabFeatureStore'),
    s(c, 'persistKey', 'LabFeatureStore'),
    (t.Z = new c(a.Z, {
        LAB_FEATURE_TOGGLE: function (e) {
            let { labFeature: t, enabled: n } = e;
            o[t] = n;
        }
    }));
