"use strict";
n.r(t), n.d(t, {
  showPendingNotification: function() {
    return c
  },
  showAcceptedNotification: function() {
    return f
  }
});
var i = n("450911"),
  a = n("630086"),
  l = n("193990"),
  s = n("393414"),
  r = n("315102"),
  o = n("49111"),
  u = n("782340");

function d(e, t, n) {
  l.default.showNotification(r.default.getUserAvatarURL(e), e.username, t, {}, {
    omitViewTracking: !0,
    omitClickTracking: !0,
    tag: e.id,
    onClick: n
  })
}

function c(e) {
  d(e, u.default.Messages.NOTIFICATION_PENDING_FRIEND_REQUEST, () => {
    {
      let {
        openUserProfileModal: t
      } = n("401642");
      t({
        userId: e.id
      })
    }(0, s.transitionTo)(o.Routes.FRIENDS), a.default.setSection(o.FriendsSections.PENDING)
  })
}

function f(e) {
  d(e, u.default.Messages.NOTIFICATION_ACCEPTED_FRIEND_REQUEST, () => {
    i.default.openPrivateChannel(e.id)
  })
}