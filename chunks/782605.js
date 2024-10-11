n.d(t, {
    O: function () {
        return c;
    },
    l: function () {
        return l;
    }
});
var s = n(594174),
    r = n(63063),
    i = n(74538),
    a = n(981631),
    o = n(689938);
function l(e) {
    switch (e) {
        case a.evJ.TOO_MANY_USER_GUILDS:
            let t = s.default.getCurrentUser(),
                n = i.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? a.tHP : a.DZw;
            return {
                title: o.Z.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({ quantity: n }),
                description: o.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
            };
        case a.evJ.GUILD_AT_CAPACITY:
            return {
                title: o.Z.Messages.SERVER_IS_CURRENTLY_FULL,
                description: o.Z.Messages.PLEASE_TRY_AGAIN_LATER
            };
        case a.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: o.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING,
                description: o.Z.Messages.PLEASE_TRY_AGAIN_LATER
            };
        default:
            return null;
    }
}
function c(e) {
    switch (e) {
        case a.evJ.TOO_MANY_USER_GUILDS:
            return o.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
        case a.evJ.GUILD_AT_CAPACITY:
            return o.Z.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
        case a.evJ.INVALID_COUNTRY_CODE:
            return o.Z.Messages.INVALID_COUNTRY_CODE;
        case a.evJ.INVALID_CANNOT_FRIEND_SELF:
            return o.Z.Messages.INVALID_CANNOT_FRIEND_SELF;
        case a.evJ.INVITES_DISABLED:
            return o.Z.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({ articleLink: r.Z.getArticleURL(a.BhN.INVITE_DISABLED) });
        default:
            return o.Z.Messages.INVITE_MODAL_ERROR_DEFAULT;
    }
}
