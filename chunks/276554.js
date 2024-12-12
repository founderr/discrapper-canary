r.d(n, {
    R: function () {
        return a;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2023-10_social_proofing_message_nitro_badge',
    label: 'Social Proofing Message Nitro Badge',
    defaultConfig: {
        enabled: !1,
        hideNitroBadgeWhenRoleBadgePresent: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Prefer BOTH nitro badge AND role icon(s)',
            config: {
                enabled: !0,
                hideNitroBadgeWhenRoleBadgePresent: !1
            }
        },
        {
            id: 2,
            label: 'Prefer role icon(s) over nitro badge if both are present',
            config: {
                enabled: !0,
                hideNitroBadgeWhenRoleBadgePresent: !0
            }
        }
    ]
});
function a(e, n) {
    let r = i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
    return r.enabled && (!r.hideNitroBadgeWhenRoleBadgePresent || (r.hideNitroBadgeWhenRoleBadgePresent && !e));
}
