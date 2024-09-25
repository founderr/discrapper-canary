n.d(t, {
    A: function () {
        return l;
    }
});
var r = n(442837),
    i = n(818083),
    a = n(592125),
    o = n(155647);
let s = (0, i.B)({
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
function l(e) {
    let { location: t, settingsUpsells: n, channelId: i } = e,
        s = (0, r.e7)([a.Z], () => a.Z.getChannel(i));
    return (0, o.jc)(n, null == s ? void 0 : s.type).length > 0 && u(t);
}
function u(e) {
    let { enabled: t } = s.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
