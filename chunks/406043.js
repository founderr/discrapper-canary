"use strict";
n.r(t), n.d(t, {
  useCurrentUserCommunicationDisabled: function() {
    return r
  },
  default: function() {
    return d
  },
  userCommunicationDisabled: function() {
    return c
  }
});
var l = n("446674"),
  a = n("26989"),
  i = n("697218"),
  s = n("509");

function r(e) {
  let t = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser());
  return d(null == t ? void 0 : t.id, e)
}

function u(e, t, n) {
  return null != t && null != e ? n.getMember(t, e) : null
}

function o(e) {
  var t;
  return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, s.isMemberCommunicationDisabled)(e)]
}

function d(e, t) {
  let n = (0, l.useStateFromStores)([a.default], () => u(e, t, a.default), [t, e]);
  return o(n)
}

function c(e, t) {
  let n = u(e, t, a.default);
  return o(n)
}