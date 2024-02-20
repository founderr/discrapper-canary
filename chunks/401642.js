"use strict";
n.r(e), n.d(e, {
  openUserProfileModal: function() {
    return a
  },
  closeUserProfileModal: function() {
    return s
  }
});
var u = n("913144"),
  r = n("327037"),
  i = n("697218"),
  l = n("506885"),
  o = n("49111");

function a(t) {
  let {
    userId: e,
    section: n,
    guildId: a = o.ME,
    channelId: s,
    friendToken: d,
    autoFocusNote: c,
    analyticsLocation: E
  } = t, _ = i.default.getUser(e), f = a !== o.ME ? a : void 0;
  if (null == _) return (0, r.fetchProfile)(e, {
    friendToken: d,
    guildId: f
  }).then(() => {
    u.default.dispatch({
      type: "USER_PROFILE_MODAL_OPEN",
      userId: e,
      section: n,
      guildId: a,
      channelId: s,
      friendToken: d,
      autoFocusNote: c,
      analyticsLocation: E
    })
  });
  (0, l.default)(e, _.getAvatarURL(void 0, 80), {
    withMutualGuilds: !0,
    friendToken: d,
    guildId: f
  }), u.default.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: e,
    section: n,
    guildId: a,
    channelId: s,
    friendToken: d,
    autoFocusNote: c,
    analyticsLocation: E
  })
}

function s() {
  u.default.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}