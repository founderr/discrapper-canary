"use strict";
n.r(t), n.d(t, {
  openUserProfileModal: function() {
    return o
  },
  closeUserProfileModal: function() {
    return u
  }
});
var i = n("913144"),
  r = n("327037"),
  l = n("697218"),
  s = n("506885"),
  a = n("49111");

function o(e) {
  let {
    userId: t,
    section: n,
    guildId: o = a.ME,
    channelId: u,
    friendToken: c,
    autoFocusNote: d,
    analyticsLocation: f
  } = e, E = l.default.getUser(t), h = o !== a.ME ? o : void 0;
  if (null == E) return (0, r.fetchProfile)(t, {
    friendToken: c,
    guildId: h
  }).then(() => {
    i.default.dispatch({
      type: "USER_PROFILE_MODAL_OPEN",
      userId: t,
      section: n,
      guildId: o,
      channelId: u,
      friendToken: c,
      autoFocusNote: d,
      analyticsLocation: f
    })
  });
  (0, s.default)(t, E.getAvatarURL(void 0, 80), {
    withMutualGuilds: !0,
    friendToken: c,
    guildId: h
  }), i.default.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: t,
    section: n,
    guildId: o,
    channelId: u,
    friendToken: c,
    autoFocusNote: d,
    analyticsLocation: f
  })
}

function u() {
  i.default.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}