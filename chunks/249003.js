"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("442837"),
  l = s("314897"),
  i = s("699516"),
  n = s("981631");

function o(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.getId() === (null == e ? void 0 : e.id)),
    s = (0, a.useStateFromStores)([i.default], () => null != e ? i.default.getRelationshipType(e.id) : n.RelationshipTypes.NONE);
  return null == e || t || s === n.RelationshipTypes.BLOCKED ? {
    relationshipType: s,
    canReceiveMessage: !1,
    canReceiveFriendRequest: !1
  } : {
    relationshipType: s,
    canReceiveMessage: !0,
    canReceiveFriendRequest: !e.bot && s !== n.RelationshipTypes.FRIEND
  }
}