n.d(t, {
    Y: function () {
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
        (u = {
            ...t,
            ...s.F
        });
    let [c, d, _] = (0, a.useTransition)(e, u, r);
    return 4 == arguments.length ? [c, d, _] : c;
}
