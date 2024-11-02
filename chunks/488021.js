n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(846027),
    s = n(131951);
function o(e) {
    let t = (0, l.e7)([s.Z], () => Object.values(s.Z.getOutputDevices())),
        n = (0, l.e7)([s.Z], () => s.Z.getOutputDeviceId());
    return t.map((t) => {
        let { id: l, disabled: s, name: o } = t;
        return (0, i.jsx)(
            r.MenuRadioItem,
            {
                group: 'output-devices',
                id: 'output-'.concat(l),
                disabled: s,
                label: o,
                checked: l === n,
                action: () => a.Z.setOutputDevice(l, { analyticsLocations: e })
            },
            'output-'.concat(l)
        );
    });
}
