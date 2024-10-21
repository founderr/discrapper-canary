n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    a = n(481060),
    l = n(846027),
    r = n(131951),
    o = n(36703),
    c = n(689938);
function u(e) {
    let t = (0, s.e7)([r.Z], () => (0, o.P)(r.Z.getInputVolume()));
    return (0, i.jsx)(a.MenuControlItem, {
        id: 'input',
        label: c.Z.Messages.FORM_LABEL_INPUT_VOLUME,
        control: (n, s) =>
            (0, i.jsx)(a.MenuSliderControl, {
                ...n,
                ref: s,
                value: t,
                onChange: (t) => l.Z.setInputVolume((0, o.A)(t), { analyticsLocations: e }),
                'aria-label': c.Z.Messages.FORM_LABEL_INPUT_VOLUME
            })
    });
}
