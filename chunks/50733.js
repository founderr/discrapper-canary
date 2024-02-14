"use strict";
E.r(_), E.d(_, {
  default: function() {
    return s
  }
}), E("222007");
var t = E("819855"),
  o = E("689988"),
  n = E("642754"),
  a = E("49111"),
  r = E("782340");

function i(e) {
  e.relationship.type === a.RelationshipTypes.PENDING_INCOMING && (t.AccessibilityAnnouncer.announce(r.default.Messages.FRIEND_REQUEST_PENDING_A11Y_ANNOUNCEMENT.format({
    username: e.relationship.user.username
  })), n.showPendingNotification(e.relationship.user))
}

function I(e) {
  let {
    user: _
  } = e;
  t.AccessibilityAnnouncer.announce(r.default.Messages.FRIEND_REQUEST_ACCEPTED_A11Y_ANNOUNCEMENT.format({
    username: _.username
  })), n.showAcceptedNotification(_)
}
class T extends o.default {
  constructor(...e) {
    super(...e), this.actions = {
      RELATIONSHIP_ADD: i,
      FRIEND_REQUEST_ACCEPTED: I
    }
  }
}
var s = new T