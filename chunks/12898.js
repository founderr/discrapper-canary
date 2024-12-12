var i = r(818083);
n.Z = (0, i.B)({
    kind: 'user',
    id: '2024-06_amd_av1_video_encoding',
    label: 'Test how AV1 works on windows with AMD GPU',
    defaultConfig: { signalAV1Support: !1 },
    treatments: [
        {
            id: 1,
            label: 'AMD AV1 video encoding',
            config: { signalAV1Support: !0 }
        }
    ]
});
