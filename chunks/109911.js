n.d(t, {
    Ji: function () {
        return d;
    },
    XN: function () {
        return c;
    },
    jH: function () {
        return i;
    }
});
var r,
    i,
    a = n(818083),
    s = n(638395);
n(171393);
let o = (0, a.B)({
        kind: 'user',
        id: '2024-07_icymi',
        label: 'In-case-you-missed-it tab',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'enables the new icymi tab',
                config: { enabled: !0 }
            },
            {
                id: 2,
                label: 'new icymi tab with some new features',
                config: {
                    enabled: !0,
                    activeVoice: !1,
                    activeConvos: !0
                }
            },
            {
                id: 3,
                label: 'new icymi tab with more new features',
                config: {
                    enabled: !0,
                    activeVoice: !0,
                    activeConvos: !0,
                    forumThreads: !0
                }
            }
        ]
    }),
    l = (0, a.B)({
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
((r = i || (i = {}))[(r.UNREADS_AT_TOP = 1)] = 'UNREADS_AT_TOP'), (r[(r.UNREADS_AT_TOP_WITH_BADGE = 2)] = 'UNREADS_AT_TOP_WITH_BADGE');
let u = (0, a.B)({
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
            label: 'Merge notifications tab - have mentions widget on top of ICYMI tab',
            config: {
                enabled: !0,
                variant: 1
            }
        },
        {
            id: 2,
            label: 'Merge notifications tab - have mentions widget that also moves badging on top of ICYMI tab',
            config: {
                enabled: !0,
                variant: 2
            }
        }
    ]
});
function c(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = s.Z.get('hide_icymi_tab'),
        i = d(t, !1),
        { enabled: a, variant: o } = u.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: !0
            }
        );
    return {
        enabled: a && !r && i,
        variant: o
    };
}
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = o.getCurrentConfig(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: t
            }
        ).enabled,
        r = l.getCurrentConfig(
            { location: e },
            {
                disable: !0,
                autoTrackExposure: t
            }
        ).enabled;
    return n || r;
}
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
}),
    (0, a.B)({
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
