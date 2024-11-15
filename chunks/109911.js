n.d(t, {
    Ji: function () {
        return l;
    },
    QX: function () {
        return u;
    }
});
var r,
    i,
    a = n(818083);
n(638395), n(171393);
let s = (0, a.B)({
        kind: 'user',
        id: '2024-07_icymi',
        label: 'In-case-you-missed-it tab',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'enables the new icymi tab',
                config: { enabled: !0 }
            }
        ]
    }),
    o = (0, a.B)({
        kind: 'user',
        id: '2024-10_icymi_sorting_fe',
        label: 'FE experiment for sorting on ICYMI',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables ICYMI - sorting will be controlled by backend exp',
                config: { enabled: !0 }
            }
        ]
    });
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = s.getCurrentConfig(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: t
            }
        ).enabled,
        r = o.getCurrentConfig(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: t
            }
        ).enabled;
    return n || r;
}
((r = i || (i = {}))[(r.BUTTON = 1)] = 'BUTTON'),
    (r[(r.UNREADS_AT_TOP = 2)] = 'UNREADS_AT_TOP'),
    (0, a.B)({
        kind: 'user',
        id: '2024-10_merge_notifications_tab',
        label: 'Merge notifications tab',
        defaultConfig: {
            enabled: !1,
            variant: 1
        },
        treatments: [
            {
                id: 1,
                label: 'Merge notifications tab - keep as button on the top right of ICYMI tab',
                config: {
                    enabled: !0,
                    variant: 1
                }
            },
            {
                id: 2,
                label: 'Merge notifications tab - move unread notifs to the top of ICYMI tab',
                config: {
                    enabled: !0,
                    variant: 2
                }
            }
        ]
    }),
    (0, a.B)({
        kind: 'user',
        id: '2024-07_icymi_negative_items',
        label: 'icymi negative content (debugging only)',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'allow negative items only',
                config: { enabled: !0 }
            }
        ]
    });
let u = (0, a.B)({
    kind: 'user',
    id: '2024-10_icymi_legacy',
    label: 'Legacy ICYMI experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enable legacy ICYMI',
            config: { enabled: !0 }
        }
    ]
});
