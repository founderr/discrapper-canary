"use strict";
n.r(t), n.d(t, {
  getDescriptiveInviteError: function() {
    return o
  },
  getInviteError: function() {
    return u
  }
});
var r = n("697218"),
  i = n("701909"),
  l = n("719923"),
  s = n("49111"),
  a = n("782340");

function o(e) {
  switch (e) {
    case s.AbortCodes.TOO_MANY_USER_GUILDS:
      let t = r.default.getCurrentUser(),
        n = l.default.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()),
        i = n ? s.MAX_USER_GUILDS_PREMIUM : s.MAX_USER_GUILDS;
      return {
        title: a.default.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
          quantity: i
        }), description: a.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
      };
    case s.AbortCodes.GUILD_AT_CAPACITY:
      return {
        title: a.default.Messages.SERVER_IS_CURRENTLY_FULL, description: a.default.Messages.PLEASE_TRY_AGAIN_LATER
      };
    case s.AbortCodes.GUILD_JOIN_INVITE_LIMITED_ACCESS:
      return {
        title: a.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING, description: a.default.Messages.PLEASE_TRY_AGAIN_LATER
      };
    default:
      return null
  }
}

function u(e) {
  switch (e) {
    case s.AbortCodes.TOO_MANY_USER_GUILDS:
      return a.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
    case s.AbortCodes.GUILD_AT_CAPACITY:
      return a.default.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
    case s.AbortCodes.INVALID_COUNTRY_CODE:
      return a.default.Messages.INVALID_COUNTRY_CODE;
    case s.AbortCodes.INVALID_CANNOT_FRIEND_SELF:
      return a.default.Messages.INVALID_CANNOT_FRIEND_SELF;
    case s.AbortCodes.INVITES_DISABLED:
      return a.default.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
        articleLink: i.default.getArticleURL(s.HelpdeskArticles.INVITE_DISABLED)
      });
    default:
      return a.default.Messages.INVITE_MODAL_ERROR_DEFAULT
  }
}