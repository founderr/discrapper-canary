r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(846027),
    l = r(131951);
function u() {
    let e = (0, a.e7)([l.Z], () => Object.values(l.Z.getVideoDevices())),
        n = (0, a.e7)([l.Z], () => l.Z.getVideoDeviceId());
    return e.map((e) => {
        let { id: r, disabled: a, name: l } = e;
        return (0, i.jsx)(
            s.MenuRadioItem,
            {
                group: 'video-devices',
                id: 'video-device-'.concat(r),
                disabled: a,
                label: l,
                checked: r === n,
                action: () => o.Z.setVideoDevice(r)
            },
            'video-device-'.concat(r)
        );
    });
}
