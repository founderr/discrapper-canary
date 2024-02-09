"use strict";
n.r(t), n.d(t, {
  openUserProfileModal: function() {
    return a
  },
  closeUserProfileModal: function() {
    return u
  }
});
var s = n("913144"),
  l = n("327037"),
  i = n("697218"),
  r = n("506885"),
  o = n("49111");

function a(e) {
  let {
    userId: t,
    section: n,
    guildId: a = o.ME,
    channelId: u,
    friendToken: c,
    autoFocusNote: d,
    analyticsLocation: f
  } = e, h = i.default.getUser(t), C = a !== o.ME ? a : void 0;
  if (null == h) return (0, l.fetchProfile)(t, {
    friendToken: c,
    guildId: C
  }).then(() => {
    s.default.dispatch({
      type: "USER_PROFILE_MODAL_OPEN",
      userId: t,
      section: n,
      guildId: a,
      channelId: u,
      friendToken: c,
      autoFocusNote: d,
      analyticsLocation: f
    })
  });
  (0, r.default)(t, h.getAvatarURL(void 0, 80), {
    withMutualGuilds: !0,
    friendToken: c,
    guildId: C
  }), s.default.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: t,
    section: n,
    guildId: a,
    channelId: u,
    friendToken: c,
    autoFocusNote: d,
    analyticsLocation: f
  })
}

function u() {
  s.default.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}