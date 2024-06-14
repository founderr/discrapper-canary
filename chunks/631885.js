"use strict";
s.r(t), s.d(t, {
  useAcceptedRequestsCount: function() {
    return _
  },
  useActivityWindowTimeStamp: function() {
    return h
  },
  useHasMaxConnections: function() {
    return E
  },
  useLinkTimestampText: function() {
    return C
  },
  usePendingRequestCount: function() {
    return f
  },
  useUserForLinkStatus: function() {
    return d
  },
  useUserQRLinkUrl: function() {
    return c
  }
});
var n = s("399606"),
  a = s("594174"),
  l = s("914788"),
  i = s("546791"),
  r = s("652262"),
  o = s("880257"),
  u = s("292352");

function d(e) {
  let t = Object.values((0, n.useStateFromStores)([l.default], () => l.default.getLinkedUsers())).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => {
    var t;
    return null !== (t = e.user_id) && void 0 !== t ? t : void 0
  }).filter(e => null != e);
  return (0, n.useStateFromStoresArray)([a.default], () => t.map(e => a.default.getUser(e))).filter(e => null != e)
}

function c() {
  let e = (0, n.useStateFromStores)([l.default], () => l.default.getLinkCode()),
    t = (0, n.useStateFromStores)([a.default], () => a.default.getCurrentUser());
  return null == e || null == t ? null : (0, u.FAMILY_CENTER_REQUEST_QR_CODE_URL)(t.id, e)
}

function E() {
  let e = (0, o.default)(),
    t = d(u.UserLinkStatus.ACTIVE),
    s = e ? u.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : u.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS;
  return t.length >= s
}

function f() {
  let e = (0, n.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
    t = (0, n.useStateFromStores)([l.default], () => l.default.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === u.UserLinkStatus.PENDING && e.id !== t.requestor_id).length
}

function _() {
  let e = (0, n.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
    t = (0, n.useStateFromStores)([l.default], () => l.default.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(e => null != e && e.link_status === u.UserLinkStatus.ACTIVE).length
}

function h(e) {
  let t = (0, r.useSelectedTeenId)(),
    s = (0, n.useStateFromStores)([l.default], () => null == t ? null : l.default.getRangeStartTimestamp());
  return null == s ? null : (0, i.formatUserActivityTimestamp)(new Date(s).getTime(), () => e, 7)
}

function C(e, t) {
  let s = (0, n.useStateFromStores)([l.default], () => l.default.getLinkTimestamp(e));
  return null != s ? (0, i.formatLinkTimestamp)(Date.parse(s), t === u.UserLinkStatus.PENDING ? u.PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER : u.ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER) : null
}