"use strict";
n.d(t, {
  P: function() {
    return d
  }
}), n(789020);
var i = n(592125),
  r = n(271383),
  s = n(430824),
  o = n(630388),
  a = n(563534),
  l = n(846121),
  u = n(199689),
  _ = n(981631),
  c = n(372897);

function d(e, t) {
  var n, d;
  let E = s.Z.getGuild(e),
    I = i.Z.getChannel(t);
  return null != E && null != I && (0, u.Z)(E) && E.hasFeature(_.oNc.GUILD_SERVER_GUIDE) && !o.yE(null !== (d = null === (n = r.ZP.getSelfMember(E.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== d ? d : 0, c.q.COMPLETED_HOME_ACTIONS) && a.Z.hasMemberAction(E.id, I.id) && !l.Z.hasCompletedActionForChannel(E.id, I.id)
}