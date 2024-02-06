"use strict";
n.r(t), n.d(t, {
  saveProfileChanges: function() {
    return E
  },
  handleProfileAccessibilityTooltipViewed: function() {
    return _
  },
  resetPendingProfileChanges: function() {
    return I
  },
  setPendingBanner: function() {
    return h
  },
  setPendingBio: function() {
    return S
  },
  setPendingPronouns: function() {
    return p
  },
  setPendingAccentColor: function() {
    return T
  },
  setPendingThemeColors: function() {
    return N
  },
  setTryItOutAvatar: function() {
    return C
  },
  setTryItOutAvatarDecoration: function() {
    return R
  },
  setTryItOutBanner: function() {
    return v
  },
  setTryItOutThemeColors: function() {
    return A
  }
});
var i = n("872717"),
  r = n("913144"),
  o = n("448993"),
  s = n("884351"),
  l = n("845579"),
  a = n("697218"),
  u = n("599110"),
  c = n("49111"),
  d = n("646718");

function f(e) {
  u.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
    feature_name: e,
    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
  })
}
async function E(e, t) {
  var n, u;
  let d = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null == d) return;
  let f = l.UseLegacyChatInput.getSetting();
  null != e.bio && f && (e.bio = s.default.parse(void 0, e.bio).content);
  try {
    r.default.dispatch({
      type: "USER_PROFILE_UPDATE_START",
      userId: d
    });
    let n = await i.default.patch({
      url: null != t ? c.Endpoints.GUILD_PROFILE(t, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
      body: e
    });
    if (n.ok) {
      let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id;
      r.default.dispatch({
        type: "USER_PROFILE_UPDATE_SUCCESS",
        userId: d,
        profileEffectId: e,
        ...n.body
      })
    } else {
      let e = new o.APIError(n);
      r.default.dispatch({
        type: "USER_PROFILE_UPDATE_FAILURE",
        errors: n.body,
        apiError: e
      })
    }
    return n
  } catch (t) {
    let e = new o.APIError(t);
    r.default.dispatch({
      type: "USER_PROFILE_UPDATE_FAILURE",
      errors: {},
      apiError: e
    })
  }
}

function _() {
  r.default.dispatch({
    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
  })
}

function I() {
  r.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function h(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
    banner: e
  })
}

function S(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
    bio: e
  })
}

function p(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function T(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
    color: e
  })
}

function N(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function C(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
    avatar: e
  }), f(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
}

function R(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
    avatarDecoration: e
  }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
}

function v(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
    banner: e
  }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
}

function A(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
    themeColors: e
  }), f(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
}