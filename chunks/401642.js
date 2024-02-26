"use strict";
n.r(t), n.d(t, {
  openUserProfileModal: function() {
    return a
  },
  closeUserProfileModal: function() {
    return s
  }
});
var l = n("913144"),
  i = n("327037"),
  u = n("697218"),
  r = n("506885"),
  o = n("49111");

function a(e) {
  let {
    userId: t,
    section: n,
    guildId: a = o.ME,
    channelId: s,
    friendToken: d,
    autoFocusNote: c,
    analyticsLocation: f
  } = e, E = u.default.getUser(t), _ = a !== o.ME ? a : void 0;
  if (null == E) return (0, i.fetchProfile)(t, {
    friendToken: d,
    guildId: _
  }).then(() => {
    l.default.dispatch({
      type: "USER_PROFILE_MODAL_OPEN",
      userId: t,
      section: n,
      guildId: a,
      channelId: s,
      friendToken: d,
      autoFocusNote: c,
      analyticsLocation: f
    })
  });
  (0, r.default)(t, E.getAvatarURL(void 0, 80), {
    withMutualGuilds: !0,
    friendToken: d,
    guildId: _
  }), l.default.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: t,
    section: n,
    guildId: a,
    channelId: s,
    friendToken: d,
    autoFocusNote: c,
    analyticsLocation: f
  })
}

function s() {
  l.default.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}