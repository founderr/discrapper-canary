t.d(n, {
    X: function () {
        return l;
    }
});
let i = (0, t(818083).B)({
    kind: 'user',
    id: '2024-12_save_voice_message_menu_item',
    label: 'Save voice message menu item on web',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Save voice message menu item active',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return i.useExperiment({ location: e }, { autoTrackExposure: n }).enabled;
}
