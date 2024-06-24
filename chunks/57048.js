n.d(t, {
  U: function() {
    return o
  },
  a: function() {
    return c
  }
});
var s = n(199902),
  i = n(158776),
  l = n(699516),
  a = n(626135),
  r = n(981631);
let o = e => {
    let {
      displayProfile: t,
      isMobile: n,
      loadDurationMs: s,
      activity: i,
      customStatusActivity: l,
      status: o
    } = e;
    a.default.track(r.rMx.DM_PROFILE_VIEWED, {
      has_mobile_indicator: n,
      has_activity: null != i && (null == i ? void 0 : i.type) !== r.IIU.CUSTOM_STATUS,
      has_game_activity: (null == i ? void 0 : i.type) === r.IIU.PLAYING,
      load_duration_ms: s,
      profile_user_status: o,
      has_custom_status: null != l,
      has_profile_effect: null != t.profileEffectId,
      ...u(t)
    })
  },
  c = (e, t) => {
    a.default.track(r.rMx.DM_PROFILE_TOGGLED, {
      is_profile_open: t,
      ...u(e)
    })
  },
  u = e => {
    var t;
    if (null == e) return {};
    let n = e.userId,
      a = null != s.Z.getAnyStreamForUser(n),
      o = i.Z.findActivity(n, e => {
        let {
          type: t
        } = e;
        return a ? t === r.IIU.PLAYING : t !== r.IIU.CUSTOM_STATUS
      }),
      c = null == o ? void 0 : o.assets,
      u = l.Z.isFriend(n);
    return {
      has_images: !!(null !== (t = null == c ? void 0 : c.large_image) && void 0 !== t ? t : null == c ? void 0 : c.small_image),
      is_friend: u,
      viewed_profile_user_id: n,
      profile_has_nitro_customization: e.hasPremiumCustomization(),
      profile_has_theme_color_customized: e.hasThemeColors(),
      profile_has_theme_animation: null != e.popoutAnimationParticleType
    }
  }