n.d(t, {
  z9: function() {
    return s
  }
}), n(399606);
var l = n(592125),
  i = n(709054);

function s(e, t) {
  if (e !== i.default.castChannelIdAsMessageId(t)) return !1;
  let n = l.Z.getChannel(t);
  if (null == n || !n.isForumPost()) return !1;
  let s = l.Z.getChannel(n.parent_id);
  return (null == s ? void 0 : s.isMediaChannel()) === !0
}