n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    s = n(846027),
    a = n(131951),
    o = n(36703),
    c = n(388032);
function u(e) {
    let t = (0, l.e7)([a.Z], () => (0, o.P)(a.Z.getInputVolume()));
    return (0, i.jsx)(r.MenuControlItem, {
        id: 'input',
        label: c.intl.string(c.t.OX2Bnp),
        control: (n, l) =>
            (0, i.jsx)(r.MenuSliderControl, {
                ...n,
                ref: l,
                value: t,
                onChange: (t) => s.Z.setInputVolume((0, o.A)(t), { analyticsLocations: e }),
                'aria-label': c.intl.string(c.t.OX2Bnp)
            })
    });
}
