n.d(t, {
    B: function () {
        return f;
    },
    i: function () {
        return d;
    }
});
var r = n(399606),
    i = n(704215),
    a = n(314897),
    s = n(70956),
    o = n(709054),
    l = n(68985);
let u = {
        [i.z.MJ_NEW_USER_CHAT_BAR]: 0,
        [i.z.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
        [i.z.SEEN_LAUNCH_WELCOME]: 0,
        [i.z.SEEN_OLD_DESIGN]: 0,
        [i.z.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
        [i.z.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
        [i.z.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
        [i.z.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
        [i.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
        [i.z.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
        [i.z.WHATS_NEW_SERVER_PROFILE_BADGE]: 0,
        [i.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR]: 0,
        [i.z.REFERRAL_INCENTIVE_AWARDED_INFO]: 0,
        [i.z.WHATS_NEW_TENURE_BADGE_REWARD]: 0,
        [i.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0
    },
    c = s.Z.Millis.DAY;
function d(e) {
    let { userId: t, newUserMinAgeRequiredOverridden: n } = (0, r.cj)([a.default, l.Z], () => ({
        userId: a.default.getId(),
        newUserMinAgeRequiredOverridden: l.Z.newUserMinAgeRequiredOverridden
    }));
    if (n) return e;
    let i = null != t ? o.default.age(t) : 0;
    return e.filter((e) => {
        var t;
        return i > (null !== (t = u[e]) && void 0 !== t ? t : c);
    });
}
function f(e) {
    var t;
    if (l.Z.newUserMinAgeRequiredOverridden) return !1;
    let n = null != a.default.getId() ? o.default.age(a.default.getId()) : 0;
    return n < (null !== (t = u[e]) && void 0 !== t ? t : c);
}
