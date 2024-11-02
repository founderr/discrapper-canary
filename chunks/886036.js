n.d(e, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    u = n(906732),
    c = n(695346),
    r = n(626135),
    a = n(981631),
    s = n(388032);
function o() {
    let t = c.up.useSetting(),
        { analyticsLocations: e } = (0, u.ZP)();
    return (0, i.jsx)(l.MenuCheckboxItem, {
        id: 'sticker-suggestions',
        label: s.intl.string(s.t.rIzKh4),
        checked: t,
        action: () => {
            r.default.track(a.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                enabled: !t,
                location: { object: a.qAy.CONTEXT_MENU },
                location_stack: e
            }),
                c.up.updateSetting(!t);
        }
    });
}
