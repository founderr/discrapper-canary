"use strict";
n.r(t), n.d(t, {
  trackProfilePanelToggled: function() {
    return u
  },
  trackProfilePanelViewed: function() {
    return o
  }
});
var i = n("199902"),
  r = n("158776"),
  a = n("699516"),
  l = n("626135"),
  s = n("981631");
let o = e => {
    let {
      displayProfile: t,
      isMobile: n,
      loadDurationMs: i,
      activity: r,
      customStatusActivity: a,
      status: o
    } = e;
    l.default.track(s.AnalyticEvents.DM_PROFILE_VIEWED, {
      has_mobile_indicator: n,
      has_activity: null != r && (null == r ? void 0 : r.type) !== s.ActivityTypes.CUSTOM_STATUS,
      has_game_activity: (null == r ? void 0 : r.type) === s.ActivityTypes.PLAYING,
      load_duration_ms: i,
      profile_user_status: o,
      has_custom_status: null != a,
      has_profile_effect: null != t.profileEffectId,
      ...d(t)
    })
  },
  u = (e, t) => {
    l.default.track(s.AnalyticEvents.DM_PROFILE_TOGGLED, {
      is_profile_open: t,
      ...d(e)
    })
  },
  d = e => {
    var t;
    if (null == e) return {};
    let n = e.userId,
      l = null != i.default.getAnyStreamForUser(n),
      o = r.default.findActivity(n, e => {
        let {
          type: t
        } = e;
        return l ? t === s.ActivityTypes.PLAYING : t !== s.ActivityTypes.CUSTOM_STATUS
      }),
      u = null == o ? void 0 : o.assets,
      d = a.default.isFriend(n);
    return {
      has_images: !!(null !== (t = null == u ? void 0 : u.large_image) && void 0 !== t ? t : null == u ? void 0 : u.small_image),
      is_friend: d,
      viewed_profile_user_id: n,
      profile_has_nitro_customization: e.hasPremiumCustomization(),
      profile_has_theme_color_customized: e.hasThemeColors(),
      profile_has_theme_animation: null != e.popoutAnimationParticleType
    }
  }