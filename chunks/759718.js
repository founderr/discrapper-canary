"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007"), n("424973");
var l = n("446674"),
  a = n("334572"),
  s = n("488464"),
  i = n("998716");

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
    [n] = (0, l.useStateFromStores)([s.default], () => {
      let n = s.default.getMutableParticipants(e).filter(e => e.type === i.StageChannelParticipantTypes.VOICE),
        l = [];
      for (let e of n) {
        if (l.length >= t) break;
        null == l.find(t => t.id === e.user.id) && l.push(e.user)
      }
      return [{
        participants: n,
        usersInSummary: l
      }, s.default.getParticipantsVersion(e)]
    }, [e, t], a.isVersionEqual);
  return n
}