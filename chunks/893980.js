"use strict";
n.r(t), n.d(t, {
  trackProfilePanelViewed: function() {
    return r
  },
  trackProfilePanelToggled: function() {
    return o
  }
});
var a = n("373469"),
  i = n("824563"),
  l = n("27618"),
  u = n("599110"),
  s = n("49111");
let r = e => {
    let {
      displayProfile: t,
      isMobile: n,
      loadDurationMs: a,
      activity: i,
      customStatusActivity: l,
      status: r
    } = e;
    u.default.track(s.AnalyticEvents.DM_PROFILE_VIEWED, {
      has_mobile_indicator: n,
      has_activity: null != i && (null == i ? void 0 : i.type) !== s.ActivityTypes.CUSTOM_STATUS,
      has_game_activity: (null == i ? void 0 : i.type) === s.ActivityTypes.PLAYING,
      load_duration_ms: a,
      profile_user_status: r,
      has_custom_status: null != l,
      has_profile_effect: null != t.profileEffectId,
      ...d(t)
    })
  },
  o = (e, t) => {
    u.default.track(s.AnalyticEvents.DM_PROFILE_TOGGLED, {
      is_profile_open: t,
      ...d(e)
    })
  },
  d = e => {
    var t;
    if (null == e) return {};
    let n = e.userId,
      u = null != a.default.getAnyStreamForUser(n),
      r = i.default.findActivity(n, e => {
        let {
          type: t
        } = e;
        return u ? t === s.ActivityTypes.PLAYING : t !== s.ActivityTypes.CUSTOM_STATUS
      }),
      o = null == r ? void 0 : r.assets,
      d = l.default.isFriend(n);
    return {
      has_images: !!(null !== (t = null == o ? void 0 : o.large_image) && void 0 !== t ? t : null == o ? void 0 : o.small_image),
      is_friend: d,
      viewed_profile_user_id: n,
      profile_has_nitro_customization: e.hasPremiumCustomization(),
      profile_has_theme_color_customized: e.hasThemeColors(),
      profile_has_theme_animation: null != e.popoutAnimationParticleType
    }
  }