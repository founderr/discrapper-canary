n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(846027),
    a = n(906732),
    o = n(600164),
    c = n(313201),
    d = n(131951),
    u = n(36703),
    m = n(388032),
    h = n(971436);
let g = (0, c.hQ)(),
    p = (0, c.hQ)();
function x() {
    let { analyticsLocations: e } = (0, a.ZP)(),
        { inputVolume: t, outputVolume: n } = (0, s.cj)([d.Z], () => ({
            inputVolume: d.Z.getInputVolume(),
            outputVolume: d.Z.getOutputVolume()
        }));
    return (0, i.jsxs)(o.Z, {
        className: 'volume',
        children: [
            (0, i.jsxs)(o.Z.Child, {
                basis: '50%',
                children: [
                    (0, i.jsx)(r.FormTitle, {
                        id: g,
                        tag: r.FormTitleTags.H5,
                        className: h.marginBottom4,
                        children: m.intl.string(m.t.OX2Bnp)
                    }),
                    (0, i.jsx)(r.Slider, {
                        initialValue: (0, u.P)(t),
                        asValueChanges: (t) => l.Z.setInputVolume((0, u.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': g
                    })
                ]
            }),
            (0, i.jsxs)(o.Z.Child, {
                basis: '50%',
                children: [
                    (0, i.jsx)(r.FormTitle, {
                        id: p,
                        tag: r.FormTitleTags.H5,
                        className: h.marginBottom4,
                        children: m.intl.string(m.t.eATD2N)
                    }),
                    (0, i.jsx)(r.Slider, {
                        initialValue: (0, u.P)(n),
                        maxValue: 200,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        asValueChanges: (t) => l.Z.setOutputVolume((0, u.A)(t), { analyticsLocations: e }),
                        'aria-labelledby': p
                    })
                ]
            })
        ]
    });
}
