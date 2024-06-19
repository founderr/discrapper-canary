S.d(e, {
  Z: function() {
    return I
  }
});
var _ = S(470079),
  t = S(442837),
  n = S(339085),
  i = S(889564);
let l = [];

function I(E) {
  let e = (0, t.e7)([n.Z], () => n.Z.getGuildEmoji(E), [E]);
  return _.useMemo(() => null == e ? l : e.filter(e => (0, i.Kt)(e, E)), [e, E])
}