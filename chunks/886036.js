n.d(e, {
    Z: function () {
        return o;
    }
});
var l = n(200651);
n(192379);
var i = n(481060),
    c = n(906732),
    r = n(278754),
    u = n(626135),
    a = n(981631),
    s = n(388032);
function o() {
    let t = (0, r.pR)(),
        { analyticsLocations: e } = (0, c.ZP)();
    return (0, l.jsx)(i.MenuCheckboxItem, {
        id: 'sticker-suggestions',
        label: s.intl.string(s.t.rIzKh4),
        checked: t,
        action: () => {
            u.default.track(a.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                enabled: !t,
                location: { object: a.qAy.CONTEXT_MENU },
                location_stack: e
            }),
                (0, r.AW)(!t);
        }
    });
}
