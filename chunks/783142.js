"use strict";
n.r(t), n.d(t, {
  saveProfileChanges: function() {
    return E
  },
  handleProfileAccessibilityTooltipViewed: function() {
    return p
  },
  resetPendingProfileChanges: function() {
    return h
  },
  setPendingBanner: function() {
    return _
  },
  setPendingBio: function() {
    return C
  },
  setPendingPronouns: function() {
    return S
  },
  setPendingAccentColor: function() {
    return I
  },
  setPendingThemeColors: function() {
    return T
  },
  setTryItOutAvatar: function() {
    return g
  },
  setTryItOutAvatarDecoration: function() {
    return N
  },
  setTryItOutBanner: function() {
    return v
  },
  setTryItOutThemeColors: function() {
    return A
  }
});
var i = n("872717"),
  l = n("913144"),
  r = n("448993"),
  o = n("884351"),
  a = n("845579"),
  s = n("697218"),
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
  let d = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
  if (null == d) return;
  let f = a.UseLegacyChatInput.getSetting();
  null != e.bio && f && (e.bio = o.default.parse(void 0, e.bio).content);
  try {
    l.default.dispatch({
      type: "USER_PROFILE_UPDATE_START",
      userId: d
    });
    let n = await i.default.patch({
      url: null != t ? c.Endpoints.GUILD_PROFILE(t, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
      body: e
    });
    if (n.ok) {
      let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id;
      l.default.dispatch({
        type: "USER_PROFILE_UPDATE_SUCCESS",
        userId: d,
        profileEffectId: e,
        ...n.body
      })
    } else {
      let e = new r.APIError(n);
      l.default.dispatch({
        type: "USER_PROFILE_UPDATE_FAILURE",
        errors: n.body,
        apiError: e
      })
    }
    return n
  } catch (t) {
    let e = new r.APIError(t);
    l.default.dispatch({
      type: "USER_PROFILE_UPDATE_FAILURE",
      errors: {},
      apiError: e
    })
  }
}

function p() {
  l.default.dispatch({
    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
  })
}

function h() {
  l.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function _(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
    banner: e
  })
}

function C(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
    bio: e
  })
}

function S(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function I(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
    color: e
  })
}

function T(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function g(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
    avatar: e
  }), f(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
}

function N(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
    avatarDecoration: e
  }), f(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
}

function v(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
    banner: e
  }), f(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
}

function A(e) {
  l.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
    themeColors: e
  }), f(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
}