n.d(t, {
  O: function() {
return c;
  },
  l: function() {
return i;
  }
});
var o = n(594174),
  l = n(63063),
  a = n(74538),
  r = n(981631),
  s = n(689938);

function i(e) {
  switch (e) {
case r.evJ.TOO_MANY_USER_GUILDS:
  let t = o.default.getCurrentUser(),
    n = a.ZP.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()) ? r.tHP : r.DZw;
  return {
    title: s.Z.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
        quantity: n
      }),
      description: s.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
  };
case r.evJ.GUILD_AT_CAPACITY:
  return {
    title: s.Z.Messages.SERVER_IS_CURRENTLY_FULL,
      description: s.Z.Messages.PLEASE_TRY_AGAIN_LATER
  };
case r.evJ.GUILD_JOIN_INVITE_LIMITED_ACCESS:
  return {
    title: s.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING,
      description: s.Z.Messages.PLEASE_TRY_AGAIN_LATER
  };
default:
  return null;
  }
}

function c(e) {
  switch (e) {
case r.evJ.TOO_MANY_USER_GUILDS:
  return s.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
case r.evJ.GUILD_AT_CAPACITY:
  return s.Z.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
case r.evJ.INVALID_COUNTRY_CODE:
  return s.Z.Messages.INVALID_COUNTRY_CODE;
case r.evJ.INVALID_CANNOT_FRIEND_SELF:
  return s.Z.Messages.INVALID_CANNOT_FRIEND_SELF;
case r.evJ.INVITES_DISABLED:
  return s.Z.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
    articleLink: l.Z.getArticleURL(r.BhN.INVITE_DISABLED)
  });
default:
  return s.Z.Messages.INVITE_MODAL_ERROR_DEFAULT;
  }
}