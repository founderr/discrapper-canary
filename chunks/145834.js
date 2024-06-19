n.d(t, {
  $: function() {
    return r
  }
});
var l = n(70956),
  i = n(51144),
  s = n(689938);
let a = 1 * l.Z.Millis.DAY;

function r(e) {
  var t, n, l;
  if ((0, i.EO)(e.user)) return s.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_TO_DISCORD;
  let r = null === (t = e.member) || void 0 === t ? void 0 : t.joinedAt;
  return null == r ? s.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NON_MEMBER : null != e.member && e.member.roles.length > 0 ? null !== (l = null === (n = e.role) || void 0 === n ? void 0 : n.name) && void 0 !== l ? l : s.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER_ROLES : new Date().getTime() - Date.parse(r) < a ? s.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_MEMBER : s.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER
}