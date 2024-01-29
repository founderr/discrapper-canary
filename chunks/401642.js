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
  l = n("327037"),
  r = n("697218"),
  s = n("506885"),
  a = n("49111");

function o(e) {
  let {
    userId: t,
    section: n,
    guildId: o = a.ME,
    channelId: u,
    friendToken: d,
    autoFocusNote: c,
    analyticsLocation: f
  } = e, E = r.default.getUser(t), h = o !== a.ME ? o : void 0;
  if (null == E) return (0, l.fetchProfile)(t, {
    friendToken: d,
    guildId: h
  }).then(() => {
    i.default.dispatch({
      type: "USER_PROFILE_MODAL_OPEN",
      userId: t,
      section: n,
      guildId: o,
      channelId: u,
      friendToken: d,
      autoFocusNote: c,
      analyticsLocation: f
    })
  });
  (0, s.default)(t, E.getAvatarURL(void 0, 80), {
    withMutualGuilds: !0,
    friendToken: d,
    guildId: h
  }), i.default.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: t,
    section: n,
    guildId: o,
    channelId: u,
    friendToken: d,
    autoFocusNote: c,
    analyticsLocation: f
  })
}

function u() {
  i.default.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}