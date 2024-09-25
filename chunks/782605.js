n.d(t, {
    O: function () {
        return u;
    },
    l: function () {
        return l;
    }
});
var r = n(594174),
    i = n(63063),
    a = n(74538),
    o = n(981631),
    s = n(689938);
function l(e) {
    switch (e) {
        case o.evJ.TOO_MANY_USER_GUILDS:
            let t = r.default.getCurrentUser(),
                n = a.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? o.tHP : o.DZw;
            return {
                title: s.Z.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({ quantity: n }),
                description: s.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
            };
        case o.evJ.GUILD_AT_CAPACITY:
            return {
                title: s.Z.Messages.SERVER_IS_CURRENTLY_FULL,
                description: s.Z.Messages.PLEASE_TRY_AGAIN_LATER
            };
        case o.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
            return {
                title: s.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING,
                description: s.Z.Messages.PLEASE_TRY_AGAIN_LATER
            };
        default:
            return null;
    }
}
function u(e) {
    switch (e) {
        case o.evJ.TOO_MANY_USER_GUILDS:
            return s.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
        case o.evJ.GUILD_AT_CAPACITY:
            return s.Z.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
        case o.evJ.INVALID_COUNTRY_CODE:
            return s.Z.Messages.INVALID_COUNTRY_CODE;
        case o.evJ.INVALID_CANNOT_FRIEND_SELF:
            return s.Z.Messages.INVALID_CANNOT_FRIEND_SELF;
        case o.evJ.INVITES_DISABLED:
            return s.Z.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({ articleLink: i.Z.getArticleURL(o.BhN.INVITE_DISABLED) });
        default:
            return s.Z.Messages.INVITE_MODAL_ERROR_DEFAULT;
    }
}
