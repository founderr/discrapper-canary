n.r(t), n.d(t, {
  closeUserProfileModal: function() {
return u;
  },
  openUserProfileModal: function() {
return l;
  }
});
var r = n(570140),
  i = n(232567),
  a = n(594174),
  s = n(484459),
  o = n(981631);

function l(e) {
  let {
userId: t,
guildId: n = o.ME,
channelId: l,
messageId: u,
roleId: c,
sessionId: d,
section: _,
subsection: E,
friendToken: f,
showGuildProfile: h,
analyticsLocation: p,
sourceAnalyticsLocations: m
  } = e, I = a.default.getUser(t), T = null != n && n !== o.ME ? n : void 0;
  if (null == I)
return (0, i.In)(t, {
  guildId: h ? T : void 0,
  withMutualGuilds: !0,
  withMutualFriends: !0,
  friendToken: f
}).then(() => {
  r.Z.dispatch({
    type: 'USER_PROFILE_MODAL_OPEN',
    userId: t,
    guildId: null != n ? n : void 0,
    channelId: null != l ? l : void 0,
    messageId: null != u ? u : void 0,
    roleId: null != c ? c : void 0,
    sessionId: null != d ? d : void 0,
    section: _,
    subsection: E,
    friendToken: f,
    showGuildProfile: h,
    analyticsLocation: p,
    sourceAnalyticsLocations: m
  });
});
  (0, s.W)(I, {
guildId: h ? T : void 0,
withMutualGuilds: !0,
withMutualFriends: !0,
friendToken: f
  }), r.Z.dispatch({
type: 'USER_PROFILE_MODAL_OPEN',
userId: t,
guildId: null != n ? n : void 0,
channelId: null != l ? l : void 0,
messageId: null != u ? u : void 0,
roleId: null != c ? c : void 0,
sessionId: null != d ? d : void 0,
section: _,
subsection: E,
friendToken: f,
showGuildProfile: h,
analyticsLocation: p,
sourceAnalyticsLocations: m
  });
}

function u() {
  r.Z.dispatch({
type: 'USER_PROFILE_MODAL_CLOSE'
  });
}