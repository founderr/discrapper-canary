S.d(e, {
  A: function() {
    return i
  },
  m: function() {
    return l
  }
}), S(47120);
var _ = S(442837),
  t = S(430824),
  n = S(981631);

function i(E) {
  var e;
  let [S] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [t.Z];
  return !!(null === (e = S.getGuild(E)) || void 0 === e ? void 0 : e.hasFeature(n.oNc.COMMUNITY))
}

function l(E) {
  return (0, _.e7)([t.Z], () => i(E, [t.Z]), [E])
}