n.d(t, {
  Z: function() {
    return r
  }
}), n(47120), n(653041);
var l = n(442837),
  i = n(136015),
  s = n(565799),
  a = n(501655);

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
    [n] = (0, l.e7)([s.Z], () => {
      let n = s.Z.getMutableParticipants(e).filter(e => e.type === a.Ui.VOICE),
        l = [];
      for (let e of n) {
        if (l.length >= t) break;
        if (null == l.find(t => t.id === e.user.id)) l.push(e.user)
      }
      return [{
        participants: n,
        usersInSummary: l
      }, s.Z.getParticipantsVersion(e)]
    }, [e, t], i.Q);
  return n
}