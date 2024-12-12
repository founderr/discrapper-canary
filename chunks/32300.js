r.d(n, {
    R: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-10_overlay_v3',
    label: 'Overlay V3 Shared Context OOP',
    defaultConfig: { useOverlayV3: !1 },
    treatments: [
        {
            id: 1,
            label: 'Use Overlay V3',
            config: { useOverlayV3: !0 }
        }
    ]
});
function a() {
    return i.getCurrentConfig({ location: 'overlay_v3_enabled' }).useOverlayV3;
}
n.Z = i;
