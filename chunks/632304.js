n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    l = n(846027),
    r = n(131951),
    o = n(36703),
    c = n(358085),
    u = n(689938);
function d(e) {
    let t = (0, s.e7)([r.Z], () => (0, o.P)(r.Z.getOutputVolume()));
    return (0, i.jsx)(a.MenuControlItem, {
        id: 'output',
        label: u.Z.Messages.FORM_LABEL_OUTPUT_VOLUME,
        control: (n, s) =>
            (0, i.jsx)(a.MenuSliderControl, {
                ...n,
                ref: s,
                value: t,
                maxValue: c.isPlatformEmbedded ? 200 : 100,
                onChange: (t) => l.Z.setOutputVolume((0, o.A)(t), { analyticsLocations: e }),
                'aria-label': u.Z.Messages.FORM_LABEL_OUTPUT_VOLUME
            })
    });
}
