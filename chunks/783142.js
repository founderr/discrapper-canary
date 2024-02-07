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
    return A
  },
  setPendingPronouns: function() {
    return p
  },
  setPendingAccentColor: function() {
    return I
  },
  setPendingThemeColors: function() {
    return N
  },
  setTryItOutAvatar: function() {
    return C
  },
  setTryItOutAvatarDecoration: function() {
    return g
  },
  setTryItOutBanner: function() {
    return O
  },
  setTryItOutThemeColors: function() {
    return h
  }
});
var u = n("872717"),
  i = n("913144"),
  a = n("448993"),
  l = n("884351"),
  r = n("845579"),
  d = n("697218"),
  o = n("599110"),
  s = n("49111"),
  c = n("646718");

function f(e) {
  o.default.track(s.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
    feature_name: e,
    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
  })
}
async function E(e, t) {
  var n, o;
  let c = null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null == c) return;
  let f = r.UseLegacyChatInput.getSetting();
  null != e.bio && f && (e.bio = l.default.parse(void 0, e.bio).content);
  try {
    i.default.dispatch({
      type: "USER_PROFILE_UPDATE_START",
      userId: c
    });
    let n = await u.default.patch({
      url: null != t ? s.Endpoints.GUILD_PROFILE(t, s.ME) : s.Endpoints.USER_PROFILE(s.ME),
      body: e
    });
    if (n.ok) {
      let e = null === (o = n.body.profile_effect) || void 0 === o ? void 0 : o.id;
      i.default.dispatch({
        type: "USER_PROFILE_UPDATE_SUCCESS",
        userId: c,
        profileEffectId: e,
        ...n.body
      })
    } else {
      let e = new a.APIError(n);
      i.default.dispatch({
        type: "USER_PROFILE_UPDATE_FAILURE",
        errors: n.body,
        apiError: e
      })
    }
    return n
  } catch (t) {
    let e = new a.APIError(t);
    i.default.dispatch({
      type: "USER_PROFILE_UPDATE_FAILURE",
      errors: {},
      apiError: e
    })
  }
}

function _() {
  i.default.dispatch({
    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
  })
}

function S() {
  i.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function T(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
    banner: e
  })
}

function A(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
    bio: e
  })
}

function p(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function I(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
    color: e
  })
}

function N(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function C(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
    avatar: e
  }), f(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
}

function g(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
    avatarDecoration: e
  }), f(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
}

function O(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
    banner: e
  }), f(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
}

function h(e) {
  i.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
    themeColors: e
  }), f(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
}