"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var l = s("442837"),
  a = s("314897"),
  i = s("699516"),
  o = s("981631");

function n(e) {
  let t = (0, l.useStateFromStores)([a.default], () => a.default.getId() === (null == e ? void 0 : e.id)),
    s = (0, l.useStateFromStores)([i.default], () => null != e ? i.default.getRelationshipType(e.id) : o.RelationshipTypes.NONE);
  return null == e || t || s === o.RelationshipTypes.BLOCKED ? {
    relationshipType: s,
    canReceiveMessage: !1,
    canReceiveFriendRequest: !1
  } : {
    relationshipType: s,
    canReceiveMessage: !0,
    canReceiveFriendRequest: !e.bot && s !== o.RelationshipTypes.FRIEND
  }
}