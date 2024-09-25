n.d(t, {
    b: function () {
        return l;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(526629),
    o = n(481060),
    s = n(717495);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'respect-motion-settings',
        r = arguments.length > 3 ? arguments[3] : void 0,
        l = i.useContext(o.AccessibilityPreferencesContext).reducedMotion.enabled,
        u = t;
    !('animate-always' === n || ('respect-motion-settings' === n && !l)) &&
        (u =
            'function' == typeof t
                ? (e, n) => ({
                      ...t(e, n),
                      ...s.F
                  })
                : t.map((e) => ({
                      ...e,
                      ...s.F
                  })));
    let c = 'function' == typeof u,
        [d, _, E] = (0, a.useSprings)(e, u, r);
    return c || 4 == arguments.length ? [d, _, E] : d;
}
