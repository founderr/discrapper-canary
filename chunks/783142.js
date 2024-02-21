"use strict";
n.r(t), n.d(t, {
  saveProfileChanges: function() {
    return E
  },
  handleProfileAccessibilityTooltipViewed: function() {
    return _
  },
  resetPendingProfileChanges: function() {
    return S
  },
  setPendingBanner: function() {
    return T
  },
  setPendingBio: function() {
    return I
  },
  setPendingPronouns: function() {
    return h
  },
  setPendingAccentColor: function() {
    return v
  },
  setPendingThemeColors: function() {
    return N
  },
  setTryItOutAvatar: function() {
    return C
  },
  setTryItOutAvatarDecoration: function() {
    return p
  },
  setTryItOutBanner: function() {
    return g
  },
  setTryItOutThemeColors: function() {
    return A
  }
});
var i = n("872717"),
  r = n("913144"),
  l = n("448993"),
  u = n("884351"),
  a = n("845579"),
  s = n("697218"),
  o = n("599110"),
  d = n("49111"),
  c = n("646718");

function f(e) {
  o.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
    feature_name: e,
    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
  })
}
async function E(e, t) {
  var n, o;
  let c = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null == c) return;
  let f = a.UseLegacyChatInput.getSetting();
  null != e.bio && f && (e.bio = u.default.parse(void 0, e.bio).content);
  try {
    r.default.dispatch({
      type: "USER_PROFILE_UPDATE_START",
      userId: c
    });
    let n = await i.default.patch({
      url: null != t ? d.Endpoints.GUILD_PROFILE(t, d.ME) : d.Endpoints.USER_PROFILE(d.ME),
      body: e
    });
    if (n.ok) {
      let e = null === (o = n.body.profile_effect) || void 0 === o ? void 0 : o.id;
      r.default.dispatch({
        type: "USER_PROFILE_UPDATE_SUCCESS",
        userId: c,
        profileEffectId: e,
        ...n.body
      })
    } else {
      let e = new l.APIError(n);
      r.default.dispatch({
        type: "USER_PROFILE_UPDATE_FAILURE",
        errors: n.body,
        apiError: e
      })
    }
    return n
  } catch (t) {
    let e = new l.APIError(t);
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

function S() {
  r.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function T(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
    banner: e
  })
}

function I(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
    bio: e
  })
}

function h(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function v(e) {
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
  }), f(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
}

function p(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
    avatarDecoration: e
  }), f(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
}

function g(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
    banner: e
  }), f(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
}

function A(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
    themeColors: e
  }), f(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
}