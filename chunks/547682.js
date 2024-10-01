n.d(t, {
    I: function () {
        return a;
    }
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2024-09_app_oauth2_link_embed',
    label: 'app oauth2 link embed',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable new embed for app oauth2 links',
            config: { enabled: !0 }
        }
    ]
});
