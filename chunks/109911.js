n.d(t, {
    Ji: function () {
        return d;
    },
    XN: function () {
        return c;
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
((r = i || (i = {}))[(r.NO_BADGE = 1)] = 'NO_BADGE'), (r[(r.RED_BADGE = 2)] = 'RED_BADGE'), (r[(r.BLUE_BADGE = 3)] = 'BLUE_BADGE');
let u = (0, a.B)({
    kind: 'user',
    id: '2024-10_merge_notifications_tab',
    label: 'Merge notifications tab',
    defaultConfig: {
        enabled: !1,
        tabBadgeVariant: 1,
        removeHomeMentionBadges: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Merge notifications tab - no badging changes',
            config: {
                enabled: !0,
                tabBadgeVariant: 1,
                removeHomeMentionBadges: !1
            }
        },
        {
            id: 2,
            label: 'Merge notifications tab - move recent mentions badges to ICYMI',
            config: {
                enabled: !0,
                tabBadgeVariant: 2,
                removeHomeMentionBadges: !0
            }
        },
        {
            id: 3,
            label: 'Merge notifications tab - duplciate recent mentions tab badges to ICYMI',
            config: {
                enabled: !0,
                tabBadgeVariant: 2,
                removeHomeMentionBadges: !1
            }
        },
        {
            id: 4,
            label: 'Merge notifications tab - blue badge ICYMI tab when there are new recent mentinos',
            config: {
                enabled: !0,
                tabBadgeVariant: 3,
                removeHomeMentionBadges: !1
            }
        }
    ]
});
function c(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = s.Z.get('hide_icymi_tab'),
        i = d(t, !1),
        {
            enabled: a,
            tabBadgeVariant: o,
            removeHomeMentionBadges: l
        } = u.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: !0
            }
        );
    return {
        enabled: a && !r && i,
        tabBadgeVariant: o,
        removeHomeMentionBadges: l
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
