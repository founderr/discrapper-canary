"use strict";
a.r(t), a.d(t, {
  useAcceptedRequestsCount: function() {
    return h
  },
  useActivityWindowTimeStamp: function() {
    return _
  },
  useHasMaxConnections: function() {
    return f
  },
  useLinkTimestampText: function() {
    return C
  },
  usePendingRequestCount: function() {
    return E
  },
  useUserForLinkStatus: function() {
    return d
  },
  useUserQRLinkUrl: function() {
    return c
  }
});
var n = a("399606"),
  s = a("594174"),
  l = a("914788"),
  i = a("546791"),
  r = a("652262"),
  o = a("880257"),
  u = a("292352");

function d(e) {
  let t = Object.values((0, n.useStateFromStores)([l.default], () => l.default.getLinkedUsers())).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => {
    var t;
    return null !== (t = e.user_id) && void 0 !== t ? t : void 0
  }).filter(e => null != e);
  return (0, n.useStateFromStoresArray)([s.default], () => t.map(e => s.default.getUser(e))).filter(e => null != e)
}

function c() {
  let e = (0, n.useStateFromStores)([l.default], () => l.default.getLinkCode()),
    t = (0, n.useStateFromStores)([s.default], () => s.default.getCurrentUser());
  return null == e || null == t ? null : (0, u.FAMILY_CENTER_REQUEST_QR_CODE_URL)(t.id, e)
}

function f() {
  let e = (0, o.default)(),
    t = d(u.UserLinkStatus.ACTIVE),
    a = e ? u.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : u.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS;
  return t.length >= a
}

function E() {
  let e = (0, n.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
    t = (0, n.useStateFromStores)([l.default], () => l.default.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === u.UserLinkStatus.PENDING && e.id !== t.requestor_id).length
}

function h() {
  let e = (0, n.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
    t = (0, n.useStateFromStores)([l.default], () => l.default.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(e => null != e && e.link_status === u.UserLinkStatus.ACTIVE).length
}

function _(e) {
  let t = (0, r.useSelectedTeenId)(),
    a = (0, n.useStateFromStores)([l.default], () => null == t ? null : l.default.getRangeStartTimestamp());
  return null == a ? null : (0, i.formatUserActivityTimestamp)(new Date(a).getTime(), () => e, 7)
}

function C(e, t) {
  let a = (0, n.useStateFromStores)([l.default], () => l.default.getLinkTimestamp(e));
  return null != a ? (0, i.formatLinkTimestamp)(Date.parse(a), t === u.UserLinkStatus.PENDING ? u.PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER : u.ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER) : null
}