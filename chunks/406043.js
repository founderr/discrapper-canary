"use strict";
n.r(e), n.d(e, {
  useCurrentUserCommunicationDisabled: function() {
    return d
  },
  default: function() {
    return s
  },
  userCommunicationDisabled: function() {
    return I
  }
});
var i = n("446674"),
  u = n("26989"),
  r = n("697218"),
  a = n("509");

function d(t) {
  let e = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser());
  return s(null == e ? void 0 : e.id, t)
}

function l(t, e, n) {
  return null != e && null != t ? n.getMember(e, t) : null
}

function o(t) {
  var e;
  return [null !== (e = null == t ? void 0 : t.communicationDisabledUntil) && void 0 !== e ? e : null, (0, a.isMemberCommunicationDisabled)(t)]
}

function s(t, e) {
  let n = (0, i.useStateFromStores)([u.default], () => l(t, e, u.default), [e, t]);
  return o(n)
}

function I(t, e) {
  let n = l(t, e, u.default);
  return o(n)
}