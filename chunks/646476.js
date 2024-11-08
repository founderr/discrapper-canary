n.d(t, {
    RO: function () {
        return d;
    },
    rK: function () {
        return f;
    }
}),
    n(47120);
var r = n(192379),
    i = n(913527),
    a = n.n(i),
    s = n(846519),
    o = n(987170);
let l = new Date('2025-01-06T07:59:59.000Z'),
    u = a()(l),
    c = (0, o.Z)({
        id: '2024-11_seasonal_gifting',
        label: 'Seasonal Gifting 2024',
        kind: 'user',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    d = (0, o.Z)({
        id: '2023-11_seasonal_gifting_marketing_2023',
        label: 'Seasonal Gifting Marketing 2023',
        kind: 'user',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    });
function f() {
    let [e, t] = r.useState(() => u.isAfter(Date.now()));
    return (
        r.useEffect(() => {
            let n = new s.V7(),
                r = () => {
                    let e = Math.min(u.diff(Date.now(), 'millisecond'), 86400000);
                    null == n ||
                        n.start(e, () => {
                            u.isBefore(Date.now()) ? t(!1) : r();
                        });
                };
            return e && r(), () => n.stop();
        }),
        e
    );
}
(0, o.Z)({
    id: '2024-11_seasonal_gifting_reminder',
    label: 'Seasonal Gifting Reminder 2024',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
}),
    (t.ZP = c);
