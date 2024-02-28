"use strict";
n.r(t), n.d(t, {
  useCurrentUserCommunicationDisabled: function() {
    return r
  },
  default: function() {
    return s
  },
  userCommunicationDisabled: function() {
    return c
  }
});
var i = n("446674"),
  l = n("26989"),
  u = n("697218"),
  a = n("509");

function r(e) {
  let t = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser());
  return s(null == t ? void 0 : t.id, e)
}

function d(e, t, n) {
  return null != t && null != e ? n.getMember(t, e) : null
}

function o(e) {
  var t;
  return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, a.isMemberCommunicationDisabled)(e)]
}

function s(e, t) {
  let n = (0, i.useStateFromStores)([l.default], () => d(e, t, l.default), [t, e]);
  return o(n)
}

function c(e, t) {
  let n = d(e, t, l.default);
  return o(n)
}