"use strict";
l.r(t), l.d(t, {
  useCurrentUserHasAutomodQuarantinedProfile: function() {
    return E
  },
  useGuildAutomodProfileQuarantineErrors: function() {
    return O
  },
  useOpenFixQuarantinedProfileModal: function() {
    return N
  }
}), l("789020");
var a = l("470079"),
  s = l("399606"),
  n = l("230711"),
  u = l("906732"),
  r = l("18438"),
  i = l("314897"),
  o = l("271383"),
  d = l("430824"),
  f = l("496675"),
  c = l("914010"),
  _ = l("715903"),
  I = l("981631"),
  A = l("372897"),
  L = l("526761"),
  M = l("689938");

function E(e) {
  return (0, s.useStateFromStores)([i.default, o.default], () => {
    if (null == e) return !1;
    let t = i.default.getId();
    return (0, _.hasAutomodQuarantinedProfile)(o.default.getMember(e, t))
  }, [e])
}

function O(e) {
  return (0, s.useStateFromStoresObject)([i.default, o.default, c.default, d.default], () => {
    let t = {
        nick: void 0,
        bio: void 0
      },
      l = c.default.getGuildId(),
      a = null != e ? e : l,
      s = d.default.getGuild(a);
    if (null == s || null == a) return t;
    let n = i.default.getId(),
      u = o.default.getMember(a, n),
      r = (0, _.getAutomodQuarantinedProfileFlags)(null == u ? void 0 : u.flags);
    if (0 === r.size) return t;
    if (r.has(A.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
      if (null == e) {
        var f;
        t.nick = [M.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
          guildName: null !== (f = s.name) && void 0 !== f ? f : ""
        })]
      } else t.nick = [M.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME]
    }
    return r.has(A.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) && (t.bio = [M.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), t
  }, [e])
}

function N(e) {
  let {
    guildId: t,
    scrollPosition: l,
    analyticsLocation: i,
    analyticsLocations: o,
    openWithoutBackstack: c
  } = e, {
    analyticsLocations: _
  } = (0, u.default)(), A = (0, s.useStateFromStores)([d.default], () => d.default.getGuild(t), [t]), M = (0, s.useStateFromStores)([f.default], () => null != A && f.default.can(I.Permissions.CHANGE_NICKNAME, A), [A]);
  return [a.useCallback(() => {
    if (null == A) return;
    let e = I.UserSettingsSections.PROFILE_CUSTOMIZATION,
      t = L.ProfileCustomizationSubsection.GUILD;
    M ? (0, r.initGuildIdentitySettings)(A, null != o ? o : _) : t = L.ProfileCustomizationSubsection.USER_PROFILE, n.default.open(e, t, {
      scrollPosition: l,
      analyticsLocation: i,
      analyticsLocations: o,
      openWithoutBackstack: c
    })
  }, [M, l, i, o, c, A, _]), M]
}