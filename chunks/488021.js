n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    s = n(846027),
    a = n(131951);
function o(e) {
    let t = (0, l.e7)([a.Z], () => Object.values(a.Z.getOutputDevices())),
        n = (0, l.e7)([a.Z], () => a.Z.getOutputDeviceId());
    return t.map((t) => {
        let { id: l, disabled: a, name: o } = t;
        return (0, i.jsx)(
            r.MenuRadioItem,
            {
                group: 'output-devices',
                id: 'output-'.concat(l),
                disabled: a,
                label: o,
                checked: l === n,
                action: () => s.Z.setOutputDevice(l, { analyticsLocations: e })
            },
            'output-'.concat(l)
        );
    });
}
