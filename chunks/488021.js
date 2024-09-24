n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    l = n(846027),
    r = n(131951);
function o(e) {
    let t = (0, s.e7)([r.Z], () => Object.values(r.Z.getOutputDevices())),
        n = (0, s.e7)([r.Z], () => r.Z.getOutputDeviceId());
    return t.map((t) => {
        let { id: s, disabled: r, name: o } = t;
        return (0, i.jsx)(
            a.MenuRadioItem,
            {
                group: 'output-devices',
                id: 'output-'.concat(s),
                disabled: r,
                label: o,
                checked: s === n,
                action: () => l.Z.setOutputDevice(s, { analyticsLocations: e })
            },
            'output-'.concat(s)
        );
    });
}
