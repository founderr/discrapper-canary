"use strict";
n.r(e), n.d(e, {
  useCurrentUserCommunicationDisabled: function() {
    return d
  },
  default: function() {
    return s
  },
  userCommunicationDisabled: function() {
    return c
  }
});
var i = n("446674"),
  u = n("26989"),
  a = n("697218"),
  r = n("509");

function d(t) {
  let e = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser());
  return s(null == e ? void 0 : e.id, t)
}

function l(t, e, n) {
  return null != e && null != t ? n.getMember(e, t) : null
}

function o(t) {
  var e;
  return [null !== (e = null == t ? void 0 : t.communicationDisabledUntil) && void 0 !== e ? e : null, (0, r.isMemberCommunicationDisabled)(t)]
}

function s(t, e) {
  let n = (0, i.useStateFromStores)([u.default], () => l(t, e, u.default), [e, t]);
  return o(n)
}

function c(t, e) {
  let n = l(t, e, u.default);
  return o(n)
}