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
    let t = (0, l.e7)([s.Z], () => Object.values(s.Z.getInputDevices())),
        n = (0, l.e7)([s.Z], () => s.Z.getInputDeviceId());
    return t.map((t) => {
        let { id: l, disabled: s, name: o } = t;
        return (0, i.jsx)(
            r.MenuRadioItem,
            {
                id: 'input-'.concat(l),
                group: 'input-devices',
                disabled: s,
                label: o,
                checked: l === n,
                action: () => a.Z.setInputDevice(l, { analyticsLocations: e })
            },
            'input-'.concat(l)
        );
    });
}
