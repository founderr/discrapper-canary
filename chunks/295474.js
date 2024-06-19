t.d(n, {
  Ux: function() {
    return N
  },
  gS: function() {
    return L
  },
  ww: function() {
    return U
  }
}), t(789020);
var s = t(470079),
  l = t(399606),
  r = t(230711),
  o = t(906732),
  i = t(18438),
  a = t(314897),
  _ = t(271383),
  u = t(430824),
  d = t(496675),
  I = t(914010),
  A = t(715903),
  O = t(981631),
  c = t(372897),
  E = t(526761),
  M = t(689938);

function N(e) {
  return (0, l.e7)([a.default, _.ZP], () => {
    if (null == e) return !1;
    let n = a.default.getId();
    return (0, A.EY)(_.ZP.getMember(e, n))
  }, [e])
}

function L(e) {
  return (0, l.cj)([a.default, _.ZP, I.Z, u.Z], () => {
    let n = {
        nick: void 0,
        bio: void 0
      },
      t = I.Z.getGuildId(),
      s = null != e ? e : t,
      l = u.Z.getGuild(s);
    if (null == l || null == s) return n;
    let r = a.default.getId(),
      o = _.ZP.getMember(s, r),
      i = (0, A.Ow)(null == o ? void 0 : o.flags);
    if (0 === i.size) return n;
    if (i.has(c.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
      if (null == e) {
        var d;
        n.nick = [M.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
          guildName: null !== (d = l.name) && void 0 !== d ? d : ""
        })]
      } else n.nick = [M.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME]
    }
    return i.has(c.q.AUTOMOD_QUARANTINED_BIO) && (n.bio = [M.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), n
  }, [e])
}

function U(e) {
  let {
    guildId: n,
    scrollPosition: t,
    analyticsLocation: a,
    analyticsLocations: _,
    openWithoutBackstack: I
  } = e, {
    analyticsLocations: A
  } = (0, o.ZP)(), c = (0, l.e7)([u.Z], () => u.Z.getGuild(n), [n]), M = (0, l.e7)([d.Z], () => null != c && d.Z.can(O.Plq.CHANGE_NICKNAME, c), [c]);
  return [s.useCallback(() => {
    if (null == c) return;
    let e = O.oAB.PROFILE_CUSTOMIZATION,
      n = E.NB.GUILD;
    M ? (0, i.Fq)(c, null != _ ? _ : A) : n = E.NB.USER_PROFILE, r.Z.open(e, n, {
      scrollPosition: t,
      analyticsLocation: a,
      analyticsLocations: _,
      openWithoutBackstack: I
    })
  }, [M, t, a, _, I, c, A]), M]
}