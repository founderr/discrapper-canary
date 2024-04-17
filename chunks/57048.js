"use strict";
n.r(t), n.d(t, {
  trackProfilePanelToggled: function() {
    return u
  },
  trackProfilePanelViewed: function() {
    return o
  }
});
var a = n("199902"),
  l = n("158776"),
  s = n("699516"),
  i = n("626135"),
  r = n("981631");
let o = e => {
    let {
      displayProfile: t,
      isMobile: n,
      loadDurationMs: a,
      activity: l,
      customStatusActivity: s,
      status: o
    } = e;
    i.default.track(r.AnalyticEvents.DM_PROFILE_VIEWED, {
      has_mobile_indicator: n,
      has_activity: null != l && (null == l ? void 0 : l.type) !== r.ActivityTypes.CUSTOM_STATUS,
      has_game_activity: (null == l ? void 0 : l.type) === r.ActivityTypes.PLAYING,
      load_duration_ms: a,
      profile_user_status: o,
      has_custom_status: null != s,
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
      i = null != a.default.getAnyStreamForUser(n),
      o = l.default.findActivity(n, e => {
        let {
          type: t
        } = e;
        return i ? t === r.ActivityTypes.PLAYING : t !== r.ActivityTypes.CUSTOM_STATUS
      }),
      u = null == o ? void 0 : o.assets,
      d = s.default.isFriend(n);
    return {
      has_images: !!(null !== (t = null == u ? void 0 : u.large_image) && void 0 !== t ? t : null == u ? void 0 : u.small_image),
      is_friend: d,
      viewed_profile_user_id: n,
      profile_has_nitro_customization: e.hasPremiumCustomization(),
      profile_has_theme_color_customized: e.hasThemeColors(),
      profile_has_theme_animation: null != e.popoutAnimationParticleType
    }
  }