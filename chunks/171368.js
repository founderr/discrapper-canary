"use strict";
n.r(t), n.d(t, {
  closeUserProfileModal: function() {
    return u
  },
  openUserProfileModal: function() {
    return l
  }
});
var i = n(570140),
  r = n(232567),
  s = n(594174),
  o = n(484459),
  a = n(981631);

function l(e) {
  let {
    userId: t,
    guildId: n = a.ME,
    channelId: l,
    messageId: u,
    roleId: _,
    section: c,
    subsection: d,
    friendToken: E,
    showGuildProfile: I,
    analyticsLocation: T,
    sourceAnalyticsLocations: h
  } = e, S = s.default.getUser(t), f = null != n && n !== a.ME ? n : void 0;
  if (null == S) return (0, r.In)(t, {
    guildId: I ? f : void 0,
    withMutualGuilds: !0,
    withMutualFriends: !0,
    friendToken: E
  }).then(() => {
    i.Z.dispatch({
      type: "USER_PROFILE_MODAL_OPEN",
      userId: t,
      guildId: null != n ? n : void 0,
      channelId: null != l ? l : void 0,
      messageId: null != u ? u : void 0,
      roleId: null != _ ? _ : void 0,
      section: c,
      subsection: d,
      friendToken: E,
      showGuildProfile: I,
      analyticsLocation: T,
      sourceAnalyticsLocations: h
    })
  });
  (0, o.W)(S, {
    guildId: I ? f : void 0,
    withMutualGuilds: !0,
    withMutualFriends: !0,
    friendToken: E
  }), i.Z.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: t,
    guildId: null != n ? n : void 0,
    channelId: null != l ? l : void 0,
    messageId: null != u ? u : void 0,
    roleId: null != _ ? _ : void 0,
    section: c,
    subsection: d,
    friendToken: E,
    showGuildProfile: I,
    analyticsLocation: T,
    sourceAnalyticsLocations: h
  })
}

function u() {
  i.Z.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}