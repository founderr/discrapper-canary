n.d(t, {
    A: function () {
        return s;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(526629),
    o = n(481060);
function s(e) {
    let { shouldAnimate: t = 'respect-motion-settings', ...n } = e,
        s = i.useContext(o.AccessibilityPreferencesContext).reducedMotion.enabled,
        l = 'animate-always' === t || ('respect-motion-settings' === t && !s);
    return (0, r.jsx)(a.Spring, {
        ...n,
        immediate: !l
    });
}
