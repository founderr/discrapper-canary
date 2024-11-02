n.d(t, {
    b: function () {
        return s;
    }
});
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2022-08_back_to_school',
    label: 'Back to School Event',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Back to School experience enabled',
            config: { enabled: !0 }
        }
    ]
});
function s() {
    return i.getCurrentConfig({ location: '68acbb_1' }, { autoTrackExposure: !1 }).enabled;
}
t.Z = i;
