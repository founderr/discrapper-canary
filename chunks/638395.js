var r,
    i = n(442837),
    a = n(570140),
    s = n(288219);
function o(e, t, n) {
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
let l = {};
class u extends (r = i.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: l };
    }
    initialize(e) {
        for (var t in s.Z) {
            var n, r;
            l[t] = null !== (r = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== r && r;
        }
    }
    get(e) {
        var t;
        return null !== (t = l[e]) && void 0 !== t && t;
    }
    set(e, t) {
        return (l[e] = t), t;
    }
}
o(u, 'displayName', 'LabFeatureStore'),
    o(u, 'persistKey', 'LabFeatureStore'),
    (t.Z = new u(a.Z, {
        LAB_FEATURE_TOGGLE: function (e) {
            let { labFeature: t, enabled: n } = e;
            l[t] = n;
        }
    }));
