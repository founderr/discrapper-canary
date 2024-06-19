t.d(e, {
  U: function() {
    return o
  },
  a: function() {
    return d
  }
});
var i = t(199902),
  l = t(158776),
  a = t(699516),
  u = t(626135),
  r = t(981631);
let o = n => {
    let {
      displayProfile: e,
      isMobile: t,
      loadDurationMs: i,
      activity: l,
      customStatusActivity: a,
      status: o
    } = n;
    u.default.track(r.rMx.DM_PROFILE_VIEWED, {
      has_mobile_indicator: t,
      has_activity: null != l && (null == l ? void 0 : l.type) !== r.IIU.CUSTOM_STATUS,
      has_game_activity: (null == l ? void 0 : l.type) === r.IIU.PLAYING,
      load_duration_ms: i,
      profile_user_status: o,
      has_custom_status: null != a,
      has_profile_effect: null != e.profileEffectId,
      ...c(e)
    })
  },
  d = (n, e) => {
    u.default.track(r.rMx.DM_PROFILE_TOGGLED, {
      is_profile_open: e,
      ...c(n)
    })
  },
  c = n => {
    var e;
    if (null == n) return {};
    let t = n.userId,
      u = null != i.Z.getAnyStreamForUser(t),
      o = l.Z.findActivity(t, n => {
        let {
          type: e
        } = n;
        return u ? e === r.IIU.PLAYING : e !== r.IIU.CUSTOM_STATUS
      }),
      d = null == o ? void 0 : o.assets,
      c = a.Z.isFriend(t);
    return {
      has_images: !!(null !== (e = null == d ? void 0 : d.large_image) && void 0 !== e ? e : null == d ? void 0 : d.small_image),
      is_friend: c,
      viewed_profile_user_id: t,
      profile_has_nitro_customization: n.hasPremiumCustomization(),
      profile_has_theme_color_customized: n.hasThemeColors(),
      profile_has_theme_animation: null != n.popoutAnimationParticleType
    }
  }