"use strict";
l.r(t), l.d(t, {
  getDescriptiveInviteError: function() {
    return o
  },
  getInviteError: function() {
    return u
  }
});
var n = l("594174"),
  s = l("63063"),
  a = l("74538"),
  r = l("981631"),
  i = l("689938");

function o(e) {
  switch (e) {
    case r.AbortCodes.TOO_MANY_USER_GUILDS:
      let t = n.default.getCurrentUser(),
        l = a.default.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? r.MAX_USER_GUILDS_PREMIUM : r.MAX_USER_GUILDS;
      return {
        title: i.default.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
          quantity: l
        }), description: i.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
      };
    case r.AbortCodes.GUILD_AT_CAPACITY:
      return {
        title: i.default.Messages.SERVER_IS_CURRENTLY_FULL, description: i.default.Messages.PLEASE_TRY_AGAIN_LATER
      };
    case r.AbortCodes.GUILD_JOIN_INVITE_LIMITED_ACCESS:
      return {
        title: i.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING, description: i.default.Messages.PLEASE_TRY_AGAIN_LATER
      };
    default:
      return null
  }
}

function u(e) {
  switch (e) {
    case r.AbortCodes.TOO_MANY_USER_GUILDS:
      return i.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
    case r.AbortCodes.GUILD_AT_CAPACITY:
      return i.default.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
    case r.AbortCodes.INVALID_COUNTRY_CODE:
      return i.default.Messages.INVALID_COUNTRY_CODE;
    case r.AbortCodes.INVALID_CANNOT_FRIEND_SELF:
      return i.default.Messages.INVALID_CANNOT_FRIEND_SELF;
    case r.AbortCodes.INVITES_DISABLED:
      return i.default.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
        articleLink: s.default.getArticleURL(r.HelpdeskArticles.INVITE_DISABLED)
      });
    default:
      return i.default.Messages.INVITE_MODAL_ERROR_DEFAULT
  }
}