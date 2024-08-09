n.d(t, {
  U: function() {
return o;
  },
  a: function() {
return c;
  }
});
var i = n(199902),
  a = n(158776),
  s = n(699516),
  r = n(626135),
  l = n(981631);
let o = e => {
let {
  displayProfile: t,
  isMobile: n,
  loadDurationMs: i,
  activity: a,
  customStatusActivity: s,
  status: o
} = e;
r.default.track(l.rMx.DM_PROFILE_VIEWED, {
  has_mobile_indicator: n,
  has_activity: null != a && (null == a ? void 0 : a.type) !== l.IIU.CUSTOM_STATUS,
  has_game_activity: (null == a ? void 0 : a.type) === l.IIU.PLAYING,
  load_duration_ms: i,
  profile_user_status: o,
  has_custom_status: null != s,
  has_profile_effect: null != t.profileEffectId,
  ...u(t)
});
  },
  c = (e, t) => {
r.default.track(l.rMx.DM_PROFILE_TOGGLED, {
  is_profile_open: t,
  ...u(e)
});
  },
  u = e => {
var t;
if (null == e)
  return {};
let n = e.userId,
  r = null != i.Z.getAnyStreamForUser(n),
  o = a.Z.findActivity(n, e => {
    let {
      type: t
    } = e;
    return r ? t === l.IIU.PLAYING : t !== l.IIU.CUSTOM_STATUS;
  }),
  c = null == o ? void 0 : o.assets,
  u = s.Z.isFriend(n);
return {
  has_images: !!(null !== (t = null == c ? void 0 : c.large_image) && void 0 !== t ? t : null == c ? void 0 : c.small_image),
  is_friend: u,
  viewed_profile_user_id: n,
  profile_has_nitro_customization: e.hasPremiumCustomization(),
  profile_has_theme_color_customized: e.hasThemeColors(),
  profile_has_theme_animation: null != e.popoutAnimationParticleType
};
  };