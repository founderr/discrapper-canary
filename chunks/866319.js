n.d(t, {
    G: function () {
        return o;
    },
    b: function () {
        return d;
    }
});
var l = n(442837),
    i = n(430824),
    s = n(594174),
    r = n(944163),
    a = n(981631);
function o(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([r.Z], () => r.Z.get(t)),
        s = null == n ? void 0 : n.guild;
    return (0, l.e7)(
        [i.Z],
        () => {
            var e;
            let n = null === (e = i.Z.getGuild(t)) || void 0 === e ? void 0 : e.verificationLevel,
                l = null == s ? void 0 : s.verification_level;
            return (null != n ? n : l) === a.sFg.VERY_HIGH;
        },
        [t, s]
    );
}
function d(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([s.default], () => s.default.getCurrentUser()),
        i = o({ guildId: t }),
        r = (null == n ? void 0 : n.isPhoneVerified()) || (null == n ? void 0 : n.isStaff()),
        a = (null == n ? void 0 : n.verified) || r;
    return {
        isPhoneVerificationLevel: i,
        isCurrentUserVerified: !!(i ? r : a)
    };
}
