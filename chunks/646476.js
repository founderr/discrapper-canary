n.d(t, {
    RO: function () {
        return f;
    },
    TX: function () {
        return h;
    },
    Ys: function () {
        return _;
    },
    rK: function () {
        return p;
    }
}),
    n(47120);
var r = n(192379),
    i = n(913527),
    a = n.n(i),
    s = n(846519),
    o = n(987170),
    l = n(987338);
let u = new Date('2025-01-06T07:59:59.000Z'),
    c = a()(u),
    d = (0, o.Z)({
        id: '2024-11_seasonal_gifting',
        label: 'Seasonal Gifting 2024',
        kind: 'user',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: l.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    f = (0, o.Z)({
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
    }),
    _ = (0, o.Z)({
        id: '2024-11_seasonal_gifting_reminder',
        label: 'Seasonal Gifting Reminder 2024',
        kind: 'user',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: l.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    });
function p() {
    let [e, t] = r.useState(() => c.isAfter(Date.now()));
    return (
        r.useEffect(() => {
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
function h() {
    let e = p(),
        { enabled: t } = d.useExperiment({ location: 'useIsInSeasonalGiftingXPAndSeasonalGiftingActive' }, { autoTrackExposure: !1 });
    return e && t;
}
t.ZP = d;
