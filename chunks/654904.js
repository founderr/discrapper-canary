"use strict";
n.d(t, {
  $r: function() {
    return d
  },
  DP: function() {
    return h
  },
  Ly: function() {
    return I
  },
  SG: function() {
    return E
  },
  ZT: function() {
    return T
  }
});
var i = n(735250);
n(470079);
var r = n(866442),
  s = n(481060);
n(531643);
var o = n(768581);
n(403182);
var a = n(51144),
  l = n(661543),
  u = n(200299),
  _ = n(486324),
  c = n(689938);

function d(e, t, r, o) {
  (0, s.openModalLazy)(async () => {
    let {
      default: s
    } = await Promise.all([n.e("99387"), n.e("82634")]).then(n.bind(n, 28130));
    return n => (0, i.jsx)(s, {
      filters: o,
      maxFileSizeBytes: u.B,
      imageSpecifications: e === _.pC.BANNER && c.Z.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
      onComplete: (n, i) => (0, l.j)({
        imageSrc: n,
        file: i,
        uploadType: e,
        guildId: t,
        isTryItOutFlow: r
      }),
      uploadType: e,
      showUpsellHeader: !0,
      ...n
    })
  })
}

function E(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (null != e) return e;
  let {
    size: r = 80,
    canAnimate: s = !0
  } = i, a = null === e;
  return a && null == t ? o.ZP.getDefaultAvatarURL(n.id, n.discriminator) : a || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, r, s) : n.getAvatarURL(null == t ? void 0 : t.guildId, r, s)
}

function I(e) {
  var t;
  let {
    pendingNickname: n,
    pendingGlobalName: i,
    user: r,
    guildMember: s
  } = e, o = "" === n ? null : null != n ? n : null == s ? void 0 : s.nick, l = "" === i ? r.username : i;
  return null !== (t = null != o ? o : l) && void 0 !== t ? t : a.ZP.getName(r)
}

function T(e) {
  var t, n;
  let {
    pendingProfileEffectId: i,
    displayProfile: r
  } = e, s = null == r ? void 0 : null === (t = r._userProfile) || void 0 === t ? void 0 : t.profileEffectId, o = null == r ? void 0 : null === (n = r._guildMemberProfile) || void 0 === n ? void 0 : n.profileEffectId, a = null === i;
  return a && null != o ? s : a ? null : null != i ? i : null == r ? void 0 : r.profileEffectId
}

function h(e) {
  return (null != e ? (0, r.Bd)(e) : 1) > .25
}