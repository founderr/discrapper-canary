n.d(t, {
  O: function() {
    return c
  },
  l: function() {
    return o
  }
});
var s = n(594174),
  r = n(63063),
  i = n(74538),
  l = n(981631),
  a = n(689938);

function o(e) {
  switch (e) {
    case l.evJ.TOO_MANY_USER_GUILDS:
      let t = s.default.getCurrentUser(),
        n = i.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? l.tHP : l.DZw;
      return {
        title: a.Z.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
          quantity: n
        }), description: a.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
      };
    case l.evJ.GUILD_AT_CAPACITY:
      return {
        title: a.Z.Messages.SERVER_IS_CURRENTLY_FULL, description: a.Z.Messages.PLEASE_TRY_AGAIN_LATER
      };
    case l.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
      return {
        title: a.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING, description: a.Z.Messages.PLEASE_TRY_AGAIN_LATER
      };
    default:
      return null
  }
}

function c(e) {
  switch (e) {
    case l.evJ.TOO_MANY_USER_GUILDS:
      return a.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
    case l.evJ.GUILD_AT_CAPACITY:
      return a.Z.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
    case l.evJ.INVALID_COUNTRY_CODE:
      return a.Z.Messages.INVALID_COUNTRY_CODE;
    case l.evJ.INVALID_CANNOT_FRIEND_SELF:
      return a.Z.Messages.INVALID_CANNOT_FRIEND_SELF;
    case l.evJ.INVITES_DISABLED:
      return a.Z.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
        articleLink: r.Z.getArticleURL(l.BhN.INVITE_DISABLED)
      });
    default:
      return a.Z.Messages.INVITE_MODAL_ERROR_DEFAULT
  }
}