"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var i = n("819855"),
  a = n("689988"),
  l = n("642754"),
  s = n("49111"),
  r = n("782340");

function o(e) {
  e.relationship.type === s.RelationshipTypes.PENDING_INCOMING && (i.AccessibilityAnnouncer.announce(r.default.Messages.FRIEND_REQUEST_PENDING_A11Y_ANNOUNCEMENT.format({
    username: e.relationship.user.username
  })), l.showPendingNotification(e.relationship.user))
}

function u(e) {
  let {
    user: t
  } = e;
  i.AccessibilityAnnouncer.announce(r.default.Messages.FRIEND_REQUEST_ACCEPTED_A11Y_ANNOUNCEMENT.format({
    username: t.username
  })), l.showAcceptedNotification(t)
}
class d extends a.default {
  constructor(...e) {
    super(...e), this.actions = {
      RELATIONSHIP_ADD: o,
      FRIEND_REQUEST_ACCEPTED: u
    }
  }
}
var c = new d