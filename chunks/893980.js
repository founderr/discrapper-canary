"use strict";
n.r(t), n.d(t, {
  trackProfilePanelViewed: function() {
    return u
  },
  trackProfilePanelToggled: function() {
    return o
  }
});
var s = n("373469"),
  i = n("824563"),
  r = n("27618"),
  a = n("599110"),
  l = n("49111");
let u = e => {
    let {
      displayProfile: t,
      isMobile: n,
      loadDurationMs: s,
      activity: i,
      customStatusActivity: r,
      status: u
    } = e;
    a.default.track(l.AnalyticEvents.DM_PROFILE_VIEWED, {
      has_mobile_indicator: n,
      has_activity: null != i && (null == i ? void 0 : i.type) !== l.ActivityTypes.CUSTOM_STATUS,
      has_game_activity: (null == i ? void 0 : i.type) === l.ActivityTypes.PLAYING,
      load_duration_ms: s,
      profile_user_status: u,
      has_custom_status: null != r,
      has_profile_effect: null != t.profileEffectId,
      ...c(t)
    })
  },
  o = (e, t) => {
    a.default.track(l.AnalyticEvents.DM_PROFILE_TOGGLED, {
      is_profile_open: t,
      ...c(e)
    })
  },
  c = e => {
    var t;
    if (null == e) return {};
    let n = e.userId,
      a = null != s.default.getAnyStreamForUser(n),
      u = i.default.findActivity(n, e => {
        let {
          type: t
        } = e;
        return a ? t === l.ActivityTypes.PLAYING : t !== l.ActivityTypes.CUSTOM_STATUS
      }),
      o = null == u ? void 0 : u.assets,
      c = r.default.isFriend(n);
    return {
      has_images: !!(null !== (t = null == o ? void 0 : o.large_image) && void 0 !== t ? t : null == o ? void 0 : o.small_image),
      is_friend: c,
      viewed_profile_user_id: n,
      profile_has_nitro_customization: e.hasPremiumCustomization(),
      profile_has_theme_color_customized: e.hasThemeColors(),
      profile_has_theme_animation: null != e.popoutAnimationParticleType
    }
  }