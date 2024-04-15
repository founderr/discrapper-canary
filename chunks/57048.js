"use strict";
n.r(t), n.d(t, {
  trackProfilePanelToggled: function() {
    return u
  },
  trackProfilePanelViewed: function() {
    return o
  }
});
var s = n("199902"),
  a = n("158776"),
  l = n("699516"),
  i = n("626135"),
  r = n("981631");
let o = e => {
    let {
      displayProfile: t,
      isMobile: n,
      loadDurationMs: s,
      activity: a,
      customStatusActivity: l,
      status: o
    } = e;
    i.default.track(r.AnalyticEvents.DM_PROFILE_VIEWED, {
      has_mobile_indicator: n,
      has_activity: null != a && (null == a ? void 0 : a.type) !== r.ActivityTypes.CUSTOM_STATUS,
      has_game_activity: (null == a ? void 0 : a.type) === r.ActivityTypes.PLAYING,
      load_duration_ms: s,
      profile_user_status: o,
      has_custom_status: null != l,
      has_profile_effect: null != t.profileEffectId,
      ...d(t)
    })
  },
  u = (e, t) => {
    i.default.track(r.AnalyticEvents.DM_PROFILE_TOGGLED, {
      is_profile_open: t,
      ...d(e)
    })
  },
  d = e => {
    var t;
    if (null == e) return {};
    let n = e.userId,
      i = null != s.default.getAnyStreamForUser(n),
      o = a.default.findActivity(n, e => {
        let {
          type: t
        } = e;
        return i ? t === r.ActivityTypes.PLAYING : t !== r.ActivityTypes.CUSTOM_STATUS
      }),
      u = null == o ? void 0 : o.assets,
      d = l.default.isFriend(n);
    return {
      has_images: !!(null !== (t = null == u ? void 0 : u.large_image) && void 0 !== t ? t : null == u ? void 0 : u.small_image),
      is_friend: d,
      viewed_profile_user_id: n,
      profile_has_nitro_customization: e.hasPremiumCustomization(),
      profile_has_theme_color_customized: e.hasThemeColors(),
      profile_has_theme_animation: null != e.popoutAnimationParticleType
    }
  }