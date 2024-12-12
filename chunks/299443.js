r.d(n, {
    A: function () {
        return u;
    }
});
var i = r(442837),
    a = r(818083),
    s = r(592125),
    o = r(155647);
let l = (0, a.B)({
    kind: 'user',
    id: '2024-08_iar_privacy_and_safety_settings_upsells',
    label: 'IAR Privacy & Safety Settings Upsells',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function u(e) {
    let { location: n, settingsUpsells: r, channelId: a } = e,
        l = (0, i.e7)([s.Z], () => s.Z.getChannel(a));
    return (0, o.jc)(r, null == l ? void 0 : l.type).length > 0 && c(n);
}
function c(e) {
    let { enabled: n } = l.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return n;
}
