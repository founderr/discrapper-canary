r.d(n, {
    B: function () {
        return _;
    },
    i: function () {
        return f;
    }
});
var i = r(399606),
    a = r(704215),
    s = r(314897),
    o = r(70956),
    l = r(709054),
    u = r(68985);
let c = {
        [a.z.MJ_NEW_USER_CHAT_BAR]: 0,
        [a.z.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
        [a.z.SEEN_LAUNCH_WELCOME]: 0,
        [a.z.SEEN_OLD_DESIGN]: 0,
        [a.z.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
        [a.z.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
        [a.z.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
        [a.z.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
        [a.z.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
        [a.z.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
        [a.z.WHATS_NEW_SERVER_PROFILE_BADGE]: 0,
        [a.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR]: 0,
        [a.z.REFERRAL_INCENTIVE_AWARDED_INFO]: 0,
        [a.z.WHATS_NEW_TENURE_BADGE_REWARD]: 0,
        [a.z.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0
    },
    d = o.Z.Millis.DAY;
function f(e) {
    let { userId: n, newUserMinAgeRequiredOverridden: r } = (0, i.cj)([s.default, u.Z], () => ({
        userId: s.default.getId(),
        newUserMinAgeRequiredOverridden: u.Z.newUserMinAgeRequiredOverridden
    }));
    if (r) return e;
    let a = null != n ? l.default.age(n) : 0;
    return e.filter((e) => {
        var n;
        return a > (null !== (n = c[e]) && void 0 !== n ? n : d);
    });
}
function _(e) {
    var n;
    if (u.Z.newUserMinAgeRequiredOverridden) return !1;
    let r = null != s.default.getId() ? l.default.age(s.default.getId()) : 0;
    return r < (null !== (n = c[e]) && void 0 !== n ? n : d);
}
