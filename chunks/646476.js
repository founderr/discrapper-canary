n.d(t, {
    RO: function () {
        return _;
    },
    rK: function () {
        return E;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(913527),
    o = n.n(a),
    s = n(846519),
    l = n(987170);
let u = new Date('2024-01-04T07:59:59.000Z'),
    c = o()(u),
    d = (0, l.Z)({
        id: '2023-11_seasonal_gifting',
        label: 'Seasonal Gifting 2023',
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
    _ = (0, l.Z)({
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
function E() {
    let [e, t] = i.useState(() => c.isAfter(Date.now()));
    return (
        i.useEffect(() => {
            let n = new s.V7(),
                r = () => {
                    let e = Math.min(c.diff(Date.now(), 'millisecond'), 86400000);
                    null == n ||
                        n.start(e, () => {
                            c.isBefore(Date.now()) ? t(!1) : r();
                        });
                };
            return e && r(), () => n.stop();
        }),
        e
    );
}
t.ZP = d;
