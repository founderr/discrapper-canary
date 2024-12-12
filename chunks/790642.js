r.d(n, {
    Io: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-06_content_entry_embed',
    label: 'Content Inventory Embed',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { enabled: n } = i.getCurrentConfig({ location: e });
    return n;
}
