"use strict";
s.r(t), s.d(t, {
  useAcceptedRequestsCount: function() {
    return f
  },
  useActivityWindowTimeStamp: function() {
    return h
  },
  useHasMaxConnections: function() {
    return E
  },
  useLinkTimestampText: function() {
    return m
  },
  usePendingRequestCount: function() {
    return _
  },
  useUserForLinkStatus: function() {
    return d
  },
  useUserQRLinkUrl: function() {
    return c
  }
});
var a = s("399606"),
  n = s("594174"),
  l = s("914788"),
  i = s("546791"),
  r = s("652262"),
  u = s("880257"),
  o = s("292352");

function d(e) {
  let t = Object.values((0, a.useStateFromStores)([l.default], () => l.default.getLinkedUsers())).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => {
    var t;
    return null !== (t = e.user_id) && void 0 !== t ? t : void 0
  }).filter(e => null != e);
  return (0, a.useStateFromStoresArray)([n.default], () => t.map(e => n.default.getUser(e))).filter(e => null != e)
}

function c() {
  let e = (0, a.useStateFromStores)([l.default], () => l.default.getLinkCode()),
    t = (0, a.useStateFromStores)([n.default], () => n.default.getCurrentUser());
  return null == e || null == t ? null : (0, o.FAMILY_CENTER_REQUEST_QR_CODE_URL)(t.id, e)
}

function E() {
  let e = (0, u.default)(),
    t = d(o.UserLinkStatus.ACTIVE),
    s = e ? o.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : o.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS;
  return t.length >= s
}

function _() {
  let e = (0, a.useStateFromStores)([n.default], () => n.default.getCurrentUser()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === o.UserLinkStatus.PENDING && e.id !== t.requestor_id).length
}

function f() {
  let e = (0, a.useStateFromStores)([n.default], () => n.default.getCurrentUser()),
    t = (0, a.useStateFromStores)([l.default], () => l.default.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(e => null != e && e.link_status === o.UserLinkStatus.ACTIVE).length
}

function h(e) {
  let t = (0, r.useSelectedTeenId)(),
    s = (0, a.useStateFromStores)([l.default], () => null == t ? null : l.default.getRangeStartTimestamp());
  return null == s ? null : (0, i.formatUserActivityTimestamp)(new Date(s).getTime(), () => e, 7)
}

function m(e, t) {
  let s = (0, a.useStateFromStores)([l.default], () => l.default.getLinkTimestamp(e));
  return null != s ? (0, i.formatLinkTimestamp)(Date.parse(s), t === o.UserLinkStatus.PENDING ? o.PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER : o.ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER) : null
}