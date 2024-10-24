n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(450961),
    s = n(374470),
    o = n(442837),
    l = n(481060),
    u = n(626135),
    c = n(5967),
    d = n(607070),
    _ = n(446108),
    E = n(981631),
    f = n(388032);
function h(e) {
    var t;
    if (e.ctrlKey || e.altKey || e.metaKey || e.keyCode !== E.yXg.TAB || null == e.target) return;
    let { target: n } = e,
        r = null === (t = (0, c.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
    (0, s.k)(n) &&
        u.default.track(E.rMx.KEYBOARD_SHORTCUT_USED, {
            shortcut_name: 'tab_navigation',
            source_class_list: null != r ? Array.from(r.classList) : [],
            location_object: n.tagName
        });
}
function p(e) {
    let { children: t } = e,
        n = (0, o.cj)([d.Z], () => ({
            enabled: d.Z.useReducedMotion,
            rawValue: d.Z.rawPrefersReducedMotion
        })),
        s = (0, o.cj)([d.Z], () => ({
            enabled: d.Z.useForcedColors,
            rawValue: d.Z.systemForcedColors
        })),
        u = (0, o.e7)([d.Z], () => d.Z.alwaysShowLinkDecorations),
        c = i.useMemo(
            () => ({
                reducedMotion: n,
                prefersCrossfades: !1,
                forcedColors: s,
                alwaysShowLinkDecorations: u
            }),
            [n, s, u]
        );
    return (
        i.useEffect(() => ((0, a.waitForAllDefaultIntlMessagesLoaded)().then(() => (0, _.d1)()), f.intl.onLocaleChange(() => (0, _.d1)()), window.addEventListener('keydown', h), () => window.removeEventListener('keydown', h)), []),
        (0, r.jsx)(l.AccessibilityPreferencesContext.Provider, {
            value: c,
            children: t
        })
    );
}
