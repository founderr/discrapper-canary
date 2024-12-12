r.d(n, {
    RO: function () {
        return h;
    },
    TX: function () {
        return g;
    },
    Ys: function () {
        return p;
    },
    rK: function () {
        return m;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(913527),
    o = r.n(s),
    l = r(846519),
    u = r(987170),
    c = r(987338);
let d = new Date('2025-01-06T07:59:59.000Z'),
    f = o()(d),
    _ = (0, u.Z)({
        id: '2024-11_seasonal_gifting',
        label: 'Seasonal Gifting 2024',
        kind: 'user',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: c.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    h = (0, u.Z)({
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
    p = (0, u.Z)({
        id: '2024-11_seasonal_gifting_reminder',
        label: 'Seasonal Gifting Reminder 2024',
        kind: 'user',
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: c.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    });
function m() {
    let [e, n] = a.useState(() => f.isAfter(Date.now()));
    return (
        a.useEffect(() => {
            if (!e) return;
            let r = new l.V7(),
                i = () => {
                    let e = Math.min(f.diff(Date.now(), 'millisecond'), 86400000);
                    null == r ||
                        r.start(e, () => {
                            f.isBefore(Date.now()) ? n(!1) : i();
                        });
                };
            return i(), () => r.stop();
        }, [e]),
        e
    );
}
function g() {
    let e = m(),
        { enabled: n } = _.useExperiment({ location: 'useIsInSeasonalGiftingXPAndSeasonalGiftingActive' }, { autoTrackExposure: !1 });
    return e && n;
}
n.ZP = _;
