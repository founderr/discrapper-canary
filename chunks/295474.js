n.d(t, {
  Ux: function() {
    return h
  },
  gS: function() {
    return C
  },
  ww: function() {
    return S
  }
}), n(789020);
var s = n(470079),
  i = n(399606),
  l = n(230711),
  a = n(906732),
  r = n(18438),
  o = n(314897),
  c = n(271383),
  u = n(430824),
  d = n(496675),
  E = n(914010),
  _ = n(715903),
  I = n(981631),
  T = n(372897),
  N = n(526761),
  m = n(689938);

function h(e) {
  return (0, i.e7)([o.default, c.ZP], () => {
    if (null == e) return !1;
    let t = o.default.getId();
    return (0, _.EY)(c.ZP.getMember(e, t))
  }, [e])
}

function C(e) {
  return (0, i.cj)([o.default, c.ZP, E.Z, u.Z], () => {
    let t = {
        nick: void 0,
        bio: void 0
      },
      n = E.Z.getGuildId(),
      s = null != e ? e : n,
      i = u.Z.getGuild(s);
    if (null == i || null == s) return t;
    let l = o.default.getId(),
      a = c.ZP.getMember(s, l),
      r = (0, _.Ow)(null == a ? void 0 : a.flags);
    if (0 === r.size) return t;
    if (r.has(T.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
      if (null == e) {
        var d;
        t.nick = [m.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
          guildName: null !== (d = i.name) && void 0 !== d ? d : ""
        })]
      } else t.nick = [m.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME]
    }
    return r.has(T.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [m.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), t
  }, [e])
}

function S(e) {
  let {
    guildId: t,
    scrollPosition: n,
    analyticsLocation: o,
    analyticsLocations: c,
    openWithoutBackstack: E
  } = e, {
    analyticsLocations: _
  } = (0, a.ZP)(), T = (0, i.e7)([u.Z], () => u.Z.getGuild(t), [t]), m = (0, i.e7)([d.Z], () => null != T && d.Z.can(I.Plq.CHANGE_NICKNAME, T), [T]);
  return [s.useCallback(() => {
    if (null == T) return;
    let e = I.oAB.PROFILE_CUSTOMIZATION,
      t = N.NB.GUILD;
    m ? (0, r.Fq)(T, null != c ? c : _) : t = N.NB.USER_PROFILE, l.Z.open(e, t, {
      scrollPosition: n,
      analyticsLocation: o,
      analyticsLocations: c,
      openWithoutBackstack: E
    })
  }, [m, n, o, c, E, T, _]), m]
}