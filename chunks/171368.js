"use strict";
n.r(t), n.d(t, {
  closeUserProfileModal: function() {
    return c
  },
  openUserProfileModal: function() {
    return _
  }
});
var i = n("570140"),
  r = n("232567"),
  s = n("594174"),
  a = n("342656"),
  o = n("447452"),
  l = n("877485"),
  u = n("484459"),
  d = n("981631");

function _(e) {
  let {
    userId: t,
    section: n,
    guildId: _ = d.ME,
    channelId: c,
    messageId: E,
    roleId: I,
    friendToken: T,
    autoFocusNote: f,
    analyticsLocation: S,
    sourceAnalyticsLocations: h
  } = e, A = s.default.getUser(t), m = null != _ && _ !== d.ME ? _ : void 0, N = (0, l.getSimplifiedProfileFriendingExperimentConfig)({
    location: "openUserProfileModal",
    autoTrackExposure: !1
  }), p = (0, a.isInProfileMutualsExperiment)().enabled || (0, o.getSimplifiedProfileExperimentConfig)({
    location: "openUserProfileModal",
    autoTrackExposure: !1
  }).basicsEnabled || N.originalFriendingEnabled || N.improvedFriendingEnabled;
  if (null == A) return (0, r.fetchProfile)(t, {
    guildId: m,
    withMutualGuilds: !0,
    withMutualFriends: p,
    friendToken: T
  }).then(() => {
    i.default.dispatch({
      type: "USER_PROFILE_MODAL_OPEN",
      userId: t,
      section: n,
      guildId: null != _ ? _ : void 0,
      channelId: null != c ? c : void 0,
      messageId: null != E ? E : void 0,
      roleId: null != I ? I : void 0,
      friendToken: T,
      autoFocusNote: f,
      analyticsLocation: S,
      sourceAnalyticsLocations: h
    })
  });
  (0, u.maybeFetchUserProfileForPopout)(A, {
    guildId: m,
    withMutualGuilds: !0,
    withMutualFriends: p,
    friendToken: T
  }), i.default.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: t,
    section: n,
    guildId: null != _ ? _ : void 0,
    channelId: null != c ? c : void 0,
    messageId: null != E ? E : void 0,
    roleId: null != I ? I : void 0,
    friendToken: T,
    autoFocusNote: f,
    analyticsLocation: S,
    sourceAnalyticsLocations: h
  })
}

function c() {
  i.default.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}