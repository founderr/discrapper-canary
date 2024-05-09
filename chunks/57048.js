"use strict";
n.r(t), n.d(t, {
  trackProfilePanelToggled: function() {
    return s
  },
  trackProfilePanelViewed: function() {
    return o
  }
});
var i = n("199902"),
  a = n("158776"),
  l = n("699516"),
  r = n("626135"),
  u = n("981631");
let o = e => {
    let {
      displayProfile: t,
      isMobile: n,
      loadDurationMs: i,
      activity: a,
      customStatusActivity: l,
      status: o
    } = e;
    r.default.track(u.AnalyticEvents.DM_PROFILE_VIEWED, {
      has_mobile_indicator: n,
      has_activity: null != a && (null == a ? void 0 : a.type) !== u.ActivityTypes.CUSTOM_STATUS,
      has_game_activity: (null == a ? void 0 : a.type) === u.ActivityTypes.PLAYING,
      load_duration_ms: i,
      profile_user_status: o,
      has_custom_status: null != l,
      has_profile_effect: null != t.profileEffectId,
      ...d(t)
    })
  },
  s = (e, t) => {
    r.default.track(u.AnalyticEvents.DM_PROFILE_TOGGLED, {
      is_profile_open: t,
      ...d(e)
    })
  },
  d = e => {
    var t;
    if (null == e) return {};
    let n = e.userId,
      r = null != i.default.getAnyStreamForUser(n),
      o = a.default.findActivity(n, e => {
        let {
          type: t
        } = e;
        return r ? t === u.ActivityTypes.PLAYING : t !== u.ActivityTypes.CUSTOM_STATUS
      }),
      s = null == o ? void 0 : o.assets,
      d = l.default.isFriend(n);
    return {
      has_images: !!(null !== (t = null == s ? void 0 : s.large_image) && void 0 !== t ? t : null == s ? void 0 : s.small_image),
      is_friend: d,
      viewed_profile_user_id: n,
      profile_has_nitro_customization: e.hasPremiumCustomization(),
      profile_has_theme_color_customized: e.hasThemeColors(),
      profile_has_theme_animation: null != e.popoutAnimationParticleType
    }
  }