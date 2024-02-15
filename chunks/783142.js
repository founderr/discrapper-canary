"use strict";
n.r(t), n.d(t, {
  saveProfileChanges: function() {
    return E
  },
  handleProfileAccessibilityTooltipViewed: function() {
    return _
  },
  resetPendingProfileChanges: function() {
    return T
  },
  setPendingBanner: function() {
    return S
  },
  setPendingBio: function() {
    return I
  },
  setPendingPronouns: function() {
    return h
  },
  setPendingAccentColor: function() {
    return N
  },
  setPendingThemeColors: function() {
    return p
  },
  setTryItOutAvatar: function() {
    return C
  },
  setTryItOutAvatarDecoration: function() {
    return v
  },
  setTryItOutBanner: function() {
    return A
  },
  setTryItOutThemeColors: function() {
    return m
  }
});
var i = n("872717"),
  r = n("913144"),
  u = n("448993"),
  a = n("884351"),
  s = n("845579"),
  l = n("697218"),
  o = n("599110"),
  c = n("49111"),
  d = n("646718");

function f(e) {
  o.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
    feature_name: e,
    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
  })
}
async function E(e, t) {
  var n, o;
  let d = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null == d) return;
  let f = s.UseLegacyChatInput.getSetting();
  null != e.bio && f && (e.bio = a.default.parse(void 0, e.bio).content);
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
      let e = null === (o = n.body.profile_effect) || void 0 === o ? void 0 : o.id;
      r.default.dispatch({
        type: "USER_PROFILE_UPDATE_SUCCESS",
        userId: d,
        profileEffectId: e,
        ...n.body
      })
    } else {
      let e = new u.APIError(n);
      r.default.dispatch({
        type: "USER_PROFILE_UPDATE_FAILURE",
        errors: n.body,
        apiError: e
      })
    }
    return n
  } catch (t) {
    let e = new u.APIError(t);
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

function T() {
  r.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function S(e) {
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

function N(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
    color: e
  })
}

function p(e) {
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

function v(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
    avatarDecoration: e
  }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
}

function A(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
    banner: e
  }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
}

function m(e) {
  r.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
    themeColors: e
  }), f(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
}