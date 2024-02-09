"use strict";
n.r(t), n.d(t, {
  openUserProfileModal: function() {
    return o
  },
  closeUserProfileModal: function() {
    return u
  }
});
var r = n("913144"),
  s = n("327037"),
  i = n("697218"),
  l = n("506885"),
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
  } = e, h = i.default.getUser(t), C = o !== a.ME ? o : void 0;
  if (null == h) return (0, s.fetchProfile)(t, {
    friendToken: c,
    guildId: C
  }).then(() => {
    r.default.dispatch({
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
  (0, l.default)(t, h.getAvatarURL(void 0, 80), {
    withMutualGuilds: !0,
    friendToken: c,
    guildId: C
  }), r.default.dispatch({
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
  r.default.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}