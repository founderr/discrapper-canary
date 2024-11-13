n.d(t, {
    O: function () {
        return c;
    },
    l: function () {
        return o;
    }
});
var i = n(594174),
    r = n(63063),
    s = n(74538),
    a = n(981631),
    l = n(388032);
function o(e) {
    switch (e) {
        case a.evJ.TOO_MANY_USER_GUILDS:
            let t = i.default.getCurrentUser(),
                n = s.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? a.tHP : a.DZw;
            return {
                title: l.intl.formatToPlainString(l.t['ttJ/ho'], { quantity: n }),
                description: l.intl.string(l.t.iLyuDA)
            };
        case a.evJ.GUILD_AT_CAPACITY:
            return {
                title: l.intl.string(l.t.ZZlox8),
                description: l.intl.string(l.t.ZUEGFh)
            };
        case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: l.intl.string(l.t.kJwpBQ),
                description: l.intl.string(l.t.ZUEGFh)
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case a.evJ.TOO_MANY_USER_GUILDS:
            return l.intl.string(l.t.iLyuDA);
        case a.evJ.GUILD_AT_CAPACITY:
            return l.intl.string(l.t.M6unND);
        case a.evJ.INVALID_COUNTRY_CODE:
            return l.intl.string(l.t.sRJGR0);
        case a.evJ.INVALID_CANNOT_FRIEND_SELF:
            return l.intl.string(l.t['mY2R+P']);
        case a.evJ.INVITES_DISABLED:
            return l.intl.format(l.t.RXSeLi, { articleLink: r.Z.getArticleURL(a.BhN.INVITE_DISABLED) });
        default:
            return l.intl.string(l.t.dDZRd3);
    }
}
