var i = r(818083);
n.Z = (0, i.B)({
    kind: 'user',
    id: '2024-02_nvenc_new_presets',
    label: 'nvenc new presets',
    defaultConfig: { nvEnableNewPresets: !1 },
    treatments: [
        {
            id: 1,
            label: 'enable adaptive key frame for nvenc',
            config: { nvEnableNewPresets: !0 }
        }
    ]
});
